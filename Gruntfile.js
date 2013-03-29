/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
          banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },

        // clean: ["temp"],

        depconcat: {
            dist: {
                src: ['src/**/*.coffee'],
                dest: 'dist/nxr-only.coffee'
            }
        },

        // https://npmjs.org/package/grunt-contrib-coffee
        coffee: {
            options: {
                separator: '\n\n',
                join: true,
                bare: true,
                sourceMap: true
            },
            compile: {
                files: {
                  'dist/nxr-only.js': 'dist/nxr-only.coffee'
                }
            }
        },

        // coffeelint: {
        //   app: ['src/nxr/**/*.coffee']
        // },

        concat: {
            options: {
                separator: '\n\n'
            },
            dist: {
                src: [
                    'node_modules/gl-matrix/dist/gl-matrix.js',
                    'src/export-wrapper-begin.js',
                    'dist/nxr-only.js',
                    'src/export-wrapper-end.js'
                ],
                dest: 'dist/nxr-full.js'
            }
        },

        uglify: {
            options: {
                mangle: false,
                sourceMapIn: 'dist/nxr-only.map',
                sourceMap: 'dist/nxr-full.map'
            },
            app: {
                files: {
                    'dist/nxr-min.js': ['dist/nxr-full.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['depconcat', 'coffee', 'concat', 'uglify']);

    // grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-dep-concat');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('coffeelint');
};
