module.exports = {
  sass: {
    files: ['sass/**/*.{scss,sass}', 'sass/_partials/**/*.{scss,sass}'],
    tasks: ['sass:dist', 'postcss']
  }/*
  postcss: {
    files: 'css/!*.css',
    tasks: ['postcss']
  }*//*,
  livereload: {
    files: ['*.html', '*.php', 'js/!**!/!*.{js,json}', 'css/!*.css', 'img/!**!/!*.{png,jpg,jpeg,gif,webp,svg}'],
    options: {
      livereload: true
    }
  }*/
};
