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

addToArray('Welcome').then(getArrayContent);

addToArray(1000).then(getArrayContent).catch((error)=>{
  console.error(error)
})
