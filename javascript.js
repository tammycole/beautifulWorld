/* global $*/

// Run this alert
// --------------
// Could put an alert here if wanted

// Define the hello function
// -------------------------
function hello(){
  
  // Run some alert
  // --------------
  alert("Hello There");
  
  // Copy some text from a <p/> element
  // ----------------------------------
  var copy = $("p").text();
  
  // Change the text of the paragraph to also say "BEST PAGE"
  // --------------------------------------------------------
  $("p").text(copy+ "BEST PAGE");
}

// Run this hello function
// -----------------------
hello();