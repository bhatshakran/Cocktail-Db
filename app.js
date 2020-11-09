// init cocktail object

const cocktail = new Cocktail();

// init a ui object
const ui = new UI();
// add event on document load
document.addEventListener('DOMContentLoaded', getCocktail);
document.getElementById('search-btn').addEventListener('click', getCocktail);

function getCocktail() {
    cocktail.getCocktail()
    .then(result=>{
        ui.paint(result);
    })
    .catch(err=>console.log(err))
}

const letsGo = document.getElementById('btn-let');
letsGo.addEventListener('click', ()=>{
    document.querySelector('.landing').style.display = "none";
    
})