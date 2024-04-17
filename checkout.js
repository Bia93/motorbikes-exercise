function removeFromCart(bike) {
  //bike e produsul
  //de fiecare data cand apelez functia removeFromCart,
  //verific care imi sunt motociclete din local storage(bikesInCart),
  //apoi le filtrez(filtredBikes),
  //apoi sa sterg din array bikeul la care vreau sa fac remove
  //apoi imi setez un local storage cu bikeurile noastre filtrate
  //imi iau motocicletele din cart
  const bikesInCart = JSON.parse(localStorage.getItem("cart"));
  //scot din array motocicleta pe care vreau sa o sterg
  //mi se creeaza un nou array cu motocicletele ramase
  const filteredBikes = bikesInCart.filter((cartBike) => {
    return cartBike.id !== bike.id;
  });
  console.log(filteredBikes);
  //facem update la local storage cu moto ramase
  localStorage.setItem("cart", JSON.stringify(filteredBikes));
  //resetam div-urile pentru product si total
  document.getElementById("product").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  //reapelam functia de generare a cosului de cumparaturi
  //pentru noul local storage
  getCheckoutitemsandTotal();
}

function getCheckoutitemsandTotal() {
  const bikes = JSON.parse(localStorage.getItem("cart"));
  const container = document.getElementById("product");

  bikes.forEach((bike) => {
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

    //remove item from the cart (creeam un buton)
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete item";
    motorbikeDiv.appendChild(removeButton);
    //8 apend price
    motorbikeDiv.appendChild(price);
    removeButton.addEventListener("click", () => {
      removeFromCart(bike);
    });

    function addToCart(bike) {
      //iau cart ul din local storage
      const cart = JSON.parse(localStorage.getItem("cart")); //ne lueam cartul din local storage
      cart.push(bike); //addaugam produsul in cart
      localStorage.setItem("cart", JSON.stringify(cart)); //facem update la carte in local storage
    }
  });
  const total = bikes.reduce((acc, bike) => {
    const price = Number(bike.price.split("euro")[0]); //asta pt a scapa de euro in total (pt a nu aprea dolarul in total)
    // ex. 2000 euro->[2000]
    return acc + price;
  }, 0);
  const totalContainer = document.getElementById("total");
  totalContainer.textContent = `Total cart: ${total} euro`;
}
