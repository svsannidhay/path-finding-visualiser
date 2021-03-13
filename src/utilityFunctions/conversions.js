export const gridNodeToGraphNode = (i,j) => {
  return  ( (i * 50) + j );
}

export const graphNodeToGridNode = (x) => {
  let i = Math.floor(x/50);
  let j = x - i * 50;
  return [i,j];
}