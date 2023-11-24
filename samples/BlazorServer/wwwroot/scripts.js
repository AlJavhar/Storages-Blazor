// scripts.js
function replaceUrl(newUrl) {
    history.replaceState(null, '', newUrl);
}

function requestUrl() {
    history.state();
}
