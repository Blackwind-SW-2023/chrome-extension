document.getElementById('save').addEventListener('click', function () {
    const dgist_username = document.getElementById('dgist_username').value;
    const dgist_password = document.getElementById('dgist_password').value;
    const naver_username = document.getElementById('naver_username').value;
    const naver_password = document.getElementById('naver_password').value;
    
    chrome.runtime.sendMessage({
      action: 'saveCredentials',
      dgist_username: dgist_username,
      dgist_password: dgist_password,
      naver_username: naver_username,
      naver_password: naver_password
    });
  });
  