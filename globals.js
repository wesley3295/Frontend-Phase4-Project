const navbar = document.getElementById("nav")
const userDiv = document.getElementById("user_form")
const formDiv = document.getElementById("project_form")
const usersDiv = document.getElementById("users_projects")
const loginDiv = () => document.getElementById('login')

let userDisDiv;
let projectDiv;

let createUser = [] //current user attributes
let newUser; // current user
let createProject = [] // current project attributes
let newProject; // current project

let userChildDiv;
let projectChildDiv;
let firstNameInput;
let lastNameInput;
let emailInput;
let githubInput;
let linkdnInput;
let facebookInput;
let twitterInput;
let redditInput;
let youtubeInput;
let projectHeader;
let titleInput;
let videoLinkInput;
let projectLinkInput;
let cohortInput;
let blogLinkInput;


searchInput = document.createElement("input")
searchInput.type = "text"
searchInput.addEventListener("input", (e) => {
    let searchArry = User.all.filter(u => u.first_name.includes(e.target.value) || u.last_name.includes(e.target.value))
    clearDom()
    usersDiv.innerHTML = ""
    renderUsersAndProjects(searchArry)
})