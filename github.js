class Github {
    constructor() {
        this.client_id = 'f5d646392af5911b0451';
        this.client_secret = 'b715f65292b15483de58d200eda9e520b801a360';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        // we gonna be making two requests here, one to the individual user and the other one to the repo itself
        // individual user = https://api.github.com/users/k40L1n
        // repos = https://api.github.com/users/k40L1n/repos

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            // profile:profile = same as below, in es6, you can just write "profile", if the names are same.
            profile,
            repos
        }
    }
}