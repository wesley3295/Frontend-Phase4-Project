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

fetchUser() {
    fetch(this.url)
    .then(resp => resp.json())
    .then(json => renderUser(json));
  console.log(json)
  }

  renderUser(data){
      
  }

  renderProjects(data){

  }
}