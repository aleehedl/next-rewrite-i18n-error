import usePaths from "@/hooks/usePaths";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from "@/components/Navbar";
import type { NextPageContext } from "next";

export default function SignIn() {
    const { t } = useTranslation()
    const paths = usePaths();

    return (
        <main>
            <Navbar />
            <h1>{t('pages.signIn.heading')}</h1>
            <Link href={paths.forgotPassword} >{t('paths.forgotPassword')}</Link>
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