module.exports = function(grunt) {
 
  // Add our custom tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
 
  // Project configuration.
  grunt.initConfig({
    mochaTest: {
      files: ['spec/**/*.spec.js']
    },
    mochaTestConfig: {
      options: {
        reporter: 'dot',
        require: 'spec/common'
      }
    },
    watch: {
      test: {
        files: ['spec/**/*.spec.js'],
        tasks: 'test'
      }
    }
  });
 
  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('default', 'test');
}
