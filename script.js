function searchRecipe() {
    let input = document.getElementById('search-bar').value
    input = input.toLowerCase();
    let x = document.querySelectorAll(".search-recipe");
    // console.log("Log test!");
    console.log(x);
    // for (i = 0; i < x.length; i++) {
    //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //         // x[i].style.display = "none";
    //     }
    //     else {
    //         // x[i].style.display = "list-item";
    //     }
    // }
    // Assume 'children' is the NodeList of 7 children elements
    x.forEach((child) => {
        // Select the <h2> element within each child
        child.style.display = "none";
        const h2 = child.querySelector('h2');
        if(input === ""){
            console.log("Input Empty/n");
            child.style.display = "none";
        }
        else if (h2.innerHTML.toLowerCase().includes(input)) {
            // Perform your desired operation with the <h2> element
            console.log("This Match: "+h2.textContent); // Example: log the text content of the <h2> tag
            child.style.display = "flex";
            
        }else{
            child.style.display = "none";
            console.log("This Doesnt Match: "+h2.textContent);
            // console.log("nOTHING");
        }
    });
    
}
// Assuming you have a NodeList of <li> elements, for example:
const listItems = document.querySelectorAll('.search-recipe');

listItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Redirect to the URL specified in the <a> tag
        const link = item.querySelector('a');
        if (link) {
            window.location.href = link.href;
        }
    });
});
