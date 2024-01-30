/** @type {import('next-i18next').UserConfig} */
module.exports = {
    compatibilityJSON: 'v4',
    defaultNs: 'common',
    i18n: {
      defaultLocale: 'fi',
      localeDetection: true,
      locales: ['fi', 'en'],
    },
    localePath:
      typeof window === 'undefined'
        ? require('path').resolve('./public/locales')
        : '/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
}