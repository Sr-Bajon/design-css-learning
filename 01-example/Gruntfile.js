/*jslint node: true */
"use strict";

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    //lee el archivo package.json y lo transforma en un objeto javascript
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: require('./grunt/autoprefixer'),
    //sass: require('./grunt/sass'),
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'main.css': 'main.scss'
        }
      }
    },
    watch: require('./grunt/watch')

  });

  grunt.event.on('watch', function (action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // ============= // CREATE TASKS ========== //
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('sass', ['sass:dist']);
  /*
    grunt.registerTask('default', ['concurrent']);
    grunt.registerTask('all', ['jshint', 'browserify', 'traceur', 'autopolyfiller',
      'uglify:production', 'clean','libsass','autoprefixer', 'cssmin']);
    grunt.registerTask('test', ['']);
  */
};

/*
 ** todos los directorios
 *  todos los archivos

 */

