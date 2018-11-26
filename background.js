chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        const matches = details.url.match(/^https:\/\/openload\.co\/f\/([\w-]+)\/.+$/);
        if (matches) {
            return { redirectUrl: "https://openload.co/f/" + matches[1] + "/" };
        }
    }, {
        urls: [
            "https://openload.co/f/*"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);
