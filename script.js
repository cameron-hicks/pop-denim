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