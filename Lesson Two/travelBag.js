const updateTravelBag = (update) => { // creating an arrow function
    let main = document.querySelector("main");
    main.innerHTML = markup(travelBag);
    console.info(update);
};

const travelBag = {
    name: "Travel Duffle Bag",
    volume: 52,
    color: "bourbon",
    dimensions: {
        length: 22,
        height: 22,
        width: 12
    },
    box: {
        name: "gift box",
        color: "red",
        shape: "square",
        size: "small",
        content: "watch"
    },
    zipperOpen: false,
    toggleZipper: function(zipperStatus) {
        this.zipperOpen = zipperStatus;
    },
    newDimensions: function(dimensionsLength, dimensionsHeight, dimensionsWidth){
        this.dimensions.length = dimensionsLength;
        this.dimensions.height = dimensionsHeight;
        this.dimensions.width = dimensionsWidth;
    },
}

export default travelBag;