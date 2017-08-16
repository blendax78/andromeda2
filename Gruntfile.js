module.exports = function(grunt) {

  // Project configuration.
  var src = {
    js: [],
    css: []
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
      bootstrap_eot: {
        src: [ 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot'],
        dest: 'app/static/fonts/glyphicons-halflings-regular.eot'
      },
      bootstrap_svg: {
        src: [ 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg'],
        dest: 'app/static/fonts/glyphicons-halflings-regular.svg'
      },
      bootstrap_ttf: {
        src: [ 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'],
        dest: 'app/static/fonts/glyphicons-halflings-regular.ttf'
      },
      bootstrap_woff: {
        src: [ 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'],
        dest: 'app/static/fonts/glyphicons-halflings-regular.woff'
      },
      bootstrap_woff2: {
        src: [ 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'],
        dest: 'app/static/fonts/glyphicons-halflings-regular.woff2'
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};