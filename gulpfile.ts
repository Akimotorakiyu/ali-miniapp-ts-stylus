import * as  gulp from "gulp"
import * as rename from "gulp-rename"
import * as stylus from "gulp-stylus"
import * as plumber from "gulp-plumber"

import * as autoprefixer from "autoprefixer"
import * as postcss from "gulp-postcss"

import * as ts from "gulp-typescript"
import { FSWatcher } from "fs";


let tsProject = ts.createProject("tsconfig.json");

function acss(done) {
    gulp.src(`pages/**/*.styl`)
        .pipe(plumber())
        .pipe(stylus())
        .pipe(postcss([autoprefixer()]))
        .pipe(rename({
            extname: '.acss',
        }))
        .pipe(gulp.dest("pages"))
        .on("end", () => {
            done();
        })
}

function tsc(done) {
    tsProject.src()
        .pipe(plumber())
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("."))
        .on("end", () => {
            done();
        })
}

console.log("starting gulp task...")
gulp.task("default", gulp.parallel(acss, tsc))

console.log("starting watching...")

let watcher = <FSWatcher[]>[]

watcher.push(gulp.watch(`./**/*.styl`, acss))
watcher.push(gulp.watch(`./**/*.ts`, tsc))

watcher.forEach((ele) => {
    ele.on("change", (fileName, eventType) => {
        console.log(`${fileName} changed...`)
    })
    ele.on("error", (error) => {
        console.error(error)
    })
})
