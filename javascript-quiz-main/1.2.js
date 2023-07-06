const promise1 = new Promise((resolve) => {
    console.log('Order 1');
    resolve();
  });
  
  const promise2 = new Promise((resolve) => {
    console.log('Order 2');
    resolve();
  });
  
  promise1
    .then(() => {
      console.log('Order1 1 resolved');
      return promise2;
    })
    .then(() => {
      console.log('Order 2 resolved');
      console.log('End');
    });