/*
 * grunt-htmlmin
 * https://github.com/poppinlp/grunt-htmlmin
 *
 * Copyright (c) 2014 "PoppinLp" Liang Peng
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.registerTask('htmlmin', 'Minify HTML', function () {
        var minify = require('html-minifier').minify,
            nodePath = require('path'),
            config = grunt.config.get('htmlmin'),
            ln = grunt.util.linefeed,
            globalOptions = config.options || {},
            taskOptions = {},
            task,
            files,
            len;

        for (task in config) {
            if (task !== 'options' && config.hasOwnProperty(task)) {
                task = config[task];
                taskOptions = extend(globalOptions, task.options || {});

                task = task.files;
                if (grunt.util.kindOf(task.src) === 'array') {
                    len = task.src.length;
                    while (len--) {
                        task.src[len] = fixPattern(task.src[len]);
                    }
                } else {
                    task.src = fixPattern(task.src);
                }

                files = grunt.file.expand(task.filter || {}, task.src);
                len = files.length;
                while (len--) {
                    minFile(files[len]);
                }
            }
        }

        function minFile (path) {
            var text,
                src = nodePath.normalize((task.filter ? (task.filter.cwd || '.') : '.') + nodePath.sep + path),
                target = nodePath.normalize(task.dest + nodePath.sep + path);

            text = grunt.file.read(src, { encoding: 'utf8' });
            try {
                text = minify(text, taskOptions);
                grunt.file.write(target, text, { encoding: 'utf8' });
            } catch (err) {
                grunt.fail.fatal(src + ln + err);
            }
            grunt.log.ok('Minify ' + src + ' => ' + target + ' successfully.');
        }

        function extend (self, obj) {
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    self[i] = obj[i];
                }
            }
            return self;
        }

        function fixPattern (path) {
            if (grunt.file.isDir(path)) {
                path += nodePath.sep + '*';
            }
            return nodePath.normalize(path);
        }
    });
};
