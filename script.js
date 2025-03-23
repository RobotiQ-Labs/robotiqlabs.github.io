document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.getElementById("lang-switch");

    // Detect user language or load from localStorage
    let userLang = localStorage.getItem("lang") || navigator.language.slice(0, 2);
    if (!["en", "fr"].includes(userLang)) userLang = "en"; // Default to English

    loadLanguage(userLang);

    // Language switcher button event
    langButton.addEventListener("click", function () {
        const newLang = userLang === "en" ? "fr" : "en";
        localStorage.setItem("lang", newLang);
        loadLanguage(newLang);
    });

    function loadLanguage(lang) {
        fetch(`translations/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll("[data-key]").forEach(element => {
                    const keyPath = element.getAttribute("data-key").split(".");
                    let value = data;

                    // Traverse the JSON object following the key path
                    for (const key of keyPath) {
                        if (value[key] !== undefined) {
                            value = value[key];
                        } else {
                            console.warn(`Missing translation for key: ${keyPath.join(".")}`);
                            return;
                        }
                    }

                    if (typeof value === "string") {
                        // If element contains an image or other HTML elements, keep them intact
                        if (element.hasAttribute("data-keep-html")) {
                            const existingImages = element.querySelectorAll("img");
                            element.innerHTML = value; // Replace text

                            // Re-add images if they exist
                            existingImages.forEach(img => {
                                element.appendChild(img);
                            });
                        } else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                            element.placeholder = value; // Handle placeholders
                        } else {
                            element.textContent = value; // Default text replacement
                        }
                    }
                });

                // Update the button text for language switch
                if (data.header && data.header.language) {
                    langButton.textContent = data.header.language;
                }

                userLang = lang; // Update the current language
            })
            .catch(error => console.error("Translation loading error:", error));
    }
});