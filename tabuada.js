function tabuada(i, v) {
  var v = v || false;
  var dS = Date.now();
  for(var X = 1; X <= i; X++) {
    for(var Y = 1; Y <= i; Y++) {
      var valor = X * Y;
      if(v) console.log(X + ' x ' + Y + ' = ' + valor);
    }
  }
  var dE = Date.now();
  var dT = dE - dS;
  var dTs = dT / 1000;
  console.log('Terminado em ' + dT + 'ms (' + dTs + 's)');
}