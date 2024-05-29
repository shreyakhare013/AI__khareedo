/** @type {import('next').NextConfig} */
 const nextConfig = {
  reactStrictMode: true,
 eslint:{
    ignoreDuringBuilds:true,
  }
 }

 
 module.exports = nextConfig

//chatgpt code
// const webpack = require('webpack');

//  module.exports = {
//    reactStrictMode: true,
//    eslint: {
//     ignoreDuringBuilds: true,
//    },
//    webpack: (config, { isServer }) => {
//      // Only define `self` for client-side builds
//      if (!isServer) {
//        config.plugins.push(
//         new webpack.DefinePlugin({
//            'self': 'global',
//         })
//        );
//      }
//      return config;
//   },
// };
