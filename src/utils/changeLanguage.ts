export function changeLanguage(lang: string) {
    document.documentElement.lang = lang;

    localStorage.setItem("language", lang);

    window.dispatchEvent(new CustomEvent("languageChange", { detail: { language: lang } }));
}