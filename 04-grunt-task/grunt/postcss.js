module.exports = {
  options: {
    map: false,
    processors: [
      require('autoprefixer')({browsers: 'last 2 version'})
    ]
  },
  dist: {
    src: 'css/*.css'
  }
};
