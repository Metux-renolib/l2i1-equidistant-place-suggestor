const axios = require("axios").default;
const dotenv = require("dotenv");
const result = dotenv.config();

async function algo(tab, jour) {
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
    let nbAdresses = tabAdresses.length; 

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

    //Calcul du rayon de chaque cercle
    let tabRayonsCercles = new Array(); //Tableau contenant les rayons de tous les cercles
    for (i = 0; i <= tabDiametresCercles.length - 1; i++) {
        tabRayonsCercles.push(Rayon(tabDiametresCercles[i]));
    }

    //On compare alors les distances points/centre au rayon pour déterminer si le point se trouve dans le cercle ou non, pour chaque cercle
    let tabCerclesInteressants = new Array();
    let tabCentresInteressants = new Array();
    for (let i = 0; i < tabCentresCercles.length; i++) {
        var compteur = 0; //Création d'un compteur pour savoir si tous les points font partis du cercle
        for (let j = 0; j < tabAdresses.length; j++) {
            if (Distance(tabCentresCercles[i].lat, tabCentresCercles[i].lng, tabAdresses[j].lat, tabAdresses[j].lng) <= tabRayonsCercles[i]) {
                compteur++; //Si la distance Point-Centre est plus petite ou égale que le rayon, le point appartient au cercle --> j'indente mon compteur
            }
        }
        if (compteur == nbAdresses) {
            tabCerclesInteressants.push(tabRayonsCercles[i]); //Si tous les points font partis du cercle, on ajoute son rayon au tableau pour le sauvegarder
            tabCentresInteressants.push(tabCentresCercles[i]); 
        }
    }

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

    var tabFinal = new Array();
    tabFinal = tabAdresses;

    //Comparaison avec les bowlings
    let adrLL = pointEquidistant.lat.toString() + '%2C' + pointEquidistant.lng.toString();
    let bowling = undefined;
    let distMin = undefined;

    var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${adrLL}&radius=15000&keyword=bowling_alley&key=${process.env.GOOGLE_MAPS_API_KEY}`,
    headers: { }
    };

    let res = await axios.request(config).then(function (response) {
        //Je récupère le premier bowling opérationnel de la liste
        let i=0;
        if(response.data.results[i].business_status != 'OPERATIONAL'){
            i++;
        }
        else{
            bowling = response.data.results[i];
            distMin = Distance(response.data.results[i].geometry.location.lat, response.data.results[i].geometry.location.lng, pointEquidistant.lat, pointEquidistant.lng);
        }

        //Je vais comparer tous les bowlings opérationnels et garder en mémoire celui qui a la plus courte distance avec le point équidistant
        for(let j = (i+1); j<response.data.results.length; j++){
            if(response.data.results[j].business_status == 'OPERATIONAL'){
                let dist = Distance(response.data.results[j].geometry.location.lat, response.data.results[j].geometry.location.lng, pointEquidistant.lat, pointEquidistant.lng);
                if(dist<distMin){
                    bowling = response.data.results[j];
                    distMin = dist;
                }
            }
        }
        console.log(bowling)
        tabFinal.push(new CoordonnesAdresse(bowling.geometry.location.lat, bowling.geometry.location.lng));
        tabFinal.push(bowling);
        tabFinal.push(jour);
        return tabFinal;
    })
    .catch(function (error) {
        console.log(error);
    });

    return res;
}

module.exports = {
    algo
};
