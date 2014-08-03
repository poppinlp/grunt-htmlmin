module.exports = function(grunt) {
    grunt.config.init({
        jshint: {
            options: grunt.file.readJSON(__dirname + '/.jshintrc'),
            www: {
                src: ['tasks/htmlmin.js']
            }
        },
        htmlmin: {
            options: {
                removeComments: true
            },
            dir: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    src: ['**/*.html'],
                    dest: 'test/dest/',
                    filter: {
                        cwd: 'test/src/'
                    }
                }
            }
        }
    });
    grunt.loadTasks('tasks/');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('test', ['jshint', 'htmlmin']);
};
