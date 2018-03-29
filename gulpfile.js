var gulp = require("gulp");
var sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
let cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var pump = require("pump");

gulp.task("sass", function() {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./public"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["sass", "browser-sync", "compress"], function() {
  gulp.watch("./src/**/*.scss", ["sass"]);
  gulp.watch("./src/**/*.js", ["compress"]);
});

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
});

gulp.task("minify-css", () => {
  return gulp
    .src("public/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./public"));
});

gulp.task("compress", function(cb) {
  pump([gulp.src("src/*.js"), uglify(), gulp.dest("./public")], cb);
});
