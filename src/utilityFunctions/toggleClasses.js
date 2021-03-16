export const toggleClassStartNode = (x,y,toggle) => {
  if(toggle === 'add')  document.getElementById(`${x}+${y}`).classList.add('board__startNode');
  if(toggle === 'remove') document.getElementById(`${x}+${y}`).classList.remove('board__startNode');
}

export const toggleClassDestNode = (x,y,toggle) => {
  if(toggle === 'add')  document.getElementById(`${x}+${y}`).classList.add('board__destNode');
  if(toggle === 'remove') document.getElementById(`${x}+${y}`).classList.remove('board__destNode');
}

export const toggleClassWallNode = (x,y,toggle) => {
  if(toggle === 'add')  document.getElementById(`${x}+${y}`).classList.add('board__wallNode');
  if(toggle === 'remove') document.getElementById(`${x}+${y}`).classList.remove('board__wallNode');
}
