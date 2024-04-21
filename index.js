document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".items");
    const cartList = document.getElementById("cartList");
    const totalCostDisplay = document.getElementById("totalCost");
    let totalCost = 0;

    items.forEach((item) => {
      const plus = item.querySelector(".plus");
      const minus = item.querySelector(".minus");
      const quantity = item.querySelector(".quantity");
      const price = item.querySelector(".price");

      plus.addEventListener("click", () => {
        let val = parseInt(quantity.textContent);
        val++;
        quantity.textContent = val;
        if (val === 1) {
          addToCart(item);
        }
        totalCost += parseInt(price.textContent);
        updateTotalCost();
      });

      minus.addEventListener("click", () => {
        let val = parseInt(quantity.textContent);
        if (val > 0) {
          val--;
          quantity.textContent = val;
          if (val === 0) {
            removeFromCart(item);
          }
          totalCost -= parseInt(price.textContent);
          updateTotalCost();
        }
      });
    });

    function addToCart(item) {
      const itemName = item.querySelector(".fruitName").textContent;
      const price = parseInt(item.querySelector(".quantityValue").textContent);
      const amount = parseInt(item.querySelector(".quantity").textContent);
      const buying = document.createElement("li");
      buying.classList.add("inCart");
      buying.textContent = `${itemName} - ${amount} X $${price}`;
      cartList.appendChild(buying);
    }

    function removeFromCart(item) {
      const itemName = item.querySelector(".fruitName").textContent;
      const cartItems = cartList.getElementsByClassName("inCart");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].textContent.includes(itemName)) {
          cartList.removeChild(cartItems[i]);
          break;
        }
      }
    }

    function updateTotalCost() {
      totalCostDisplay.textContent = totalCost;
    }
  });