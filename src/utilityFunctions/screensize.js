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
  return Math.floor(y/28);
} 