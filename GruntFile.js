module.exports = function(grunt){
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        // concat all js files content by string ';',and save to dest file.
        concat : {
            options : {
                separator : ';'
            },
            dist : {
                src: ['src/**/*.js']
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        // uglify file from
        uglify : {
            options : {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist : {
                'dist/<%= pkg.name %>.min.js' : ['<%= concat.dist.dest %>']
            }
        },
        // qunit
        qunit : {
            files : ['test/**/*.html']
        },
        // jshint
        jshint : {
            files : ['GruntFile.js','test/**/*.js','js/**/*.js'],
            options : {
                global : {
                    jQuery：true,
                    console: true,
                    module:true
                }
            }
        },
        // watch
        watch : {
            files : '<%= jshint.files %>',
            tasks : ['jshint','qunit']
        }
    });
    
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // configuration
    grunt.registerTask('test',['jshint','qunit']);

    grunt.registerTask('default',['uglify','jshint','qunit','watch','concat']);

};