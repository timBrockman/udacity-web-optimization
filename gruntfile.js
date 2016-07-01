module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    htmlmin:{
      dev:{
        options:{
          collapseWhitespace:true,
          removeComments:true,
          minifyCSS:true,
          minifyJS:true
        },
        files:{
          'dist/index.html':'src/index.html',
          'dist/project-2048.html':'src/project-2048.html',
          'dist/project-mobile.html':'src/project-mobile.html',
          'dist/project-webperf.html':'src/project-webperf.html',
          'dist/views/pizza.html':'src/views/pizza.html'
        }
      }
    },
	  responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
          {
            width:'100px',
            suffix:'_th',
            quality:50
          },
          {
            width: '320px',
            suffix: '_sm',
            quality: 65
          },
          {
            width: '640px',
            suffix: '_md',
            quality: 65
          },
          {
            width: '960px',
            suffix: '_lg',
            quality: 65
          },
          {
            width: '1920px',
            suffix: '_xl',
            quality: 65
          }]
        },
        files: [{
          expand: true,
          src: ['views/images/*.{gif,jpg,png}'],
          cwd: 'src/',
          dest: 'dist/'
        }]
    }},
	imagemin: {
			dev:{
				files:[{
					expand: true,
					src: ['views/images/*.{gif,jpg,png}'],
					cwd:'dist/',
					dest:'dist/'
				}]
			}
		},
		copy:{
			dev:{
				files:[{
					expand:true,
					src:['**/*','!**/*.html','!views/images/pizzeria.jpg'],
					cwd: 'src/',
					dest: 'dist/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['copy', 'htmlmin', 'responsive_images', 'imagemin']);//,'imagemin']);//,'concat']);
}
