



function openSearchPage(element) {
    console.debug(element)
    window.location.href="company/aaa"
}

function searchByText(keyword) {
    $.getJSON("search/" + keyword, function(result){
        result.hits.hits.forEach(function(item) {
            createCell($("#list"), item)
        });
        
        $(".cell").bind("click", openSearchPage);
    });
}

function createCell(element, item) {
    console.log(item);
    var cellLabel = $("<div>" + item._source.name + "</div>"),
    cellLabel2 = $("<div>" + item._source.registerFundTime + "</div>");
    $(element).append($("<div class=\"cell\"></div>").append([cellLabel, cellLabel2]));
    // $("#list")
}