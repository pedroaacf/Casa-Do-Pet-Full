function getAllUsers() {
  let textElement = document.querySelector("#username");
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/clientes", true);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status != 200) {
          reject(this.responseText);
        }
        const json = this.responseText;
        addToPage(json);
      }
    };
    xhr.send();
  });
}

function addToPage(json) {
  var jsonArr = JSON.parse(json);
  console.log(jsonArr);

  for (var i = 0; i < jsonArr.length; i++) {
    var nome = jsonArr[i].nome;
    var idade = jsonArr[i].idade;
    const div = document.createElement("div");
    div.className = "row cuidador rounded-3 mb-4";
    div.innerHTML = `
    <div class="col d-flex align-items-center">
            <img class="ms-4 rounded-circle my-2" src="./assets/default.png" alt="foto de perfil" style="width: 120px; height: 120px;">
          </div>
          <div class="col-10 d-flex align-items-center">
            <div class="flex-grow-1">
              <p class="fw-bold fs-3" id="username">${nome}</p>
              <p class="fs-5">Idade: ${idade}</p>
            </div>
  
            <div class="ms-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <p>4.9</p>
            </div>
  
          </div>
  `;

    document.getElementById("maincontainer").appendChild(div);
  }
}
