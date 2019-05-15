// Init github
const github = new Github;

// Init UI
const ui = new UI;

// search input 

const searchUser = document.getElementById('searchUser');

// search i/p event listener

searchUser.addEventListener('keyup', (e) => {
    // get i/p text
    const userText = e.target.value;
    if (userText !== '') {
        // make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message == 'Not Found') {
                    // Show an alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});