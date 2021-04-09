# Path finding visualiser 
## Overview
> A Visualisation web app with a board on which you can select mazes,<br> 
> Run path finding algorithms, Form your own mazes by builiding walls,<br>
> Visualise the behaviour of selected algorithms.<br>

## Instruction 
* **A soruce can move only up or down or left or right.**
* **StartNode and DestinationNode :** Already present on board by default, both of which are draggable so that you can place them anywhere on the board.
* **Building walls :** 
    1. You can click on any empty cell and it will toggle between wall and open cell.
    2. You can drag the cursor around the board and all the cells covered will be turned into walls.
    3. You can clear up a single wall by clicking on the cell or you can clear all the walls by pressing clearWalls button on the navigation.
* **Choosing a maze :** So far only two maze algorithms are added.
    1. **Recurisve Backtracker :** Its a randomised dfs and backtracking based algorihtm, All you need to do it just click on one of them and it will start the visualisation.
    2. **Reverse Recursive Backtracker :** Its same as previous one just all the walls are opened now and all the open cells are changed to walls.
* **Algorithms :** So far only two Path finding algorithms are added.
    1. **Dijkstra :** A greedy bfs based algorithm, All you need to do is select it and press visualise, it will give you the shortest path between source and destination.
    2. **Depth First Search :** :All you need to do is select it and press visualise, it will give you any valid path between source and destination.
* **Clearboard :** Clears Everything on the board, you must clear the board after running each of the visualisation.


### Finding Shortest path between Souce and Destination in a Maze : 
* Select Reverse backtracker from the mazes dropdown, Wait for the maze to build up then go to algorithms dropdown and select Dijkstra then press visualise, this visualisation will show you the shortest path between source and destination in a maze.
* 
![alt text](https://github.com/svsannidhay/path-finding-visualiser/blob/master/Images/sp%20Dijkstra%20in%20a%20maze.png)
<br>
<br>
<br>
<br>
<br>
<br>

### Recursive Backtracker (Maze generation) : 
![alt text](https://github.com/svsannidhay/path-finding-visualiser/blob/master/Images/backtracker.png)
<br>
<br>
<br>
<br>
<br>
<br>

### Dijkstra :
![alt text](https://github.com/svsannidhay/path-finding-visualiser/blob/master/Images/Dijkstra.png)
<br>
<br>
<br>
<br>
<br>
<br>

### Dfs : 
![alt text](https://github.com/svsannidhay/path-finding-visualiser/blob/master/Images/dfs.png)


