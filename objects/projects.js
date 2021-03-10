class Project{
    static all = []

    constructor([title,video_link,project_link,cohort,blog_link],user_id,id){
        this.title=title;
        this.video_link=video_link;
        this.project_link=project_link;
        this.cohort=cohort;
        this.blog_link=blog_link;
        this.user_id=user_id;
        this.id=id;

    }
    //save
    save(){
        Project.all.push(this)
    }
}