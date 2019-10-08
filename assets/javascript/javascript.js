(function () {

    const coin = {
        state: 0,
        flip: function () {
            // 1. Randomly set your coin object's "state" property to be either 
            //    0 or 1: use "this.state" to access the "state" property on this object.



            if(Math.random() <.50){
                this.state =  0;
            }
            else {
                this.state = 1;
            }

        },
        toString: function () {
            // 2. Return the string "Heads" or "Tails", depending on whether
            //    "this.state" is 0 or 1.

            if(this.state === 0){
                return "Heads"
            }
            else { 
                return "Tails"
            }
        },
        toHTML: function () {
            const image = document.createElement('img');
            // 3. Set the properties of this image element to show either face-up
            //    or face-down, depending on whether this.state is 0 or 1.
            if (this.state ===0) {
                image.src = "assets/images/coinHeads.JPG";
            }
            else {
                image.src = "assets/images/coinTails.JPG"
            }
            return image
        }
    
    };
    function display20Flips() {
        const results = [];
        // 4. Use a loop to flip the coin 20 times, each time displaying the result 
        // of the flip as a string on the page.  After your loop completes, return an array with 
        // the result of each flip.
        for (let i = 0; i < results.length; i++) {
            const element = array[i];
            
        }
    }
    function display20Images() {
        const results = [];
        // 5. Use a loop to flip the coin 20 times, and display the results of each 
        // flip as an image on the page.  After your loop completes, return an array with result 
        // of each flip.
    }

    coin.flip()
    console.log(coin.toString())
    console.log(coin.toHTML())

    let newDiv = document.createElement ("div")
    newDiv.innerHTML = coin.toString();

    let containerElement = document.querySelector("#container")
    containerElement.appendChild(newDiv)
    containerElement.appendChild(coin.toHTML())
})();