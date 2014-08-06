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
            fixPattern = require('dir2pattern'),
            nodePath = require('path'),
            fs = require('fs'),
            config = grunt.config.get('htmlmin'),
            ln = grunt.util.linefeed,
            cwd = __dirname + nodePath.sep + '..' + nodePath.sep,
            globalOptions = extend({
                newer: true
            }, config.options || {}),
            timestampPath = cwd + 'config' + nodePath.sep + 'timestamp.json',
            timestamp = {},
            defaultTimestamp = {},
            taskOptions = {},
            encoding = { encoding: 'utf8' },
            task,
            files,
            len;

        // read timestamp
        if (globalOptions.newer) {
            try {
                timestamp = grunt.file.readJSON(timestampPath, encoding);
            } catch (err) {
                timestamp = defaultTimestamp;
            }
        }

        for (task in config) {
            if (task !== 'options' && config.hasOwnProperty(task)) {
                task = config[task];
                taskOptions = extend(globalOptions, task.options || {});
                if (!timestamp[task]) timestamp[task] = {};

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

        if (globalOptions.newer) {
            grunt.file.write(timestampPath, JSON.stringify(timestamp), encoding);
        }

        function minFile (path) {
            var text,
                src = nodePath.normalize((task.filter ? (task.filter.cwd || '.') : '.') + nodePath.sep + path),
                target = nodePath.normalize(task.dest + nodePath.sep + path),
                lastChange = fs.statSync(src).mtime.getTime();

            if (globalOptions.newer && lastChange === timestamp[task][src]) return;
            text = grunt.file.read(src, encoding);
            try {
                text = minify(text, taskOptions);
                grunt.file.write(target, text, encoding);
                timestamp[task][src] = lastChange;
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
    });
};
