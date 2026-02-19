/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { translations } from "@/lang/translations";

export function useT() {
    const locale = useSelector((state: any) => state.language.locale) as keyof typeof translations;

    function getNestedValue(obj: any, path: any) {
        return path.split(".").reduce((acc: any, key: any) => acc?.[key], obj);
    }

    function t(key: any) {
        // tenta idioma atual
        let value = getNestedValue(translations[locale], key);

        // fallback para inglês
        if (value === undefined) {
            value = getNestedValue(translations.en, key);
        }

        // fallback final (debug visível)
        if (value === undefined) {
            console.warn(`Missing translation: ${key}`);
            return key;
        }

        return value;
    }

    return t;
}