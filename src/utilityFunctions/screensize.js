var x;
var y;
export const measureScreenSize = () => {
  y = window.innerHeight - 300;
  x = window.innerWidth;
}
export const tellCols = () => {
  return Math.floor(x/28);
}
export const tellRows = () => {
  let val = Math.floor(y/28);
  if(val % 2==0) val++;
  return val;
} 