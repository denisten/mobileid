const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withCss({
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals)
        ];
        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader"
        });
      }

      config.module.rules.push({
        test: /\.png/,
        use: ['file-loader'],
      })
      return config;
    },
    env: {
      demoUrl: 'https://store.mobcon.prostream.ru/',
      DATA_BASE_URL: 'mongodb://den:denlikepro@127.0.0.1:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false&connectTimeoutMS=5000',
      // inboxMail: 'mobileid@stream.ru'
      inboxMail: 'denisten000@list.ru'
    }
  })
);
