// Helper functie om eenvoudig een call
// te maken naar de runQuery functie van de PHP
// backend. Dit is een wrapper om de code
// overzichtelijker te maken en de code te scheiden
// van de frontend.

// Theorie:

// Doorheen het jaar hebben HTML, CSS, JS en MYSQL gezien.
// Om een dynamische website te maken, hebben we een backend nodig.
// Dit is een server die de data van de database kan ophalen en 
// terugsturen naar de frontend.

// Dit zien we pas volgend jaar. Om deze reden geef ik jullie
// een wrapper functie die de communicatie met de backend
// afhandelt. Eenvoudig gezegd, je stuurt je query door naar de
// backend en je krijgt de data terug in JSON formaat.

// Let op dat dit in de realiteit niet de beste manier is om
// een query te maken vanweg de security. Dit is enkel een
// voorbeeld om de communicatie tussen frontend en backend
// te tonen. In de realiteit zou je dit nooit zo doen.

// STRUCTUUR:
// 1. Je maakt je HTML en CSS aan zoals je dat normaal zou doen.
// Maar je maakt niet voor al je data een aparte HTML pagina aan.
// 2. Je maakt een JS bestand aan waarin je de data ophaalt
//    van de backend via een sql. Dit kan je doen met verschillende manieren.
// 3. De data die je ophaalt van de backend, kan je gebruiken
//    om je HTML aan te passen.

// fetch, ajax, XMLHttpRequest, ... zijn allemaal manieren om data op te halen van de backend.
// Ik gebruik hier jQuery omdat dit een library is die het makkelijker maakt om met JS te werken.

function runQuery(query) {
    
        // Ajax naar conn.php met post name runQuery
        // en de query die we willen uitvoeren.
        // let wel op dat je jQuery moet importeren in je HTML
        // dit kan je doen met een CDN link in je HTML.
        // <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        // DUS ENKEL ALS JE DEZE LINK IN JE HTML PLAATST, DAN KAN JE DEZE FUNCTIE GEBRUIKEN!
        // jQuery is een library die het makkelijker maakt om met JS te werken.
    
        // voorbeeld Ajax:
            var result = "";
            $.ajax({
                type: "POST",
                url: "sql.php",
                data: {sql: query},
                async: false,
                success: function(data){
                    result = JSON.parse(data);
                }
            });
            return result;
        }


    // Stel je wil alles ophalen van de tabel product.
    // Dan kan je dit doen met de runQuery functie.
    // Maar wat dan?

    // Je kan bijvoorbeeld al je producten op het scherm zetten.
    // Denk er steeds aan dat je een array van objecten terugkrijgt.

    // Ik start met een simpele functie dat een product kaartje maakt zonder eigenschappen.

    function createProductCard(product) {
        // Hier kan je de HTML maken van je product kaartje.
        // Dit is een voorbeeld, je kan dit zelf verder uitbreiden.
        // Dit is enkel een voorbeeld om te tonen hoe je de data kan gebruiken.
        // Je kan hier ook een template engine gebruiken zoals Handlebars, Mustache, ...
        // Maar dat is voor later.

        // Ik toon graag 2 manieren:
        // 1. Met strings
        // 2. Met createElement

        // LET OP! De properties van het product object 
        // zijn de kolomnamen zoals je die hebt gedefinieerd in je SQL
        // Als je alias gebruikt in je SQL, dan moet je die ook gebruiken hier.
        let card = `<div class="product-card">`;

        card += `<a href="product.html?id=${product.Pkproduct}">`;

        card += `<h2>${product.Naam}</h2>`;
        card += `<p>${product.Prijs}</p>`;
        card += `<img src="${product.Afbeelding}" alt="${product.naam}"></img>`;
        card += `</a></div>`;

        return card;

        let card2 = document.createElement("div");
        card2.classList.add("product-card");
        let h2 = document.createElement("h2");
        h2.innerHTML = product.naam;
        let p = document.createElement("p");
        p.innerHTML = product.prijs;
        let img = document.createElement("img");
        img.src = product.afbeelding;
        img.alt = product.naam;
        card2.appendChild(h2);
        card2.appendChild(p);
        card2.appendChild(img);
        return card2;

        

    }

    
    