console.log("a");
setTimeout(() => {
  console.log("b");
}, 0);
console.log("c");

function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

const number = 1;
increase(number, (result) => {
  console.log(result);
  increase(result, (result) => {
    console.log(result);
  });
});

// 렉시컬 스코프
// callback 지옥(콜백 중첩)

function increase2(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("numbertooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase2(0)
  .then((number) => {
    console.log(number);
    return increase2(number);
  })
  .then((number) => {
    console.log(number);
    return increase2(number);
  })
  .then((number) => {
    console.log(number);
    return increase2(number);
  })
  .then((number) => {
    console.log(number);
    return increase2(number);
  })
  .catch((e) => {
    console.log(e);
  });

const runTasks = async () => {
  try {
    let result = await increase2(0);
    console.log(result);
    result = await increase2(0);
    console.log(result);
    result = await increase2(0);
    console.log(result);
    result = await increase2(0);
    console.log(result);
    result = await increase2(0);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
