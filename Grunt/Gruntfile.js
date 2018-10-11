'use strict';

let Privet = require('./Function');

module.exports =  (grunt) =>{
  grunt.registerTask('privet', 'privet', () => {
   Privet();
  })
};
