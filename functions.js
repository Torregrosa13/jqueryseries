function loadSeriesNav() {
    var url = "https://apiseriespersonajes.azurewebsites.net/"
    var request = "api/series"
    $.ajax({
        url: url + request,
        type: "GET",
        success: function (data) {
            var html = "";
            $.each(data, function (index, serie) {
                html += "<li class='dropdown-item'><a href='detail.html?idSerie=" + serie.idSerie + "'>" + serie.nombre + "</a></li>"
            })
            $("#selectSeriesNav").html(html)
        }
    })
}