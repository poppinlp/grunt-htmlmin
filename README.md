# Grunt-htmlmin

[![Build Status](https://travis-ci.org/poppinlp/grunt-htmlmin.png?branch=master)](https://travis-ci.org/poppinlp/grunt-htmlmin)
[![Dependency Status](https://david-dm.org/poppinlp/grunt-htmlmin.svg)](https://david-dm.org/poppinlp/grunt-htmlmin)
[![devDependency Status](https://david-dm.org/poppinlp/grunt-htmlmin/dev-status.svg)](https://david-dm.org/poppinlp/grunt-htmlmin#info=devDependencies)

Grunt task to minify html.

### Getting Started

This plugin requires Grunt >=0.4.0

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-htmlmin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-htmlmin');
```
### Htmlmin Task

_Run this task with the `grunt htmlmin` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### options

For detail about htmlmin options, please see [htmlmin options](https://github.com/kangax/html-minifier#options-quick-reference).

#### newer

Only build changed file and new file. Default `true`. Only work in global options.

#### files.filter

For more detail about this option, please see [minimatch options](https://github.com/isaacs/minimatch#options).

### Usage Example

#### Basic

```
grunt.config.init({
    htmlmin: {
        file: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                src: 'test/src/index.html',
                dest: 'test/dest/'
            }
        }
    }
});
```

#### Global options

```
grunt.config.init({
    htmlmin: {
        options: {
            removeComments: true
        },
        file: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: 'test/src/index.html',
                dest: 'test/dest/'
            }
        }
    }
});
```

#### Use pattern

```
grunt.config.init({
    htmlmin: {
        options: {
            removeComments: true
        },
        file: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: 'test/src/**/*.html',
                dest: 'test/dest/'
            }
        }
    }
});
```

#### Use src array and filter

```
grunt.config.init({
    htmlmin: {
        options: {
            removeComments: true
        },
        file: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: ['index.html', 'tmp.html', 'dir/*.html'],
                dest: 'test/dest/',
                filter: {
                    cwd: 'test/src/'
                }
            }
        }
    }
});
```

### Demo

Run the test demo:

```
grunt test
```

### Version

- Ver 0.1.4 Update `dir2pattern` to 0.0.4
- Ver 0.1.3
    - Add dependency and devDependencies check
    - Add `newer` option
- Ver 0.1.2 Require `dir2pattern` to replace `fixPattern`
- Ver 0.1.1 Bugfix
- Ver 0.1.0
    - Support global options for htmlmin
    - Support file path pattern for `files.src`
    - Support path array for `files.src`
    - Add `files.filter` for file path pattern.
    - Optimize separator in file path between different os
- Ver 0.0.7 Update readme and bugfix
- Ver 0.0.6 Main
