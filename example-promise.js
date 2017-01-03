function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Granada, Spain',function (err, temp){
  if(err){
    console.log('error', err);
  }else{
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Granada').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);

});

function addPromise (a, b){
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }else{
      reject('Either a or b are not numbers...');
    }
  });
}

addPromise('uno', 'dos').then(function (temp) {
  console.log('success: ', temp);
}, function (err) {
  console.log('error: ', err);
});
addPromise('uno', 2).then(function (temp) {
  console.log('success: ', temp);
}, function (err) {
  console.log('error: ', err);
});
addPromise(1, 2).then(function (temp) {
  console.log('success: ', temp);
}, function (err) {
  console.log('error: ', err);
});
