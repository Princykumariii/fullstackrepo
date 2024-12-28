import { baseUrl } from "./baseUrl.js";

window.onload = () => {
  getData();
};
let form = document.getElementById("form");

form.addEventListener("submit", async function () {
  event.preventDefault();
  // console.log("clicked...")

  let title = form.problem.value;
  let optionA = form.optnA.value;
  let optionB = form.optnB.value;
  let optionC = form.optnC.value;
  let optionD = form.optnD.value;
  let correctOption = form.select.value;
  let questionObj = {
    title,
    optionA,
    optionB,
    optionC,
    optionD,
    correctOption,
    reviewStatus: false,
  };

  try {
    await fetch(`${baseUrl}/questions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(questionObj),
    });
    alert("Question Created Successfully");
    form.reset();
  } catch (err) {
    alert("something went wrong");
    console.log(err);
  }
  // we need to post this obj in the json server
  //    fetch(`${baseUrl}/questions`,{
  //     method:"POST",
  //     headers:{
  //         "content-type":"application/json"
  //     },
  //     body:JSON.stringify(questionObj)
  //    }).then(()=>{
  //     alert("Question Created Successfully");
  //     form.reset()
  //    }).catch((err)=>{
  //     alert("something went wrong");
  //     console.log(err)
  //    })
});

function getData() {
  fetch(`${baseUrl}/questions`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      displayData(data);
    })
    .catch((err) => {
      alert("something went wrong");
      console.log(err);
    });
}

function displayData(arr) {
  let cont = document.getElementById("cont");
  cont.innerHTML = "";
  arr.map((el, i) => {
    let card = document.createElement("div");
    let title = document.createElement("h4");
    title.textContent = `Title: ${el.title}`;

    let optionA = document.createElement("h4");
    optionA.textContent = `A: ${el.optionA}`;

    let optionB = document.createElement("h4");
    optionB.textContent = `B: ${el.optionB}`;

    let optionC = document.createElement("h4");
    optionC.textContent = `C: ${el.optionC}`;

    let optionD = document.createElement("h4");
    optionD.textContent = `D: ${el.optionD}`;

    let correctOption = document.createElement("h4");
    correctOption.textContent = `Correct Option: ${el.correctOption}`;

    let reviewStatus = document.createElement("h4");
    if (el.reviewStatus == true) {
      reviewStatus.textContent = "Status: Reveiwed";
    } else {
      reviewStatus.textContent = "Status: Pending";
    }

    let reviewButton = document.createElement("button");
    reviewButton.textContent = "Mark Review";
    reviewButton.addEventListener("click", function () {
      reviewFn(el);
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Question";
    deleteButton.addEventListener("click", function () {
      deleteFn(el);
    });
    card.append(
      title,
      optionA,
      optionB,
      optionC,
      optionD,
      correctOption,
      reviewStatus,
      reviewButton,
      deleteButton
    );
    cont.append(card);
  });
}

function reviewFn(el) {
  let updateQuestionObj = { ...el, reviewStatus: !el.reviewStatus};
  //console.log(el)
  // i need to change the review status of the question
  // i will use PATCH Method
  // https://sleepy-supreme-sleet.glitch.me/questions/4
  fetch(`${baseUrl}/questions/${el.id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateQuestionObj),
  })
    .then(() => {
      alert("Question Updated Successfully");
      getData()
    })
    .catch((err) => {
      alert("something went wrong");
      console.log(err);
    });
}


function deleteFn(el){
    fetch(`${baseUrl}/questions/${el.id}`, {
        method: "DELETE"
      })
        .then(() => {
          alert("Question Deleted");
          getData()
        })
        .catch((err) => {
          alert("something went wrong");
          console.log(err);
        });
}