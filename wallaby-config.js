module.exports = function (wallaby) {
  return {
    files: [
      'src/file.js',
    ],
    tests: ['src/test/myTest.test.js'],
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        presets: ['babel-preset-gatsby'],
      }),
    },
    // trace: true,
    debug: true,
  };
};
