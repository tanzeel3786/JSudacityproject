/*
This is empty on purpose! Your code to build the resume will go here.
 */



var work={

    "jobs":[{
        "employer":"Planet Expressso",
        "title":" Agent",
        "dates":"Jan 21 -Futuree",
        "description":"This is my first job Description",
    },
    {
        "employer":"Pizza hut",
        "title":"Delivery boy",
        "dates":"Jan 23 -Futuree",
        "description":"This is my second Job Description",
    },
    {
        "employer":"Dominos",
        "title":" Delivery boy part 2",
        "dates":"Jan 25 -Futuree",
        "description":"This is my Third Job description",
    }
]
}

var education={
    "schools":[{
        "name":"DAV School",
        "location":"India",
        "degree":"Bahelors",
        "majors":["English","Computer","Biology"],
        "dates":"2025",
        "url":"myUrl@url.com",
    },
    {
       "name":"DBMS School",
       "location":"North America",
       "degree":"Masters",
       "majors":["English","Physics","Science"],
       "dates":"2022",
       "url":"myUrl@url.com",
   }],
   "onlineCourses":[{
       "title":"Web Dev course",
       "school":"Udemy",
       "date":"2025",
       "url":"myurl@url.com",
   },{
       "title":"Android Dev course",
       "school":"FreecodeCamp",
       "date":"2026",
       "url":"myurl@url.com",
   }],
}

var projects={
    "projects":[{
        "title":"first project",
        "dates":"25 January-28 Febuary",
        "description":"Descrip of First project",
        "images":["https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80","https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"],
    },
    {
       "title":"Second project",
       "dates":"15 January-15 Febuary",
       "description":"Descrip of Second project",
       "images":["https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80","https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"],
   }],
}

var bio={
    "name":"Tanzeel Khan",
    "role":"Intern",
    "contacts":{
        "mobile":"7846474766",
        "email":"myemail@gmail.com",
        "github":"mygit@github.com",
        "twitter":"mytweet@tweet.com",
        "blog":"my first blog",
        "location":"Jharkhand",
    },
    "welcomeMessage":"Hi Welcome",
    "skills":["java","web dev","Android","Scala"],
    "biopic":"mybiopic@url.com",
}

if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    var fs=HTMLskills.replace("%data%",bio.skills[0]);

    $("#skills").append(fs);
     fs=HTMLskills.replace("%data%",bio.skills[1]);

    $("#skills").append(fs);
     fs=HTMLskills.replace("%data%",bio.skills[2]);

    $("#skills").append(fs);
     fs=HTMLskills.replace("%data%",bio.skills[3]);

    $("#skills").append(fs);
  

}

function inName(name){
    name=name.trim();
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase();
    name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];

}

$('#main').append(internationalizeButton);


function displaybio(){
    
       

        var hname=HTMLheaderName.replace("%data%",bio.name)
        var welmsg=HTMLwelcomeMsg .replace("%data%",bio.welcomeMessage); 
        var total=hname+welmsg;
        $("#header").prepend(total);

       
        


         var congen=HTMLmobile.replace("%data%",bio.contacts.mobile); 
         $("#topContacts:last").append(congen);
         var email=HTMLemail .replace("%data%",bio.contacts.email); 
         $("#topContacts:last").append(email);
         var twe=HTMLtwitter.replace("%data%",bio.contacts.github); 
         $("#topContacts:last").append(twe);
         var git=HTMLgithub.replace("%data%",bio.contacts.twitter); 
         $("#topContacts:last").append(git);
        //  var blo=HTMLblog.replace("%data%",bio.contacts.blog); 
        //  $("#topContacts:last").append(blo);
       

       
         
        
           
        
       
         $("#header").append(HTMLbioPic );


         
    
}

function displayWork()
{
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var fe=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        
        var ft=HTMLworkTitle.replace("%data%",work.jobs[job].title);
         
        var fet=fe+ft;
        $(".work-entry:last").append(fet);

        var fd=HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(fd);

        var fdes=HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(fdes);
    }
}

function displayProject(){
    $('#projects').append(HTMLprojectStart);
    for(project in projects.projects){
       
        
        var fortitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(fortitle);

        var fordates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(fordates);

        var fordes=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(fordes);

        if(projects.projects[project].images.length>0)
        {
            for(image in projects.projects[project].images){
                var forimg=HTMLprojectImage.replace("%data%",projects.projects[project].image);

        $(".project-entry:last").append(forimg);
            }
        }
    }
}

function educationdetails(){
    $("#education").append(HTMLschoolStart );

    for(edu in education.schools){
        var sn=HTMLschoolName.replace("%data%",education.schools[edu].name);
        var deg=HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
       
        var tot=sn+deg;
        $(".education-entry:last").append(tot);

        var year=HTMLschoolDates.replace("%data%",education.schools[edu].dates);
        $(".education-entry:last").append(year);

        var maj=HTMLschoolMajor.replace("%data%",education.schools[edu].majors);
        $(".education-entry:last").append(maj);
    }

    $("#education").append(HTMLonlineClasses );

    for(onclass in education.onlineCourses){
        var title=HTMLonlineTitle .replace("%data%",education.onlineCourses[onclass].title);
        var clg=HTMLonlineSchool.replace("%data%",education.onlineCourses[onclass].school);
       
        var tot=title+clg;
         $(".education-entry:last").append(tot);

        var year=HTMLonlineDates.replace("%data%",education.onlineCourses[onclass].date);
        $(".education-entry:last").append(year);

        // var maj=HTMLschoolMajor.replace("%data%",education.schools[edu].majors);
        // $(".education-entry:last").append(maj);
    }
    
}
displaybio();
displayWork();
displayProject();
educationdetails();

