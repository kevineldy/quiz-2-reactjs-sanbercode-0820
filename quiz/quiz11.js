function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function(resolve, reject){
        if (amountOfPage > 0) {
            resolve(books.filter(x=> x.totalPage , amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error("maaf parameter salah")
            reject(reason);
        }
    })
}
var books = [
    {name: "shinchan", totalPage: 50, isColorful: true},
    {name: "Kalkulus", totalPage: 250, isColorful: false},
    {name: "doraemon", totalPage: 40, isColorful: true},
    {name: "alogaritma", totalPage: 300, isColorful: false}
]

filterBooksPromise(500, books[0]).then(
    function(x){
        filterBooksPromise(x, books[1]).then(
            function(x1){
                filterBooksPromise(x1, books[2]).then(
                    function(x2){
                        filterBooksPromise(x2, books[3]).then(
                            console.log(x3)
                        )
                    }
                )
            }
        )
    }
)





