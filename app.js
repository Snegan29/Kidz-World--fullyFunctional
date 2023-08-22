const btn = document.querySelectorAll(".cart");
const addCart = document.querySelector("#cartitems");
const inCart = document.querySelector("#cartitems");
const books = document.querySelectorAll(".bookclass");

let count = 0
let cartItems = []

btn.forEach((button, index) => {
    button.addEventListener("click", function() {
        if (books[index].querySelector(".price").textContent !== "") {
            cartItems.push(index)
            count++;
            addCart.textContent = `Cart Items (${count})`
        }
    });
});


var whatsapp = "https://api.whatsapp.com/send?phone=9626436300&text=Order%20details" 

function whatweb(){
  cartItems.forEach((e) => {
    whatsapp += "%0A"+ `The book name: ${books[e].querySelector(".bookName").textContent}
    Price: ${books[e].querySelector(".price").textContent}` 
  });
}


inCart.addEventListener("click", function(){
    if (cartItems.length > 0) {
        for (let i = 0; i < cartItems.length; i++) {
            const index = cartItems[i];
            const selected = books[index];
            const bookName = selected.querySelector(".bookName").textContent;
            const author = selected.querySelector(".author").textContent;
            const price = selected.querySelector(".price").textContent ;

            console.log("Item Name:",bookName,author);
        };
        whatweb()
        window.open(whatsapp)
    }
});

inCart.addEventListener("click", function() {
    let total = 0

    if (cartItems.length > 0) {
        for (let i = 0; i < cartItems.length; i++) {
            const index = cartItems[i];
            const selected = books[index];
            const price = parseFloat(selected.querySelector(".price").textContent.slice(1));

            total += price; 
        }
        const cartTotal = document.querySelector("#cartTotal");
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        console.log("The total amount is ",total)
    }
});
