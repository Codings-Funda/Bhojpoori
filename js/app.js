const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".themeToggler");


//new 
// const toggle = document.getElementById('toggleDark');
// const body = document.querySelector('body')

// toggle.addEventListener('click',function(){
//     this.classList.toggle('bi-moon')
// })
//show sidebar

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'block';
})

//close slider

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'none';
})

//change theme

themeToggler.addEventListener('click',() => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//fill oreders in table

// orders.forEach(order =>{
//     const tr = document.createElement('tr');
//     const trContent = 
//                            <td>${order.productName}</td>
//                            <td>${order.productNumber}</td>
//                            <td>${order.paymentStatus}</td>
//                            <td class="${order.shipping==='declined' ? 'danger' ">${order.shipping}</td>
//                            <td class="primary">Details</td></>
// })