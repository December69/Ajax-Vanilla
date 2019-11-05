// ---------------------------------------------------------
// Fonctions Ajax génériques
// ---------------------------------------------------------

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback = null) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url);
    xmlhttp.addEventListener("load", function () {
        if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
          // Appelle la fonction callback en lui passant la réponse de la requête
          if(callback != null)
            callback(xmlhttp.responseText);
        } else {
            console.error(xmlhttp.status + " " + xmlhttp.statusText + " " + url);
        }
    });
    xmlhttp.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    xmlhttp.send(null);
}

// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, le FormData et la fonction callback appelée en cas de succès
// Le paramètre booléen isJson permet d'indiquer si l'envoi concerne des données JSON
function ajaxPost(url, data, isJson=false, callback = null) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url);
    xmlhttp.addEventListener("load", function () {
        if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
          // Appelle la fonction callback en lui passant la réponse de la requête
          if(callback != null)
            callback(xmlhttp.responseText);
        } else {
            console.error(xmlhttp.status + " " + xmlhttp.statusText + " " + url);
        }
    });
    xmlhttp.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    xmlhttp.send(data);
}
