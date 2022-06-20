module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["fa", "en", "ar"],
    defaultLocale: "en",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  presets: ["next/babel"],
  swcMinify: false, // it should be false by default
};
