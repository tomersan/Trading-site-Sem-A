let hamburger = document.querySelector('.fa-bars')
let closenav = document.querySelector('#closenavbar')

hamburger.addEventListener('click', openNav)
hamburger.addEventListener('click', disableScroll)
closenav.addEventListener('click', closeNav)
closenav.addEventListener('click', enableScroll)


function openNav() {
    document.querySelector('#main_menu').classList.add('show')
    document.querySelector('.navigation_bar').classList.add('show')
    hamburger.classList.add('active');
    closenav.classList.add('active');

}

function closeNav() {
    document.querySelector('#main_menu').classList.remove('show')
    document.querySelector('.navigation_bar').classList.remove('show')
    hamburger.classList.remove('active');
    closenav.classList.remove('active');
    enableScroll()
}

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}


let heart = document.querySelector('#heart_nav')
let closeh = document.querySelector('#closeH')
let modalheart = document.querySelector('.modalheart')
let blackbgmh = document.querySelector('.blackbgmh')



heart.addEventListener('click', openMylist)
closeh.addEventListener('click', openMylist)
blackbgmh.addEventListener('click', openMylist)

function openMylist(e) {

    e.preventDefault()
    modalheart.classList.toggle('show')
    blackbgmh.classList.toggle('show')
}


let cart = document.querySelector('#basket')
let closecart = document.querySelector('.titlecart .fa-times')
let modalcart = document.querySelector('.modalcart')
let blackc = document.querySelector('.blackc')


cart.addEventListener('click', opencart)
closecart.addEventListener('click', opencart)
blackc.addEventListener('click', opencart)


function opencart(e) {

    modalcart.classList.toggle('show')
    blackc.classList.toggle('show')
}



let iconSearch1 = document.querySelector('.fa-search')

iconSearch1.addEventListener('click', openSearch)
Close_search.addEventListener('click', CloseSearch)



function openSearch() {
    document.querySelector('.search-input').classList.add('show')
    Close_search.classList.add('show')

}

function CloseSearch() {
    document.querySelector('.search-input').classList.remove('show')
    Close_search.classList.remove('show')

}


let AddPlus = document.querySelector('.Add_nav .fa-plus')
let AddNavPopup = document.querySelector('.Addnav_popup')
let AddNav = document.querySelector('.Add_nav')
let HeartNav = document.querySelector('#heart_nav')
let BasketNav = document.querySelector('#basket')
let blackbg = document.querySelector('.blackbg')

AddPlus.addEventListener('click', openAddNews)
blackbg.addEventListener('click', openAddNews)

function openAddNews() {
    AddNavPopup.classList.toggle('show')
    AddPlus.classList.toggle('show')
    blackbg.classList.toggle('show')
    BasketNav.classList.remove('align')
    HeartNav.classList.remove('align')


}

function RemoveAddNav() {
    AddNav.style.display = 'none'
    AddNavPopup.style.display = 'none'
    BasketNav.classList.add('align')
    HeartNav.classList.add('align')
}

let heart2 = document.querySelectorAll('.card_icon .fa-heart')

for (let i = 0; i < heart2.length; i++) {
    heart2[i].addEventListener('click', colorHeart)

    function colorHeart(event) {
        heart2[i].classList.toggle('active')
    }

}


let counterInput = document.querySelector('.counter input')
let counterButton = document.querySelectorAll('.counter button')

for (let i = 0; i < counterButton.length; i++) {
    counterButton[i].addEventListener('click', plusminus)
}

function plusminus(event) {
    let value = event.target.value
    if (value == '+' && counterInput.value < 20) {

        counterInput.value++

    }
    if (value == '-' && counterInput.value > 0) {
        counterInput.value--
    }

}


let rightArrow = document.querySelector('.images-product .fa-chevron-right')
let leftArrow = document.querySelector('.images-product .fa-chevron-left')
let red = document.querySelector('#red')
let black = document.querySelector('#black')
let white = document.querySelector('#white')
let yellow = document.querySelector('#yellow')
let camel = document.querySelector('#camel')
let beige = document.querySelector('#beige')

if (rightArrow, leftArrow) {
    rightArrow.addEventListener('click', slidernext)
    leftArrow.addEventListener('click', slidernext)
    if (red)
        red.addEventListener('click', changecolor)
    if (black)
        black.addEventListener('click', changecolor)
    if (white)
        white.addEventListener('click', changecolor)
    if (yellow)
        yellow.addEventListener('click', changecolor)
    if (camel)
        camel.addEventListener('click', changecolor)
    if (beige)
        beige.addEventListener('click', changecolor)


    let i = 0;

    let imageArray = document.querySelectorAll('.images-product img')

    function slidernext(event) {
        for (let i = 0; i < imageArray.length; i++) {
            imageArray[i].style.display = 'none'


        }

        if (i == imageArray.length - 1) {
            imageArray[i].style.display = 'none'

            i = 0
            imageArray[i].style.display = 'block'


            return
        }
        imageArray[i].style.display = 'none'
        imageArray[i + 1].style.display = 'block'
        i++

    }



    function sliderback(event) {

        for (let i = 0; i < imageArray.length; i++) {
            imageArray[i].style.display = 'none'


        }

        if (i == 0) {
            imageArray[i].style.display = 'none'

            i = imageArray.length - 1
            imageArray[i].style.display = 'block'


            return
        }
        imageArray[i].style.display = 'none'
        imageArray[i - 1].style.display = 'block'
        i--
    }

    function changecolor(event) {

        eventdataset = event.target.dataset.color

        for (let i = 0; i < imageArray.length; i++) {
            imageArray[i].style.display = 'none'
        }

        for (let i = 0; i < imageArray.length; i++) {
            if (eventdataset == imageArray[i].dataset.imagecolor) {
                imageArray[i].style.display = 'block'
            }


        }


    }
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        document.querySelector(".navigation_bar").classList.add('active');
        document.querySelector(".Add_nav").classList.add('none');
        document.querySelector("#nav-bar").classList.add('active');
        document.querySelector("#heart_nav").classList.add('active');
        document.querySelector("#basket").classList.add('active');
        document.querySelector(".sign-up").classList.add('active');
        document.querySelector(".sign-in").classList.add('active');
        document.querySelector(".contact-us").classList.add('active');
        document.querySelector(".logo").classList.add('active');
        document.querySelector(".navidemo").classList.add('active');
        BasketNav.classList.add('align')
        HeartNav.classList.add('align')



    } else {
        document.querySelector(".navigation_bar").classList.remove('active');
        document.querySelector(".Add_nav").classList.remove('none');
        document.querySelector("#nav-bar").classList.remove('active');
        document.querySelector(".sign-up").classList.remove('active');
        document.querySelector(".sign-in").classList.remove('active');
        document.querySelector(".contact-us").classList.remove('active');
        document.querySelector(".logo").classList.remove('active');
        document.querySelector(".navidemo").classList.remove('active');
        BasketNav.classList.remove('align')
        HeartNav.classList.remove('align')

    }


}



let SignUpOpen = document.querySelector('.sign-up')
let SigninOpen = document.querySelector('.sign-in')
let ModalSignUp = document.querySelector('.modal_sign_in_sign_up')
let CloseModalSignUp = document.querySelector('.modal_sign_in_sign_up .fa-times')
let blackbg1 = document.querySelector('.blackbg1')
SignUpOpen.addEventListener('click', SignUpOpenModal)
SigninOpen.addEventListener('click', SignUpOpenModal)
CloseModalSignUp.addEventListener('click', SignUpOpenModal)
blackbg1.addEventListener('click', SignUpOpenModal)

function SignUpOpenModal(e) {
    e.preventDefault()

    ModalSignUp.classList.toggle('active');
    blackbg1.classList.toggle('show')
    closeNav()
}


let ImageIns = document.querySelectorAll('.ins_image img')
let ModalImage = document.querySelector('.modalimageins img')
let blackbg4 = document.querySelector('.blackbg4')
let close_modal_img = document.querySelector('#close_modal_img')



for (let i = 0; i < ImageIns.length; i++) {

    ImageIns[i].addEventListener('click', openmodalimage)

}
if (blackbg4) {
    blackbg4.addEventListener('click', closemodalimage)
    close_modal_img.addEventListener('click', closemodalimage)

}


function openmodalimage(e) {

    ModalImage.src = e.target.src
    document.querySelector('.modalimageins').classList.add('active')
    close_modal_img.classList.add('active')
    blackbg4.classList.add('show')
}

function closemodalimage() {

    document.querySelector('.modalimageins').classList.remove('active')
    close_modal_img.classList.remove('active')
    blackbg4.classList.remove('show')
    ModalImage.src = ""

}


let leftArrow1 = document.querySelector('.arrow .fa-chevron-left')
let rightArrow1 = document.querySelector('.arrow .fa-chevron-right')
let video = document.querySelector('video')

let ArrayVideo = ["images/סרטון פאולה3.mp4", "images/סרטון פאולה 2.mp4", "images/סרטון.mp4"]

let j = 0

if (rightArrow1 || rightArrow1) {
    leftArrow1.addEventListener('click', changevideo)
    rightArrow1.addEventListener('click', changevideo)
}

function changevideo(e) {


    if (e.target == leftArrow1) {
        if (j == 0) {
            j = ArrayVideo.length - 1
            video.src = ArrayVideo[j]
        } else {
            video.src = ArrayVideo[--j]
        }
    } else {
        if (j == ArrayVideo.length - 1) {
            j = 0
            video.src = ArrayVideo[j]
        } else {
            video.src = ArrayVideo[++j]
        }

    }
}

let DescriptionProduct = document.querySelectorAll('.product_description')
let IconDec = document.querySelectorAll('.fa-info')
let Closedec = document.querySelectorAll('.fa-times-circle')

for (let i = 0; i < IconDec.length; i++) {
    IconDec[i].addEventListener('click', openDec)
}

for (let i = 0; i < IconDec.length; i++) {
    Closedec[i].addEventListener('click', openDec)
}


function openDec(e) {
    for (let i = 0; i < DescriptionProduct.length; i++) {

        if (DescriptionProduct[i].dataset.productid == e.target.dataset.id_pro) {
            DescriptionProduct[i].classList.toggle('active')

        } else if (DescriptionProduct[i].dataset.productid == e.target.dataset.id_close) {
            DescriptionProduct[i].classList.remove('active')
        }

    }
}

let infotiitle = document.querySelectorAll('.moreinfo p')
let info = document.querySelectorAll('.info')

for (let i = 0; i < infotiitle.length; i++) {

    infotiitle[i].addEventListener('click', OpenInfo)
}

function OpenInfo(e) {

    for (let i = 0; i < infotiitle.length; i++) {

        infotiitle[i].style.color = 'black'
        infotiitle[i].style.border = '0px'
    }
    e.target.style.color = 'rgb(134, 1, 23)'
    e.target.style.border = '1px solid black'

    for (let i = 0; i < info.length; i++) {

        info[i].style.display = 'none'
        if (info[i].dataset.info == e.target.dataset.infotmation) {
            info[i].style.display = 'block'
            e.target.style.color = 'rgb(134, 1, 23)'
        }

    }
}


let sortProduct = document.querySelectorAll('.sort .fa-circle')
let ProductsToSort = document.querySelectorAll('.card_item')
let titlePage = document.querySelector('.top_page h4')
let SubtitlePage = document.querySelector('.top_page p')
let sortmodal = document.querySelector('.sort')

if (sortmodal) {
    for (let i = 0; i < sortProduct.length; i++) {

        sortProduct[i].addEventListener('click', SortFunc)

    }

    all.addEventListener('click', ShowALL)
    sortbyopen.addEventListener('click', openSortBy)
    closesortby.addEventListener('click', openSortBy)


    function SortFunc(e) {
        let idsort = e.target.id

        for (let i = 0; i < ProductsToSort.length; i++) {


            if (ProductsToSort[i].dataset["productcategory"] == idsort || ProductsToSort[i].dataset["productcategory1"] == idsort || ProductsToSort[i].dataset.productcategory2 == idsort) {
                ProductsToSort[i].style.display = 'block'
                titlePage.innerHTML = e.target.dataset.name
                SubtitlePage.innerHTML = " דף הבית >>" + " " + e.target.dataset.name
                for (let j = 0; j < sortProduct.length; j++) {
                    sortProduct[j].classList.remove('active')

                }
                e.target.classList.add('active')
            } else {
                ProductsToSort[i].style.display = 'none'
                titlePage.innerHTML = e.target.dataset.name
                SubtitlePage.innerHTML = " דף הבית >>" + " " + e.target.dataset.name
                for (let j = 0; j < sortProduct.length; j++) {
                    sortProduct[j].classList.remove('active')

                }
                e.target.classList.add('active')

            }
        }

    }

    function ShowALL() {
        for (let i = 0; i < ProductsToSort.length; i++) {

            ProductsToSort[i].style.display = 'block'

        }
    }

    function openSortBy() {
        sortmodal.classList.toggle('active')

    }
}


let nameuser = document.querySelector('#namewcomm')
let commentssend = document.querySelector('#commuser')
let sendcommbutton = document.querySelector('#sendcomm')
let allcomments = document.querySelector('.comments')
let d = new Date();

if (sendcommbutton) {
    sendcommbutton.addEventListener('click', sendcomm)

    function sendcomm() {
        let commtamplate = `
<div class="container">
<div class="comm">
<div class="headcomments" dir="rtl">
    <div class="imagecomm">
        <i class="fas fa-user"></i>
    </div>
    <div class="name_date">
        <p class="namecomm1">"${nameuser.value}"</p>
        <p class="datecomm">${d.toDateString()}</p>
    </div>
</div>
<div class="footercomm" dir="rtl">
    <p class="comm1">
       "${commentssend.value}"
    </p>
</div>
</div>
</div>

`;

        allcomments.innerHTML += commtamplate
    }
}




let cartbutton = document.querySelector('.buttonadd button');
let products = {

    18: {
        name: "נעל עקב יולי",
        price: 399,
        inCart: 0,
        tag: "shoe(1)"
    },
    19: {
        name: "כפכף אדל",
        price: 399,
        inCart: 0,
        tag: "shoe(2)"
    },
    20: {
        name: "כפכף מאיה",
        price: 199,
        inCart: 0,
        tag: "shoe(3)"
    },
    21: {
        name: "כפכף ירדן",
        price: 399,
        inCart: 0,
        tag: "shoe(4)"
    }



}

if (cartbutton) {
    cartbutton.addEventListener('click', () => {
        cartNumbers(products[cartbutton.dataset.productid])
        totalCost(products[cartbutton.dataset.productid])
    })

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.inmodal').textContent = productNumbers
    }
}

function cartNumbers(product) {
    let qnt = Number(document.querySelector('.Pcount').value);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + qnt)
        document.querySelector('.inmodal').textContent = productNumbers + qnt
    } else {
        localStorage.setItem('cartNumbers', qnt)
        document.querySelector('.inmodal').textContent = qnt
    }

    setItem(product)

}

function setItem(product) {
    let qnt = Number(document.querySelector('.Pcount').value);
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += qnt
    } else {
        product.inCart = qnt;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product) {
    let qnt = Number(document.querySelector('.inmodal').innerHTML);

    let cartCost = localStorage.getItem('totalCost')

    if (cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", qnt * product.price)
        document.querySelector(".totalprice").innerHTML = ''
        displayCart()
    } else {
        localStorage.setItem("totalCost", qnt * product.price)
        displayCart()
    }
}


function displayCart() {
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".content-cart")
    let Payments = document.querySelector(".totalprice")
    let cartCost = localStorage.getItem('totalCost')

    if (cartItems && productContainer) {
        productContainer.innerHTML = ''
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class ="product-item">
        <div class = "image">
        <img src="/products/${item.tag}.jpg" width="100" alt="">
        </div>
        <div class="description">
        <div class="title">${item.name}</div>
        <div class="Price">מחיר: ₪${item.price}</div>
        <div class="Quantity">כמות: ${item.inCart}</div>
        </div>
        </div>
        `
        })
        Payments.innerHTML += `
      <div class ="BasketTotalContainer">
      <h4 class="basketTotalTitel">
      סה"כ לתשלום
      </h4>
      <h4 class="BasketTotal">
      ₪${cartCost}.00
      </h4>

      </div>
      `
        document.querySelector('.inmodal').style.display = "block"
        document.querySelector('.clearall').style.display = "block"
    }
}

items = localStorage.getItem("productsInCart")

if (items) {
    displayCart()
}
onLoadCartNumbers()

let deleteitms = document.querySelector('.clearall')

deleteitms.addEventListener('click', removeitems)

function removeitems() {
    localStorage.clear()
    document.querySelector(".content-cart").innerHTML = ''
    document.querySelector(".totalprice").innerHTML = ''
    document.querySelector(".inmodal").innerHTML = '0'
    document.querySelector('.inmodal').style.display = "none"
    document.querySelector('.clearall').style.display = "none"
}

if (document.querySelector('.inmodal').innerHTML == "0") {
    document.querySelector('.inmodal').style.display = "none"
    document.querySelector('.clearall').style.display = "none"

}






let products2 = {
    18: {
        name: 'נעל עקב יולי',
        price: 399.90,
        image: "images/סנדל יולי שחור.jpg"
    },
    19: {
        name: 'נעל עקב אדל',
        price: 399.90,
        image: "images/אדל שחור.jpg"
    },
    20: {
        name: 'נעל עקב ירדן',
        price: 399.90,
        image: "images/ירדן מנוחש.jpg"
    },
    21: {
        name: 'כפכף מאיה',
        price: 399.90,
        image: "images/כפכף מאיה.jpg"
    }

}


let addtowish = document.querySelectorAll('.card_icon .fa-heart')

let productsInStorage = localStorage.getItem('products');

if (productsInStorage) {

    let products = JSON.parse(productsInStorage)

    for (item in products) {
        createItemInMiniCart(item, products[item]);
    }

} else {
    document.querySelector('.innerheart').innerHTML = '<p id="no_product">רשימת המשאלות ריקה</p>';
}


function createItemInMiniCart(id) {
    let productItem = products2[id];
    let no_product = document.querySelector('#no_product')

    if (no_product) {
        no_product.style.display = 'none'
    }

    let productItemHTML = `
        <div id="item-${id}" class="product-item" data-iditemcart="${id}">
            <div class="image-product">
                <img src="${productItem.image}" width="100" alt="">
            </div>
            <div class="description">
                <div class="title">${productItem.name}</div>
                <div class="price">מחיר: ₪${productItem.price}</div>
            </div>
        </div>
    `;

    document.querySelector('.innerheart').innerHTML = productItemHTML;

}


if (addtowish) {
    for (let i = 0; i < addtowish.length; i++) {

        addtowish[i].addEventListener(
            'click',
            addProductToCart)

    }
}

function addProductToCart(event) {
    let priductId = event.target.dataset.pid;

    addProductToLocalStorage(priductId);


}

function addProductToLocalStorage(id) {


    if (productsInStorage != null) {

        products = JSON.parse(productsInStorage)

        if (products[id]) {
            let count = 0;
            let newCount = 0;
            products[id] = 0;
            let obj1 = {};
            obj1[id] = 0;
            let myJSON1 = JSON.stringify(obj1);
            localStorage.setItem('products', myJSON1);

        }
    } else {
        let obj = {};
        obj[id] = 0;
        let myJSON = JSON.stringify(obj);
        localStorage.setItem('products', myJSON);
        createItemInMiniCart(id);
    }

}

let deleteitms1 = document.querySelector('.clearall1')

deleteitms1.addEventListener('click', removeitems1)

function removeitems1() {
    localStorage.clear()
    document.querySelector(".innerheart").innerHTML = ''
}


window.addEventListener(
    'scroll',
    function() {
        let screenHeight = (window.innerHeight/2 ) ;

        let currentPosition = window.scrollY;

        if ( screenHeight < currentPosition ){
                document.querySelector('.back_to_top').classList.add('show');
        } else {
            document.querySelector('.back_to_top').classList.remove('show');
        }
    }
)

document.querySelector('.back_to_top').addEventListener(
    'click',
    function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
)


