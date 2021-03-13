export const animateVisitedNode = (x,y) => {
  return new Promise (
    (resolve,reject) => {
      setTimeout( () => {
        document.getElementById(`${x}+${y}`).classList.add('board__visited');
        resolve("stuff worked");
      },0);
    }
  );
}