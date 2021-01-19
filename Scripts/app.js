/* custom JavaScript goes here */

// IIFE - Immediately Invoked Function Expression
// AKA: Anonymous Self-Executing Function
// Also a "Closure"

(function() 
{

    function Start()
    {
        console.log("App Started...");

        let paragraphOneContent = "This is my first paragraph";

        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;
    }


    window.addEventListener("load", Start);
})();