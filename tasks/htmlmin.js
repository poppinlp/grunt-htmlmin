/*
 * grunt-jsmerge
 * https://github.com/poppinlp/grunt-jsmerge
 *
 * Copyright (c) 2014 "PoppinLp" Liang Peng
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.registerTask('htmlmin', 'Minify HTML', function () {
        var minify = require('html-minifier').minify,
            config = grunt.config.get('htmlmin'),
            ln = grunt.util.linefeed,
            task, options, files;

        for (task in config) {
            if (config.hasOwnProperty(task)) {
                options = config[task].options ? config[task].options : {};
                files = config[task].files;
                if (grunt.file.isDir(files.src)) {
                    grunt.file.recurse(files.src, minFile);
                } else {
                    minFile(files.src, '', '', '');
                }
            }
        }

        function minFile (path, root, sub, file) {
            var text, target;

            if (file[0] === '.' || file[0] === '_' || path[0] === '.' || (sub && sub[0] === '.')) return;
            text = grunt.file.read(path, { encoding: 'utf8' });
            try {
                text = minify(text, options);
                target = files.dest + (sub ? sub : '') + file;
                grunt.file.write(target, text, { encoding: 'utf8' });
            } catch (err) {
                grunt.fail.fatal(path + ln + err);
            }
            grunt.log.ok('Minify ' + path + ' => ' + target + ' successfully.');
        }
    });
};
