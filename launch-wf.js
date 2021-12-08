var currentURL = window.location.href;
let result = currentURL.replace("https://www.workflow.is/workflows/", "shortcuts://workflows/");
result = result.replace(".html", "");
window.open(result, '_blank');