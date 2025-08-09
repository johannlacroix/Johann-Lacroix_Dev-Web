module.exports = {
  reactStrictMode: true,
}

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/Johann-Lacroix_Dev-Web/' : '',
  basePath: isProd ? '/Johann-Lacroix_Dev-Web' : '',
  images: { unoptimized: true },
  output: 'export',
};
