module.exports = function(grunt) {

  const CSS = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css'
  ];

  const JS = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bjootstrap.min.js',
    'node_modules/bootstrap-toggle/js/bootstrap-toggle.js',
    'node_modules/underscore/underscore-min.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [{
          expand: true,
          flatten: true,
          src: ['node_modules/bootstrap/dist/fonts/*'], 
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
        src: [ JS ],
        dest: 'app/static/js/webpack.js'
      },
      css: {
        src: [ CSS ],
        dest: 'app/static/css/webpack.css'
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'copy']);

};