// Udskriver alle overskrifter i services i konsollen
services.forEach(service => console.log(service.headline));

// Opretter en hero-section dynamisk
function createHeroSection(hero) {
    let section = document.createElement("section");
    section.classList.add("hero");

    let img = document.createElement("img");
    img.src = hero.image;
    img.alt = "Hero image";

    let h1 = document.createElement("h1");

    // Erstat "save your time" med et span for at ændre farven
    h1.innerHTML = hero.headline.replace(
        "save your time",
        '<span style="color: #F78065;">save your time</span>'
    );

    let p = document.createElement("p");
    p.textContent = hero.copy;

    let icon = document.createElement("img");
    icon.src = hero.icon;
    icon.alt = "Hero icon";

    section.appendChild(img);
    section.appendChild(h1);
    section.appendChild(p);
    section.appendChild(icon);

    document.body.appendChild(section);
}

// Opretter en service-section dynamisk
function createServiceSection(services) {
    let section = document.createElement("section");
    section.classList.add("services");

    services.forEach(service => {
        let article = document.createElement("article");
        article.classList.add("service");

        let img = document.createElement("img");
        img.src = service.illustration;
        img.alt = "Service illustration";

        let h2 = document.createElement("h2");
        h2.textContent = service.headline;
        h2.classList.add("service_h2");

        let p = document.createElement("p");
        p.textContent = service.text;

        let a = document.createElement("a");
        a.href = "#";
        a.textContent = service.linktext;

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


    facilities.forEach(facility => {
        let article = document.createElement("article");
        article.classList.add("facility");

        let img = document.createElement("img");
        img.src = facility.illustration;
        img.alt = "Facility illustration";

        let h2 = document.createElement("h2");
        h2.textContent = facility.headline;
        h2.classList.add("service_h2");

        let p = document.createElement("p");
        p.textContent = facility.text;

        let a = document.createElement("a");
        a.href = "#";
        a.textContent = facility.linktext;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(a);

        section.appendChild(article);
    });

    document.body.appendChild(section);
}

// Opretter en sites-section dynamisk
function createSitesSection(sites) {
    let section = document.createElement("section");
    section.classList.add("sites");

    sites.forEach(site => {
        let article = document.createElement("article");
        article.classList.add("site");

        let img = document.createElement("img");
        img.src = site.illustration;
        img.alt = "Site illustration";

        let h2 = document.createElement("h2");
        h2.textContent = site.headline;
        h2.classList.add("service_h2");

        let p = document.createElement("p");
        p.textContent = site.text;

        let a = document.createElement("a");
        a.href = "#";
        a.textContent = site.linktext;

        article.appendChild(img);
        article.appendChild(h2);
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

    advantages.forEach(advantage => {
        let article = document.createElement("article");
        article.classList.add("advantage");

        let img = document.createElement("img");
        img.src = advantage.illustration;
        img.alt = "Advantage illustration";

        let h2 = document.createElement("h2");
        h2.textContent = advantage.headline;
        h2.classList.add("service_h2");

        let p = document.createElement("p");
        p.textContent = advantage.text;

        let a = document.createElement("a");
        a.href = "#";
        a.textContent = advantage.linktext;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(a);

        section.appendChild(article);
    });

    document.body.appendChild(section);
}

// Kald funktionerne for at generere indholdet
document.addEventListener("DOMContentLoaded", function() {
    createHeroSection(hero);
    createServiceSection(services);
    createFacilitySection(facilities);
    createSiteSection(sites);
    createAdvantagesSection(advantages);
});
