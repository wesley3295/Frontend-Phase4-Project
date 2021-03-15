class Project {
    static all = []

    constructor([title, video_link, project_link, cohort, blog_link, id, user_id]) {
        this.title = title;
        this.video_link = video_link;
        this.project_link = project_link;
        this.cohort = cohort;
        this.blog_link = blog_link;
        this.user_id = user_id;
        this.id = id;

    }
    save() {
        Project.all.push(this)
    }

    static renderProjectForm = (project = undefined) => {

        if (project === undefined) {
            clearDom()
            usersDiv.innerHTML = ""
        }
        projectChildDiv = document.createElement('div')
        projectHeader = document.createElement("h3")
        titleInput = document.createElement("input")
        videoLinkInput = document.createElement("input")
        projectLinkInput = document.createElement("input")
        cohortInput = document.createElement("input")
        blogLinkInput = document.createElement("input")
        const submit = document.createElement("button")

        projectHeader.innerHTML = "Project"
        submit.innerHTML = "Post Project"

        titleInput.placeholder = "Title"
        projectLinkInput.placeholder = "Project Link"
        videoLinkInput.placeholder = "Video Link"
        cohortInput.placeholder = "Cohort"
        blogLinkInput.placeholder = "Blog Link"

        projectLinkInput.type = "url"
        videoLinkInput.type = "url"
        blogLinkInput.type = "url"


        formDiv.appendChild(projectChildDiv)
        projectChildDiv.appendChild(projectHeader)
        projectChildDiv.appendChild(titleInput)
        projectChildDiv.appendChild(projectLinkInput)
        projectChildDiv.appendChild(videoLinkInput)
        projectChildDiv.appendChild(cohortInput)
        projectChildDiv.appendChild(blogLinkInput)
        projectChildDiv.appendChild(submit)

        if (project) {
            projectHeader.innerHTML = "Edit Project"
            submit.hidden = true

            titleInput.value = project.title
            projectLinkInput.value = project.project_link
            videoLinkInput.value = project.video_link
            cohortInput.value = project.cohort
            blogLinkInput.value = project.blog_link
            // 
            formDiv.removeChild(projectChildDiv)
            for (const c of usersDiv.children) {
                for (const x of c.children) {
                    if (x.id === `project-${project.id}`) {
                        document.getElementById(`project-${project.id}`).appendChild(userChildDiv)
                        document.getElementById(`project-${project.id}`).appendChild(projectChildDiv)
                    }
                }
            }
        }

        submit.addEventListener("click", (e) => {
            e.preventDefault()

            if (project === undefined) {
                createProject = []
                createProject.push(titleInput.value, videoLinkInput.value, projectLinkInput.value, cohortInput.value, blogLinkInput.value, undefined, newUser.id)
                newProject = new Project(createProject)
                Fetch.createProject(newProject)
            }

        })
    }

}