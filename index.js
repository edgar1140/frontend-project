var PAGE_DATA = {
    products: [
        {
            item: 'Guitar',
            name: 'Ibanez 12 string guitar',
            price: '$299',
            img_url:
                'https://cdn.shopify.com/s/files/1/1898/9465/products/IBAAEG1812IIDVS-2_800x.jpg?v=1494014153',
            stock: 65
        },
        {
            item: 'Drum',
            name: 'DW 7pc drumset',
            price: '$7,158',
            img_url:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRe2X7JbdFzmB_-kghXgrjMlri_WMTgYMxvDAvGT2zL1BBocN0bUfpqkJ9x-4R2YC0QAQQi0URc&usqp=CAE',
            stock: 15
        },
        {
            item: 'Accordions',
            name: 'Hohner Panther HA3100FB FBbEb',
            price: '$499',
            img_url:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQk1MfKYtfr1aV1xNww8Ss7D4JNmZGfRlHgJUuxzQrKlqIBFGeqguZy4KzLK--Y9RHpiOuAjbM&usqp=CAE',
            stock: 40
        },
        {
            item: 'Mics',
            name: 'Shure SM58 Vocal Microphone',
            price: '$89.00',
            img_url:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgLCBM99Qf_PsJNpjLJna-7N5_pFqPqcSXK5h2_bcVQ4DbVyqzERUOVDHTiSNtTPCysKEdZcY&usqp=CAE',
            stock: 100
        },
        {
            item: 'Speakers',
            name: 'JBL PRX425 15" Two-Way Loudspeaker System - Black',
            price: '$749.00',
            img_url:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiwrt3W8RizMctNjifgaZk4TT6wX_NZ3OGxZbIhadx_dODkhXt&usqp=CAY',
            stock: 30
        }
    ]
};

function items(inventory) {
    var html = '<h3>' + inventory.item + '</h3>';
    html += '<h3>' + inventory.name + '</h3>';
    html += '<h4> Price: ' + inventory.price + '</h4>';
    html += '<img class="item-picture" src="' + inventory.img_url + '"> ';
    html += '<h4> In-Stock: ' + inventory.stock + '</h4>';
    html +=
        '<i class="fa fa-shopping-cart" aria-hidden="true"></i > <button id="buy-btn"> ADD TO CART!</button><br><hr>';
    return html;
}

function showItems() {
    var html = PAGE_DATA.products.map(function(inventory) {
        return items(inventory);
    });
    $('#items').html(html);
}

function makeItems(item, name, price, stock) {
    return {
        item: item,
        name: name,
        price: price,
        stock: stock
    };
}
$('#submit').on('click', function(event) {
    event.preventDefault();
    var item = $('#item-message').val();
    var name = $('#name-message').val();
    var price = $('#price-message').val();
    var stock = $('#stock-message').val();
    PAGE_DATA.products.splice(0, 0, makeItems(item, name, price, stock));
    showItems();
});

function takeawayStock() {
    $('#buy-btn').on('click', function(event) {
        PAGE_DATA.products.stock -= 1;
    });
}
function main() {
    showItems();
    takeawayStock();
    makeItems();
}

$(main);
