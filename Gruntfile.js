/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
          banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        // lint: {
        //   files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
        // },
        // qunit: {
        //   files: ['test/**/*.html']
        // },
        // min: {
        //   dist: {
        //     src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        //     dest: 'dist/<%= pkg.name %>.min.js'
        //   }
        // },
        // watch: {
        //   files: '<config:lint.files>',
        //   tasks: 'lint qunit'
        // },
        // jshint: {
        //   options: {
        //     curly: true,
        //     eqeqeq: true,
        //     immed: true,
        //     latedef: true,
        //     newcap: true,
        //     noarg: true,
        //     sub: true,
        //     undef: true,
        //     boss: true,
        //     eqnull: true,
        //     browser: true
        //   },
        //   globals: {
        //     jQuery: true
        //   }
        // },

        // less: {
        //   development: {
        //     options: {
        //       paths: ["assets/css"]
        //     },
        //     files: {
        //       "style.css": "path/to/source.less"
        //     }
        //   },
        //   production: {
        //     options: {
        //       paths: ["assets/css"],
        //       yuicompress: true
        //     },
        //     files: {
        //       "style.css": "path/to/source.less"
        //     }
        //   }
        // },

        // https://npmjs.org/package/grunt-contrib-coffee
        coffee: {
            options: {
                // separator: ';\n',
                join: true,
                bare: true
                // sourceMap: true
            },
            compile: {
                files: {
                    'dist/nxr-only.js': [
                        'src/nxr/namespace.coffee', 'src/nxr/*.coffee',
                        'src/nxr/scene/namespace.coffee', 'src/nxr/scene/Node.coffee', 'src/nxr/scene/*.coffee',
                        'src/nxr/scene/webgl/namespace.coffee', 'src/nxr/scene/webgl/*.coffee',
                        'src/nxr/scene/graph/namespace.coffee', 'src/nxr/scene/graph/*.coffee'
                    ]
                }
            }
        },
        // coffeelint: {
        //   app: ['src/nxr/**/*.coffee']
        // },
        concat: {
            options: {
                separator: ';\n\n'
            },
            dist: {
                src: ['node_modules/gl-matrix/dist/gl-matrix.js', 'dist/nxr-only.js'],
                dest: 'dist/nxr-full.js'
            }
        },
        uglify: {
            options: {
                mangle: false,
                // sourceMapIn: '',
                sourceMap: 'dist/nxr-map.js'
            },
            app: {
                files: {
                    'dist/nxr-min.js': ['dist/nxr-full.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['coffee' , 'concat', 'uglify']);

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('coffeelint');
};
