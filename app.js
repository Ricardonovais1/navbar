// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
console.log(links)
console.log(navToggle)


navToggle.addEventListener('click', function(){

    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }
    // console.log("clicou")

    links.classList.toggle('show-links')
})
 