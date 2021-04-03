import { tellCols } from './screensize';

export const gridNodeToGraphNode = (i,j) => {
  return  ( (i * tellCols()) + j );
}

export const graphNodeToGridNode = (x) => {
  let i = Math.floor(x/tellCols());
  let j = x - i * tellCols();
  return [i,j];
}