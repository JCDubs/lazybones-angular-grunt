// Performs rewrites based on filerev and the useminPrepare configuration
module.exports = {
    html: ['<%= paths.dist %>/src/{,*/}*.html'],
    css: ['<%= paths.dist %>/src/static/styles/{,*/}*.css'],
    options: {
        assetsDirs: [
            '<%= paths.dist %>/src/app',
            '<%= paths.dist %>/src/static/images',
            '<%= paths.dist %>/src/static/styles'
        ]
    }
}
