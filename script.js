// The signup modal loads when the user interacts with the page for the first time, eg by moving their mouse, but never again after that.

// discarded approach using setTimeout
/* window.setTimeout(()=> {
     $('#signupModal').modal("show");
 }, 20000) */

// event listener approach
// first, declare an object with a key called "once" and a value of true. 
const once = {
    once: true
}
// Then pass your custom object, which could theoretically be called anything so long as it has the right key, as an arg.
window.addEventListener("pointermove", () => {
    $('#signupModal').modal("show");
}, once);


// Make an array of objects. Each object is a product to show on the shop.html page. Properties include product name, picture url, colors (light/med/dark wash), etc.
// Iterate through the array, using createElement to create a Bootstrap card component for each. On the card, include the picture, the product name, and circular images showing a preview of each of the colors available.
// Consider breaking down the card initialization function into smaller parts, eg, an initializer function for each of the color swatches which makes a styled <img> element to be appended to the card.