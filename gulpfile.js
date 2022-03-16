const { src, dest, watch, series } = require("gulp")
const sass = require('gulp-sass')(require('sass'))

/* functions 
    gulp.task- Define tasks
    gulp.src - Point to files to use
    gulp.dst - Points to folder to output
    gulp.watch- Watch files and folders for changes
*/

function buildStyles() {
    return src('css beans/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['css beans/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)