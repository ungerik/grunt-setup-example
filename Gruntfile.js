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

        clean: ["temp"],

        // https://npmjs.org/package/grunt-contrib-coffee
        coffee: {
            options: {
                // separator: ';\n',
                join: true,
                bare: true
                // sourceMap: true
            },
            nxr: {
                expand: true,
                cwd: 'src/nxr/',
                src: ['*.coffee'],
                dest: 'temp/nxr/',
                ext: '.js'
            },
            scene: {
                expand: true,
                cwd: 'src/nxr/scene/',
                src: ['*.coffee'],
                dest: 'temp/nxr/scene/',
                ext: '.js'
            },
            webgl: {
                expand: true,
                cwd: 'src/nxr/webgl/',
                src: ['*.coffee'],
                dest: 'temp/nxr/webgl/',
                ext: '.js'
            }
        },

        // coffeelint: {
        //   app: ['src/nxr/**/*.coffee']
        // },

        depconcat: {
            dist: {
                src: ['temp/**/*.js'],
                dest: 'dist/nxr-only.js'
            }
        },

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

    grunt.registerTask('default', ['clean', 'coffee', 'depconcat', 'uglify']);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-dep-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('coffeelint');
};
