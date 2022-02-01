

window.onload = init;

function init() {
    
}
function addRecipeCat() {
    let recipeCat = document.getElementById('recipeCategory');
    const recipeCatBlock  = document.createElement('ul');
    const recipeIngredient = document.createElement('li');
    const ingredient = document.createTextNode('Butternut Squatch');
    recipeCatBlock.appendChild(recipeIngredient);
    recipeIngredient.appendChild(ingredient);
    recipeCat.innerHTML = recipeCatBlock;

}