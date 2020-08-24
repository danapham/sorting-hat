const studentCards = [];

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const buttonEvents = () => {
  document.getElementById("jumbotron-btn").addEventListener("click", buildForm);
  document.getElementById("form").addEventListener("click", addStudent);
  document.getElementById("form").addEventListener("click", buildCards);
  document
    .querySelector("#student-cards")
    .addEventListener("click", expelStudent);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildForm = () => {

  let domString = "";

  domString += `<h2 class="text-center">Enter First Year's Name</h2>`;
  domString += `<form class="form-inline justify-content-center" id="whole-form">
                  <div class="form-group mb-2" id="studentInputContainer">
                    <label for="staticEmail2" class="sr-only" id="studentLabel">Student</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticStudent" value="Student:">
                  </div>
                 <div class="form-group mx-sm-3 mb-2">
                   <label for="inputPassword2" class="sr-only">Student Name</label>
                   <input type="text" class="form-control" id="inputStudent" placeholder="Hermione Granger">
                  </div>
                  <button type="button" class="btn btn-primary mb-2" id="form-btn">Sort!</button>
                </form>`;

  printToDom("form", domString);
};

const addStudent = (e) => {
  const target = e.target.id;
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  const newStudent = {
    name: document.getElementById("inputStudent").value,
    house: randomHouse,
  };

  if (target === "form-btn" && newStudent.name !== "") {
    studentCards.push(newStudent);
  }
};

const buildCards = (e) => {
  const target = e.target.id;
  let domString = "";
  const nameEntered = document.getElementById("inputStudent").value;

  if (target === "form-btn") {
    if (nameEntered === "") {
      domString += `<h2 class="text-center">Enter First Year's Name</h2>`;
      domString += `<h5 class="text-center text-danger">Please type a name</h5>`;
      domString += `<form class="form-inline justify-content-center" id="whole-form">
                    <div class="form-group mb-2">
                      <label for="staticEmail2" class="sr-only">Student</label>
                      <input type="text" readonly class="form-control-plaintext" id="staticStudent" value="Student:">
                    </div>
                   <div class="form-group mx-sm-3 mb-2">
                     <label for="inputPassword2" class="sr-only">Student Name</label>
                     <input type="text" class="form-control" id="inputStudent" placeholder="Hermione Granger">
                    </div>
                    <button type="submit" class="btn btn-primary mb-2" id="form-btn">Sort!</button>
                  </form>`;
      printToDom("form", domString);
    } else {
      for (let i = 0; i < studentCards.length; i++) {
        domString += `<div class="card" style="width: 18rem;" id="${i}">
                        <div class="card-body"id="${i}">
                          <h5 class="card-title">${studentCards[i].name}</h5>
                          <p class="card-text">${studentCards[i].house}</p>
                          <a href="#" class="btn btn-primary" id="${i}">Expel</a>
                        </div>
                      </div>`;
      }
      printToDom("student-cards", domString);
      document.getElementById("inputStudent").value = "";
    }
  }
};

const rebuildCards = () => {
  let domString = "";
  for (let i = 0; i < studentCards.length; i++) {
    domString += `<div class="card" style="width: 18rem;" id="${i}">
                  <div class="card-body"id="${i}">
                    <h5 class="card-title">${studentCards[i].name}</h5>
                    <p class="card-text">${studentCards[i].house}</p>
                    <a href="#" class="btn btn-primary" id="${i}">Expel</a>
                  </div>
                </div>`;
  }
  printToDom("student-cards", domString);
};

const expelStudent = (e) => {
  const expelButtonClicked = e.target.nodeName;

  if (expelButtonClicked === "A") {
    studentCards.splice(expelButtonClicked, 1);
    rebuildCards();
  }
};

buttonEvents();
