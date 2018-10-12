'use strict';

let gulp = require('gulp');
let del = require('del');
let Privet = require('../Grunt/Function');

gulp.task('privet',() => {
  Privet()
});

gulp.task('delete', ()=>{
  return del(['mobile'])
});

gulp.task('del', () => {
 return del([
   'direct/2',
 ])
});