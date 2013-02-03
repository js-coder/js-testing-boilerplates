var express = require("express");
 
var app = express();
 
// Config
app.configure('development', function() {
  app.set('port', 8000);
});

app.configure('development', function() {
  app.use(express.logger('dev'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('test', function () {
});

app.configure('production', function() {
});

app.get('/', function(req, res, next) {
  res.send('Hello world!');
})

module.exports = app;
 
if (!module.parent) {
  app.listen(app.get('port'), function(){
    console.log('Server started on port ' + app.get('port'));
  })
}
