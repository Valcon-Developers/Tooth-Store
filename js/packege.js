let packge=[
    {id:300,title:"Semester 1",price:510,price2:"",source:"imgs/Box.jpg",description: "packges/semester1.pdf",order:""},
    {id:301,title:"Semester 3",price:11390,price2:"",source:"imgs/Box.jpg",description: "packges/semester3.pdf",order:"التوصيل مجانا"},
    {id:302,title:"Semester 4",price:5650,price2:"",source:"imgs/Box.jpg",description: "packges/semester4.pdf",order:""},
    {id:303,title:"Full Year 2",price:16650,price2:"",source:"imgs/Box.jpg",description: "packges/year2.pdf",order:"البوكس هدية"},
    {id:304,title:"Semester 5",price:6860,price2:"",source:"imgs/Box.jpg",description: "packges/semester5.pdf",order:""},
    {id:305,title:"Semester 6",price:1270,price2:"",source:"imgs/Box.jpg",description: "packges/semester6.pdf",order:""},
    {id:306,title:"Full Year 3",price:8130,price2:"",source:"imgs/Box.jpg",description: "packges/year3.pdf",order:""},
    
    
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
            ${packge[i].order ? `<h5 class='alert alert-success' style="border-radius:15px">${packge[i].order}</h5>` : ""}
            <div class="card-title h5 search-title">${packge[i].title}</div>
            <h5 style="text-decoration: line-through;">${packge[i].price2}</h5>
            <div class="card-text h5">${packge[i].price} EGP</div>
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

function showDetailes(i){
window.open(packge[i].description, "_blank");   
}



function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // جلب المنتج المطلوب
    let selectedProduct = packge[productId];

    // البحث عن المنتج داخل السلة
    let existingProduct = cart.find(item => item.id === selectedProduct.id);

    if (existingProduct) {
        // لو المنتج موجود: زوّد الكمية
        existingProduct.amount += 1;
    } else {
        // لو المنتج جديد: ضيفه بالسلة مع amount = 1
        selectedProduct.amount = 1;
        cart.push(selectedProduct);
    }

    // حفظ التغييرات
    localStorage.setItem('cart', JSON.stringify(cart));

    // تحديث عدد السلة
    get_cart_number();
}

function get_cart_number(){
    if(localStorage.getItem('cart')){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = 0;
        
        for(let i = 0; i < cart.length; i++){
            totalItems += cart[i].amount || 1;  
        }
        document.getElementById('cartCounter').innerHTML=`<i class="fa-solid fa-cart-plus h5 p-2  bg-success" style="border-radius:20px"> ${totalItems} `;
      }
}


