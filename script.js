

window.onload = init;
var ingCatCounter = 0;

function init() {

}
function addRecipeCat() {
    let recipeCat = document.getElementById('recipeCategory');
    let ingCats = document.getElementById('ingCatsSelect');
    let ingCatSelect = ingCats.options[ingCats.selectedIndex].value;
    let recipeCatBlock = `<ul class="ingCatBlock` + ingCatCounter + `"><li><label for="` + ingCatSelect + `">` + ingCatSelect + `</label>
    <input type="text" name="`+ ingCatSelect + `" id="` + ingCatSelect + `" form="ingCatText" required
        placeholder="enter the ingredients..."></input></li></ul>`;
    if (document.getElementById(ingCatSelect) == null) {
        recipeCat.innerHTML += recipeCatBlock;
        ingCatCounter++;
    }





}
/*
function addIngredient {
    let ingredient = document.getElementById(ingCatSelect).value;
    let ingCatBlock = document.getElementsByClassName(ingCatBlock);
    ingredient.addEventListener(onsubmit) = ingCatBlock.innerHTML += '<li>'+ingredient+'</li>';
}
*/
function changeColor() {

}