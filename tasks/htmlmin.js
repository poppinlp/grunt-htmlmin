var minify = require('html-minifier').minify;

module.exports = function (grunt) {
    grunt.registerTask('htmlmin', 'Minify HTML', function () {
        var list = grunt.config.get('htmlmin'),
            item, options, files;
        for (item in list) {
            if (list.hasOwnProperty(item)) {
                options = list[item].options;
                files = list[item].files;
                if (grunt.file.isDir(files.src)) {
                    grunt.file.recurse(files.src, minFile);
                } else {
                    minFile(files.src, '', '', '');
                }
            }
        }

        function minFile (path, root, sub, file) {
            var text, target;
            text = grunt.file.read(path, { encoding: 'utf8' });
            try {
                text = minify(text, options);
                target = files.dest + (sub ? sub : '') + file;
                grunt.file.write(target, text, { encoding: 'utf8' });
            } catch (err) {
                return grunt.warn(path + '\n' + err);
            }
            grunt.log.ok('Minify ' + path + ' => ' + target + ' successfully.');
        }
    });
};
