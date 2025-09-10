// function TranslateInit() {
//     if (!window.__GOOGLE_TRANSLATION_CONFIG__) {
//         return;
//     }
//     new google.translate.TranslateElement({
//         pageLanguage: window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage,
//     });
// }

function TranslateInit() {
    if (!window.__GOOGLE_TRANSLATION_CONFIG__) {
        return;
    }

    // Initialize the Google Translate element
    new google.translate.TranslateElement({
        pageLanguage: window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage,
    });

    // Hide the translate bar (after it loads)
    const translateFrame = document.querySelector('.goog-te-banner-frame');
    if (translateFrame) {
        translateFrame.style.display = 'none';
    }

    const translateElement = document.getElementById('google_translate_element');
    if (translateElement) {
        translateElement.style.display = 'none';
    }
}
