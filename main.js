const studentCards = [];

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const buttonEvents = () => {
  document.getElementById("jumbotron-btn").addEventListener("click", buildForm);

};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildForm = () => {
  let domString = "";

  domString += `<h2>Enter First Year's Name</h2>`;
  domString += `<form class="form-inline" id="whole-form">
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

  document.getElementById('form-btn').addEventListener('click', addStudent);
  document.getElementById("form-btn").addEventListener("click", buildCards);
};

const addStudent = () => {
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  const newStudent = {
    name: document.getElementById("inputStudent").value,
    house: randomHouse,
  }
  studentCards.push(newStudent)
}

const errorMessage = () => {
  let domString = "";

  domString += `<h2>Enter First Year's Name</h2>`;
  domString += `<form class="form-inline" id="whole-form">
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
  printToDom("")
  } 

const buildCards = () => {

  let domString = "";

  for (let i = 0; i < studentCards.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${studentCards[i].name}</h5>
                      <p class="card-text">${studentCards[i].house}</p>
                      <a href="#" class="btn btn-primary" id="${i}">Expel</a>
                    </div>
                  </div>`;
  }
    printToDom("student-cards", domString);
    document.querySelector('#student-cards').addEventListener("click", expelStudent);
    document.getElementById('inputStudent').value = '';
};

const expelStudent = (e) => {
  let expelButtonClicked = e.target.id;
  studentCards.splice(expelButtonClicked, 1);
  buildCards(studentCards);
}

buttonEvents();
