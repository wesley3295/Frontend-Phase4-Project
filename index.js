document.addEventListener("DOMContentLoaded",()=>{
renderUserForm()
})

// globals
//form elements
const userDiv = document.getElementById("user_form")
const formDiv = document.getElementById("project_form")
const projectsDiv = document.getElementById("users_projects")
const createUser = [] 
//fetch
const userUrl = 'http://localhost:3000/users'
const projectUrl = 'http://localhost:3000/projects'



const renderUserForm = () => {
    const br = document.createElement("br")

    const signUpHeader = document.createElement("h3")
    signUpHeader.innerHTML =`User Sign up`
    userDiv.appendChild(signUpHeader)

    const firstNameInput = document.createElement("input")
    firstNameInput.id = "first_name"
    firstNameInput.placeholder=`First Name`
    userDiv.appendChild(firstNameInput)
    
    userDiv.appendChild(document.createElement("br"))
    const lastNameInput = document.createElement("input")
    lastNameInput.id = "last_name"
    lastNameInput.placeholder="Last Name"
    userDiv.appendChild(lastNameInput)
    
    userDiv.appendChild(document.createElement("br"))
    const emailInput = document.createElement("input")
    emailInput.id = "email"
    emailInput.placeholder="Email"
    userDiv.appendChild(emailInput)
    userDiv.appendChild(document.createElement("br"))

    const githubInput = document.createElement("input")
    githubInput.id = "github"
    githubInput.placeholder="Github"
    userDiv.appendChild(githubInput)
    userDiv.appendChild(document.createElement("br"))
    
    const linkdnInput = document.createElement("input")
    linkdnInput.id = "linkdn"
    linkdnInput.placeholder="Linkdn"
    userDiv.appendChild(linkdnInput)
    userDiv.appendChild(document.createElement("br"))

    const facebookInput = document.createElement("input")
    facebookInput.id = "facebook"
    facebookInput.placeholder="Facebook"
    userDiv.appendChild(facebookInput)
    userDiv.appendChild(document.createElement("br"))

    const twitterInput = document.createElement("input")
    twitterInput.id = "twitter"
    twitterInput.placeholder="Twitter"
    userDiv.appendChild(twitterInput)
    userDiv.appendChild(document.createElement("br"))

    const redditInput = document.createElement("input")
    redditInput.id = "reddit"
    redditInput.placeholder="Reddit"
    userDiv.appendChild(redditInput)
    userDiv.appendChild(document.createElement("br"))
    
    const youtubeInput = document.createElement("input")
    youtubeInput.id = "youtube"
    youtubeInput.placeholder="YouTube"
    userDiv.appendChild(youtubeInput)
    userDiv.appendChild(document.createElement("br"))
    
    const submit = document.createElement("button")
    submit.innerHTML = "Sign up"
    userDiv.appendChild(submit)
    

    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        createUser.push(firstNameInput.value,lastNameInput.value,emailInput.value,githubInput.value,linkdnInput.value,facebookInput.value,twitterInput.value,redditInput.value,youtubeInput.value)
        let userFetch = new Fetch(userUrl)
        let newUser = new User(createUser)
        userFetch.createUser(newUser)
    })


}

const renderProjectForm = () => {
    const projectHeader = document.createElement("h3")
    projectHeader.innerHTML = "Project"
    userDiv.appendChild(projectHeader)

const titleInput = document.createElement("input")
titleInput.placeholder="Title"
formDiv.appendChild(titleInput)
formDiv.appendChild(document.createElement("br"))

const projectLinkInput = document.createElement("input")
projectLinkInput.placeholder="Project Link"
formDiv.appendChild(projectLinkInput)
formDiv.appendChild(document.createElement("br"))

const videoLinkInput = document.createElement("input")
videoLinkInput.placeholder="Video Link"
formDiv.appendChild(videoLinkInput)
formDiv.appendChild(document.createElement("br"))

const cohortInput = document.createElement("input")
cohortInput.placeholder="Cohort"
formDiv.appendChild(cohortInput)
formDiv.appendChild(document.createElement("br"))

const blogLinkInput = document.createElement("input")
blogLinkInput.placeholder="Blog Link"
formDiv.appendChild(blogLinkInput)
formDiv.appendChild(document.createElement("br"))


const submit = document.createElement("button")
submit.innerHTML = "Post Project"
formDiv.appendChild(submit)
}

const renderProjects = () =>{
const fetchProjects = new Fetch(projectUrl)
}