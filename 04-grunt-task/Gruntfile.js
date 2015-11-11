module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: require('./grunt/sass.js'),
    postcss: require('./grunt/postcss.js'),
    watch: require('./grunt/watch.js')
  });
  // tasks
  grunt.registerTask('default', ['sass:dist', 'postcss', 'watch']);
  grunt.registerTask('sass', ['sass:dist']);
  grunt.registerTask('postcss', ['postcss']);

  // load grunt-taskers
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
