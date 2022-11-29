var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var li = this.parentElement;
    li.style.display = "none";
  };
}

var ul = document.querySelector("ul");
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("active");
  }
});
var alert = document.querySelector(".none");
document.querySelector("#button").onclick = function () {
  if (document.querySelector("#task").value.length == 0) {
    alert.classList.add("alert");
    alert.classList.remove("none");
  } else {
    var li = document.createElement("li");
    var value = document.querySelector("#task").value;
    var txt = document.createTextNode(value);
    li.appendChild(txt);
    document.getElementById("list").appendChild(li);
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
};
document.querySelector(".fa-xmark").onclick = function () {
  alert.classList.add("none");
  alert.classList.remove("alert");
};
