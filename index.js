//move forms to classes


//clear Dom
const clearDom = () => {
    navbar.innerHTML = ""
    userDiv.innerHTML = ""
    formDiv.innerHTML = ""
    loginDiv().innerHTML = ""
    nav()
}


const login = () => {
    let loginInput = document.createElement('input')
    const submitBtn = document.createElement('button')
    submitBtn.innerHTML = "Login"
    loginInput.placeholder = "Email"
    loginDiv().append(loginInput, submitBtn)

    submitBtn.addEventListener('click', (e) => {
        const loginUser = User.all.find(user => user.email === loginInput.value)
        if (loginUser) {
            newUser = loginUser
            usersDiv.innerHTML = ""
            clearDom()
        } else {
            User.renderUserForm()
        }
    })
}

//nav buttons
const nav = () => {
    if (newUser === undefined) {
        login()
        const createUserBtn = document.createElement("button")
        createUserBtn.innerHTML = "Create User"
        createUserBtn.addEventListener("click", User.renderUserForm)
        navbar.appendChild(createUserBtn)
    }
    if (newUser) {
        const createProjectBtn = document.createElement("button")
        createProjectBtn.innerHTML = "Create Another Project"

        createProjectBtn.addEventListener("click", () => Project.renderProjectForm())
        navbar.appendChild(createProjectBtn)

        const logoutBtn = document.createElement('button')
        logoutBtn.innerHTML = "Logout"
        loginDiv().append(logoutBtn)
        logoutBtn.addEventListener('click', (e) => {
            newUser = undefined
            usersDiv.innerHTML = ""
            clearDom()
        })
    }
    const viewProjectsBtn = document.createElement("button")
    viewProjectsBtn.innerHTML = "View Projects"
    viewProjectsBtn.addEventListener("click", render)
    navbar.appendChild(viewProjectsBtn)
}

//rename function
const render = () => {
    clearDom()
    usersDiv.innerHTML = ""
    
    User.all.forEach(user => {

        userDisDiv = document.createElement('div')
        userDisDiv.id = `user-${user.id}`
        //    
        let nameH3 = document.createElement('h3')
        //
        let emailP = document.createElement('p')
        //
        let githubA = document.createElement('a')
        let facebookA = document.createElement('a')
        let twitterA = document.createElement('a')
        let redditA = document.createElement('a')
        let youtubeA = document.createElement('a')
        let linkdnA = document.createElement('a')
        //
        let githubIcon = document.createElement('img')
        let facebookIcon = document.createElement('img')
        let twitterIcon = document.createElement('img')
        let redditIcon = document.createElement('img')
        let youtubeIcon = document.createElement('img')
        let linkdnIcon = document.createElement('img')
        //
        nameH3.textContent = `${user.first_name} ${user.last_name}`
        emailP.textContent = `${user.email}`
        //
        githubA.target = "_blank"
        facebookA.target = "_blank"
        twitterA.target = "_blank"
        redditA.target = "_blank"
        youtubeA.target = "_blank"
        linkdnA.target = "_blank"
        //
        //
        githubIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
        facebookIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMyA4aC0xLjM1Yy0uNTM4IDAtLjY1LjIyMS0uNjUuNzc4djEuMjIyaDJsLS4yMDkgMmgtMS43OTF2N2gtM3YtN2gtMnYtMmgydi0yLjMwOGMwLTEuNzY5LjkzMS0yLjY5MiAzLjAyOS0yLjY5MmgxLjk3MXYzeiIvPjwvc3ZnPg=="
        twitterIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg=="
        redditIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTQuMjM4IDE1LjM0OGMuMDg1LjA4NC4wODUuMjIxIDAgLjMwNi0uNDY1LjQ2Mi0xLjE5NC42ODctMi4yMzEuNjg3bC0uMDA4LS4wMDItLjAwOC4wMDJjLTEuMDM2IDAtMS43NjYtLjIyNS0yLjIzMS0uNjg4LS4wODUtLjA4NC0uMDg1LS4yMjEgMC0uMzA1LjA4NC0uMDg0LjIyMi0uMDg0LjMwNyAwIC4zNzkuMzc3IDEuMDA4LjU2MSAxLjkyNC41NjFsLjAwOC4wMDIuMDA4LS4wMDJjLjkxNSAwIDEuNTQ0LS4xODQgMS45MjQtLjU2MS4wODUtLjA4NC4yMjMtLjA4NC4zMDcgMHptLTMuNDQtMi40MThjMC0uNTA3LS40MTQtLjkxOS0uOTIyLS45MTktLjUwOSAwLS45MjMuNDEyLS45MjMuOTE5IDAgLjUwNi40MTQuOTE4LjkyMy45MTguNTA4LjAwMS45MjItLjQxMS45MjItLjkxOHptMTMuMjAyLS45M2MwIDYuNjI3LTUuMzczIDEyLTEyIDEycy0xMi01LjM3My0xMi0xMiA1LjM3My0xMiAxMi0xMiAxMiA1LjM3MyAxMiAxMnptLTUtLjEyOWMwLS44NTEtLjY5NS0xLjU0My0xLjU1LTEuNTQzLS40MTcgMC0uNzk1LjE2Ny0xLjA3NC40MzUtMS4wNTYtLjY5NS0yLjQ4NS0xLjEzNy00LjA2Ni0xLjE5NGwuODY1LTIuNzI0IDIuMzQzLjU0OS0uMDAzLjAzNGMwIC42OTYuNTY5IDEuMjYyIDEuMjY4IDEuMjYyLjY5OSAwIDEuMjY3LS41NjYgMS4yNjctMS4yNjJzLS41NjgtMS4yNjItMS4yNjctMS4yNjJjLS41MzcgMC0uOTk0LjMzNS0xLjE3OS44MDRsLTIuNTI1LS41OTJjLS4xMS0uMDI3LS4yMjMuMDM3LS4yNTcuMTQ1bC0uOTY1IDMuMDM4Yy0xLjY1Ni4wMi0zLjE1NS40NjYtNC4yNTggMS4xODEtLjI3Ny0uMjU1LS42NDQtLjQxNS0xLjA1LS40MTUtLjg1NC4wMDEtMS41NDkuNjkzLTEuNTQ5IDEuNTQ0IDAgLjU2Ni4zMTEgMS4wNTYuNzY4IDEuMzI1LS4wMy4xNjQtLjA1LjMzMS0uMDUuNSAwIDIuMjgxIDIuODA1IDQuMTM3IDYuMjUzIDQuMTM3czYuMjUzLTEuODU2IDYuMjUzLTQuMTM3YzAtLjE2LS4wMTctLjMxNy0uMDQ0LS40NzIuNDg2LS4yNjEuODItLjc2Ni44Mi0xLjM1M3ptLTQuODcyLjE0MWMtLjUwOSAwLS45MjIuNDEyLS45MjIuOTE5IDAgLjUwNi40MTQuOTE4LjkyMi45MThzLjkyMi0uNDEyLjkyMi0uOTE4YzAtLjUwNy0uNDEzLS45MTktLjkyMi0uOTE5eiIvPjwvc3ZnPg=="
        youtubeIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC42NTIgMGgxLjQ0bC45ODggMy43MDIuOTE2LTMuNzAyaDEuNDU0bC0xLjY2NSA1LjUwNXYzLjc1N2gtMS40MzF2LTMuNzU3bC0xLjcwMi01LjUwNXptNi41OTQgMi4zNzNjLTEuMTE5IDAtMS44NjEuNzQtMS44NjEgMS44MzV2My4zNDljMCAxLjIwNC42MjkgMS44MzEgMS44NjEgMS44MzEgMS4wMjIgMCAxLjgyNi0uNjgzIDEuODI2LTEuODMxdi0zLjM0OWMwLTEuMDY5LS43OTctMS44MzUtMS44MjYtMS44MzV6bS41MzEgNS4xMjdjMCAuMzcyLS4xOS42NDYtLjUzMi42NDYtLjM1MSAwLS41NTQtLjI4Ny0uNTU0LS42NDZ2LTMuMTc5YzAtLjM3NC4xNzItLjY1MS41MjktLjY1MS4zOSAwIC41NTcuMjY5LjU1Ny42NTF2My4xNzl6bTQuNzI5LTUuMDd2NS4xODZjLS4xNTUuMTk0LS41LjUxMi0uNzQ3LjUxMi0uMjcxIDAtLjMzOC0uMTg2LS4zMzgtLjQ2di01LjIzOGgtMS4yN3Y1LjcxYzAgLjY3NS4yMDYgMS4yMi44ODcgMS4yMi4zODQgMCAuOTE4LS4yIDEuNDY4LS44NTN2Ljc1NGgxLjI3di02LjgzMWgtMS4yN3ptMi4yMDMgMTMuODU4Yy0uNDQ4IDAtLjU0MS4zMTUtLjU0MS43NjN2LjY1OWgxLjA2OXYtLjY2Yy4wMDEtLjQ0LS4wOTItLjc2Mi0uNTI4LS43NjJ6bS00LjcwMy4wNGMtLjA4NC4wNDMtLjE2Ny4xMDktLjI1LjE5OHY0LjA1NWMuMDk5LjEwNi4xOTQuMTgyLjI4Ny4yMjkuMTk3LjEuNDg1LjEwNy42MTktLjA2Ny4wNy0uMDkyLjEwNS0uMjQxLjEwNS0uNDQ5di0zLjM1OWMwLS4yMi0uMDQzLS4zODYtLjEyOS0uNS0uMTQ3LS4xOTMtLjQyLS4yMTQtLjYzMi0uMTA3em00LjgyNy01LjE5NWMtMi42MDQtLjE3Ny0xMS4wNjYtLjE3Ny0xMy42NjYgMC0yLjgxNC4xOTItMy4xNDYgMS44OTItMy4xNjcgNi4zNjcuMDIxIDQuNDY3LjM1IDYuMTc1IDMuMTY3IDYuMzY3IDIuNi4xNzcgMTEuMDYyLjE3NyAxMy42NjYgMCAyLjgxNC0uMTkyIDMuMTQ2LTEuODkzIDMuMTY3LTYuMzY3LS4wMjEtNC40NjctLjM1LTYuMTc1LTMuMTY3LTYuMzY3em0tMTIuMzI0IDEwLjY4NmgtMS4zNjN2LTcuNTRoLTEuNDF2LTEuMjhoNC4xODJ2MS4yOGgtMS40MXY3LjU0em00Ljg0NiAwaC0xLjIxdi0uNzE4Yy0uMjIzLjI2NS0uNDU1LjQ2Ny0uNjk2LjYwNS0uNjUyLjM3NC0xLjU0Ny4zNjUtMS41NDctLjk1NXYtNS40MzhoMS4yMDl2NC45ODhjMCAuMjYyLjA2My40MzguMzIyLjQzOC4yMzYgMCAuNTY0LS4zMDMuNzExLS40ODd2LTQuOTM5aDEuMjF2Ni41MDZ6bTQuNjU3LTEuMzQ4YzAgLjgwNS0uMzAxIDEuNDMxLTEuMTA2IDEuNDMxLS40NDMgMC0uODEyLS4xNjItMS4xNDktLjU4M3YuNWgtMS4yMjF2LTguODJoMS4yMjF2Mi44NGMuMjczLS4zMzMuNjQ0LS42MDggMS4wNzYtLjYwOC44ODYgMCAxLjE4Ljc0OSAxLjE4IDEuNjMxdjMuNjA5em00LjQ3MS0xLjc1MmgtMi4zMTR2MS4yMjhjMCAuNDg4LjA0Mi45MS41MjguOTEuNTExIDAgLjU0MS0uMzQ0LjU0MS0uOTF2LS40NTJoMS4yNDV2LjQ4OWMwIDEuMjUzLS41MzggMi4wMTMtMS44MTMgMi4wMTMtMS4xNTUgMC0xLjc0Ni0uODQyLTEuNzQ2LTIuMDEzdi0yLjkyMWMwLTEuMTI5Ljc0Ni0xLjkxNCAxLjgzNy0xLjkxNCAxLjE2MSAwIDEuNzIxLjczOCAxLjcyMSAxLjkxNHYxLjY1NnoiLz48L3N2Zz4="
        linkdnIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="
        //
        githubA.href = user.github
        facebookA.href = user.facebook
        twitterA.href = user.twitter
        redditA.href = user.reddit
        youtubeA.href = user.youtube
        linkdnA.href = user.linkdn
        //
        githubA.appendChild(githubIcon)
        facebookA.appendChild(facebookIcon)
        twitterA.appendChild(twitterIcon)
        redditA.appendChild(redditIcon)
        youtubeA.appendChild(youtubeIcon)
        linkdnA.appendChild(linkdnIcon)
        //
        usersDiv.appendChild(userDisDiv)
        userDisDiv.appendChild(nameH3)
        userDisDiv.appendChild(emailP)
        userDisDiv.appendChild(githubA)
        userDisDiv.appendChild(facebookA)
        userDisDiv.appendChild(twitterA)
        userDisDiv.appendChild(redditA)
        userDisDiv.appendChild(youtubeA)
        userDisDiv.appendChild(linkdnA)
        //
        user.projects.forEach(p => {
            //  
            projectDiv = document.createElement('div')
            projectDiv.id = `project-${p.id}`

            let titleH2 = document.createElement('h2')
            let projectP = document.createElement('p')
            let blogP = document.createElement('p')
            let projectA = document.createElement('a')
            let blogA = document.createElement('a')
            let videoIframe = document.createElement('iframe')
            let split = p.video_link.split("watch?v=");
            split.splice(1, 0, 'embed/');
            let embed = split.join("");

            titleH2.textContent = p.title

            projectA.textContent = "here"
            projectP.textContent = (`Check out ${user.first_name}'s project ${projectA}`)
            blogA.textContent = "here"
            blogP.textContent = (`Check out ${user.first_name}'s blog ${blogA}`)
            projectA.target = "_blank"
            blogA.target = "_blank"

            videoIframe.src = embed
            videoIframe.width = "280"
            videoIframe.height = "157.5"
            videoIframe.frameborder = "0"
            videoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            videoIframe.setAttribute('allowFullScreen', '')

            projectA.href = p.project_link
            blogA.href = p.blog_link

            userDisDiv.appendChild(projectDiv)
            projectP.appendChild(projectA)
            blogP.appendChild(blogA)
            projectDiv.appendChild(titleH2)
            projectDiv.appendChild(videoIframe)
            projectDiv.appendChild(projectP)
            projectDiv.appendChild(blogP)

            if (p.user_id === newUser.id) {
                const editBtn = document.createElement('button')

                editBtn.id = `editBtn`
                editBtn.textContent = `Edit`
                projectDiv.appendChild(editBtn)

                editBtn.addEventListener('click', (e) => {
                    e.preventDefault
                    if (e.target.textContent === "Edit") {
                        e.target.textContent = "Save"
                        clearDom()
                        User.renderUserForm(user)
                        Project.renderProjectForm(p)


                    } else if (e.target.textContent === "Save") {
                        e.target.textContent = "Edit"
                        createUser = []
                        createProject = []
                        createProject.push(titleInput.value, videoLinkInput.value, projectLinkInput.value, cohortInput.value, blogLinkInput.value, p.id, newUser.id)
                        createUser.push(newUser.id, firstNameInput.value, lastNameInput.value, emailInput.value, githubInput.value, linkdnInput.value, facebookInput.value, twitterInput.value, redditInput.value, youtubeInput.value)
                        updatedUser = new User(createUser)
                        updatedUserProject = new Project(createProject)
                        Fetch.editUserProject(updatedUser, updatedUserProject)

                    }
                })
            }
        })
    })
}



document.addEventListener("DOMContentLoaded", () => {

    Fetch.fetchUsers()
    render()
})