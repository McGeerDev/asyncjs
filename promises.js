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
      arr.push(word);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: This will not work');
      }
    }, 2000);
  });
};

addToArray('Welcome').then(getArrayContent);
