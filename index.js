var testCookie = "thirdPartyCookieCheck=true";

document.cookie = testCookie;
if (document.cookie.indexOf(testCookie) > -1) {
  console.log("Cookie set successfully!");
  window.parent.postMessage("success", "*");
} else {
  console.log("Cookie set failure!");
  window.parent.postMessage("failure", "*");
}
