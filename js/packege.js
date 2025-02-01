let packge=[
    // {id:1,title:"Semester 1",price:15000,source:"imgs/Box.jpg",description: "packges/semester1",order:""},
    // {id:2,title:"Semester 2",price:15000,source:"imgs/Box.jpg",description: "packges/semester2",order:""},
    // {id:3,title:"Semester 3",price:15000,source:"imgs/Box.jpg",description: "packges/semester2",order:"التوصيل مجانا"},
    {id:4,title:"Semester 4",price:6300 ,source:"imgs/Box.jpg",description: "packges/semester4",order:"التوصيل مجانا"},
    {id:4,title:"عرض الخمس صحاب",price:4900,price2:"5900 EGP",source:"imgs/Box.jpg",description: "packges/semester4",order:""},
    // {id:5,title:"Semester 5",price:10000,source:"imgs/Box.jpg",description: "packges/semester4",order:"التوصيل مجانا"},
    
    
]

let sectionPackege=document.getElementById('packge');

function card(i){
    return(
        `
        
      <div class="bg-light card text-dark card-product search-card mx-auto my-5" style="border:solid 2px #17a2b8; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); grid-gap: 20px; max-height: 390px;">
            <div class="card-img bg-light" onclick="showDetailes(${i})" style=" overflow: hidden;border-radius:30px">
                <img src=${packge[i].source} alt=""  style=" overflow: hidden;object-fit: cover;">
            </div>
            <div class="card-body bg-light" onclick="showDetailes(${i})" style="display: flex; flex-direction: column; justify-content: space-between;"> 
                <div class="card-title h5 search-title">${packge[i].title}</div>
                <h5 style="text-decoration: line-through;">${packge[i].price2}</h5>
                <div class="card-text h5">${packge[i].price} EGP</div>
                <h5>${packge[i].order}</h5>
            </div>
            <div class="container">
                <div class="btn btn-outline-info w-100 mx-auto mb-2" style="border-radius:10px;" onclick="addToCart(${i})">
                    Add To Cart <i class="fa-solid fa-cart-plus"></i>
                </div>
            </div>
        </div>
        `);
}

document.addEventListener("DOMContentLoaded", function() {
    let sectionPackege=document.getElementById('packge');
    if (sectionPackege) {
        for (let i = 0; i < packge.length; i++) {
            sectionPackege.innerHTML += card(i); // إضافة كل منتج 
        }
    }

    get_cart_number()
});

function showDetailes(id){
    id=4;
    // window.location.href=`${packge[id].description}`;
    window.location.href=`packges/semester${id}.html`;    
}



function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(packge[productId]);
    localStorage.setItem('cart', JSON.stringify(cart));
    let count = JSON.parse( localStorage.getItem('cart') )
    get_cart_number();
}

function get_cart_number(){
    if(localStorage.getItem('cart')){
        let count = JSON.parse( localStorage.getItem('cart') )
        document.getElementById('cartCounter').innerHTML=`<i class="fa-solid fa-cart-plus h5 p-2  bg-success" style="border-radius:20px"> ${count.length} `;
      }
}
