module.exports = function(grunt) {
    grunt.config.init({
        jshint: {
            options: grunt.file.readJSON(__dirname + '/.jshintrc'),
            www: {
                src: ['tasks/htmlmin.js']
            }
        },
        htmlmin: {
            dir: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    src: 'test/src/',
                    dest: 'test/dest/'
                }
            },
            file: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    src: 'test/src/index.html',
                    dest: 'test/dest/index.html'
                }
            }
        }
    });
    grunt.loadTasks('tasks/');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('test', ['jshint', 'htmlmin']);
};
