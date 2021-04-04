import React from 'react';
import Node from './Node';


import gridToGraph from '../../utilityFunctions/gridToGraph';
import { findStartNode , findDestNode } from '../../utilityFunctions/findMarkers';
import spDijkstra from '../../algorithms/dijkstra';
import {depthFirstSearch} from '../../algorithms/depthFirstSearch';
import { graphNodeToGridNode } from '../../utilityFunctions/conversions';
import { animateVisitedNodes,animatePathNodes }  from '../../utilityFunctions/animateNode';
import { clearClasses, newBoard } from '../../utilityFunctions/clearBoard';
import { toggleClassStartNode,toggleClassDestNode,toggleClassWallNode } from '../../utilityFunctions/toggleClasses';
import { clearWalls } from '../../utilityFunctions/clearWalls';
import { measureScreenSize,tellCols,tellRows } from '../../utilityFunctions/screensize';
import recursiveBacktracker from '../../algorithms/recursiveBacktracking';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      isStartNodeCreated: false,
      isDestNodeCreated: false,
      isStartNodeDragged: false,
      isDestNodeDragged: false,
      areWeBuildingWalls: false,
      isWallRemovedByStart: false,
      isWallRemovedByDest: false,
      prevRowIndex: -1,
      prevColIndex : -1
    };
  }
  //Create the board with the current state 
  createBoard = () => {
    const nodes = [];
    for (let i=0; i< tellRows(); i++) {
      const row = [];
      for (let j=0; j< tellCols(); j++) {
        row.push(0);
      }
      nodes.push(row);
    }
    for (let i=0; i< tellRows(); i++) {
      for (let j=0; j < tellCols(); j++) {
        nodes[i][j] = this.state.nodes[i][j];
      }
    }
    return nodes;
  }

  componentDidMount() {
    measureScreenSize();
    const board = [];
    for (let i=0; i< tellRows(); i++) {
      const row = [];
      for (let j=0; j< tellCols(); j++) {
        row.push(0);
      }
      board.push(row);
    }
    this.setState({nodes: board});
    
  }

  animate = async (orderVisited,path,startNode,destNode) => {
    await animateVisitedNodes(orderVisited,startNode,destNode);
    await animatePathNodes(path,startNode,destNode);
  }

  componentDidUpdate() {
    // If there is not initial startNode or destination node create them
    if(this.state.isStartNodeCreated === false) {
      this.setState({
        nodes: newBoard(),
        isStartNodeCreated: true,
        isDestNodeCreated: true
      })
    }
    // When we start out visualisation and selected algorithm is dijkstra
    if(this.props.isVisualizationStarted && this.props.algorithm === "dijkstra") {

      // Coverting grid to graph
      let adj = gridToGraph(this.state.nodes);
      let startNode = findStartNode(this.state.nodes);
      let destNode = findDestNode(this.state.nodes);

      // Applying Dijkstra's algorithm
      let dijkstra = spDijkstra(adj,startNode,destNode,tellCols() * tellRows());
      let path = [];
      let orderVisited = [];
      for(let i=0;i<dijkstra[0].length;i++) {
        let gridNode = graphNodeToGridNode(dijkstra[0][i]);
        path.push(gridNode);
      }
      for(let i=0;i<dijkstra[1].length;i++) {
        let gridNode = graphNodeToGridNode(dijkstra[1][i]);
        orderVisited.push(gridNode);
      }
      // 3. Animate the return path and visited nodes
      this.animate(orderVisited,path,startNode,destNode);      

      this.props.onVisualizationEnd();
      this.props.onAlgorithmDeSelect();
    }

    // When we start out visualisation and selected algorithm is dfs
    if(this.props.isVisualizationStarted && this.props.algorithm === 'dfs') {

      //Coverting grid to graph 
      let adj = gridToGraph(this.state.nodes);
      let startNode = findStartNode(this.state.nodes);
      let destNode = findDestNode(this.state.nodes);

      //Appyling dfs
      let res = depthFirstSearch(adj,startNode,destNode,tellCols() * tellRows());
      let path = [];
      let orderVisited = [];
      for(let i=0;i<res[0].length;i++) {
        let gridNode = graphNodeToGridNode(res[0][i]);
        path.push(gridNode);
      }
      for(let i=0;i<res[1].length;i++) {
        let gridNode = graphNodeToGridNode(res[1][i]);
        orderVisited.push(gridNode);
      }
      // 3. Animate the return path and visited nodes

      this.animate(orderVisited,path,startNode,destNode);  

      this.props.onVisualizationEnd();
      this.props.onAlgorithmDeSelect();

    }

    //When user select recursive backtracking
    if(this.props.mazeAlgorithm === "recursiveBacktracker") {
      // Find the non wall nodes
      let newNodes = recursiveBacktracker(this.state.nodes);
      this.setState({
        nodes: newNodes
      });
      // Turn rest of the nodes into walls 
      this.props.onMazeAlgorithmDeSelect();
    }

    // When user press clear board
    if(this.props.clearBoard) {
      clearClasses();
      this.setState({
        nodes: newBoard(),
      });
      this.props.onClearBoardEnd();
    }
    // When user press clear walls
    if(this.props.clearWalls) {
      this.setState({
        nodes: clearWalls(this.state.nodes)
      });
      this.props.onClearWallsEnd();
    }
  }



  onButtonDown = (rowIndex,colIndex) => {
    // When we want to create a start Node
    if(this.state.isStartNodeCreated === false) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 1;
      toggleClassStartNode(rowIndex,colIndex,'add');
      this.setState({
        isStartNodeCreated: true,
        nodes: newNodes
      });
    }
    // when we want to create a destinaton node
    else if (this.state.isDestNodeCreated === false) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 3;
      toggleClassDestNode(rowIndex,colIndex,'add');
      this.setState({
        isDestNodeCreated: true,
        nodes: newNodes
      });
    }
    // When we want to drag start node
    else if (this.state.nodes[rowIndex][colIndex] === 1) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 0;
      this.setState({
        isStartNodeDragged: true,
        nodes: newNodes
      });
    }
    // When we want to drag destination node
    else if (this.state.nodes[rowIndex][colIndex] === 3) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 0;
      this.setState({
        isDestNodeDragged: true,
        nodes: newNodes
      });
    }
    // When we want to toggle walls  
    else {
      if(this.state.nodes[rowIndex][colIndex]!==1 && this.state.nodes[rowIndex][colIndex] !==3){
        // Build wall
        if(this.state.nodes[rowIndex][colIndex] === 0) {
          const newNodes = this.createBoard();
          newNodes[rowIndex][colIndex] = 2;
          toggleClassWallNode(rowIndex,colIndex,'add');
          this.setState({
            nodes: newNodes
          });
        }
        // Remove wall
        else if(this.state.nodes[rowIndex][colIndex] === 2) {
          const newNodes = this.createBoard();
          newNodes[rowIndex][colIndex] = 0;
          toggleClassWallNode(rowIndex,colIndex,'remove');
          this.setState({
            nodes: newNodes
          });
        }
      }
      this.setState({
        areWeBuildingWalls: true,
      });
    } 
  }

  onButtonOver = (rowIndex,colIndex) => {
    // If start Node is getting dragged make the current node start Node
    if(this.state.isStartNodeDragged === true && this.state.nodes[rowIndex][colIndex] !== 3) {
      if(this.state.nodes[rowIndex][colIndex] === 2) {
        toggleClassWallNode(rowIndex,colIndex,'remove');
        this.setState({
          isWallRemovedByStart: true,
        });
      }
      toggleClassStartNode(rowIndex,colIndex,'add');
    }
    // If destination Node is gertting dragged make the current node dest Node
    if(this.state.isDestNodeDragged === true && this.state.nodes[rowIndex][colIndex] !== 1) {
      if(this.state.nodes[rowIndex][colIndex] === 2) {
        toggleClassWallNode(rowIndex,colIndex,'remove');
        this.setState({
          isWallRemovedByDest: true,
        });
      }
      toggleClassDestNode(rowIndex,colIndex,'add');
    }
    // If we are building walls toggle the walls if its not a start or destination node
    if(this.state.areWeBuildingWalls === true && this.state.nodes[rowIndex][colIndex]!==1 && this.state.nodes[rowIndex][colIndex] !==3) {
      // Build wall
      if(this.state.nodes[rowIndex][colIndex] === 0) {
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 2;
        toggleClassWallNode(rowIndex,colIndex,'add');
        this.setState({
          nodes: newNodes
        });
      }
      // Remove wall
      else if(this.state.nodes[rowIndex][colIndex] === 2) {
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 0;
        toggleClassWallNode(rowIndex,colIndex,'remove');
        this.setState({
          nodes: newNodes
        });
      }
    } 
  }

  onButtonOut = (rowIndex,colIndex) => {
    // If start Node is getting dragged remove the start Node from here
    // Set the previous positions to this location so that inCase we can't place nodes
    // on their final position we should be able to place them on previous position
    // if the current position was wall and start is moved then make it a wall again
    if(this.state.isStartNodeDragged === true) {
      if(this.state.isWallRemovedByStart === true) {
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 2;
        toggleClassWallNode(rowIndex,colIndex,'add');
        this.setState({
          isWallRemovedByStart : false,
          nodes: newNodes
        });
      }
      toggleClassStartNode(rowIndex,colIndex,'remove');
      this.setState({
        prevRowIndex: rowIndex,
        prevColIndex: colIndex
      });
    }
    // If destination Node is getting dragged remove the destination node from here
    if(this.state.isDestNodeDragged === true) {
      if(this.state.isWallRemovedByDest === true) {
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 2;
        toggleClassWallNode(rowIndex,colIndex,'add');
        this.setState({
          isWallRemovedByDest: false,
          nodes: newNodes
        });
      }
      toggleClassDestNode(rowIndex,colIndex,'remove');
      this.setState({
        prevRowIndex: rowIndex,
        prevColIndex: colIndex
      });
    }
  }

  onButtonUp = (rowIndex,colIndex) => {
    // If start Node was getting dragged stop it and update state
    if(this.state.isStartNodeDragged === true) {
      // if user accidently place source node on destination node then place it
      // on previous valid poition rather than here.
      if(this.state.nodes[rowIndex][colIndex] === 3) {
        const newNodes = this.createBoard();
        console.log(this.state.prevRowIndex,this.state.prevColIndex);
        newNodes[this.state.prevRowIndex][this.state.prevColIndex] = 1;
        console.log(newNodes);
        toggleClassStartNode(rowIndex,colIndex,'remove');
        toggleClassStartNode(this.state.prevRowIndex,this.state.prevColIndex,'add');
        this.setState({
          isStartNodeDragged: false,
          nodes: newNodes
        });
      } else {
        // If its a wall node then first remove wall and add start there 
        if(this.state.nodes[rowIndex][colIndex] === 2) {
          toggleClassWallNode(rowIndex,colIndex,'remove');
        }
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 1;
        this.setState({
          isStartNodeDragged: false,
          nodes: newNodes
        }); 
      }
    }
    // If destination Node was getting dragged stop it and update state 
    if(this.state.isDestNodeDragged === true) {
      // if user accidently place destination node on start node then place it
      // on previous valid poition rather than here.
      if(this.state.nodes[rowIndex][colIndex] === 1){
        const newNodes = this.createBoard();
        newNodes[this.state.prevRowIndex][this.state.prevColIndex] = 3;
        toggleClassDestNode(rowIndex,colIndex,'remove');
        toggleClassDestNode(this.state.prevRowIndex,this.state.prevColIndex,'add');
        this.setState({
          isDestNodeDragged: false,
          nodes: newNodes
        });
      } else {
        // If its a wall node then first remove wall and add start there 
        if(this.state.nodes[rowIndex][colIndex] === 2) {
          toggleClassWallNode(rowIndex,colIndex,'remove');
        }  
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 3;
        this.setState({
          isDestNodeDragged: false,
          nodes: newNodes
        });
      }
    }
    // If we were building walls stop it 
    if(this.state.areWeBuildingWalls === true) {
      this.setState({
        areWeBuildingWalls: false,
      });
    }
  }

  
  
  render() {
    return (
      <div className="board">
        {
          this.state.nodes.map((row,i) => {
            return <div className = {`board__row--${i}`} key = {`${i}`}>
              { row.map((node,j) => <Node key = {`${i}+${j}`}  
              onButtonDown = {this.onButtonDown} 
              onButtonUp = {this.onButtonUp} 
              onButtonOver = {this.onButtonOver}
              onButtonOut = {this.onButtonOut}
              nodeVal = {this.state.nodes[i][j]} row = {i} col = {j}></Node>) }
            </div>
          })
        }
      </div>
    );
  }

};

export default Board;