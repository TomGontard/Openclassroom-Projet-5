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

//Récupération des informations du produit par l'API via son ID
async function getProductDetails() {
    try {
        const id = await getProductIdFromURL();
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        const product = await response.json();
        console.log(product);
        return product;
    } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
  }
}