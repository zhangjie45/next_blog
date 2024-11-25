/** @type {import('next').NextConfig} */
// const nextConfig = {};
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  webpack (config, { isServer }) {
    // 在这里添加 mini-css-extract-plugin 插件
    config.plugins.push(new MiniCssExtractPlugin({
      filename: isServer ? '[name].css' : '[name].[contenthash].css',
    }));
    return config;
  }
  // nextConfig
};
