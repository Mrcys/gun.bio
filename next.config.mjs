/** @type {import('next').NextConfig} */
import config from './next-i18next.config.js';
const { i18n } = config;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n
}

export default nextConfig;