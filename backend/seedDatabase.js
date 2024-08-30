const ClothingItem = require("./models/ClothingItem");


module.exports =  async function seedDatabase() {
    await ClothingItem.deleteMany({});

    const items = [
        { name: 'Red T-Shirt', price: '$19.99', image: 'https://assets.ajio.com/medias/sys_master/root/20230321/Xz4c/6419bc35aeb26924e3e7c617/-473Wx593H-465951514-red-MODEL.jpg' },
        { name: 'Blue Jeans', price: '$49.99', image: 'https://5.imimg.com/data5/ANDROID/Default/2023/1/YH/XJ/GI/107973193/product-jpeg-500x500.jpg' },
        { name: 'Black Leather Jacket', price: '$199.99', image: 'https://4.imimg.com/data4/DN/XV/FUSIONI-14690705/prod-image.jpg' },
        { name: 'White Sneakers', price: '$89.99', image: 'https://5.imimg.com/data5/ECOM/Default/2024/7/432307928/CX/TR/ZM/60095896/10-casual-sports-shoe-maflo-white-original-imagbmv3wxjjaxun-500x500.jpg' },
        { name: 'Green Hoodie', price: '$39.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAe9ObPZL0hKg3TB1o0lioehdjtbuvZF7QcA&s' },
        { name: 'Yellow Summer Dress', price: '$29.99', image: 'https://www.alamodelabel.in/cdn/shop/files/73A90B03-F5FD-4B47-9B0E-A559D4E4AD24_800x.jpg?v=1717502740' },
        { name: 'Grey Sweatpants', price: '$34.99', image: 'https://media.istockphoto.com/id/1314274760/photo/sport-pants.jpg?s=612x612&w=0&k=20&c=2siBA_21V8CbWXUfQ7ttUqW7ZOzs_d2yjSK8jEtvLw4=' },
        { name: 'Blue Denim Jacket', price: '$109.99', image: 'https://5.imimg.com/data5/ECOM/Default/2022/6/CE/BW/ON/152906631/product-image-1738817731-600x600-3-500x500.jpg' },
        { name: 'Brown Leather Boots', price: '$149.99', image: 'path_to_image/brown_leather_boots.jpg' },
        { name: 'Purple Scarf', price: '$14.99', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FPaskmlna-Large-Pashmina-Violet-Purple%2Fdp%2FB01H64ENVE&psig=AOvVaw3l9OWS44v4C1hN5USppip7&ust=1725109227063000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiMrv3inIgDFQAAAAAdAAAAABAE' },
        { name: 'Black Beanie', price: '$9.99', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jackjones.in%2F249731402-aztec&psig=AOvVaw2-4eqtGY5maOfweiD4G_sg&ust=1725109307829000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICowqPjnIgDFQAAAAAdAAAAABAE' },
        { name: 'Pink Blouse', price: '$24.99', image: 'https://assets.ajio.com/medias/sys_master/root/20230729/592j/64c4237da9b42d15c9798518/-473Wx593H-466395210-pink-MODEL4.jpg' },
        { name: 'Striped Polo Shirt', price: '$29.99', image: 'https://assets.ajio.com/medias/sys_master/root/20220804/v0hr/62eb77d5f997dd03e220dfc5/-473Wx593H-469097092-mint-MODEL.jpg' },
        { name: 'Grey Suit', price: '$299.99', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fgray-suit&psig=AOvVaw1HaY8x6AKKphMMl7GZpzwB&ust=1725109516849000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDw8_HjnIgDFQAAAAAdAAAAABAE' },
        { name: 'Blue Cap', price: '$14.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_hAqMujvhmaETN2LKk0rYNNSn5SCfNBp-g&s' },
        { name: 'Red High Heels', price: '$79.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FBOiMO5-I30TNDLxpYwbV9y4kZrSuLXtmg&s' },
        { name: 'White Turtleneck', price: '$34.99', image: 'https://assets.ajio.com/medias/sys_master/root/20201221/jGY6/5fe03ddcaeb269d5634a9526/-473Wx593H-460780916-offwhite-MODEL.jpg' },
        { name: 'Floral Skirt', price: '$39.99', image: 'https://5.imimg.com/data5/AT/KV/MY-18575989/floral-printed-silk-skirt-500x500.jpg' },
        { name: 'Yellow Raincoat', price: '$59.99', image: 'path_to_image/yellow_raincoat.jpg' },
        { name: 'Green Cargo Pants', price: '$44.99', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fyellow-raincoat&psig=AOvVaw2mqXJvRy7BNXX41SfPHyHt&ust=1725109817666000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjk44DlnIgDFQAAAAAdAAAAABAE' },
        { name: 'Orange Tank Top', price: '$19.99', image: 'https://bangclothes.com/cdn/shop/products/IMPACT-ORANGE-Tank-Top-Bang-Clothes-Men-Swimwear-Swimsuits-1_750x.jpg?v=1648504278' },
        { name: 'Brown Sandals', price: '$49.99', image: 'https://ik.imagekit.io/4cxhrqidy/image/tr:e-sharpen-01,h-1100,w-1300,cm-pad_resize/data/florsheim/img/870824-7.jpg' },
        { name: 'Black Dress', price: '$89.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy94QR2yj1b7c93uzdXD8iOeZgT1B0wW0cFw&s' },
        { name: 'White Tennis Skirt', price: '$24.99', image: 'https://rukminim2.flixcart.com/image/750/900/kggviq80/skirt/z/y/c/m-pf-skirt03-purna-fashion-original-imafwzgbzjnq36gg.jpeg?q=20&crop=false' },
        
        { name: 'Navy Blue Blazer', price: '$199.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8TAvfOekJvYE3Kf7Dm2Npw97BikwEUkwgw&s' },
        { name: 'Red Sports Bra', price: '$24.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6s6Do0fQMOTRWS_HUupJK8NUcElvbOI1Hw&s' },
        { name: 'Grey Yoga Pants', price: '$34.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRDqc1nKIifqIchBtFEmFYX6ltrnrtAgT0A&s' },
        { name: 'Blue Workout Shorts', price: '$19.99', image: 'https://images.meesho.com/images/products/431142826/x4h4q_512.webp' },
        { name: 'White Running Shoes', price: '$99.99', image: 'https://www.jiomart.com/images/product/original/463855468005/campus-runner-white-running-shoes-for-men-product-images-463855468005-0-202408271406.jpg?im=Resize=(1000,1000)' }
    ];
    
    await ClothingItem.insertMany(items);
    console.log('Database seeded!');
}


