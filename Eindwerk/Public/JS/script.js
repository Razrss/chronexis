$(function(){
    $("#nav-placeholder").load("components/navbar.html");
  });

  $(function(){
    $("#head-placeholder").load("components/head.html");
  });

$(function(){
    $("#footer-placeholder").load("components/footer.html");
    });


function openNav() {
    let mobileNav = document.getElementById("navMenu");

    mobileNav.classList.toggle("active");
}



// functie om productkaart te laden en in te vullen met variabelen
// Er zijn meerdere manieren om dit te doen via javascript.
// Je kan dit doen door een string te maken en deze in te vullen met variabelen

// of je kan dit doen door een html element te maken in javascript en deze te vullen met variabelen

function ProductCard(productnaam, prijs, afbeelding, id) {
    let html =` <div class="productCard">
    <h2>${productnaam}</h2>
    <p>Prijs: €${prijs.replace(".",",")}</p>
    <img src="${afbeelding}" alt="Product">
    <a href="product.html?id=${id}">
    <button>Meer info</button>
    </a>
</div>`

return html;
}

function ProductCard2(productnaam, prijs, afbeelding, id) {
    let productCard = document.createElement('div');
    productCard.classList.add('productCard');

    let h2 = document.createElement('h2');
    h2.innerHTML = productnaam;

    let p = document.createElement('p');
    p.innerHTML = `Prijs: €${prijs}`;

    let img = document.createElement('img');
    img.src = afbeelding;
    img.alt = 'Product';
    
    let a = document.createElement('a');
    a.href = `product.html?id=${id}`;

    let button = document.createElement('button');
    button.innerHTML = 'Meer info';

    a.appendChild(button);

    productCard.appendChild(h2);
    productCard.appendChild(p);
    productCard.appendChild(img);
    productCard.appendChild(a);

    return productCard;
}


/* functie om categorieknoppen te maken */
function CategoryButton(categorienaam, id) {
    let html = `<button onclick="filterProducts('${id}', this)">${categorienaam}</button>`;
    return html;
}



function runQuery(query){
    var result = "";
    $.ajax({
        type: "POST",
        url: "conn.php",
        data: {sql: query},
        async: false,
        success: function(data){
            result = JSON.parse(data);
        }
    });
    return result;
}
// Product ophalen dankzij een get variabele in de url
let urlParams = new URLSearchParams(window.location.search);
let productID = urlParams.get("id");

let sql = `SELECT * FROM product WHERE PKproduct = ${productID}`;

let product = runQuery(sql)[0];
// Omdat we maar 1 product ophalen, kunnen we de [0] gebruiken om het eerste element uit de array te halen
// Een hele lus is niet nodig <Qqm'-
// De juiste elementen selecteren en de informatie van het product erin zetten

document.getElementById("naam").innerHTML = product.Naam;
document.getElementById("prijs").innerHTML = "€ " +product.Prijs;
document.getElementById("product-omschrijving").innerHTML = product.Omschrijving;
document.querySelector(".productImage img").src = product.Afbeelding;