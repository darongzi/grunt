/*module.exports = function(grunt){
    grunt.initConfig({
        
        // log
        log : {
            foo : [1,2,3],
            bar : 'hello world',
            baz : false
        }
    });
    
    grunt.registerMultiTask('log','Log Stuff',function(){
        grunt.log.writeln(this.target + ':' +　this.data );
    });

    // 当一个 basic task 执行的时候，Grunt不会去查看配置或者环境--而只是执行指定的task函数，并传递用冒号分割的参数。
    grunt.registerTask('foo','A sample task that logs stuff',function(arg1,arg2){
        if (arguments.length == 0) {
            grunt.log.writeln( this.name + ': no arguments');
        } else {
            grunt.log.writeln( this.name + '，' + arg1 + ' ' + arg2 );
        }
    });

};*/

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: false,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};