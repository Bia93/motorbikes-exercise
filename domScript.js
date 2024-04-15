function generateList() {
  //cum luam elemetele din localstorage?
  //1.luam lista din local storage si o parsam ca array
  const motorbikes = JSON.parse(localStorage.getItem("motorbikes")); //am transformat in array pt ca in initdATA.JS ERA string, CU JSON.PARSE
  console.log(motorbikes);
  const container = document.getElementById("container");
  //2.facem cate un div pentru fiecare motocicleta
  motorbikes.forEach((bike) => {
    //pt fiecare bike creeam un motorbike
    const motorbikeDiv = document.createElement("div");
    motorbikeDiv.classList.add("motor-bike-container"); //am adaugat clasa in div
    //3.in fiecare div trebuie: create imagine motor tah,
    const image = document.createElement("img");
    image.setAttribute("src", bike.image); //image de la initData, din obiect
    image.setAttribute("alt", `image of ${bike.brand}`);
    //4.append image tag - adaugam imaginea in div
    motorbikeDiv.appendChild(image);
    //5.create p - pt nume
    const motorName = document.createElement("p");
    motorName.textContent = `${bike.brand} ${bike.model}`;
    //6.append p tag
    motorbikeDiv.appendChild(motorName);
    //7.append motorBikeDiv to the container
    container.appendChild(motorbikeDiv);
  });
}

const generateButton = document.getElementById("generateButton"); //cel mai bine folosesc ID
generateButton.addEventListener("click", generateList);
//cand apas pe buton, imi genreaza lista in consola
