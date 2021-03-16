class User {
    static all = []
    constructor([id, firstName, lastName, email, github, linkdn, facebook, twitter, reddit, youtube], projects = []) {
        this.id = id;
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
        this.github = github;
        this.linkdn = linkdn;
        this.facebook = facebook;
        this.twitter = twitter;
        this.reddit = reddit;
        this.youtube = youtube;
        this.projects = projects;
    }
    save() {
        User.all.push(this)
    }

    static renderUserForm = (user = undefined) => {
        clearDom()

        const signUpHeader = document.createElement("h3")
        signUpHeader.innerHTML = `User Sign up`

        userChildDiv = document.createElement("div")
        firstNameInput = document.createElement("input")
        lastNameInput = document.createElement("input")
        emailInput = document.createElement("input")
        githubInput = document.createElement("input")
        linkdnInput = document.createElement("input")
        facebookInput = document.createElement("input")
        twitterInput = document.createElement("input")
        redditInput = document.createElement("input")
        youtubeInput = document.createElement("input")
        const submit = document.createElement("button")
        submit.innerHTML = "Sign up"

        firstNameInput.id = "first_name"
        lastNameInput.id = "last_name"
        emailInput.id = "email"
        githubInput.id = "github"
        linkdnInput.id = "linkdn"
        facebookInput.id = "facebook"
        twitterInput.id = "twitter"
        redditInput.id = "reddit"
        youtubeInput.id = "youtube"

        githubInput.type = "url"
        linkdnInput.type = "url"
        facebookInput.type = "url"
        twitterInput.type = "url"
        redditInput.type = "url"
        youtubeInput.type = "url"

        firstNameInput.placeholder = `First Name`
        lastNameInput.placeholder = "Last Name"
        emailInput.placeholder = "Email"
        githubInput.placeholder = "Github"
        linkdnInput.placeholder = "Linkdn"
        facebookInput.placeholder = "Facebook"
        twitterInput.placeholder = "Twitter"
        redditInput.placeholder = "Reddit"
        youtubeInput.placeholder = "YouTube"


        userDiv.appendChild(userChildDiv)
        userChildDiv.appendChild(signUpHeader)
        userChildDiv.appendChild(firstNameInput)
        userChildDiv.appendChild(lastNameInput)
        userChildDiv.appendChild(emailInput)
        userChildDiv.appendChild(githubInput)
        userChildDiv.appendChild(linkdnInput)
        userChildDiv.appendChild(facebookInput)
        userChildDiv.appendChild(twitterInput)
        userChildDiv.appendChild(redditInput)
        userChildDiv.appendChild(youtubeInput)
        userChildDiv.appendChild(submit)

        if (user.id) {
            signUpHeader.innerHTML = "Edit User"
            submit.hidden = true

            firstNameInput.value = user.first_name
            lastNameInput.value = user.last_name
            emailInput.value = user.email
            githubInput.value = user.github
            linkdnInput.value = user.linkdn
            facebookInput.value = user.facebook
            twitterInput.value = user.twitter
            redditInput.value = user.reddit
            youtubeInput.value = user.youtube
            userDiv.removeChild(userChildDiv)
        }
        submit.addEventListener("click", (e) => {
            e.preventDefault()

            if (!user.id) {
              const userObject = { id: undefined, first_name: firstNameInput.value, last_name: lastNameInput.value, email: emailInput.value, github: githubInput.value, linkdn: linkdnInput.value, facebook: facebookInput.value, twitter: twitterInput.value, reddit: redditInput.value, youtube: youtubeInput.value }
                Fetch.createUser(userObject)
            }
        })

    }
}