// Fonction pour récupérer les produits de l'API
async function getProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits :', error);
  }
}