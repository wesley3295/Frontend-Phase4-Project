const navbar = document.getElementById("nav")
const userDiv = document.getElementById("user_form")
const formDiv = document.getElementById("project_form")
const usersDiv = document.getElementById("users_projects")

let userDisDiv;
let projectDiv;

let createUser = [] //current user attributes
let newUser; // current user
let createProject = [] // current project attributes
let newProject; // current project

//fetch urls
const userUrl = 'http://localhost:3000/users'
const projectUrl = 'http://localhost:3000/projects'

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
