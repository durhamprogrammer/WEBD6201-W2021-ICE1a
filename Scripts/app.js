/* custom JavaScript goes here */

// IIFE - Immediately Invoked Function Expression
// AKA: Anonymous Self-Executing Function
// Also a "Closure"

(function() 
{
    "use strict";

    function Start()
    {
        console.log("App Started...");

        let paragraphOneContent = "This is my first paragraph";

        // selection
        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;

        // STEP 1 - Create a new Element
        let paragraphTwo = document.createElement("p");
        // STEP 2 - configure the new Element
        paragraphTwo.setAttribute("id", "paragraphTwo");
        paragraphTwo.textContent = "This is my second paragraph";
        paragraphTwo.className = "fs-4 fw-bold";
        // STEP 3 - Target the Parent Element
        let mainContent = document.querySelector("main");
        // STEP 4 - append the new element to the parent
        mainContent.appendChild(paragraphTwo);

        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<h2>This is my second heading</h2>
        <p id="paragraphThree"> This is the Third Paragraph </p>`;

        mainContent.append(newDivTag);
    }


    window.addEventListener("load", Start);
})();