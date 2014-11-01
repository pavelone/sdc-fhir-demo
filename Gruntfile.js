module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  var app_name = 'sdcApp';
  var app_prefix = 'resources/public/' + app_name + '/';

  grunt.initConfig({
    clean: {
      options: { force: true },
      main: [app_prefix + '**/*']
    },
    ngtemplates: {
      app: {
        cwd: 'app/views/',
        src: '*.html',
        dest: app_prefix + 'views.js',
        options: {
          module: app_name,
          prefix: '/'
        }
      }
    },
    concat: {
      lib_js: {
        src: [
          "app/bower_components/jquery/jquery.js",
          "app/bower_components/angular/angular.js",
          "app/bower_components/bootstrap/dist/js/bootstrap.js",
          "app/bower_components/angular-resource/angular-resource.js",
          "app/bower_components/angular-cookies/angular-cookies.js",
          "app/bower_components/angular-sanitize/angular-sanitize.js",
          "app/bower_components/angular-route/angular-route.js"
        ],
        dest: app_prefix + 'lib.js'
      },
      lib_css: {
        src: ['app/bower_components/bootstrap/dist/css/bootstrap.css'
        ],
        dest: app_prefix + 'css/lib.css'
      },
      app_js: {
        src: [ 'app/scripts/fhir-client.js','app/scripts/app.js','app/scripts/controllers/*', app_prefix + 'views.js' ],
        dest: app_prefix + 'app.js'
      }
    },
    copy: {
      index: {
        src: 'app/index.html',
        dest: app_prefix + 'index.html'
      },
      styles: {
        src: 'app/styles/main.css',
        dest: app_prefix + 'css/app.css'
      },
      images: {
        cwd: 'app/images/',
        src: ['**'],
        expand: true,
        dest: app_prefix + 'images/'
      },
      fixtures: {
        cwd: 'app/fixtures/',
        src: ['**'],
        expand: true,
        dest: app_prefix + 'fixtures/'
      },
      ico: {
        src: 'app/favicon.ico',
        dest: app_prefix + 'favicon.ico'
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9001,
          base: app_prefix,
          open: true,
          livereload: true
        }
      }
    },
    watch: {
      main: {
        files: ['app/views/**/*', 'app/index.html', 'app/scripts/**/*.js', 'app/styles/**/*.css'],
        tasks: ['build'],
        options: {
          event: ['all'],
          spawn: false,
          livereload: true
        }
      }  
    }

  }); 

  grunt.registerTask('build', ['clean', 'ngtemplates', 'concat', 'copy']);

  grunt.registerTask('serve', 'Compile then start a connect web server', ['build', 'connect', 'watch']);

};