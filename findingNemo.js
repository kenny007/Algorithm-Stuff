const nemo = ['nemo'];

function findingNemo(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log('running!');
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
      break;
    }
  }
  // let t1 = performance.now();
  // console.log('Call to find Nemo took' + (t1 - t0) + ' milliseconds')
};

findingNemo(nemo);
