const products = [
    {'id': 1, 'name' : 'Zapatillas Vans Skate Grosso Mid Navy Orange', 'image' : 'https://cdn.skatespain.com/media/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/z/v/zva350-zapatillas-vans-skate-grosso-mid-navy-orange.jpg', 'price' : '19,90'},
    {'id': 2, 'name' : 'Cruiser Santa Cruz Classic Wave Splice 8.8 x 27.7', 'image' : 'https://cdn.skatespain.com/media/catalog/product/cache/1/image/800x/602f0fa2c1f0d1ba5e241f914e856ff9/c/r/crsanta025-cruiser-santa-cruz-classic-wave-splice-8.8x27.7.jpg', 'price' : '169,90'},
    {'id': 3, 'name' : 'Gorro Element Dusk Canyon Khaki', 'image' : 'https://cdn.skatespain.com/media/catalog/product/cache/1/small_image/667.8x/602f0fa2c1f0d1ba5e241f914e856ff9/g/e/gel098-gorro-element-dusk-canyon-khaki.jpg', 'price' : '19,90'},
    {'id': 4, 'name' : 'Tabla Skate Welcome Triger Dark Lord White Dip 9.75', 'image' : 'https://cdn.skatespain.com/media/catalog/product/cache/1/small_image/667.8x/602f0fa2c1f0d1ba5e241f914e856ff9/t/w/twel016-tabla-skate-welcome-triger-dark-lord-white-dip-9.75_1.jpg', 'price' : '91,90'},
    {'id': 5, 'name' : 'Camiseta Volcom Mindbottle LSE White', 'image' : 'https://cdn.skatespain.com/media/catalog/product/cache/1/small_image/667.8x/602f0fa2c1f0d1ba5e241f914e856ff9/c/v/cvo360-camiseta-volcom-mindbottle-lse-white_1.jpeg', 'price' : '27,92'},
    {'id': 6, 'name' : 'Zapatillas Vans Wayvee Tyson Peterson Black Asphalt', 'image' : 'https://cdn.skatespain.com/media/catalog/product/cache/1/small_image/667.8x/602f0fa2c1f0d1ba5e241f914e856ff9/z/v/zva351-zapatillas-vans-wayvee-tyson-peterson-black-asphalt.jpg', 'price' : '99,90'},
    {'id': 7, 'name' : 'Mochila Vans Realm Flying V Backpack Powder Pink', 'image' : 'https://cdn.skatespain.com/media/catalog/product/cache/1/small_image/667.8x/602f0fa2c1f0d1ba5e241f914e856ff9/m/v/mva475-mochila-vans-realm-flying-v-powder-pink.jpg', 'price' : '44,90'},
    {'id': 8, 'name' : 'Sudadera HUF Hot Dice Triple Triangle Natural', 'image' : 'https://cdn.skatespain.com/media/catalog/product/cache/1/small_image/667.8x/602f0fa2c1f0d1ba5e241f914e856ff9/s/h/shuf016-sudadera-huf-hot-dice-triple-triangle-natural.jpg', 'price' : '84,90'}
]

export const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 4000)
})
