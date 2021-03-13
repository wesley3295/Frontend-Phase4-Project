class Fetch {
  constructor(url) {
    this.url = url
  }





  fetchUsers() {
    fetch(this.url)
      .then(resp => resp.json())
      .then(function (json) {

        if (User.all.length === 0) {
          let apiUser;
          let u;
          for (let i = 0; i < json.included.length; i++) {
            if (i < json.data.length) {
              apiUser = json.data[i].attributes
              u = new User([apiUser.first_name, apiUser.last_name, apiUser.email, apiUser.github, apiUser.linkdn, apiUser.facebook, apiUser.twitter, apiUser.reddit, apiUser.youtube], apiUser.id)
              u.save()
            }
            let pro = json.included[i].attributes
            let p = new Project([pro.title, pro.video_link, pro.project_link, pro.cohort, pro.blog_link], pro.user_id, pro.id)
            p.save()
            if (u) {
              if (u.projects === undefined) {
                u.projects = []
              }
              if (u.id != p.user_id) {
                User.all.find(user => p.user_id === user.id).projects.push(p)
              } else if (u.id === p.user_id) { u.projects.push(p) }
            }
          }
        } else {
          for (const apiUser of json.data) {
            let exsistingUser = User.all.find(user => user.id === apiUser.attributes.id)
            if (exsistingUser.projects.length != apiUser.relationships.projects.length) {
              for (const x of json.included) {
                if (x.attributes.user_id === exsistingUser.id) {
                  if (exsistingUser.projects.find(p => p.id === x.attributes.id) === undefined) {
                    let a = new Project([x.attributes.title, x.attributes.video_link, x.attributes.project_link, x.attributes.cohort, x.attributes.blog_link], x.attributes.user_id, x.attributes.id)
                    exsistingUser.projects.push(a)
                  } else if (exsistingUser.projects.find(p => p.id === x.attributes.id) != undefined) {
                    exsistingUser.projects[exsistingUser.projects.indexOf(exsistingUser.projects.find(p => p.id === x.attributes.id))] = new Project([x.attributes.title, x.attributes.video_link, x.attributes.project_link, x.attributes.cohort, x.attributes.blog_link], x.attributes.user_id, x.attributes.id)
                  }
                }
              }
            }

          }
        }

      })
  }
  // creates user in api
  createUser(user) {
    fetch(this.url, {
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
        document.getElementById(`user_form`).innerHTML = ""
        renderProjectForm()
      })
  }
  //creates project in api
  createProject(project) {

    fetch(this.url, {
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

        if (newUser.projects != undefined) {
          newProject.id = object.id
          newProject.user_id = newUser.id
          newUser.projects.push(newProject)
          document.getElementById(`project_form`).innerHTML = ""
          render()
        } else {
          newProject.id = object.id
          newProject.user_id = newUser.id
          newUser.projects = []
          newUser.projects.push(newProject)
          document.getElementById(`project_form`).innerHTML = ""
          render()
        }
      }).catch(function (error) {
        alert(error.message)
      })
  }

  editUserProject(user, project) {
    fetch((this.url + '/' + user.id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
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
            user_id: project.user_id
          }
        }
      })
    })
      .then((response) => {
        return response.json();
      }).then((object) => {

      }).catch(function (error) {
        alert(error.message)
      })
  }
}