/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const rewrites = async () =>  [
  {
    destination: '/account/sign-in',
    source: '/tili/kirjaudu'
  },
  {
    destination: '/account/forgot-password',
    source: '/tili/unohdin-salasanan'
  }
];


const nextConfig = {
  i18n,
  reactStrictMode: true,
  rewrites,
};

module.exports = nextConfig;
