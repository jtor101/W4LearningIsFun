"use strict";

$(function() {
  $.getJSON("/api/categories", function(data) {
    let categories = data;

    for (let i = 0; i < categories.length; i++) {
      let catsAll = categories[i];
      let element = document.createElement("option");
      element.text = catsAll.Category;
      element.value = catsAll.Category;
      $("#coursecategory").append(element);
    }
  });

  // Submit Button sends form.
  $("#caSubmitBtn").on("click", sendForm);

  // Posts to Students table.
  function sendForm() {
    alert("Sent!");
    $.post("api/courses", $("#courseAdd").serialize());
    window.location.replace("details.html?courseid=" + $("#courseid").val());
    return false;
  }
});
