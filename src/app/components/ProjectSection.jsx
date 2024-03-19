"use client";
import React,{useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id:1,
        title:"React Portfolio Website",
        description :"Project 1 description",
        image:"/images/project1.jpg",
        tag:["All" ,"Web"],
        gitUrl: "/",
        previewUrl:"/"
    },
    {
        id:2,
        title: "Potography Portfolio Website",
        descripiton: "Project 2 descripiton",
        image:"/images/project2.jpg",
        tag:["All","Web"],
        gitUrl: "/",
        previewUrl:"/"
    },
    {
        id:3,
        title: "E-Commerce Application",
        description:"Project 3 descripiton",
        image:"/images/project3.jpg",
        tag:["All","Mobile"],
        gitUrl: "/",
        previewUrl:"/"
    },
    {
        id:4,
        title: "E-Commerce Application",
        description:"Project 4 descripiton",
        image:"/images/project4.jpg",
        tag:["All","Mobile"],
        gitUrl: "/",
        previewUrl:"/"
    },
    {
        id:5,
        title: "E-Commerce Application",
        description:"Project 5 descripiton",
        image:"/images/project5.jpg",
        tag:["All","Web"],
        gitUrl: "/",
        previewUrl:"/"
    },
    {
        id:6,
        title: "E-Commerce Application",
        description:"Project 6 descripiton",
        image:"/images/project6.jpg",
        tag:["All","Mobile"],
        gitUrl: "/",
        previewUrl:"/"
    }
]

const ProjectsSection = () => {
const [tag,setTag] = useState("All");

const handleTagChange = (newTag) => {
    setTag(newTag);
};
const filteredProjects = projectsData.filter((project)=>
    project.tag.includes(tag)
);

  return (
    <div id="project">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}/>
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"}/>
            <ProjectTag 
                onClick={handleTagChange} 
                name="Mobile" 
                isSelected={tag === "Mobile"}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=>(
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
            />))}
        </div>
    </div>
  )
}

export default ProjectsSection;

