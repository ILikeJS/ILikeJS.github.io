const promise = new Promise ((resolve, reject) => {

  setTimeout(() => {

    if (true) {
      resolve('hello world')
    }else{
      reject('connect error')
    }

  },2000)
});

promise.then(
  data => console.log('success: ', data),
  error => console.log('error: ', error)
);
