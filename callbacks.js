const arr = ['Good', 'Morning', 'Vietnam'];

const getArrayContent = () => {
  setTimeout(() => {
    console.log(arr);
  }, 1000);
};

const addToArray = (word,callback) => {
  setTimeout(() => {
    arr.push(word);
    callback();
  }, 2000);
};

addToArray('Welcome',getArrayContent);
