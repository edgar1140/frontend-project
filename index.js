var PAGE_DATA = {
    Guitar: {
        name: 'ibanez 12 string guitar',
        price: '$299',
        img_url:
            'https://cdn.shopify.com/s/files/1/1898/9465/products/IBAAEG1812IIDVS-2_800x.jpg?v=1494014153',
        stock: 65
    }
    //     Drums: {
    //         name: 'DW 7pc drumset',
    //         price: '$7,158',
    //         img_url:
    //             'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRe2X7JbdFzmB_-kghXgrjMlri_WMTgYMxvDAvGT2zL1BBocN0bUfpqkJ9x-4R2YC0QAQQi0URc&usqp=CAE',
    //         stock: 15
    //     },
    //     Accordions: {
    //         name: 'Hohner Panther HA3100FB FBbEb',
    //         price: '$499',
    //         img_url:
    //             'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQk1MfKYtfr1aV1xNww8Ss7D4JNmZGfRlHgJUuxzQrKlqIBFGeqguZy4KzLK--Y9RHpiOuAjbM&usqp=CAE',
    //         stock: 40
    //     },
    //     Mics: {
    //         name: 'Shure SM58 Vocal Microphone',
    //         price: '$89.00',
    //         img_url:
    //             'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgLCBM99Qf_PsJNpjLJna-7N5_pFqPqcSXK5h2_bcVQ4DbVyqzERUOVDHTiSNtTPCysKEdZcY&usqp=CAE',
    //         stock: 100
    //     },
    //     Speakers: {
    //         name: 'JBL PRX425 15" Two-Way Loudspeaker System - Black',
    //         price: '$749.00',
    //         img_url:
    //             'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiwrt3W8RizMctNjifgaZk4TT6wX_NZ3OGxZbIhadx_dODkhXt&usqp=CAY',
    //         stock: 30
    //     }
};

function items() {
    var html =
        '<h3>' +
        PAGE_DATA.Guitar.name +
        '</h3>' +
        PAGE_DATA.Guitar.price +
        '<img class="item-picture" src="' +
        PAGE_DATA.Guitar.img_url +
        '"> ' +
        PAGE_DATA.Guitar.stock +
        ' ';

    return html;
}
function showItems() {
    var html = items();
    $('#items').html(html);
}

function main() {
    items();
    showItems();
}

// function makeItems(chirp) {
//     var chrp = new Date();
//     return {
//         Guitar: {
//             img: 'm',
//             name: 'Raymond Hettinger',
//             username: 'raymondh'
//         },
//         date: {
//             month: chrp.getMonth(),
//             day: chrp.getDate(),
//             year: chrp.getFullYear()
//         },
//         message: chirp
//     };
// }
// $('#post-items').on('submit', function(event) {
//     event.preventDefault();
//     var chirp = $('#item-message').val();
//     PAGE_DATA.chirps.splice(0, 0, showItems(chirp));
//     $('#item-message').val('');
//     showItems();
// });

$(main);
