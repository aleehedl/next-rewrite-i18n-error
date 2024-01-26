const langPaths = {
    en: {
        home: '/en',
        signIn: '/account/sign-in',
        forgotPassword: '/account/forgot-password'
    },
    fi: {
        home: '/',
        signIn: '/tili/kirjaudu',
        forgotPassword: '/tili/unohdin-salasanan'
    },
} as const;

export default langPaths;