/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take 
the opportunity to go for a short walk. The city provides its citizens with 
a Walk Generating App on their phones -- everytime you press the button 
it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block in a direction and you know 
it takes you one minute to traverse one city block, so create a function 
that will return true if the walk the app gives you will take you exactly 
ten minutes (you don't want to be early or late!) and will, of course, 
return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of 
direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).
*/


function isValidWalk(walk) {
    let north = 0,  //starting coordinate
        east = 0,   //starting coordinate
        south = 0,  //starting coordinate
        west = 0;   //starting coordinate
    if (walk.length !== 10) return false // we have only 10 min and 10 blocks
    for (let i = 0; i < 10; ++i) {
        switch (walk[i]) {
            case "n": north += 1; break     // counts letters
            case "e": east += 1; break      // counts letters
            case "s": south += 1; break     // counts letters
            case "w": west += 1; break      // counts letters
        }
    }
    if (north === south && west === east) return true; // checking for a return to zero
    return false;
}