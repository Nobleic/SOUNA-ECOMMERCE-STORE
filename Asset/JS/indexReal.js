/* ================================ Back-to-top ============================== */
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

/* ============ SIDE MENU =========== */
 const sidebar = document.getElementById('sidebar');

function menuopen() {
  sidebar.style.right = '0';
 }

 function menuclose() {
   sidebar.style.right = '-100%';
 };

    /* Navbar Sticky */

// window.addEventListener('scroll', function() {
//     let headerNav = document.getElementById('navbar');

//     headerNav.classList.toggle('sticky', window.scrollY > 0);
// });

/* Navigation Link */
// const menuToggle = document.querySelector('.menu-toggle');
// const menu = document.querySelector('.menu');

// menuToggle.addEventListener('click', function() {
//   menu.classList.toggle('show-menu');
// });


/* Open and Close Cart */

const cartIcon =  document.querySelector("#cart-icon");
const cart =  document.querySelector(".cart");
const closeCart =  document.querySelector("#cart-close");

cartIcon.addEventListener('click', function() {
        cart.classList.add('active');
});

closeCart.addEventListener('click', function() {
     cart.classList.remove('active');
});

// start when the documnent is working
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', start);
}else{
    start();
}

// start
 function start(){
  addEvents();
 }

//  Update and Render
function update() {
  addEvents();
}

// Add Events
function addEvents() {
    // Remove items from cart
    let cartRemove_btns = document.getElementById('cart-remove');
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener('click', handle_removeCartItem);
    });
}

// Handle Events Function
function handle_removeCartItem() {
    this.parentElement.remove();
}