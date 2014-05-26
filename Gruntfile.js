module.exports = function(grunt) {
    grunt.config.init({
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
                files: {
                    src: 'test/src/index.html',
                    dest: 'test/dest/index.html'
                }
            }
        }
    });
    grunt.loadTasks('tasks/');
    grunt.registerTask('test', ['htmlmin']);
};
