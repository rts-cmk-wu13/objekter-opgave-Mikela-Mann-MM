// Udskriver alle overskrifter i services i konsollen
services.forEach((service) => console.log(service.headline));

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

    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("hero_button_content");

    let button = document.createElement("a");
    button.textContent = "Explore";
    button.classList.add("hero_button");

    button.innerHTML = `
    <button>${hero.icon, "Explore"}</button>
    `

    let icon = document.createElement("img");
    icon.src = hero.icon;
    icon.alt = "Hero icon";
    icon.classList.add("icon");

    // Tilføj elementer til buttonDiv
    buttonDiv.appendChild(icon);
    buttonDiv.appendChild(button);

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

    let headline = document.createElement("h2");
    headline.classList.add("facility_headline");
    headline.textContent = facilities.headline;

    section.append(headline);

    facilities.options.forEach((option) => {
        let article = document.createElement("article");
        article.classList.add("facility");

        let img = document.createElement("img");
        img.src = option.icon;
        img.alt = "Facility icon";
        img.classList.add("icon");

        let h2 = document.createElement("h2");
        h2.textContent = option.headline;
        h2.classList.add("facility_h2");

        let p = document.createElement("p");
        p.textContent = option.text;

        let a = document.createElement("a");
        a.href = "#";
        a.textContent = option.linktext;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(a);

        section.appendChild(article);
    });

    document.body.appendChild(section);
}

// Opretter en sites-section dynamisk
function createSiteSection(site) {
    let section = document.createElement("section");
    section.classList.add("sites");

    sites.places.forEach((site) => {
        let article = document.createElement("article");
        article.classList.add("site");

        let img = document.createElement("img");
        img.src = site.img;
        img.alt = "Site images";
        img.classList.add("site_img");

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

    let headline = document.createElement("h2");
    headline.classList.add("advantage_headline");
    headline.textContent = advantages.headline;

    section.append(headline);

    advantages.forEach((advantage) => {
        let article = document.createElement("article");
        article.classList.add("advantage");

        let img = document.createElement("img");
        img.src = advantage.icon;
        img.alt = "Advantage icons";
        img.classList.add("icon");

        let h2 = document.createElement("h2");
        h2.textContent = advantages.headline;
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
document.addEventListener("DOMContentLoaded", function () {
    createHeroSection(hero);
    createServiceSection(services);
    createFacilitySection(facilities);
    createSiteSection(sites);
    createAdvantagesSection(advantages);
});
