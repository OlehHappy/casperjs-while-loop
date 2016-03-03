var casper = require('casper').create({
    waitTimeout: 300000 //new maximum timeout
    // pageSettings: {
    //   loadImages:  false // disable to load img
    // }
  }),
  x = require('casper').selectXPath;
var page = require('webpage').create();

casper.start('https://www.google..com/', function() {
});

casper.then(function() {
    var current = 1;
    var end = 4;

    for (;current < end;) {

      (function(cntr) {
        casper.then(function() {
              this.echo('casper.async: '+cntr);
              // here we can download stuff
        });
      })(current);

      current++;

    }

});

casper.then(function() {
  var current = 5;
  while (current > 1) {

    (function(cntr){
        casper.then(function(){
            this.echo('casper.async: '+cntr);
        });
    })(current);

    current--;
}
});

casper.wait(30000, function() {
  this.echo('bye bye');
});

casper.run();
