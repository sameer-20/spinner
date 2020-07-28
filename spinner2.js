// Refactoring spinner1.js

// '\r' returns our cursor back to the beginning of the line that we were on

const spinner = function (arr) {
  let count = 100;
          
  for (const item of arr) {
    count += 200;
    setTimeout(() => {
      process.stdout.write('\r' + item + '   ');
    }, count);
  }  
};

const arr = ["\|", "\/", "\-", "\\", "\-", "\|"];
spinner (arr);

