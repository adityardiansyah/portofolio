import logoBTX from '../assets/logo_bhs.png'
import logoBMS from '../assets/logobm.png'
import logoTailwind from '../assets/tailwind.png'
import onlinemol from '../assets/projects/onlinemol.png'
import bukalapak from '../assets/projects/bukalapak.png'
import booko from '../assets/projects/booko.png'
import tamia from '../assets/projects/tamia.png'
import webUnivPancasila from '../assets/projects/univpancasila.png'

const linkCv = 'https://drive.google.com/file/d/1AW3ggLDnUodqK9NsBuHU8dLAqbTCBi7-/view?usp=sharing';
const linkGit = 'https://github.com/adityardiansyah';
const linkLinkedin = 'https://www.linkedin.com/in/aditya-ardiansyah/';
const linkEmail = 'mailto:adityasyah.mail@gmail.com';
const linkInstagram = 'https://www.instagram.com/adityasyahcom/';

const workExperience = [
    {
        id: 1,
        company: "PT. BEHAESTEX - Textile Manufacturing",
        jobtitle: "Senior Web Developer",
        startYear: "July 2021",
        endYear: "Present",
        icon: logoBTX,
        iconStyle: "white",
        description: [
            {
                text: "Analyzed systems and databases to create programs that meet the company's needs and enhance operational efficiency."
            },
            {
                text: "Developed programs aligned with the business plans set by management."
            },
            {
                text: "Maintained internal company programs to ensure smooth operations."
            },
            {
                text: "Presented program outcomes to users and provided training to ensure proper use."
            },
            {
                text: "Conducted technology research relevant to the company's needs to support operational efficiency."
            },
        ]
    },
    {
        id: 2,
        company: "PT. BIMASAKTI MULTI SINERGI - Fintech",
        jobtitle: "Full Stack Web Developer",
        startYear: "March 2020",
        endYear: "May 2020",
        icon: logoBMS,
        iconStyle: "white",
        description: [
            {
                text: "Developing Additional Features: I am responsible for designing and implementing additional features to existing programs in the company. The main goal is to support operational growth and ensure the system can accommodate evolving needs."
            },
            {
                text: "Program Maintenance and Repair: I handle the maintenance of the company's internal programs by quickly responding to and fixing bugs or errors that arise. This the company's productivity. action aims to ensure smooth operations and prevent disruptions that can affect"
            }
        ]
    },
    {
        id: 3,
        company: "PT. GEMA SOLUSINDO UTAMA - Software House",
        jobtitle: "Full Stack Web Developer",
        startYear: "Des 2018",
        endYear: "Feb 2020",
        icon: logoTailwind,
        iconStyle: "white",
        description: [
            {
                text: "System and Database Analysis: Conducted system and database analysis to for end users. develop applications or websites tailored to client needs, ensuring optimal usability"
            },
            {
                text: "Program Development: Created and developed programs in alignment with the specified requirements business model designs agreed upon with clients, delivering solutions that meet"
            },
            {
                text: "Client Presentations and User Training: Presented program results to clients and provided training for end users to ensure effective utilization and smooth adoption of the software."
            }
        ]
    },
]

const projects = [
    {
        name: "Onlinemol",
        image: onlinemol,
        url_github: "https://github.com/adityardiansyah/onlinemol-tokped",
        url_demo: "https://onlinemol-tokped.vercel.app/",
        category: "slicing",
        stack: ["HTML","CSS",'Javascript','Jquery']
    },
    {
        name: "Bukalapak",
        image: bukalapak,
        url_github: "https://github.com/adityardiansyah/bukalapak",
        url_demo: "https://bukalapak-landing.vercel.app/",
        category: "slicing",
        stack: ["HTML","CSS",'Javascript','Jquery']
    },
    {
        name: "Website Univ. Pancasila",
        image: webUnivPancasila,
        url_github: "https://github.com/adityardiansyah/web-univ-pancasila",
        url_demo: "https://web-univ-pancasila.vercel.app/",
        category: "slicing",
        stack: ["HTML","CSS",'Javascript','Jquery']
    },
    {
        name: "Tamia",
        image: tamia,
        url_github: "https://github.com/adityardiansyah/tamia",
        url_demo: "https://tabel-kimia-tamia.vercel.app/",
        category: "slicing",
        stack: ["HTML","CSS",'Javascript','Jquery']
    },
    {
        name: "Booko",
        image: booko,
        url_github: "https://github.com/adityardiansyah/booko",
        url_demo: "https://booko-nu.vercel.app/",
        category: "slicing",
        stack: ["HTML","CSS",'Javascript','Jquery']
    },
]

export { workExperience, projects, linkCv, linkGit, linkLinkedin, linkEmail, linkInstagram }