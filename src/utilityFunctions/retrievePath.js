const RetrievePath = (startNode,destNode,prev) => {

  let start = destNode;
  let path = [];
  path.push(destNode);
  while(prev[start] !== -1) {
    start = prev[start];
    path.push(start);
  }
  return path.reverse();
}

export default RetrievePath;