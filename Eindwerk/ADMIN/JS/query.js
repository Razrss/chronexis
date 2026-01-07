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

    