'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            minified: ['js-min/*']
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    base: 'app',
                    open: true,
                    keepalive: true
                }
            }
        }
     });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('minify', [
        'clean'
    ]);
    grunt.registerTask('server', [
        'connect'
    ]);

};