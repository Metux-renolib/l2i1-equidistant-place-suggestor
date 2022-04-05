function algo(tab) {
    //ALGORITHME : traitement des coordonnées pour trouver le bowling équidistant
    //Création de l'objet coordonnées
    function CoordonnesAdresse(lat, lng) {
        this.lat = lat; //x
        this.lng = lng; //y
    }

    function Distance(x1, y1, x2, y2) { //Ici, distance = diamètre
        x1 *= Math.PI/360;
        x2 *= Math.PI/360;
        y1 *= Math.PI/360;
        y2 *= Math.PI/360;
        return Math.acos(Math.sin(x1)*Math.sin(x2)+Math.cos(x1)*Math.cos(x2)*Math.cos(y2-y1))*6371;
    }

    function CentreDuCercle(x1, y1, x2, y2) {
        let x = Math.abs((x1+x2)/2);
        let y = Math.abs((y1+y2)/2);
        let centreCercle = new CoordonnesAdresse(x, y);
        return centreCercle;
    }

    function Rayon(d) {
        return d / 2;
    }


    //Stockage des adresses entrées par l'utilisateur dans un tableau (les avoir transformer avec geocode au préalable)
    let tabAdresses = new Array(); 
    for(let i = 0; i<tab.length; i++){
        let adresseAEnregistrer = new Array();
        adresseAEnregistrer = tab[i].adresse.split(",");
        let nouvelleAdresse = new CoordonnesAdresse(Number(adresseAEnregistrer[0]), Number(adresseAEnregistrer[1]));
        tabAdresses.push(nouvelleAdresse);
    }
    nbAdresses = tabAdresses.length; 

    // let tabAdresses = new Array(); 
    // tabAdresses[0] = new CoordonnesAdresse(48.8553052, 2.3318301);
    // tabAdresses[1] = new CoordonnesAdresse(48.8913792, 2.2524573);
    // tabAdresses[2] = new CoordonnesAdresse(49.012608, 1.913285);
    // nbAdresses = 3; 

    console.log("Adresse 1 : " + tabAdresses[0].lat + " " + tabAdresses[0].lng)
    console.log(" ")
    console.log("Adresse 2 : " + tabAdresses[1].lat + " " + tabAdresses[1].lng)
    console.log(" ")
    console.log("Adresse 3 : " + tabAdresses[2].lat + " " + tabAdresses[2].lng)
    console.log(" ")

    //Créer tous les cercles passant par deux points
    //Calcul des diamètres de chaque cercle formé par les points deux à deux
    let tabDiametresCercles = new Array(); //Tableau contenant tous les diamètres de tous les cercles formés
    for (let i = 0; i < (tabAdresses.length - 1); i++) {
        for (let j = i + 1; j < tabAdresses.length; j++) {
            tabDiametresCercles.push(Distance(tabAdresses[i].lat, tabAdresses[i].lng, tabAdresses[j].lat, tabAdresses[j].lng)*1.6);
        }
    }

    //Calcul des coordonnées du centre de chaque cercle 
    let tabCentresCercles = new Array; //Tableau contenant les centres de tous les cercles formés
    for (let i = 0; i < (tabAdresses.length - 1); i++) {
        for (let j = i + 1; j < tabAdresses.length; j++) {
            tabCentresCercles.push(CentreDuCercle(tabAdresses[i].lat, tabAdresses[i].lng, tabAdresses[j].lat, tabAdresses[j].lng));
        }
    }
    console.log("Centre cercle 1 : " + tabCentresCercles[0].lat + " " + tabCentresCercles[0].lng)
    console.log(" ")
    console.log(console.log("Centre cercle 2 : " + tabCentresCercles[1].lat + " " + tabCentresCercles[1].lng))
    console.log(" ")

    //Calcul du rayon de chaque cercle
    let tabRayonsCercles = new Array(); //Tableau contenant les rayons de tous les cercles
    for (i = 0; i <= tabDiametresCercles.length - 1; i++) {
        tabRayonsCercles.push(Rayon(tabDiametresCercles[i]));
    }
    console.log("Rayons cercles : " + tabRayonsCercles)
    console.log(" ")

    //On compare alors les distances points/centre au rayon pour déterminer si le point se trouve dans le cercle ou non, pour chaque cercle
    let tabCerclesInteressants = new Array();
    let tabCentresInteressants = new Array();
    for (let i = 0; i < tabCentresCercles.length; i++) {
        var compteur = 0; //Création d'un compteur pour savoir si tous les points font partis du cercle
        for (let j = 0; j < tabAdresses.length; j++) {
            if (Distance(tabCentresCercles[i].lat, tabCentresCercles[i].lng, tabAdresses[j].lat, tabAdresses[j].lng) <= tabRayonsCercles[i]) {
                compteur++; //Si la distance Point-Centre est plus petite ou égale que le rayon, le point appartient au cercle --> j'indente mon compteur
                console.log(compteur);
            }
        }
        if (compteur == nbAdresses) {
            tabCerclesInteressants.push(tabRayonsCercles[i]); //Si tous les points font partis du cercle, on ajoute son rayon au tableau pour le sauvegarder
            tabCentresInteressants.push(tabCentresCercles[i]); 
        }
    }
    console.log("NB Cercles : " + tabCerclesInteressants.length)
    console.log(" ")
    console.log("NB Centres : " + tabCentresInteressants.length)
    console.log(" ")

    //On veut trouver le plus petit rayon parmi tous nos cercles intéressants (dans les deux tableaux)
    let rayonMin = tabCerclesInteressants[0];
    let pointEquidistant = tabCentresInteressants[0];
    for (let i = 1; i<tabCerclesInteressants; i++){
        console.log()
        if(tabCerclesInteressants[i]<rayonMin){
            rayonMin = tabCerclesInteressants[i];
            console.log("Boucle for : " , tabCentresInteressants[i])
            pointEquidistant = tabCentresInteressants[i];
        }
    }
    console.log("Point equidistant : " + pointEquidistant.lat + " " + pointEquidistant.lng);

    let tabFinal = new Array();
    tabFinal = tabAdresses;
    tabFinal.push(pointEquidistant);

    return tabFinal;
}

module.exports = {
    algo
};
