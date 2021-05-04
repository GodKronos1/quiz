const btn = document.querySelectorAll(".btn", ".btn-light");
const div = document.createElement("div");
btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const parent = e.target.parentElement;
    let arr = Array.from(parent.children);
    console.log(arr);
    for (let i = 0; i < arr.length; i++)
      if (arr[i].classList.contains("form-check") && arr[i].children[0].checked)
        if (arr[i].children[0].value == "A") {
          div.className = "my-4 py-3 bg-success";
          div.textContent = "Raspuns: CORECT! ";
          parent.append(div);
        } else {
          div.className = "my-4 py-3 bg-danger";
          div.textContent = "Raspuns: GRESIT! ";
          parent.append(div);
        }
  });
});
