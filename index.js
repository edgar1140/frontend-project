var data = [
    {
        item: 'Guitar',
        name: 'Ibanez 12 string guitar',
        price: 299.0,
        img_url:
            'https://cdn.shopify.com/s/files/1/1898/9465/products/IBAAEG1812IIDVS-2_800x.jpg?v=1494014153',
        stock: 23
    },
    {
        item: 'Drum',
        name: 'DW 7pc drumset',
        price: 7158.0,
        img_url:
            'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRe2X7JbdFzmB_-kghXgrjMlri_WMTgYMxvDAvGT2zL1BBocN0bUfpqkJ9x-4R2YC0QAQQi0URc&usqp=CAE',
        stock: 15
    },
    {
        item: 'Accordions',
        name: 'Hohner Panther HA3100FB FBbEb',
        price: 499.0,
        img_url:
            'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQk1MfKYtfr1aV1xNww8Ss7D4JNmZGfRlHgJUuxzQrKlqIBFGeqguZy4KzLK--Y9RHpiOuAjbM&usqp=CAE',
        stock: 40
    },
    {
        item: 'Mics',
        name: 'Shure SM58 Vocal Microphone',
        price: 89.0,
        img_url:
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgLCBM99Qf_PsJNpjLJna-7N5_pFqPqcSXK5h2_bcVQ4DbVyqzERUOVDHTiSNtTPCysKEdZcY&usqp=CAE',
        stock: 100
    },
    {
        item: 'Speakers',
        name: 'JBL PRX425 15" Two-Way Loudspeaker System - Black',
        price: 749.0,
        img_url:
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiwrt3W8RizMctNjifgaZk4TT6wX_NZ3OGxZbIhadx_dODkhXt&usqp=CAY',
        stock: 30
    }
];

function items(inventory, index) {
    var html = '<h3>' + inventory.item + '</h3>';
    html += '<h3>' + inventory.name + '</h3>';
    html += '<h4> Price: $' + inventory.price + '</h4>';
    html += '<img class="item-picture" src="' + inventory.img_url + '"> ';
    html += '<h4 id="stk-num"> In-Stock: ' + inventory.stock + '</h4>';
    html += cartbutton(inventory.stock, index);

    return html;
}
function cartbutton(stock, index) {
    if (stock > 0) {
        return (
            '<button class="buy" id="' +
            index +
            '"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to Cart!</button>'
        );
    } else {
        return (
            '<button class="buy" id="' +
            index +
            '" disabled = "disabled" ">SOLD OUT</button>'
        );
    }
}

function showItems() {
    var i = data;
    var html = i.map(function(inventory, index) {
        return items(inventory, index);
    });
    $('#items').html(html);
}

function makeItems(item, name, price, stock, url) {
    return {
        item: item,
        name: name,
        price: price,
        stock: stock,
        img_url: url
    };
}
$('#post-items').on('submit', function(event) {
    event.preventDefault();
    var item = $('#item-message').val();
    var name = $('#name-message').val();
    var price = Number($('#price-message').val());
    var stock = Number($('#stock-message').val());
    var url =
        'https://thumb1.shutterstock.com/display_pic_with_logo/137002/404831254/stock-photo-collage-of-musical-instruments-isolated-on-white-404831254.jpg';
    data.push(makeItems(item, name, price, stock, url));
    $('#item-message').val('');
    $('#name-message').val('');
    $('#price-message').val('');
    $('#stock-message').val('');
    showItems();
    main();
});

var cart = [];
function total(Cart) {
    var total = 0;
    Cart.map(function(checkout) {
        total += checkout.price * 0.07 + checkout.price;
    });
    return Number(total);
}

function showviewCart() {
    var inventory = cart;
    return inventory
        .map(function(checkout) {
            return viewCart(checkout);
        })
        .join('');
}

function cartBadge() {
    $('.badge').html(cart.length);
}

function viewCart(cart) {
    var html = '<h5>';
    html +=
        '<div id="product" class="col-lg-3 cart">' +
        cart.name +
        cart.item +
        ' $' +
        cart.price +
        '</div>';
    return html;
}

function main() {
    showItems();
    makeItems();
    $('.buy').click(function(event) {
        event.preventDefault();
        var i = event.currentTarget.id;
        cart.push(data[i]);
        if (data[i].stock === 0) {
            data[i].stock = 0;
        } else {
            data[i].stock -= 1;
        }
        cartBadge();
        main();
    });
    $('#cart').click(function(event) {
        event.preventDefault();
        $('#post-items').addClass('hide');
        showviewCart();
        $('#items').html(
            showviewCart() +
                '<div class="total">' +
                '<p> Total including 7% tax is: $' +
                total(cart).toFixed(2) +
                '</p>' +
                '</div>'
        );
    });
}

$(main);
