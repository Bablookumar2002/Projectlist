import {v4 as uuid} from "https://jspm.dev/uuid";
export const products=[
    {
        _id:"001",
        name:"mens checked shirt",
        img:"https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/l/0/4/xxl-r-petal-pink-stoneberg-original-imageum8qmynhwnz.jpeg?q=70",
        alt:"mens shirt",
        newPrice:1750,
        oldPrice:2499,
        discount:67,
        size:"L",
        idealFor:"men",
        rating:3.2,
        brand:"Nike"
    },
    {
        _id:"002",
        name:"women crop top ",
        img:"https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/l/0/4/xxl-r-petal-pink-stoneberg-original-imageum8qmynhwnz.jpeg?q=70",
        alt:"women crop top",
        newPrice:750,
        oldPrice:1499,
        discount:67,
        size:"L",
        idealFor:"women",
        rating:1.2,
        brand:"Roadster"
    },
    {
        _id:"003",
        name:"women tShirt ",
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/1/s/n/l-re-oversize-512-fabflee-original-imagtguvx3juwgva.jpeg?q=70",
        alt:"women tShirt",
        newPrice:1750,
        oldPrice:2499,
        discount:67,
        size:"L",
        idealFor:"women",
        rating:4.2,
        brand:"puma"
    },
    {
        _id:"004",
        name:"women jeans ",
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/o/k/w/30-ptjn000035-tokyo-talkies-original-imagtuaahhttwqhp.jpeg?q=70",
        alt:"women jeans",
        newPrice:1550,
        oldPrice:3499,
        discount:80,
        size:"L",
        idealFor:"women",
        rating:2.5,
        brand:"HMM"
    },
    {
        _id:"005",
        name:"women sneaker ",
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/1/k/5-rll018-red-tape-white-mint-original-imagw6vhgkcrnu4u.jpeg?q=70",
        alt:"women sneaker",
        newPrice:1000,
        oldPrice:1999,
        discount:61,
        size:"L",
        idealFor:"women",
        rating:4.4,
        brand:"Puma"
    },
    {
        _id:"006",
        name:"women kurti",
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/2/y/0/s-ku767grn-mokshi-original-imagk5myfhduxgfq.jpeg?q=70",
        alt:"women kurti",
        newPrice:2750,
        oldPrice:5499,
        discount:67,
        size:"L",
        idealFor:"women",
        rating:3.2,
        brand:"Rupa"
    },
    {
        _id: "007",
        name: "tshirt",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/q/c/s-tu-ost-001-wht-s-579-pronk-original-imagyh3kgdgrtsby.jpeg?q=70",
        alt: "tshirt",
        newPrice: 999,  // Example price, change as needed
        oldPrice: 1999, // Example old price, change as needed
        discount: 50,   // Example discount, change as needed
        size: "M",
        idealFor: "unisex",
        rating: 4.5,
        brand: "Pronk"
    },
    {
        _id:"008",
        name: "tshirt",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/a/o/n/s-fs49-blue-fire-leotude-original-imagppekxuwjhw86.jpeg?q=70",
        alt: "tshirt",
        newPrice: 899,  // Example price, change as needed
        oldPrice: 1799, // Example old price, change as needed
        discount: 50,   // Example discount, change as needed
        size: "M",
        idealFor: "men",
        rating: 1.3,
        brand: "Leotude"
    },
    {
        _id: "009",
        name: "tshirt",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/5/q/m-t434hs-blwh-eyebogler-original-imahy8mj4nzqjmmj.jpeg?q=70",
        alt: "tshirt",
        newPrice: 799,  // Example price, change as needed
        oldPrice: 1599, // Example old price, change as needed
        discount: 50,   // Example discount, change as needed
        size: "M",
        idealFor: "men",
        rating: 4.4,
        brand: "Eyebogler"
    },
    {
        _id: "010",
        name: "earbud",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/1/x/j/-original-imagsgfbgrfhy7vm.jpeg?q=70",
        alt: "earbud",
        newPrice: 2999,  // Example price, change as needed
        oldPrice: 4999,  // Example old price, change as needed
        discount: 40,    // Example discount, change as needed
        rating: 2.2,
        brand: "BrandX"
    },
    {
        _id: "011",
        name: "headphone",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/c/a/sh12-premium-bluetooth-headset-with-noise-cancelation-technology-original-imahfj7tjfngyezy.jpeg?q=70",
        alt: "headphone",
        newPrice: 1499,  // Example price, change as needed
        oldPrice: 2999,  // Example old price, change as needed
        discount: 50,    // Example discount, change as needed
        rating: 4.1,
        brand: "BrandY"
    },
    {
        _id: "012",
        name: "headphone",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/h/e/h/buds-3-e509a-oneplus-original-imagwynyzms78bsg.jpeg?q=70",
        alt: "headphone",
        newPrice: 3499,  // Example price, change as needed
        oldPrice: 4999,  // Example old price, change as needed
        discount: 30,    // Example discount, change as needed
        rating: 3.3,
        brand: "OnePlus"
    },
    {
        _id: "013",
        name: "shoe",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70",
        alt: "shoe",
        newPrice: 1999,  // Example price, change as needed
        oldPrice: 3999,  // Example old price, change as needed
        discount: 50,    // Example discount, change as needed
        size: "9",
        idealFor: "men",
        rating: 4.0,
        brand: "BrandZ"
    },
    {
        _id: "014",
        name: "sneaker",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/b/g/6-na-224-labbin-black-original-imagzh4sm6tza6yk.jpeg?q=70",
        alt: "sneaker",
        newPrice: 2499,  // Example price, change as needed
        oldPrice: 4999,  // Example old price, change as needed
        discount: 50,    // Example discount, change as needed
        size: "8",
        idealFor: "unisex",
        rating: 2.2,
        brand: "Labbin"
    },
    {
        _id: "015",
        name: "shoe",
        img: "https://rukminim2.flixcart.com/image/612/612/kynb6vk0/shoe/p/a/m/6-c214-6-amico-white-original-imagau26jsddjmvg.jpeg?q=70",
        alt: "shoe",
        newPrice: 2299,  // Example price, change as needed
        oldPrice: 4599,  // Example old price, change as needed
        discount: 50,    // Example discount, change as needed
        size: "9",
        idealFor: "men",
        rating: 4.1,
        brand: "Amico"
    },
    {
        _id: "016",
        name: "shoe",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/d/o/e/9-5g-845-campus-mod-blu-wht-original-imag4g3xnanhz7zk-bb.jpeg?q=70",
        alt: "shoe",
        newPrice: 2599,  // Example price, change as needed
        oldPrice: 5199,  // Example old price, change as needed
        discount: 50,    // Example discount, change as needed
        size: "10",
        idealFor: "men",
        rating: 1.3,
        brand: "Campus"
    }    
];
