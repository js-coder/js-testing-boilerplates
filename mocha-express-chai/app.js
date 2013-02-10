var express = require('express');

var index = require('./app/controllers/index');

var app = express();
 
// Config
app.configure(function() {
  app.set('port', 8000);
  app.set('views', __dirname + '/app/views');
  app.set('view engine', 'jade');
});

app.configure('development', function() {
  app.use(express.logger('dev'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('test', function () {
});

app.configure('production', function() {
});

index.init(app);

module.exports = app;
 
if (!module.parent) {
  app.listen(app.get('port'), function(){
    console.log('Server started on port ' + app.get('port'));
  })
}
