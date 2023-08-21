
const btn = document.querySelectorAll(".cart");
const addCart = document.querySelector("#cartitems")

let count = 0
let cartItems = []

btn.forEach((button, index) => {
    button.addEventListener("click", function() {
      let conform = confirm("Do you want to add this item to your cart?");
      if(conform){
        cartItems.push(index)
        count++;
        addCart.textContent = `Cart Items (${count})`
      }
    });
  });

 
const inCart = document.querySelector("#cartitems")
const books = document.querySelectorAll(".bookclass")

inCart.addEventListener("click", function(){
    for (let i = 0; i < cartItems.length; i++) {
        const index = cartItems[i];
        const selected = books[index];
        const bookName = selected.querySelector(".bookName").textContent;
        const author = selected.querySelector(".author").textContent;
        const price = selected.querySelector(".price").textContent ;

        console.log(bookName,author,price);
    };
});

inCart.addEventListener("click", function() {
    let total = 0

    for (let i = 0; i < cartItems.length; i++) {
        const index = cartItems[i];
        const selected = books[index];
        const price = parseFloat(selected.querySelector(".price").textContent.slice(1));

        total += price; 
        console.log(total)
    }

    const cartTotal = document.querySelector("#cartTotal");
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
});
