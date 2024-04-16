const motorbikes = [
  //made an array of objects
  {
    id: 1,
    model: " 600 cbr",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/2006HondaCBR600RR-001.jpg/600px-2006HondaCBR600RR-001.jpg",
    brand: "honda",
    price: "3000 euro",
  },
  {
    id: 2,
    model: " gts 300",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/1964_Vespa_90_Small_Frame_made_by_Piaggio_now_in_California_1.jpg",
    brand: "vespa",
    price: "2000 euro",
  },
  {
    id: 3,
    model: " fz 1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/YAMAHA_FZ1_2005TMS.jpg",
    brand: "yamaha",
    price: "2400 euro",
  },
  {
    id: 4,
    model: "h2r",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Kawasaki_Ninja_H2.jpg",
    brand: "kawasaki",
    price: "3000 euro",
  },
];
localStorage.setItem("motorbikes", JSON.stringify(motorbikes)); //transform array in string plus local storage
//e bine sa am mai multe scripturi
const cart = []; //pt a adauga produse in cos add to cart
//cart o sa fie un array gol in care noi o sa adaugam produse
//we want to add it in local storage
//daca am deja elemente nu imi mai initializeaza cardul
const existingCartItems = JSON.parse(localStorage.getItem("cart"));
if (existingCartItems.length === 0) {
  localStorage.setItem("cart", JSON.stringify(cart)); //pt a adauga produse in cos add to cart
}
