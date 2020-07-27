const jobs = [
    {
        id: 1,
        date: "11/2019 - Present",
        position: "Digital Content Lead",
        company: "Wieck Media",
        description: [
            "Fixed bugs and added website features to production 80% quicker than average by streamlining the ticketing process",
            "Improved the design and function of custom pages by adding CSS/ JS customizations",
            "Achieved a 1-on-1 line of communication for Wordpress clients to provide assistance and maintenance 50% faster",
            "Created custom templates from stage to production 60% quicker by both streamlining the ticketing process and providing customization knowledge others lack"
        ],
        keywords: ["HTML", "CSS", "Debugging", "Design", "Team\xa0Management", "Wordpress", "Custom\xa0Email\xa0Templates", "Problem\xa0Solving"]
    },
    {
        id: 2,
        date: "6/2017 - 11/2019",
        position: "Content Management Specialist",
        company: "Wieck Media",
        description: [
            "1 of 4 employees responsible for updating 15+ websites with releases, social media, images, videos, and graphics",
            "Provide internal and external support with an average 30 min turn around for multiple major car, health, and news corporations, an airline, and others",
            "Informed thousands of people on important corporate news within 30 mins through custom email blasts for 10+ countries/divisions"
        ],
        keywords: ["HTML", "CSS", "Web\xa0Maintenance", "E-blasts", "Multimedia", "Photoshop", "Teamwork"]
    },
    {
        id: 3,
        date: "6/2015 - 12/2015",
        position: "Intern",
        company: "Shoutside Media",
        description: [
            "Built and maintained 3 Wordpress sites for lawyers and doctors",
            "Responsible for recording professional quality commercials and stock footage for 5 local companies",
            "Improved video editing techniques using Adobe Premiere and After Effects"
        ],
        keywords: ["HTML", "CSS", "Wordpress", "Video\xa0shooting/editing", "Photography", "Networking", "Multimedia", "Adobe\xa0Creative\xa0Suite"]
    },
    {
        id: 4,
        date: "07/2011 – 11/2016",
        position: "Customer Service",
        company: "Fast food, Retail, Amusement Park",
        description: [
            "Responsible for handling over $500 a day",
            "Successfully sold 3x more credit cards than the average salesperson",
            "Managed floor inventory and sanitary guidelines",
            "Ensure all safety measures stayed in place to prevent injury"
        ],
        keywords: ["Customer\xa0Service", "Money\xa0Management", "Sales", "Crisis\xa0Management"]
    }
];

const education = [
    {
        id: 1,
        date: "6/2019 – In Progress...",
        degree: "MERN Fullstack Certificate",
        school: "Udemy",
        description: "Focused on React, Node, Express, and MongoDB.",
        keywords: ["HTML", "CSS", "Bootstrap ", "Javascript (ES6)", "jQuery", "Node", "Express", "APIs", "EJS", "SQL", "MongoDB", "Mongoose", "Authentication/Security"],
        
    },
    {
        id: 2,
        date: "8/2012 - 1/2016",
        degree: "B.S. Graphic Communications and Multimedia",
        school: "California University of Pennsylvania",
        description: "Focused on Adobe Creative Suite for web, photography, video, layout, and image manipulation. Learned printing techniques for various mediums.",
        keywords: ["HTML", "CSS", "Photoshop", "Dreamweaver", "Indesign", "Illustrator", "Adobe\xa0Premiere", "Layout", "Graphic\xa0Design", "Screen\xa0Printing", "Lithography", "Flexography"]
    },
    {
        id: 3,
        date: "8/2008 - 5/2012",
        degree: "High School Diploma",
        school: "Penn Hills Senior High School",
        keywords: ["Statistics", "Calculus", "Visual\xa0Basic\xa0Computer\xa0Programming"]
    },
    {
        id: 4,
        date: "8/2018 - Present",
        degree: "Responsive Web Design Certification",
        school: "FreeCodeCamp",
        description: "Self paced path to a Fullstack Developer. Used as supplement material for Udemy course.",
        keywords: ["HTML", "CSS", "Accessability", "ES6", "Bootstrap", "jQuery", "Sass", "React"]
    }
    
];

const services = [
    {
        id: 1,
        image: "fas fa-paint-brush",
        service:"Web Design",
        description: "I value simple content structure, clean design patterns, and thoughtful interactions.",
        subtitle1: "Things I enjoy designing:",
        subDescription1: "UX, UI, Web, Mobile, Apps, Logos",
        subtitle2: "Design Tools:",
        subDescription2: ["Figma", "Pen & Paper", "Sketch", "Webflow"]
    },
    {
        id: 2,
        image: "fas fa-code",
        service:"Web Development",
        description:"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
        subtitle1: "Languages I speak:",
        subDescription1: "HTML, Bootstrap, CSS, Sass, React",
        subtitle2: "Dev Tools:",
        subDescription2: ["Visual Studio Code", "Github", "Bootstrap", "Terminal", "Codepen"]
    },
    {
        id: 3,
        image: "fas fa-camera",
        service:"Photography",
        description:"I enjoy capturing moments that can be kept for a lifetime.",
        subtitle1: "Experiences I draw from:",
        subDescription1: "Traveling, Events, Ceremonies",
        subtitle2: "Photography Tools:",
        subDescription2: ["Photoshop", "Lightroom", "HD Camera"]
    }
];

const portfolio = [
    {
        id: 1,
        image: "https://i.ibb.co/GdGbqrm/zora.jpg",
        title: "Tribute Page",
        description: "Tribute page for a writer I admire named Zora Neale Hurston. Her most famous work is Their Eyes Were Watching God, which was also a movie starring Halle Berry.",
        tech: ["HTML", "CSS"],
        github: "http://www.github.com",
        codepen: "https://www.codepen.io",
        link: "http://www.google.com"
    },
    {
        id: 2,
        image: "https://i.ibb.co/j6TQw5f/office.jpg",
        title: "Random Quote Generator",
        description: "One of my first Javascript projects was this random quote generator. I created it using characters from The Office and their famous quotes.",
        tech: ["HTML", "CSS", "Vanilla Javascript"],
        github: "http://www.github.com",
        codepen: "https://www.codepen.io",
        link: "http://www.google.com"
    },
    {
        id: 3,
        image: "https://i.ibb.co/W3v7t0D/hangman.jpg",
        title: "Hangman",
        description: "Project 3",
        tech: ["Python"],
        github: "http://www.github.com",
        codepen: "https://www.codepen.io",
        link: "http://www.google.com"
    },
    {
        id: 4,
        image: "https://i.ibb.co/xSjbz3B/Nobody-is-better-at-motherhood-than-you-2.jpg",
        title: "E-Card",
        description: "Project 4",
        tech: ["HTML", "CSS", "Javascript"],
        github: "http://www.github.com",
        codepen: "https://www.codepen.io",
        link: "http://www.google.com"
    },
    {
        id: 5,
        image: "https://i.ibb.co/PZNRRGd/saxes.jpg",
        title: "Product Page",
        description: "Project 5",
        tech: ["HTML", "CSS"],
        github: "http://www.github.com",
        codepen: "https://www.codepen.io",
        link: "http://www.google.com"
    },
    {
        id: 6,
        image: "https://i.ibb.co/sHbCGRX/tindog.jpg",
        title: "Landing Page",
        description: "Project 6",
        tech: ["HTML", "CSS", "Bootstrap"],
        github: "http://www.github.com",
        codepen: "https://www.codepen.io",
        link: "http://www.google.com"
    },
];

const pricing = [
    {
        id: 1,
        package: "Basic",
        price: "$150",
        description: "3 page site",
        items: ["Website Audit", "Design", "Development"],
        link: ""
    },
    {
        id: 2,
        package: "Standard",
        price: "$250",
        description: "10 page site",
        items: ["Basic Services", "+ Backups", "+ Analytics", "+ Search Engine Optimization", "+ Content Management"],
        link: ""
    },
    {
        id: 3,
        package: "Premium",
        price: "$500",
        description: "30 page site",
        items: ["Standard Services", "+ Maintenance Agreement", "+ eCommerce", "+ Email Setup", "+ Hosting"],
        link: ""
    },
    {
        id: 4,
        package: "Custom",
        price: "Get Quote",
        description: "Pick and Choose from...",
        items: ["Premium Plan Services", "Logo", "Photography"],
        link: ""
    },
]




export { jobs, education, services, portfolio, pricing };