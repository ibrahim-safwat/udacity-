/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// Storing all sections within the eachSection variable.
let eachSection = document.querySelectorAll("section");
// Using window.onscroll event takes place when scroll is being scrolled.
window.onscroll = function highlight() {
  // Looping every section
  // Implementing a function which checks if the size and position is the same as in our viewport
  eachSection.forEach(function (activeState) {
    // Storing all links within the ul within the link variable.
    let link = navigationBarList.querySelector(`[data-nav=${activeState.id}]`);
    // If those measures are true.
    if (
      activeState.getBoundingClientRect().top >= -150 &&
      activeState.getBoundingClientRect().top <= 150
    ) {
      // Add the active class for the corresponding section on screen.
      activeState.classList.add("your-active-class");
      // Setting the color of the active-link class to the link in CSS.
      link.classList.add("active");
    } else {
      // Remove the active class for the previous section on screen.
      activeState.classList.remove("your-active-class");
      // Removing the color of the active-link class from the link in CSS.
      link.classList.remove("active");
    }
  });
};

// We need to callout the 'navbar__list' id and pass it to the navigationBarList variable.
const navigationBarList = document.getElementById("navbar__list");
// Creating an array to store all the sections within.
const arrayOfSections = Array.from(document.querySelectorAll("section"));

// Now i'll work on creating a function (fillTheUl) which adds an li to each section within the for...of loop to fill up the ul.
fillTheUl = () => {
  // Here we've created a for of loop to iterate over the array of sections we've created above.
  for (section of arrayOfSections) {
    const section_id = section.id;
    const sectionNav = section.dataset.nav;
    // For each time this loop iterates a new li is created.
    const ulItems = document.createElement("li");
    // Using innerhtml to specify it's contents and what it should display on the webpage.
    ulItems.innerHTML = `<li> <a href = "#${section_id}"  data-nav = "${section_id}" class = "menu__link">${sectionNav}</a></li>`;
    // And finally appending it to it's parent ul to fill the list.
    navigationBarList.appendChild(ulItems);
  }
};
// Calling the function.
fillTheUl();

// Using the eventlistener to listen for any clicks on the navigationbarlist items.
navigationBarList.addEventListener("click", (Navigate) => {
  let Target = Navigate.target.dataset.nav;
  if (Target) {
    // Using scrollintoview as requested to enable the scroll feature and setting it's behavior as smooth for a smooth page transition.
    document.getElementById(`${Target}`).scrollIntoView({ behavior: "smooth" });
  }
  //  Used the preventDefault method as requested.
  Navigate.preventDefault();
});
const allSections = Array.from(document_querySelectorAll("section"));
const navbar = document.getElementById("navbar__list");
