'use client';
import React, { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = 'googtrans';

// The LanguageSwitcher component
const LanguageSwitcher = () => {
    const [currentLanguage, setCurrentLanguage] = useState(null);
    const [languageConfig, setLanguageConfig] = useState(null);

    // Initialize translation engine
    useEffect(() => {
        // 1. Read the cookie
        const cookies = parseCookies();
        const existingLanguageCookieValue = cookies[COOKIE_NAME];

        let languageValue;
        if (existingLanguageCookieValue) {
            // 2. If the cookie is defined, extract a language nickname from there.
            const sp = existingLanguageCookieValue.split('/');
            if (sp.length > 2) {
                languageValue = sp[2];
            }
        }

        // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue - use default one
        if (globalThis.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
            languageValue = globalThis.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
        }

        if (languageValue) {
            // 4. Set the current language if we have a related decision.
            setCurrentLanguage(languageValue);
        }

        // 5. Set the language config.
        if (globalThis.__GOOGLE_TRANSLATION_CONFIG__) {
            setLanguageConfig(globalThis.__GOOGLE_TRANSLATION_CONFIG__);
        }
    }, []);

    // Don't display anything if current language information is unavailable.
    if (!currentLanguage || !languageConfig) {
        return null;
    }

    // The following function switches the current language
    const switchLanguage = (lang) => () => {
        // We just need to set the related cookie and reload the page
        // "/auto/" prefix is Google's definition as far as a cookie name
        setCookie(null, COOKIE_NAME, '/auto/' + lang);
        window.location.reload();
    };

    return (
        <div className="text-center grid gap-4 p-4 notranslate">
            {languageConfig.languages.map((ld, i) => (
                <React.Fragment key={`l_s_${i}`}>
                    {currentLanguage === ld.name ||
                    (currentLanguage === 'auto' && languageConfig.defaultLanguage === ld.name) ? (
                        <span className="mx-3 text-orange-300">{ld.title}</span>
                    ) : (
                        <a
                            onClick={switchLanguage(ld.name)}
                            className="mx-3 text-blue-300 cursor-pointer hover:underline"
                        >
                            {ld.title}
                        </a>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export { LanguageSwitcher, COOKIE_NAME };
