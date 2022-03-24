$(function () {
  $("body").on("click", ".lazynav", function () {
    let urlLink = this.href;
    $.get(urlLink, function (response, status) {
      $("#content").html(response);
    });

    return false;
  });
});
