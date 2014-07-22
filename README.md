# Grunt-htmlmin

Grunt task to minify html. Ignore `.filename` and `_filename`.

### Getting Started

This plugin requires Grunt >=0.4.5

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

For detail about options please see [options](https://github.com/kangax/html-minifier#options-quick-reference).

### Usage Example

```
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
```

### Demo

Run the test demo:

```
grunt test
```

### Version

- Ver 0.0.7 Update readme and bugfix
- Ver 0.0.6 Main
