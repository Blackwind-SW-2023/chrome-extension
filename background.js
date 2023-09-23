chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "saveCredentials") {
      chrome.storage.local.set({
        dgist_username: request.dgist_username,
        dgist_password: request.dgist_password,
        naver_username: request.naver_username,
        naver_password: request.naver_password
      });
    }
  });
  