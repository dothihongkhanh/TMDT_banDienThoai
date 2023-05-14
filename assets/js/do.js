var openDialogBtn = document.getElementById("open-dialog-btn-description");
var dialog = document.querySelector(".dialog2");
var closeDialogBtn = document.getElementById("close-dialog-btn");
var body = document.querySelector("body");

// Mở hộp thoại khi click vào nút
openDialogBtn.addEventListener("click", function() {
  dialog.style.display = "block";
  body.classList.add("dialog-open");
});

// Đóng hộp thoại khi click vào nút đóng
closeDialogBtn.addEventListener("click", function() {
  dialog.style.display = "none";
  body.classList.remove("dialog-open");
});

// Đóng hộp thoại khi click ra ngoài
document.addEventListener("click", function(event) {
  if (!dialog.contains(event.target) && event.target !== openDialogBtn) {
    dialog.style.display = "none";
    body.classList.remove("dialog-open");
  }
});


var openDialogBtn2 = document.getElementById("open-dialog-btn-specifications");
var dialog2 = document.querySelector(".dialog-specification");
var closeDialogBtn2 = document.getElementById("close-dialog-btn-specification");
var body2 = document.querySelector("body");

// Mở hộp thoại khi click vào nút
openDialogBtn2.addEventListener("click", function() {
  dialog2.style.display = "block";
  body2.classList.add("dialog-open");
});

// Đóng hộp thoại khi click vào nút đóng
closeDialogBtn2.addEventListener("click", function() {
  dialog2.style.display = "none";
  body2.classList.remove("dialog-open");
});

// Đóng hộp thoại khi click ra ngoài
document.addEventListener("click", function(event) {
  if (!dialog2.contains(event.target) && event.target !== openDialogBtn2) {
    dialog2.style.display = "none";
    body2.classList.remove("dialog-open");
  }
});