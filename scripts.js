$(document).ready(function() {
  console.log("Site loaded successfully");

  // Alert button
  $("<button>Click me for alert</button>")
    .appendTo("#tooling")
    .click(function() {
      alert("This is a test alert!");
    });
});
