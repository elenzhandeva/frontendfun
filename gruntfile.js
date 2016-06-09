module.exports = function(grunt) {


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'main.min.js': ['main.js'],
				}
			}
		},

		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'stylesheets/style.css': ['sass/style.scss']
				}
			}
		},

		watch: {
			sass: {
				files: 'sass/**/*.scss',
				tasks: ['sass']
			}
		}




	});

	grunt.registerTask('default', ['uglify', 'sass', 'watch']);


};