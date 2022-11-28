document.querySelector("#button").onclick = function () {
  if (document.querySelector("#task").value.length == 0) {
    let alert1 = document.querySelector(".none");
    alert1.classList.add("alert");
    alert1.classList.remove("none");
  } else {
    document.querySelector(".container").innerHTML += ` 
    <ul id="list" >
        <li class="innerlist" >
            ${
              document.querySelector("#task").value
            }  <i id="close" class="fa-solid fa-x"></i>
        </li>  
    </ul>
    
    `;
  }
};
document.querySelector(".fa-xmark").onclick = function () {
  let d = document.querySelector(".alert");
  d.classList.add("none");
  d.classList.remove("alert");
};
document.querySelector("#close").onclick = function () {
  let list = document.querySelector("#list");
  list.classList.add("none");
  list.classList.remove("fa-x", "fa-solid");
};
