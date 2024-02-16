let db = [
    {
        id: 1,
        name: 'Nike Air',
        price: 180
    },
    {
        id: 2,
        name: 'Air Jordan',
        price: 199
    },
    {
        id: 3,
        name: 'Nike Netro',
        price: 135
    },
    {
        id: 4,
        name: 'Air Spain',
        price: 149
    }
];


for (let el of db) {
    $('.productContainer').append(`<div class="productItem">
    <img src="./img/favpng_nike-air-max-270-womens-shoe-nike-wmns-air-max-270-flyknit-womens-sports-shoes3.png" alt="3">
    </div>
    <h3>${el.name}</h3>
    <p>${el.price}</p>
    <button class="addItem" id="${el.id}">Add to cart</button>`);
}


let cartList = [];
$('.addItem').click((e) => {

    for (let el of db) {
        if (el.id == e.target.id) {
            cartList.push(el);
        }
    }

    $('#carts').text(` ${cartList.length}`);
    showCartInner(cartList);
})

function showCartInner(cartList) {
    $('.cartPopupContainer').empty();
    for (let el of cartList) {
        $('.cartPopupContainer').append(`<div>${el.name}</div>`);
    }
}


$('#confirmBtn').click((e) => {
    let data = {
        list: cartList,
        name: $('#username').val(),
        phone: $('#phone').val(),
    }

    axios.post('http://localhost:3000/save-order', data)
})





$('#cart').click(function() { 
    $( '.cartPopup' ).css("display", "flex"  );

}); 



