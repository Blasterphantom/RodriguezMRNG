let namesList = document.getElementById("namesList");
let generateButton = document.getElementById("generateButton");
let injectHere = document.getElementById("injectHere");
let injectHere2 = document.getElementById("injectHere2");
let injectHere3 = document.getElementById("injectHere3");
let injectHere4 = document.getElementById("injectHere4");
let injectHere5 = document.getElementById("injectHere5");

let studentNames = [];
let studentArray = [];
let studentArray2 = [];

generateButton.addEventListener("click", function(){
    GetRandom();
})

function getJson(){
    fetch("../data/data.json").then(
        response => response.json()
    ).then(
        data => {
            studentNames = data.studentNames;
            console.log(studentNames);
            CreateElements(studentNames);
        }
    )

}


function CreateElements(passing){
    let studentArray = passing;
    console.log(studentArray);

        studentArray.map(person => {
            let nameRow = document.createElement('row')
            nameRow.className = "nameRow";

            let p = document.createElement('p');
            p.textContent = person.firstName;
            p.className = "personName";
    
            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'buttonDelete';
            deleteBtn.type = 'button';
            deleteBtn.addEventListener("click", function(){
                namesList.removeChild(nameRow);
                nameRow.removeChild(p);
                nameRow.removeChild(deleteBtn);
                RemoveFromList(person, studentArray);
            })

            namesList.appendChild(nameRow);
            nameRow.appendChild(p);
            nameRow.appendChild(deleteBtn);
        })


}

function RemoveFromList(name, arrayPass){

    console.log(name);

    let nameIndex = arrayPass.indexOf(name);

    arrayPass.splice(nameIndex, 1);

    console.log(arrayPass);

    studentNames = arrayPass;


}

function GetRandom()
{
    const rndInt = randomIntFromInterval(0, studentNames.length -1);
    console.log(studentNames);
    console.log(rndInt);
    swal({
        title: "You got :",
        text: studentNames[rndInt].firstName,
        icon: "success",
        button: "Aww yiss!",
      });


      if(studentArray2.length < 5)
      {
        studentArray2.push(studentNames[rndInt].firstName);
        console.log(studentArray2);
        injectHere.innerHTML = studentArray2[0];
        if(studentArray2[1] != undefined)
        {
            injectHere2.innerHTML = studentArray2[1];
        }

        if(studentArray2[2] != undefined)
        {
            injectHere3.innerHTML = studentArray2[2];
        }

        if(studentArray2[3] != undefined)
        {
            injectHere4.innerHTML = studentArray2[3];
        }

        if(studentArray2[4] != undefined)
        {
            injectHere5.innerHTML = studentArray2[4];
        }

      }
      else
      {
        studentArray2.shift();
        studentArray2.push(studentNames[rndInt].firstName);
        injectHere.innerHTML = studentArray2[0];
        injectHere2.innerHTML = studentArray2[1];
        injectHere3.innerHTML = studentArray2[2];
        injectHere4.innerHTML = studentArray2[3];
        injectHere5.innerHTML = studentArray2[4];

      }


    // alert(studentNames[rndInt].firstName)
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  


getJson();