const Expand = (selected, notselected) => {

    if (document.getElementById(selected + "-img").className === "filter-img-selected") {
        SetUnclickedStyling(selected);
        document.getElementById("selected-container").className = "index-filters-books-hidden";

        const image = document.getElementById("index-filters-top");
        image.className = "index-filters-top";
    }
    else {
        const image = document.getElementById("index-filters-top");
        image.className = "index-filters-top-selected";

        selected === "OT" ? BuildTheDiv(OTBooks) : BuildTheDiv(NTBooks);

        SetClickedStyling(selected);

        SetUnclickedStyling(notselected);
    }



};

const SetUnclickedStyling = (notselected) => {
    const image = document.getElementById(notselected + "-img");
    image.className = "filter-img";

    const header = document.getElementById(notselected + "-header");
    header.style.backgroundColor = "";
    //
    // const span = document.getElementById(notselected + "-span");
    // span.className = "span-hidden";
};

const SetClickedStyling = (selected) => {
    const image = document.getElementById(selected + "-img");
    image.className = "filter-img-selected";

    const header = document.getElementById(selected + "-header");
    header.style.backgroundColor = "grey";

    // const span = document.getElementById(selected + "-span");
    // span.className = "OT-span-show";
};

const BuildTheDiv = (list) => {
    var selected = document.getElementById("selected-container");
    selected.innerHTML = "";
    selected.className = "index-filters-books";

    list.forEach(function (x) {
        let book = document.createElement("div");
        book.className = "index-filters-book";
        book.innerHTML = x;
        selected.append(book);
    });
};

const OTBooks = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
];

const NTBooks = [
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesian",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timoth",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation"
];