const projects = [
    {
        name: "E-commerce Website",
        description: "An online shopping platform for users to browse and purchase products.",
        technologyUsed: ["React","Node.js","MongoDB","Express"],
        year: 2024



    },
    {
        name: "Chat Application",
        description: "A real-time chat application with user authentication.",
        technologyUsed: ["Socket.io","Express","React","firebase"],
        year: 2022


    },
    {
        name: "Portifolio Website",
        description: "A personal portifolio website to showcase projects and skills.",
        technologyUsed: ["HTML","CSS","JavaScript"],
        year: 2021
    }
];
//use map to display project details 
projects.map(project => {
             console.log("project name",project.name);
                console.log("description",project.description);
                console.log("technologies used",project.technologyUsed);
                console.log("year",project.year);

                    console.log("------------------------");

}); 