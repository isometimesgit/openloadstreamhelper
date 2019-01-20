chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        const fid = details.url.match(/^https:\/\/openload\.co\/f\/([\w]+)\/.+$/)[1];
        if (fid) {
            const url = "https://openload.co/f/" + fid + "/";
            navigator.clipboard.writeText(url);
            return { redirectUrl: url };
        }
    }, {
        urls: [
            "https://openload.co/f/*"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);