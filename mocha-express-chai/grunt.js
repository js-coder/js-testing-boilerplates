module.exports = function(grunt) {
 
  // Add our custom tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-exec');
 
  // Project configuration.
  grunt.initConfig({
    exec: {
      coverage: {
        command: 'node_modules/.bin/mocha -R html-cov > coverage.html',
      }
    },
    mochaTest: {
      files: ['test/**/*.test.js']
    },
    mochaTestConfig: {
      options: {
        reporter: 'dot',
        require: 'test/common'
      }
    },
    watch: {
      test: {
        files: ['test/**/*.js', 'app/**/*.js'],
        tasks: 'test'
      }
    }
  });

  grunt.registerTask('coverage', 'exec:coverage');
  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('default', 'test');
}
