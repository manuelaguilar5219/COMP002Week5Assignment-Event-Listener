// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.
let balloon = document.getElementById("balloon"); // Get the ballon element
let currentSize = 50; // Current size is set to 50
balloon.style.fontsize = currentSize + "px" // Applies the value of currentSize (50 pixels) to the fontSize of the balloon element

const maxSize = 150; // Maximum size before explosion

window.addEventListener("keydown", function(event) { // Listens for keydown events (when a key is pressed)
    if (event.key === "ArrowUp") { // This line checks if the key that was pressed is the "ArrowUp" key.
        currentSize *= 1.10; // Increase size by 10%
        if (currentSize > maxSize) { // Checks if the current size exceeds the maxSize
            balloon.textContent = "💥"; // Replaces balloon emoji with explosion emoji if currentSize exceeds maxSize
            this.window.removeEventListener("keydown", arguments.callee); // Event handler is removed (so that you can’t inflate or deflate the explosion).
        }
    } else if (event.key === "ArrowDown") { // This line checks if the key that was pressed is the "ArrowDown" key.
        currentSize *= 0.90; // Decrease size by 10%
    }
    balloon.style.fontSize = currentSize + "px"; // This line updates the font size of the balloon element to the new value of currentSize
    event.preventDefault(); // This line makes sure that the keys change only the balloon, without scrolling the page.
});
// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
function switchTab(event, tabID) { // Function to handle tab switching
    event.preventDefault(); // prevent default behavior
    document.querySelectorAll("#tabbed-contents > div").forEach(div => div.classList.add("hidden")); // Hides all tabs
    document.getElementById(tabId).classList.remove("hidden"); // Shows selected tab
}

// Add event listeners to the tab links
document.getElementById("tab1Link").addEventListener("click", function(event) {
    switchTab(event, "tab1");
});
document.getElementById("tab2Link").addEventListener("click", function(event) {
    switchTab(event, "tab2");
});
document.getElementById("tab3Link").addEventListener("click", function(event) {
    switchTab(event, "tab3");
});