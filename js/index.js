// Udskriver alle overskrifter i services i konsollen
// services.forEach((service) => console.log(service.headline));

// Opretter en hero-section dynamisk
function createHeroSection(hero) {
    let section = document.createElement("section");
    section.classList.add("hero");

    let img = document.createElement("img");
    img.src = hero.image;
    img.alt = "Hero image";

    // Opretter en div til hero-indholdet
    let contentDiv = document.createElement("div");
    contentDiv.classList.add("hero-content");

    let h1 = document.createElement("h1");

    // Erstat "save your time" med et span for at ændre farven
    h1.innerHTML = hero.headline.replace(
        "save your time",
        '<span style="color: #F78065;">save your time</span>'
    );

    let p = document.createElement("p");
    p.textContent = hero.copy;
    p.classList.add("hero_p");

    let button = document.createElement("a");
    button.classList.add("hero_button");

    button.innerHTML = `
    <img src="${hero.icon}" class="icon" alt="Hero icon" /> Explore
`;


    // Tilføj elementer til contentDiv
    contentDiv.appendChild(h1);
    contentDiv.appendChild(p);
    contentDiv.appendChild(button);

    section.appendChild(img);
    section.appendChild(contentDiv);

    document.body.appendChild(section);
}

// Opretter en service-section dynamisk
function createServiceSection(services) {
    let section = document.createElement("section");
    section.classList.add("services");

    services.forEach((service) => {
        let article = document.createElement("article");
        article.classList.add("service");

        let img = document.createElement("img");
        img.src = service.illustration;
        img.alt = "Service illustration";

        let h2 = document.createElement("h3");
        h2.textContent = service.headline;
        h2.classList.add("service_h3");

        let p = document.createElement("p");
        p.textContent = service.text;
        p.classList.add("service_text");

        let a = document.createElement("a");
        a.href = "#";
        a.textContent = service.linktext;
        a.classList.add("service_linktext");

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(a);

        section.appendChild(article);
    });

    document.body.appendChild(section);
}

// Opretter en facility-section dynamisk
function createFacilitySection(facilities) {
    let section = document.createElement("section");
    section.classList.add("facilities");

    let headline = document.createElement("h2");
    headline.classList.add("facility_headline", "facilities_h2");
    headline.textContent = facilities.headline;
    section.appendChild(headline);

    // Opretter en wrapper til alle facilities
    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("facility-wrapper");
    section.appendChild(wrapperDiv);

    facilities.options.forEach((option) => {
        let article = document.createElement("article");
        article.classList.add("facility");

        // Opretter en div til hvert facility's indhold
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("facility-content");

        let img = document.createElement("img");
        img.src = option.icon;
        img.alt = "Facility icon";
        img.classList.add("icon", "facility_icon");

        let h3 = document.createElement("h3");
        h3.textContent = option.headline;
        h3.classList.add("facility_h3");

        let p = document.createElement("p");
        p.textContent = option.text;

        let a = document.createElement("a");
        a.href = "#";
        a.textContent = option.linktext;
        a.classList.add("facility_linktext");

        // Tilføjer elementerne til contentDiv
        contentDiv.appendChild(img);
        contentDiv.appendChild(h3);
        contentDiv.appendChild(p);
        contentDiv.appendChild(a);

        // Tilføjer contentDiv til article
        article.appendChild(contentDiv);

        // Tilføjer article til wrapperDiv
        wrapperDiv.appendChild(article);
    });

    // Tilføjer hele sektionen til dokumentet
    document.body.appendChild(section);
}

// Opretter en sites-section dynamisk
function createSiteSection(sites) {
    let section = document.createElement("section");
    section.classList.add("sites");


    let contentDiv = document.createElement("div");
    contentDiv.classList.add("sites-content");

    let h2 = document.createElement("h2");
    h2.textContent = sites.headline;
    h2.classList.add("sites_h2");

    let p = document.createElement("p");
    p.textContent = sites.text;
    p.classList.add("sites_p");

    let button = document.createElement("a");
    button.classList.add("sites_button");

    button.innerHTML = `
    <img src="${sites.btnicon}" class="icon" alt="Site icon" /> Start
`;


    // Tilføj elementer til contentDiv
    contentDiv.appendChild(h2);
    contentDiv.appendChild(p);
    contentDiv.appendChild(button);

    section.appendChild(contentDiv);

    sites.places.forEach((site) => {
        let article = document.createElement("article");
        article.classList.add("site");

        let img = document.createElement("img");
        img.src = site.img;
        img.alt = "Site images";
        img.classList.add("site_img");

        let h3 = document.createElement("h3");
        h3.textContent = site.name;
        h3.classList.add("site_h3");

        let p = document.createElement("p");
        p.textContent = site.city;
        p.classList.add("site_p");

        let a = document.createElement("a");
        a.href = "#";
        a.textContent = site.linktext;
        a.classList.add("site_linktext");

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(a);

        section.appendChild(article);
    });

    document.body.appendChild(section);
}

// Opretter en advantages-section dynamisk
function createAdvantagesSection(advantages) {
    let section = document.createElement("section");
    section.classList.add("advantages");

    let headline = document.createElement("h2");
    headline.classList.add("advantage_headline");
    headline.textContent = advantages.headline;
    section.appendChild(headline);

    // Opretter en wrapper til alle advantages
    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("advantages-wrapper");
    section.appendChild(wrapperDiv);

    advantages.offers.forEach((advantage) => {
        let article = document.createElement("article");
        article.classList.add("advantage");

        // Opretter en div til hvert advantage's indhold
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("advantage-content");

        let img = document.createElement("img");
        img.src = advantage.icon;  // Corrected to "advantage.icon"
        img.alt = "Advantage icons";
        img.classList.add("icon");

        let h3 = document.createElement("h3");
        h3.textContent = advantage.headline;  // Corrected to "advantage.headline"
        h3.classList.add("advantages_h3");

        let p = document.createElement("p");
        p.textContent = advantage.text;  // Corrected to "advantage.text"

        contentDiv.appendChild(img);
        contentDiv.appendChild(h3);
        contentDiv.appendChild(p);

        article.appendChild(contentDiv);

        wrapper.appendChild(article);
    });

    document.body.appendChild(section);
}


function createFooterSection(footer) {
    let section = document.createElement("footer");

    footer.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("footer-section");

        let h3 = document.createElement("h3");
        h3.textContent = item.headline;
        div.appendChild(h3);

        if (item.submenu) {
            let ul = document.createElement("ul");
            item.submenu.forEach((link) => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.href = "#";
                a.textContent = link.linktext;
                li.appendChild(a);
                ul.appendChild(li);
            });
            div.appendChild(ul);
        }

        if (item.footermenu) {
            let ul = document.createElement("ul");
            item.footermenu.forEach((link) => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.href = "#";
                a.textContent = link.linktext || link.text;
                li.appendChild(a);
                ul.appendChild(li);
            });
            div.appendChild(ul);
        }

        section.appendChild(div);
    });

    document.body.appendChild(section);
}



// Kald funktionerne for at generere indholdet
document.addEventListener("DOMContentLoaded", function () {
    createHeroSection(hero);
    createServiceSection(services);
    createFacilitySection(facilities);
    createSiteSection(sites);
    createAdvantagesSection(advantages);
    createFooterSection(footer);
});
