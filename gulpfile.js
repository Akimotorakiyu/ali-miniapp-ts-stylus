"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require("gulp");
var rename = require("gulp-rename");
var stylus = require("gulp-stylus");
var plumber = require("gulp-plumber");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
function acss(done) {
    gulp.src("pages/**/*.styl")
        .pipe(plumber())
        .pipe(stylus())
        .pipe(postcss([autoprefixer()]))
        .pipe(rename({
        extname: '.acss',
    }))
        .pipe(gulp.dest("pages"));
    done();
}
function tsc(done) {
    tsProject.src()
        .pipe(plumber())
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("."));
    done();
}
console.log("starting gulp task...");
gulp.task("default", gulp.parallel(acss, tsc));
console.log("starting watching...");
var watcher = [];
watcher.push(gulp.watch("./**/*.styl", acss));
watcher.push(gulp.watch("./**/*.ts", tsc));
watcher.forEach(function (ele) {
    ele.on("change", function (fileName, eventType) {
        console.log(fileName + " changed...");
    });
});
