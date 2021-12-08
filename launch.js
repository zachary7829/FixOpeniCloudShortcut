var currentURL = window.location.href;
let result = currentURL.replace("https://www.icloud.com/shortcuts/", "shortcuts://");
window.open(result, '_blank');