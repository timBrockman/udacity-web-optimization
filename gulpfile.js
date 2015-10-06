//var ngrok = require('ngrok');

var gulp  = require('gulp');
//var gOpen = require('gulp-open');
//var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

//preview (src + watch)
gulp.task('preview', function(){

  browserSync.init({
      server: {
            baseDir:"./src/"}
      });
  gulp.watch(['*.html'], browserSync.reload);
  gulp.watch(['css/*.css'], browserSync.reload);
  gulp.watch(['scripts/**/*.js'], browserSync.reload);
  gulp.watch(['images/**/*'], browserSync.reload);
  });
//static serve dist (full-optimized)
gulp.task('serve', function(){

    browserSync.init({
        server: {
              baseDir:"./dist/"}
        });
    });

/* this is failing
gulp.task('ngrok', function(){
  browserSync.init({server:{baseDir:"./"}},
    function(err, bs){
      ngrok.connect({proto:'http',addr:3000}, function(err,url){
      //  console.log(url);
        gulp.src('')
        .pipe(gOpen({app:'chrome',uri:'http://localhost:4040'}));
      });
    });
  //shell.task('c:/ngrok/ngrok http 3000', {'verbose':true});

});
*/

gulp.task('default',['serve']);
/*gulp.task('reset', function(){
   browserSync.exit()
   console.log('Dev server shut down.')
   browserSync.reload()
 });*/
