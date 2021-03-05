class Fetch{
constructor(url){
    this.url = url
}

fetchProjects() {
    fetch(this.url)
    .then(resp => resp.json())
    .then(json => renderProjects(json));
  console.log(json)
  }

fetchUsers() {
    fetch(this.url)
    .then(resp => resp.json())
    .then(json => renderUser(json));
  console.log(json)
  }

  createUser(user){
    // const [firstName,lastName,email,github,linkdn,facebook,twitter,reddit,youtube] = user
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

    document.getElementById(`user_form`).innerHTML = ""
    renderProjectForm()
}).catch(function(error){
    alert(error.message)
})
}

  renderUser(data){
      
  }

  renderProjects(data){

  }
}