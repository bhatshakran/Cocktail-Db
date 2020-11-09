class UI{
    constructor(){
        this.name = document.getElementById('c-name');
        this.category = document.getElementById('c-cat');
        this.icon = document.getElementById('c-icon');
        this.instructions = document.getElementById('c-instr');
        // this.ingred = document.getElementById('c-ingred');
    
    
    
    
    
    }
    

    paint(cocktail){
        this.name.textContent = `Cocktail Name: ${cocktail.strDrink}`;
        this.category.textContent = `Category: ${cocktail.strCategory}`;
        this.icon.setAttribute('src', cocktail.strDrinkThumb);
        this.instructions.textContent = `Instructions: 
        ${cocktail.strInstructions}`;
        
        
       
        
        
             
        
     
        
        
            
        
        
            // this.ingred.textContent = ingredients;
    }

    
    
}