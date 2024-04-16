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
    //cand facem hover peste motoccicleta, sa ni se afiseze pretul
    //create p tag-> pret motor
    const price = document.createElement("p");
    price.textContent = `Price: ${bike.price}`;
    price.classList.add("motor-bike-price-hidden");
    motorbikeDiv.addEventListener("mouseenter", () => {
      price.classList.remove("motor-bike-price-hidden");
      price.classList.add("motor-bike-price-show"); //mi se apeleaza mai usor cu mouseenter si mouseleave
    });
    motorbikeDiv.addEventListener("mouseleave", () => {
      price.classList.add("motor-bike-price-hidden");
      price.classList.remove("motor-bike-price-show");
    });
    //8 apend price
    motorbikeDiv.appendChild(price);
    //9 create add to cart button
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "add to cart";
    addToCartButton.addEventListener("click", () => {
      addToCart(bike);
    });
    function addToCart(bike) {
      //iau cart ul din local storage
      const cart = JSON.parse(localStorage.getItem("cart")); //ne lueam cartul din local storage
      cart.push(bike); //addaugam produsul in cart
      localStorage.setItem("cart", JSON.stringify(cart)); //facem update la carte in local storage
    }
    //10 append button to motorbikedIV
    motorbikeDiv.appendChild(addToCartButton);
  });
}

const generateButton = document.getElementById("generateButton"); //cel mai bine folosesc ID
generateButton.addEventListener("click", generateList);
//cand apas pe buton, imi genreaza lista in consola
