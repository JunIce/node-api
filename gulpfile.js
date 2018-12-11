const gulp = require('gulp')
const cache = require('gulp-cached')
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task('scripts', function() {
    return gulp.src('src/*.ts')
        .pipe(tsProject())
        .pipe(cache('typescript'))
        .pipe(gulp.dest('dist'));
});
 
gulp.task('watch', gulp.series('scripts', function() {
    gulp.watch('src/*.ts', gulp.series('scripts'));
}))

gulp.task("default", gulp.series('watch'));