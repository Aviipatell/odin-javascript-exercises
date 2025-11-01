const getTheTitles = function(booksArr) {
    let titles = booksArr.map((currentBook) => {
        return currentBook.title;
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
