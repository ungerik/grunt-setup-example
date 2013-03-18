/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    // concat: {
    //   dist: {
    //     src: ['<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>'],
    //     dest: 'dist/<%= pkg.name %>.js'
    //   }
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
    coffee: {
      app: {
        src: ['src/**/*.coffee'],
        dest: 'nxr.js'
      }
    },
    coffeelint: {
      app: ['src/**/*.coffee']
    },
    uglify: {
      my_target: {
        files: {
          'nxr.min.js': ['nxr.js']
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['coffee', 'uglify']); // , 'concat', 

  grunt.loadNpmTasks('grunt-contrib-less');

  // grunt.loadNpmTasks('coffeelint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
