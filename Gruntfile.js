'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
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
        },
        clean: {
            target: ['target/*']
        },
        concat: {
            dist: {
                src: ['app/js/**/*.js'],
                dest: 'target/nk.js'
            }
        },
        uglify: {
            nkscripts: {
                files: {
                    'target/nk.min.js': ['target/nk.js']
                }
            }
        }
     });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('minify', [
        'clean:target',
        'concat',
        'uglify'
    ]);
    grunt.registerTask('server', [
        'connect'
    ]);

};
