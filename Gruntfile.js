module.exports = function(grunt) {
    grunt.config.init({
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    src: 'test/src/',
                    dest: 'test/dest/'
                }
            }
        }
    });
    grunt.loadTasks('tasks/');
    grunt.registerTask('test', ['htmlmin']);
};
