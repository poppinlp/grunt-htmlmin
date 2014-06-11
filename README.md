# Grunt-htmlmin
Grunt task to minify html. Ignore `.filename` and `_filename`.

This support folder path not only file path compared to [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin).

### Example config

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

For detail about options please see [options](https://github.com/kangax/html-minifier#options-quick-reference).


### Demo

```
grunt test
```

### Version

- Ver 0.0.6 Main
