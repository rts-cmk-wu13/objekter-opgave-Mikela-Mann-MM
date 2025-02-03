// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
//services.forEach(service => console.log(service.headline))

// Opretter en hero-sektion dynamisk
function createHeroSection(hero) {
    let section = document.createElement("section");
    section.classList.add("hero");
    
    let img = document.createElement("img");
    img.src = hero.image;
    img.alt = "Hero image";
    
    let h1 = document.createElement("h1");
    h1.textContent = hero.headline;
    
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

// Opretter en service-sektion dynamisk
function createServiceSection(services) {
    let section = document.createElement("section");
    section.classList.add("services");
    
    services.forEach(service => {
        let div = document.createElement("div");
        div.classList.add("service");
        
        let img = document.createElement("img");
        img.src = service.illustration;
        img.alt = "Service illustration";
        
        let h2 = document.createElement("h2");
        h2.textContent = service.headline;
        
        let p = document.createElement("p");
        p.textContent = service.text;
        
        let a = document.createElement("a");
        a.href = "#";
        a.textContent = service.linktext;
        
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(a);
        
        section.appendChild(div);
    });
    
    document.body.appendChild(section);
}

// Kald funktionerne for at generere indholdet
document.addEventListener("DOMContentLoaded", function() {
    createHeroSection(hero);
    createServiceSection(services);
});

