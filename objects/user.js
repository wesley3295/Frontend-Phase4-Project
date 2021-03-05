class User{
    static all = []
    constructor([firstName,lastName,email,github,linkdn,facebook,twitter,reddit,youtube]){
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
        this.github = github;
        this.linkdn = linkdn;
        this.facebook = facebook;
        this.twitter = twitter;
        this.reddit = reddit;
        this.youtube = youtube;
        User.all.push(this)
    }
}