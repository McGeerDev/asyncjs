//  Async await is a way to handle responses not a way to write them

const arr = ['Good', 'Morning', 'Vietnam'];

const getArrayContent = () => {
  setTimeout(() => {
    let str = '';
    arr.forEach((word) => {
      str += word + ' ';
    });
    console.log(str);
  }, 1000);
};

const addToArray = (word) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof word === 'string') {
        arr.push(word);
        resolve();
      } else {
        reject('Error: That is not a string');
      }
    }, 2000);
  });
};

const afunc = async () => {
  await addToArray('Graybeard'); 
  getArrayContent();
}


afunc()
