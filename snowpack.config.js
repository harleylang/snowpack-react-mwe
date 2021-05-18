module.exports = {
    mount: {
      public: { url: '/', static: true },
      src: { url: '/dist' },
    },
    extends: "@snowpack/app-scripts-react",
    alias: {
      functions: './src/functions',
      pages: './src/pages',
    },
    routes: [
      {
        match: "routes", 
        src: ".*", 
        dest: "/index.html"
      },
    ],
    plugins: [
      "@snowpack/plugin-webpack"
    ],
    devOptions: {
      port: 3000,
      src: "src",
      bundle: true,
      open: 'firefox'
    },
    packageOptions: {
      rollup: {
        plugins: [
          require('@rollup/plugin-typescript')(),
        ],
      },
    },
  }