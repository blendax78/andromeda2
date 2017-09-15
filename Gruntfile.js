module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [{
          expand: true,
          flatten: true,
          src: ['bower_components/bootstrap/dist/fonts/*'], 
          dest: 'app/static/fonts/',
          filter: 'isFile'
        }]
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/underscore/underscore-min.js',
          'bower_components/bootstrap-toggle/js/bootstrap-toggle.min.js' //note: js file needs an <ENTER> added to beginning
        ],
        dest: 'app/static/js/bower.js'
      },
      css: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'bower_components/bootstrap-toggle/css/bootstrap-toggle.min.css'
        ],
        dest: 'app/static/css/bower.css'
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'copy']);

};