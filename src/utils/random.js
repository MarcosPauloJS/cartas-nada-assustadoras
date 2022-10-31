export const getRandomNumber = (min = 0, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const shuffle = (array) =>  {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  return array
}