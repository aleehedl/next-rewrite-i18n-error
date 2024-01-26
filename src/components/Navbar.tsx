import { useTranslation } from "next-i18next";

import usePaths from "@/hooks/usePaths";
import Link from "next/link";
import langPaths from "./paths";

export default function Navbar() {
    const { t } = useTranslation();
    const paths = usePaths();
    return (
        <div style={{ display: 'flex' }}>
            <nav id="main-nav" style={{ flex: '1 1 100%' }}>
                <ul>
                    <li>
                        <Link href={paths.home} passHref>{t('paths.home')}</Link>
                    </li>
                    <li>
                        <Link href={paths.signIn} passHref>{t('paths.signIn')}</Link>
                    </li>
                </ul>
            </nav>
            <nav id="language-nav" style={{ flex: '1 1 100%' }}>
                <ul>
                    {Object.keys(langPaths).map((lang) => (
                        <li key={lang}>
                            <Link locale={lang} href={langPaths[lang as keyof typeof langPaths].home} passHref>{lang}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
