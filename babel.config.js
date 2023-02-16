module.exports = {
  "env": {
    "test": {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ]
    },
    "transform": {
      "^.+\\.js?$": require.resolve('babel-jest')
  }
  }
};