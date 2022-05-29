import shop from './../images/surelys-variedades-project.png';
import portfolio from './../images/portfolio-projec.png';

const projects = [
    {
        name: "Surelys Variedades Shop",
        description: `This ecommerce project was the most excided and challenging one I've 
        built, this project has been 
        built with ReactJS for front-end and NodeJS for the back-end, supported with different 
        dependencies such as express and mongoose`,
        github: "https://github.com/GeorgeDevelops/Surelys-Variedades",
        url: "https://surelys-variedades-shop.web.app/",
        imageUrl: shop
    },
    {
        name: "My portfolio",
        description: `This portfolio has been built only using ReactJS.`,
        github: "https://github.com/GeorgeDevelops/GeorgeDevelops",
        url: "https://george-develops-5ad4f.web.app/",
        imageUrl: portfolio
    }
];

function getProjects(){
    return projects;
}

export default getProjects;