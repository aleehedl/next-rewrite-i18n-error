import langPaths from "@/components/paths";
import { useRouter } from "next/router";

export default function usePaths() {
    const { locale: maybeLocale } = useRouter();
    const locale = maybeLocale ?? 'fi';
    return langPaths[locale as keyof typeof langPaths] ?? langPaths.fi;

}