module.exports = function () {
  var element = document.createElement('h1');
  element.innerHTML = 'Hello world blerp';
  console.log('hello from webpack');
  return element;
};
