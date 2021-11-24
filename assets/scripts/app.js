const students = [
    ["RAKOTONIRINA Tokinantenaina Mathieu Razokiny", "cv/1/index.html"],
    ["ANDRIANANTOANDRO Ny Anjarasoa Elizafa", "cv/2/index.html"],
    ["ANDRIATIANA Jean-Marie", "cv/3/index.html"],
    ["RAHENINTSOA Maminirina", "cv/4/index.html"],
    ["RAMAROZATOVOMAMPIONONA Tahiana Mahatoky", "cv/5/index.html"],
    ["TSARAMANGA Jeanny Fidelica", "cv/6/index.html"],
    ["RAKOTONDRAINIBE Nirisoa Tendry", "cv/7/index.html"],
    ["TODISOA Nirina Mickaël", "cv/8/index.html"],
    ["RAZAKAHASINA Fanomezana Sarobidy", "cv/9/index.html"],
    ["RAZAFIARISON Mahefaniaina Faly", "cv/10/index.html"],
    ["RAMANGASON Notahiana Erwan", "cv/11/index.html"],
    ["RAVELOSON Hasina Sarobidy", "cv/12/index.html"],
    ["ANDRIAMIADANJATO Mioraniaina", "cv/13/index.html"],
    ["RAZAFINDRAINIBE Rovafifaliana Claudie", "-"],
    ["RANDRIAMANANTENA Manitra Luc", "cv/15/index.html"],
    ["ANDRIAMANAJA Tiana Kaleba", "cv/16/index.html"],
    ["RANAIVOARISON Harena Finaritra", "cv/17/index.html"],
    ["RASOLOFONIAINA Filamatra Manampy Fanantenana", "cv/18/index.html"],
    ["MIHARISOA Tojoniaina Patrick", "cv/19/index.html"],
    ["ANDRIANARIVONY Harijaona Fanirintsoa", "cv/20/index.html"],
    ["RAZAFINDRAKOTONJATOVO ZO Anjatiana Henitsoa Kokoly", "cv/21/index.html"],
    ["ANDRIATSALAMA Fiononantsoa Jaofera", "cv/22/index.html"],
    ["RANDRIANARISON Diarintsoa Fandresena No Herijaona", "cv/23/index.html"],
    ["NDIMBIARISOA Valdo Tsiaro Hasina", "cv/24/index.html"],
    ["RAZAFITSALAMA Tsiorimbola Marius", "cv/25/index.html"],
    ["RATSIMBA Ranto Sarobidy", "-"],
];

const list = document.querySelector('main ul');

function ItemComponent(student) {
    const className = student[1] === "-" ? `class="disabled"` : null;
    return `<li ${className}>
        ${student[0]}
        <a href="${student[1]}" target="_blank">
            <img id="f" title="visiter ?" alt="f" src="./assets/images/forward.png" />
        </a>
    </li>`
}

students.forEach(student => {
    list.innerHTML += ItemComponent(student);
})
