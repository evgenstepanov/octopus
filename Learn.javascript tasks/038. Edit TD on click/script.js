let table = document.getElementById("bagua-table");
let tdInEdit;
let tdInner;
let area;
let div;

table.onclick = function(event) {
  let target = event.target.closest(".edit-cancel,.edit-ok,td");
  console.log(target);
  if (target.tagName === "TD") {
    if (tdInEdit) return;
    tdInEdit = target;
    showTextArea(target);
  }
  if (target.value === "OK") {
    tdInEdit.innerHTML = area.value;
    tdInEdit.classList.remove("edit-td");
    area.remove();
    div.remove();
    tdInEdit = null;
  }
  if (target.value === "CANCEL") {
    tdInEdit.classList.remove("edit-td");
    tdInEdit.innerHTML = tdInner;
    area.remove();
    div.remove();
    tdInEdit = null;
  }
};

function showTextArea(td) {
  area = document.createElement("textarea");
  area.value = td.innerHTML;
  area.style.width = td.clientWidth + "px";
  area.style.height = td.clientHeight + "px";
  tdInner = td.innerHTML;
  td.innerHTML = "";
  td.classList.add("edit-td");
  area.classList.add("edit-area");
  td.prepend(area);
  addButtons(td, area);
}

function addButtons(td, area) {
  div = document.createElement("div");
  div.classList.add("edit-controls");

  let okButton = document.createElement("input");
  okButton.type = "button";
  okButton.value = "OK";
  okButton.classList.add("edit-ok");

  let cancelButton = document.createElement("input");
  cancelButton.type = "button";
  cancelButton.value = "CANCEL";
  cancelButton.classList.add("edit-cancel");

  div.append(okButton);
  div.append(cancelButton);
  td.append(div);
}

console.log(tdInEdit);
