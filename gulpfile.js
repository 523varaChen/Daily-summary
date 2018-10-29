var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var minifyCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var rev = require('gulp-rev');                                  //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector'); 

gulp.task('scripts', function () {
  gulp.src(['assets/js/**/*.js'],{base:'assets/js'})
    .pipe(uglify())
    .pipe(rev()) 
    .pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest('dist/rev-manifest.json', {base: process.cwd()+'/dist', merge: true})) 
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  gulp.src(['assets/css/*.css'],{base:'assets/css'})
    .pipe(minifyCss())
    .pipe(rev()) 
    .pipe(gulp.dest('dist/css'))
    .pipe(rev.manifest('dist/rev-manifest.json', {base: process.cwd()+'/dist', merge: true})) 
    .pipe(gulp.dest('dist'));
  
  gulp.src(['assets/css/skin/*.css'],{base:'assets/css'})
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function(){
  gulp.src('assets/img/**/*',{base:'assets'})
    .pipe(imagemin())
    .pipe(gulp.dest('dist'));
});

gulp.task('rev', function() {
    gulp.src(['dist/rev-manifest.json', 'views/**/*.html'])  
        .pipe(revCollector())                                
        .pipe(gulp.dest('dist/views'));                    
});

gulp.task('watch', function () {
    var watchCss = gulp.watch('assets/js/render/*.js', ['scripts']);
    var watchJs = gulp.watch(['assets/css/common/*.css','assets/css/main/*.css',], ['styles']);
    watchCss.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    watchJs.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('build', function () {
    gulp.run('scripts','styles','imagemin');
});

gulp.task('default', ['build']);
