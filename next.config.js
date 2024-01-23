/** @type {import('next').NextConfig} */
const { i18n } = require("./next-18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
};

module.exports = nextConfig;
