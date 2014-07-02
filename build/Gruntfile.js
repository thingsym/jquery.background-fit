module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'uglify']
    },
    jshint: {
      files: ['Gruntfile.js', '../<%= pkg.name %>.js']
    },
    uglify: {
      options: {
        mangle: false,
        banner: '/*\n' +
          ' * <%= pkg.title %>\n' +
          ' * Version <%= pkg.version %>\n' +
          ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
          ' * URI <%= pkg.URI %>\n' +
          ' * Update: <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %>\n' +
          ' * <%= pkg.license %>\n' +
          ' * <%= _.pluck(pkg.licenses, "url").join("\\n * ") %>\n' +
          ' * Required: <%= pkg.required %>\n' +
          '*/\n'
      },
      dist: {
        files: {
          '../<%= pkg.name %>.min.js': ['../<%= pkg.name %>.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
};
