import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";
import Navbar from '@/components/Navbar';
import type { NextPageContext } from 'next';

export default function ForgotPassword() {
    const { t } = useTranslation()

    return (
        <main>
            <Navbar />
            <h1>{t('pages.forgotPassword.heading')}</h1>
        </main >
    );
}

export async function getStaticProps({ locale = 'fi' }: NextPageContext) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
        },
    }
}