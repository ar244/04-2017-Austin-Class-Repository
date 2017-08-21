var cheerio = require("cheerio");
var request = require("request");

request("https://hackernoon.com/javascript/home", function(error, response, html) {
    var $ = cheerio.load(html);

    var results = [];

    $("div.u-tableCell").each(function(i, element) {
        var link = $(element).find("a").attr("href");
        results.push(link);
    });

    console.log(results);
});
