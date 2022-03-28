const arr = ['Good', 'Morning', 'Vietnam'];

const getArrayContent = () => {
  setTimeout(() => {
    let str = '';
    arr.forEach((word)=>{
      str+=word+' ';
    })
    console.log(str);
  }, 1000);
};

const addToArray = (word,callback) => {
  setTimeout(() => {
    arr.push(word);
    callback();
  }, 2000);
};

addToArray('Welcome',getArrayContent);
