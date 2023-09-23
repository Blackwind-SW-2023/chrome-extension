if (window.location.href.includes("https://auth.dgist.ac.kr/login/authentication/two-factor/verification")) {
    chrome.storage.local.get(['naver_username', 'naver_password'], function (result) {
        setTimeout(() => {
            const checkButton = document.querySelector('#alert_btn');
            checkButton.click();
        }, 2000);
        setTimeout(async ()=> {
            let response;
            const verificationCodeField = document.querySelector('#code');
            const submitButton = document.querySelector('body > div.body > div.container > div.contents > div.field > div.input.light > button')
            // get verification code
            console.log(result.naver_username);
            console.log(result.naver_password);
            const data = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST', // Specify the request method
                headers: {
                    'Content-Type': 'application/json' // Specify content type as JSON
                },
                body: JSON.stringify({
                    userId: result.naver_username, // Include user ID in the request body
                    userPw: result.naver_password  // Include user password in the request body
                })
            })
            .then(response => response.json()) // Parse the JSON response
            console.log(data);           
            const authcode = data;
            
            verificationCodeField.value = authcode; 
            submitButton.click();
            setTimeout(() => {
                const finalbutton = document.querySelector('#alert_btn');
                finalbutton.click();
                // window.location.href = "https://my.dgist.ac.kr/";
            }, 1000);

        },11000)
    });
}

else if (window.location.href.includes("https://auth.dgist.ac.kr/login/user/password/expired")) {
    const change_later = document.querySelector('body > div.body > div.container > div.button-area.submit > button.button.bg-g');
    change_later.click();
}


else if (window.location.href.includes("https://auth.dgist.ac.kr/login/")) {
    chrome.storage.local.get(['dgist_username', 'dgist_password'], function (result) {
      const usernameField = document.querySelector('#loginID');
      const passwordField = document.querySelector('#password');
      const submitButton = document.querySelector('#loginForm > div.default.ui.tab.active.field > button');
      
      usernameField.value = result.dgist_username || '';
      passwordField.value = result.dgist_password || '';
      
      if (usernameField.value && passwordField.value) {
          submitButton.click();
        setTimeout(()=> {
            const alertbutton = document.querySelector('#alert_btn');
            alertbutton.click();
        },500)
      }
    });
}
