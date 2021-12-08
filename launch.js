var currentURL = window.location.href;
if (!(currentURL.includes("/api/"))) {
  let result = currentURL.replace("icloud.com/shortcuts/", "");
  result = result.replace("https", "");
  result = result.replace("http", "");
  result = result.replace(":", "");
  result = result.replace("/", "");
  result = result.replace(".", "");
  result = result.replace("www", "");
  result = result.replace(".html", "");
  result = "shortcuts://shortcuts/" + result;
  window.open(result, '_blank');
}