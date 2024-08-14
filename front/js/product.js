//Récupération de l'ID du produit à partir de l'URL
async function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('id')) {
        console.log(params.get('id'));
        return params.get('id');
    } else {
        return "Erreur";
    }
}