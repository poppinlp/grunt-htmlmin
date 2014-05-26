var minify = require('html-minifier').minify;

module.exports = function (grunt) {
    grunt.registerTask('htmlmin', 'Minify HTML', function () {
        var list = grunt.config.get('htmlmin'),
            item, options, files, text, target;
        for (item in list) {
            if (list.hasOwnProperty(item)) {
                options = list[item].options;
                files = list[item].files;
                grunt.file.recurse(files.src, function (path, root, sub, file) {
                    text = grunt.file.read(path, { encoding: 'utf8' });
                    try {
                        text = minify(text, options);
                        target = files.dest + (sub ? sub : '') + file;
                        grunt.file.write(target, text, { encoding: 'utf8' });
                    } catch (err) {
                        return grunt.warn(path + '\n' + err);
                    }
                    grunt.log.ok('Minify ' + path + ' => ' + target + ' successfully.');
                });
            }
        }
    });
};
