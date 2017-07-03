(function() {

  // This is where we try to extract the data, but it's undefined (see the console).
  // It works fine pasting the code into the console on the page though.
  var bars = document.getElementsByTagName('rect');
  console.log('Data 1', bars[0].__data__);
  console.log('Data 2', bars[1].__data__);

})();
