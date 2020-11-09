class Cocktail{
    constructor() {
        this.api_key = '1';
        
        this.name = document.getElementById('c-search');
    }

    async getCocktail() {
        const response = await fetch(
`https://www.thecocktaildb.com/api/json/v1/${this.api_key}/search.php?s=${this.name.value}`);
         const responseData = await response.json();
         return responseData.drinks[0];   
    }
}