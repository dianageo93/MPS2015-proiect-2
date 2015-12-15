module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            src: {
                src: [
                    'src/L-System.js',
                    'src/DrawUtils.js',
                    'src/InputHandler.js'
                ],
                dest: 'dist/van-gogu.js'
            }
        },

        mdlint: ['README.md']
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
    grunt.registerTask('build', ['concat']);
};
