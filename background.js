chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        const fid = details.url.match(/^https:\/\/openload\.co\/f\/([\w-]+)\/.+$/)[1];
        if (fid) {
            return { redirectUrl: "https://openload.co/f/" + fid + "/" };
        }
    }, {
        urls: [
            "https://openload.co/f/*"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);
