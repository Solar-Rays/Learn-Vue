var app = new Vue({
    el: '#app', 
    data: {
        product: 'Samsung Galaxy Tab S7',
        complement: 'Free charger',
        image: 'https://image-us.samsung.com/SamsungUS/home/mobile/tablets/tab-s6/sm-p610nz/oxford-gray/gallery/1-Lockup-Gallery-1600x1200.jpg?$product-card-small-jpg$',
        inventory: 0,
        price: "#220,000",
        details: ["10.1\"", "Stylish stylus pen", "Amazing media experience", "128GB ROM", "6GB RAM"],
        blue: true,
        green: true,
        red: true,
        variants: [{
            variantId: "225ab",
            variantColorCode: "lightblue",
            variantColor: "Angora Blue",
            variantPrice: "#215,000",
            variantImage: 'https://image-us.samsung.com/SamsungUS/home/mobile/tablets/tab-s6/sm-p610nz/angora-blue/gallery/1-SM-P615_008_Dynamic_Blue-Gallery-1600x1200.jpg?$product-card-small-jpg$'
        },
        {
            variantId: "225og",
            variantColorCode: "darkgrey",
            variantColor: "Oxford Grey",
            variantPrice: "#220,000",
            variantImage: "https://image-us.samsung.com/SamsungUS/home/mobile/tablets/tab-s6/sm-p610nz/oxford-gray/gallery/1-Lockup-Gallery-1600x1200.jpg?$product-card-small-jpg$"
        },
        {
            variantId: "225cr",
            variantColorCode: "pink",
            variantColor: "Chiffon Rose",
            variantPrice: "#215,000",
            variantImage: "https://image-us.samsung.com/SamsungUS/home/mobile/tablets/tab-s6/sm-p610nz/chiffon-rose/gallery/1-SM-P615_002_Back_Pink-Gallery-1600x1200.jpg?$product-card-small-jpg$"
        }
    ],
        cart: 0,
    },
    methods: {
        addToCart(){
            if (this.inventory >=1){
                this.cart += 1
            } else {
                null
            }
        },
        removeFromCart() {
            if (this.cart > 0 ) {
            this.cart -= 1
            } else {null}
          },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})