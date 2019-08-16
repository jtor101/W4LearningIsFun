"use strict";

$(function() {
  let urlParams = new URLSearchParams(location.search);
  let courseId = urlParams.get("courseid");
  let courseIdInput = $("#courseid");
  let backBtn = $("#backBtn");
  let submitBtn = $("#submitBtn");
  let courseReg = $("#courseReg");

  courseIdInput.val(courseId);

  backBtn.html(
    "<a class='btn btn-warning py-2' href='details.html?courseid=" +
      courseId +
      "'>Back To Class Details</a>");

submitBtn.on("click", sendForm);

function sendForm(){
$.post("api/register", courseReg.serialize()
)
return false;
}
});
