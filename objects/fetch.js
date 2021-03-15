class Fetch {
  constructor(url) {
    this.url = url
  }

  static userUrl = 'http://localhost:3000/users'
  static projectUrl = 'http://localhost:3000/projects'

  static fetchUsers() {
    fetch(Fetch.userUrl)
      .then(resp => resp.json())
      .then(function (json) {
        json.data.forEach(user => {
          if (!(User.all.find(u => u.id === user.attributes.id))) {
            const apiUser = Object.values(user.attributes)
            new User(apiUser).save()
          }
        })

        json.included.forEach(project => {
          if (!(Project.all.find(p => p.id === project.attributes.id))) {
            const apiProject = Object.values(project.attributes)
            new Project(apiProject).save()
          }
        })

        User.all.forEach(user => {
          let projectsArray = Project.all.filter(p => p.user_id === user.id)
          projectsArray.forEach(pro => {
            user.projects.push(pro)
          })
        })

      })
  }
  // creates user in api
  static createUser(user) {
    fetch(Fetch.userUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then((response) => {
        return response.json();
      }).then((object) => {
        newUser.id = object.id
        newUser.save()
        clearDom()
        Project.renderProjectForm()
      })
  }
  //creates project in api
  static createProject(project) {
    fetch(Fetch.projectUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ project })
    })
      .then((response) => {
        return response.json();
      }).then((object) => {
        newProject.id = object.id
        newProject.save()
        newUser.projects.push(newProject)
        clearDom()
        render()
      }).catch(function (error) {
        alert(error.message)
      })
  }

  static editUserProject(user, project) {
    let strongParams = {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        github: user.github,
        linkdn: user.linkdn,
        facebook: user.facebook,
        twitter: user.twitter,
        reddit: user.reddit,
        youtube: user.youtube,
        projects_attributes: {
          title: project.title,
          video_link: project.video_link,
          project_link: project.project_link,
          cohort: project.cohort,
          blog_link: project.blog_link,
          id: project.id,
        }
      }
    }
    const configObj = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(strongParams)
    }

    fetch(`${Fetch.userUrl}/${user.id}`, configObj)
      .then(r => r.json())
      .then(json => {

        const userAllObject = User.all.find(u => u.id === json.data.attributes.id)
        const userAllIndex = User.all.indexOf(userAllObject)
        User.all[userAllIndex] = new User(Object.values(json.data.attributes))

        for (const apiPro of json.included) {
          const projectAllObject = Project.all.find(x => x.id === apiPro.attributes.id);
          const projectAllIndex = Project.all.indexOf(projectAllObject)

          Project.all[projectAllIndex] = new Project(Object.values(apiPro.attributes))

          User.all[userAllIndex].projects.push(Project.all[projectAllIndex])
        }
        newUser = User.all[userAllIndex]
        clearDom()
        render()
      }).catch(function (error) {
        alert(error.message)
      })
  }



}