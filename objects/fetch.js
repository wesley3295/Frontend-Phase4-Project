class Fetch{
constructor(url){
    this.url = url
}

// fetchProjects() {
//     fetch(this.url)
//     .then(resp => resp.json())
//     .then(json => render(json));
//   console.log(json)
//   }
  

  fetchUsers() {
    fetch(this.url)
    .then(resp => resp.json())
    .then(function(json){
      // console.log(json)
      if(User.all.length === 0){
        for(let i=0;i<json.data.length;i++){
          const apiUser = json.data[i].attributes
          const pro = json.included[i].attributes
          
        let u =new User([apiUser.first_name,apiUser.last_name,apiUser.email,apiUser.github,apiUser.linkdn,apiUser.facebook,apiUser.twitter,apiUser.reddit,apiUser.youtube],apiUser.id)
        let p =new Project([pro.title,pro.video_link,pro.project_link,pro.cohort,pro.blog_link],apiUser.id,pro.id)
        p.save()
        u.save()
        u.project = p
        
      }
        }
            
  })
}
// creates user in api
  createUser(user){
      fetch(this.url,{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({user})
  })
  .then((response)=>{
    return response.json();
  }).then((object)=>{
    
    newUser.id = object.id
    newUser.save()
    document.getElementById(`user_form`).innerHTML = ""
    renderProjectForm()
})
}
//creates project in api
  createProject(project){
    
      fetch(this.url,{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({project})
  })
  .then((response)=>{
    return response.json();
  }).then((object)=>{
    newProject.id = object.id
    newProject.user_id = newUser.id
    newUser.project = newProject
    document.getElementById(`project_form`).innerHTML = ""
    render()
}).catch(function(error){
    alert(error.message)
})
}
//   editUserProject(obj){
//       fetch(this.url,{
//     method: "POST",
//     headers:{
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({project})
//   })
//   .then((response)=>{
//     return response.json();
//   }).then((object)=>{
//     newProject.id = object.id
//     newProject.user_id = newUser.id
//     newUser.project= newProject
//     document.getElementById(`project_form`).innerHTML = ""
//     render()
// }).catch(function(error){
//     alert(error.message)
// })
// }

// methHeadBody = (object)=>{
// return {method: "POST",
//   headers:{
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//   },
//   body: JSON.stringify({object})
// }
// }
}