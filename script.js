//SAVE THEME TO LOCAL STORAGE

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

// CHANGE THEME

let themeDots = document.getElementsByClassName('theme-dot');

for(let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme (mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css';
    } 
    
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    } 
    
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }
    
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }


    //Saving to local storage

    localStorage.setItem('theme', mode);
}

//SUBMIT CONTACT FORM

const form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
          status.classList.add('success');
        status.innerHTML = "Thank you! Your message has been sent!";
        form.reset()
      }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem submitting your form."
      });
    }
    form.addEventListener("submit", handleSubmit); 


