



function openSearchPage(element) {
    window.location.href="company/page/" + $(element.currentTarget).attr("companyId")
}

function searchByText(keyword) {
    $.getJSON("query/" + keyword, function(result){
        result.hits.hits.forEach(function(item) {
            createCell($("#list"), item)
        });
        
        $(".cell").bind("click", openSearchPage);
    });
}

function createCell(element, item) {
    var cellLabel = $("<div>" + item._source.name + "</div>"),
    cellLabel2 = $("<div>" + item._source.registerFundTime + "</div>");
    $(element).append($("<div class=\"cell\" companyId=\"" + item._id + "\"></div>").append([cellLabel, cellLabel2]));
    // $("#list")
}

function getCompanyDetail(companyId, callback) {
    console.log("get by companyId"+ companyId);
    $.getJSON("/search/company/info/" + companyId, callback);
}

