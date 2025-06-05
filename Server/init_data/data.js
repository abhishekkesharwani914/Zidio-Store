if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const Items = require("../models/itemModel");


const initData = [
    // 1
    {
        "title": "Guardians Galaxy Oversized Tee",
        "description": "Black oversized t-shirt featuring 'The dopest ones in the universe' print, celebrating the Guardians of the Galaxy.",
        "category": "Oversized",
        "price": 572,
        "discount": 0,
        "sizes": ["S", "M", "L", "XL", "XXL"],
        "specifications": {
          "fabric": "100% Bio-Washed Cotton",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Oversized",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725970/Gemini_Generated_Image_pl59p5pl59p5pl59_adnseo.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725970/Gemini_Generated_Image_pl59p5pl59p5pl59_adnseo.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725970/Gemini_Generated_Image_pl59p5pl59p5pl59_adnseo.png"
        ]
      },

      //2
      {
        "title": "Avengers Graphic Printed Tee",
        "description": "Black, blue, and red cotton blend t-shirt featuring Avengers graphic print, stylish and casual.",
        "category": "Graphic Printed",
        "price": 267,
        "discount": 0,
        "sizes": ["XS", "S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725963/Gemini_Generated_Image_pl59p6pl59p6pl59_wpyrmb.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725963/Gemini_Generated_Image_pl59p6pl59p6pl59_wpyrmb.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725963/Gemini_Generated_Image_pl59p6pl59p6pl59_wpyrmb.png"
        ]
      },

      //3
      {
        "title": "Superhero Sublimation Polyester Tee",
        "description": "Polyester t-shirt with sublimation print featuring Avengers, Ironman, Superman, and Spiderman.",
        "category": "Graphic Printed",
        "price": 193,
        "discount": 0,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725962/Gemini_Generated_Image_pl59p7pl59p7pl59_plqqob.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725962/Gemini_Generated_Image_pl59p7pl59p7pl59_plqqob.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725861/Gemini_Generated_Image_k2e1o2k2e1o2k2e1_riwi6p.png",
        ]
      },

      //4
      {
        "title": "Marvel's Spiderman Oversized Tee",
        "description": "100% cotton oversized t-shirt with front and back Spiderman graphic print.",
        "category": "Oversized",
        "price": 499,
        "discount": 50,
        "sizes": ["XS", "S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Half Sleeves",
          "pattern": "Printed",
          "fit": "Oversized",
          "neck": "Crew Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725945/Gemini_Generated_Image_o3l95ko3l95ko3l9_hoc7yq.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725945/Gemini_Generated_Image_o3l95ko3l95ko3l9_hoc7yq.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725945/Gemini_Generated_Image_o3l95ko3l95ko3l9_hoc7yq.png"
        ]
      },

      //5
      {
        "title": "Multicolour Superhero T-Shirt Pack",
        "description": "Pack of 3 multicolour polyester t-shirts featuring various superhero prints.",
        "category": "Graphic Printed",
        "price": 386,
        "discount": 0,
        "sizes": ["S", "M", "L", "XL", "XXL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725963/Gemini_Generated_Image_o3l95jo3l95jo3l9_b4pmyk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725963/Gemini_Generated_Image_o3l95jo3l95jo3l9_b4pmyk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725963/Gemini_Generated_Image_o3l95jo3l95jo3l9_b4pmyk.png"
        ]
      },

      //6
      {
        "title": "Dark Knight Acid Wash Tee",
        "description": "Acid wash t-shirt inspired by Batman's iconic persona.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725891/Gemini_Generated_Image_h3y44hh3y44hh3y4_ksagmt.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725891/Gemini_Generated_Image_h3y44hh3y44hh3y4_ksagmt.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725891/Gemini_Generated_Image_h3y44hh3y44hh3y4_ksagmt.png"
        ]
      },

      //7
      {
        "title": "House Stark Polo T-Shirt",
        "description": "Polo t-shirt featuring the House Stark emblem from Game of Thrones.",
        "category": "Polo T-Shirts",
        "price": 599,
        "discount": 14,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Embroidered",
          "fit": "Regular",
          "neck": "Polo Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png"
        ]
      },

      //8
      {
        "title": "Superman Sleeveless Tee",
        "description": "Sleeveless t-shirt with Superman's iconic 'S' logo.",
        "category": "Sleeveless",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Sleeveless",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725978/Gemini_Generated_Image_h3y44gh3y44gh3y4_gpkie6.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725978/Gemini_Generated_Image_h3y44gh3y44gh3y4_gpkie6.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725978/Gemini_Generated_Image_h3y44gh3y44gh3y4_gpkie6.png"
        ]
      },

      //9
      {
        "title": "Captain America Long Sleeve Tee",
        "description": "Long sleeve t-shirt featuring Captain America's shield.",
        "category": "Long Sleeve",
        "price": 799,
        "discount": 20,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725823/Gemini_Generated_Image_h3y44kh3y44kh3y4_ztxgu4.png"
        ]
      },

      //10
      {
        "title": "Iron Man Henley T-Shirt",
        "description": "Henley t-shirt with Iron Man's arc reactor design.",
        "category": "Henley",
        "price": 699,
        "discount": 15,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Henley Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725918/Gemini_Generated_Image_o3l95po3l95po3l9_zqr5vw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725918/Gemini_Generated_Image_o3l95po3l95po3l9_zqr5vw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725918/Gemini_Generated_Image_o3l95po3l95po3l9_zqr5vw.png"
        ]
      },

      //11
      {
        "title": "Spider-Man Hooded T-Shirt",
        "description": "Hooded t-shirt featuring Spider-Man's web design.",
        "category": "Hooded",
        "price": 899,
        "discount": 25,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Hooded",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_o3l95ro3l95ro3l9_ox70nq.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_o3l95ro3l95ro3l9_ox70nq.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_o3l95ro3l95ro3l9_ox70nq.png"
        ]
      },

      //12
      {
        "title": "Wonder Woman Crop Top",
        "description": "Crop top featuring Wonder Woman's emblem.",
        "category": "Crop Tops (for women)",
        "price": 549,
        "discount": 18,
        "sizes": ["XS", "S", "M", "L"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Slim",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png"
        ]
      },

      //13
      {
        "title": "Flash Acid Wash Tee",
        "description": "Acid wash t-shirt with Flash's lightning bolt symbol.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png"
        ]
      },

      //14
      {
        "title": "Green Lantern Solid Color Tee",
        "description": "Solid green t-shirt representing Green Lantern's theme.",
        "category": "Solid Color",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Solid",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_xly96bxly96bxly9_yex49p.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_xly96bxly96bxly9_yex49p.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_xly96bxly96bxly9_yex49p.png"
        ]
      },

      //15
      {
        "title": "Dark Knight Acid Wash Tee",
        "description": "Acid wash t-shirt inspired by Batman's iconic persona.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725816/Gemini_Generated_Image_h3y44oh3y44oh3y4_lt2zlw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725816/Gemini_Generated_Image_h3y44oh3y44oh3y4_lt2zlw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725816/Gemini_Generated_Image_h3y44oh3y44oh3y4_lt2zlw.png"
        ]
      },

      //16
      {
        "title": "House Stark Polo T-Shirt",
        "description": "Polo t-shirt featuring the House Stark emblem from Game of Thrones.",
        "category": "Polo T-Shirts",
        "price": 599,
        "discount": 14,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Embroidered",
          "fit": "Regular",
          "neck": "Polo Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725839/Gemini_Generated_Image_h3y44lh3y44lh3y4_iixbi7.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725839/Gemini_Generated_Image_h3y44lh3y44lh3y4_iixbi7.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725839/Gemini_Generated_Image_h3y44lh3y44lh3y4_iixbi7.png"
        ]
      },

      //17
      {
        "title": "Superman Sleeveless Tee",
        "description": "Sleeveless t-shirt with Superman's iconic 'S' logo.",
        "category": "Sleeveless",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Sleeveless",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png"
        ]
      },

      //18
      {
        "title": "Captain America Long Sleeve Tee",
        "description": "Long sleeve t-shirt featuring Captain America's shield.",
        "category": "Long Sleeve",
        "price": 799,
        "discount": 20,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725823/Gemini_Generated_Image_h3y44kh3y44kh3y4_ztxgu4.png"
        ]
      },

      //19
      {
        "title": "Iron Man Henley T-Shirt",
        "description": "Henley t-shirt with Iron Man's arc reactor design.",
        "category": "Henley",
        "price": 699,
        "discount": 15,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Henley Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988907/Gemini_Generated_Image_ez02xeez02xeez02_xdqvce.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988907/Gemini_Generated_Image_ez02xeez02xeez02_xdqvce.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988907/Gemini_Generated_Image_ez02xeez02xeez02_xdqvce.png"
        ]
      },

      //20
      {
        "title": "Spider-Man Hooded T-Shirt",
        "description": "Hooded t-shirt featuring Spider-Man's web design.",
        "category": "Hooded",
        "price": 899,
        "discount": 25,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Hooded",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png"
        ]
      },

      //21
      {
        "title": "Wonder Woman Crop Top",
        "description": "Crop top featuring Wonder Woman's emblem.",
        "category": "Crop Tops (for women)",
        "price": 549,
        "discount": 18,
        "sizes": ["XS", "S", "M", "L"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Slim",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988478/Gemini_Generated_Image_xc7uedxc7uedxc7u_zbfshk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988437/Gemini_Generated_Image_jpl8yojpl8yojpl8_mfpwmj.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988459/Gemini_Generated_Image_6q7pnt6q7pnt6q7p_r44n4x.png"
        ]
      },

      //22
      {
        "title": "Flash Acid Wash Tee",
        "description": "Acid wash t-shirt with Flash's lightning bolt symbol.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png"
        ]
      },

      //23
      {
        "title": "Green Lantern Solid Color Tee",
        "description": "Solid green t-shirt representing Green Lantern's theme.",
        "category": "Solid Color",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Solid",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987938/Gemini_Generated_Image_mreh7dmreh7dmreh_pwohf3.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987964/Gemini_Generated_Image_tiyybtiyybtiyybt_mbj4fw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987953/Gemini_Generated_Image_3t99d43t99d43t99_t3jbwb.png"
        ]
      },

      //24
      {
        "title": "Superhero Name T-Shirt",
        "description": "A stylish t-shirt featuring Superhero Name.",
        "category": "Category Name",
        "price": 599,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747990101/Gemini_Generated_Image_hz7z5chz7z5chz7z_fsp2je.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747990101/Gemini_Generated_Image_hz7z5chz7z5chz7z_fsp2je.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747990101/Gemini_Generated_Image_hz7z5chz7z5chz7z_fsp2je.png"
        ]
      },

      //25
      {
        "title": "Dark Knight Acid Wash Tee",
        "description": "Acid wash t-shirt inspired by Batman's iconic persona.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png"
        ]
      },

      //26
      {
        "title": "House Stark Polo T-Shirt",
        "description": "Polo t-shirt featuring the House Stark emblem from Game of Thrones.",
        "category": "Polo T-Shirts",
        "price": 599,
        "discount": 14,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Embroidered",
          "fit": "Regular",
          "neck": "Polo Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png"
        ]
      },

      //27
      {
        "title": "Superman Sleeveless Tee",
        "description": "Sleeveless t-shirt with Superman's iconic 'S' logo.",
        "category": "Sleeveless",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Sleeveless",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png"
        ]
      },

      //28
      {
        "title": "Captain America Long Sleeve Tee",
        "description": "Long sleeve t-shirt featuring Captain America's shield.",
        "category": "Long Sleeve",
        "price": 799,
        "discount": 20,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725823/Gemini_Generated_Image_h3y44kh3y44kh3y4_ztxgu4.png"
        ]
      },

      //29
      {
        "title": "Iron Man Henley T-Shirt",
        "description": "Henley t-shirt with Iron Man's arc reactor design.",
        "category": "Henley",
        "price": 699,
        "discount": 15,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Henley Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725918/Gemini_Generated_Image_o3l95po3l95po3l9_zqr5vw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725918/Gemini_Generated_Image_o3l95po3l95po3l9_zqr5vw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725918/Gemini_Generated_Image_o3l95po3l95po3l9_zqr5vw.png"
        ]
      },

      //30
      {
        "title": "Spider-Man Hooded T-Shirt",
        "description": "Hooded t-shirt featuring Spider-Man's web design.",
        "category": "Hooded",
        "price": 899,
        "discount": 25,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Hooded",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png"
        ]
      },

      //31
      {
        "title": "Wonder Woman Crop Top",
        "description": "Crop top featuring Wonder Woman's emblem.",
        "category": "Crop Tops (for women)",
        "price": 549,
        "discount": 18,
        "sizes": ["XS", "S", "M", "L"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Slim",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png"
        ]
      },

      //32
      {
        "title": "Flash Acid Wash Tee",
        "description": "Acid wash t-shirt with Flash's lightning bolt symbol.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988216/Gemini_Generated_Image_1ajtus1ajtus1ajt_obthtl.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988216/Gemini_Generated_Image_1ajtus1ajtus1ajt_obthtl.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988216/Gemini_Generated_Image_1ajtus1ajtus1ajt_obthtl.png"
        ]
      },

      //33
      {
        "title": "Green Lantern Solid Color Tee",
        "description": "Solid green t-shirt representing Green Lantern's theme.",
        "category": "Solid Color",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Solid",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_x6l627x6l627x6l6_ijlatv.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_x6l627x6l627x6l6_ijlatv.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_x6l627x6l627x6l6_ijlatv.png"
        ]
      },

      //34
      {
        "title": "Dark Knight Acid Wash Tee",
        "description": "Acid wash t-shirt inspired by Batman's iconic persona.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725900/Gemini_Generated_Image_xly96cxly96cxly9_byz2qr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725900/Gemini_Generated_Image_xly96cxly96cxly9_byz2qr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725900/Gemini_Generated_Image_xly96cxly96cxly9_byz2qr.png"
        ]
      },

      //35
      {
        "title": "House Stark Polo T-Shirt",
        "description": "Polo t-shirt featuring the House Stark emblem from Game of Thrones.",
        "category": "Polo T-Shirts",
        "price": 599,
        "discount": 14,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Embroidered",
          "fit": "Regular",
          "neck": "Polo Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725839/Gemini_Generated_Image_h3y44lh3y44lh3y4_iixbi7.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725839/Gemini_Generated_Image_h3y44lh3y44lh3y4_iixbi7.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725839/Gemini_Generated_Image_h3y44lh3y44lh3y4_iixbi7.png"
        ]
      },

      //36
      {
        "title": "Superman Sleeveless Tee",
        "description": "Sleeveless t-shirt with Superman's iconic 'S' logo.",
        "category": "Sleeveless",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Sleeveless",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725930/Gemini_Generated_Image_o3l95mo3l95mo3l9_j6cztr.png"
        ]
      },

      //37
      {
        "title": "Captain America Long Sleeve Tee",
        "description": "Long sleeve t-shirt featuring Captain America's shield.",
        "category": "Long Sleeve",
        "price": 799,
        "discount": 20,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725823/Gemini_Generated_Image_h3y44kh3y44kh3y4_ztxgu4.png"
        ]
      },

      //38
      {
        "title": "Iron Man Henley T-Shirt",
        "description": "Henley t-shirt with Iron Man's arc reactor design.",
        "category": "Henley",
        "price": 699,
        "discount": 15,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Henley Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725980/Gemini_Generated_Image_h3y44nh3y44nh3y4_whtf1z.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725980/Gemini_Generated_Image_h3y44nh3y44nh3y4_whtf1z.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725980/Gemini_Generated_Image_h3y44nh3y44nh3y4_whtf1z.png"
        ]
      },

      //39
      {
        "title": "Spider-Man Hooded T-Shirt",
        "description": "Hooded t-shirt featuring Spider-Man's web design.",
        "category": "Hooded",
        "price": 899,
        "discount": 25,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Hooded",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_o3l95ro3l95ro3l9_ox70nq.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_o3l95ro3l95ro3l9_ox70nq.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_o3l95ro3l95ro3l9_ox70nq.png"
        ]
      },

      //40
      {
        "title": "Wonder Woman Crop Top",
        "description": "Crop top featuring Wonder Woman's emblem.",
        "category": "Crop Tops (for women)",
        "price": 549,
        "discount": 18,
        "sizes": ["XS", "S", "M", "L"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Slim",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988478/Gemini_Generated_Image_xc7uedxc7uedxc7u_zbfshk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988437/Gemini_Generated_Image_jpl8yojpl8yojpl8_mfpwmj.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988459/Gemini_Generated_Image_6q7pnt6q7pnt6q7p_r44n4x.png"
        ]
      },

      //41
      {
        "title": "Flash Acid Wash Tee",
        "description": "Acid wash t-shirt with Flash's lightning bolt symbol.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png"
        ]
      },

      //42
      {
        "title": "Green Lantern Solid Color Tee",
        "description": "Solid green t-shirt representing Green Lantern's theme.",
        "category": "Solid Color",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Solid",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987938/Gemini_Generated_Image_mreh7dmreh7dmreh_pwohf3.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987964/Gemini_Generated_Image_tiyybtiyybtiyybt_mbj4fw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987953/Gemini_Generated_Image_3t99d43t99d43t99_t3jbwb.png"
        ]
      },

      //43
      {
        "title": "Dark Knight Acid Wash Tee",
        "description": "Acid wash t-shirt inspired by Batman's iconic persona.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725981/Gemini_Generated_Image_x6l628x6l628x6l6_rsarxx.png"
        ]
      },

      //44
      {
        "title": "House Stark Polo T-Shirt",
        "description": "Polo t-shirt featuring the House Stark emblem from Game of Thrones.",
        "category": "Polo T-Shirts",
        "price": 599,
        "discount": 14,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Embroidered",
          "fit": "Regular",
          "neck": "Polo Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png"
        ]
      },

      //45
      {
        "title": "Superman Sleeveless Tee",
        "description": "Sleeveless t-shirt with Superman's iconic 'S' logo.",
        "category": "Sleeveless",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Sleeveless",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988881/Gemini_Generated_Image_w6x9ygw6x9ygw6x9_jhqpyk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988881/Gemini_Generated_Image_w6x9ygw6x9ygw6x9_jhqpyk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988881/Gemini_Generated_Image_w6x9ygw6x9ygw6x9_jhqpyk.png"
        ]
      },

      //46
      {
        "title": "Captain America Long Sleeve Tee",
        "description": "Long sleeve t-shirt featuring Captain America's shield.",
        "category": "Long Sleeve",
        "price": 799,
        "discount": 20,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725927/Gemini_Generated_Image_o3l95oo3l95oo3l9_r4tf12.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725823/Gemini_Generated_Image_h3y44kh3y44kh3y4_ztxgu4.png"
        ]
      },

      //47
      {
        "title": "Iron Man Henley T-Shirt",
        "description": "Henley t-shirt with Iron Man's arc reactor design.",
        "category": "Henley",
        "price": 699,
        "discount": 15,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Henley Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988907/Gemini_Generated_Image_ez02xeez02xeez02_xdqvce.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988907/Gemini_Generated_Image_ez02xeez02xeez02_xdqvce.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988907/Gemini_Generated_Image_ez02xeez02xeez02_xdqvce.png"
        ]
      },

      //48
      {
        "title": "Spider-Man Hooded T-Shirt",
        "description": "Hooded t-shirt featuring Spider-Man's web design.",
        "category": "Hooded",
        "price": 899,
        "discount": 25,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Hooded",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988648/Gemini_Generated_Image_jy3nodjy3nodjy3n_qked6g.png"
        ]
      },

      //49
      {
        "title": "Wonder Woman Crop Top",
        "description": "Crop top featuring Wonder Woman's emblem.",
        "category": "Crop Tops (for women)",
        "price": 549,
        "discount": 18,
        "sizes": ["XS", "S", "M", "L"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Slim",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988456/Gemini_Generated_Image_uot429uot429uot4_1_syw8r0.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988456/Gemini_Generated_Image_uot429uot429uot4_1_syw8r0.png",
          'https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988456/Gemini_Generated_Image_uot429uot429uot4_1_syw8r0.png'
        ]
      },

      //50
      {
        "title": "Flash Acid Wash Tee",
        "description": "Acid wash t-shirt with Flash's lightning bolt symbol.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png"
        ]
      },

      //51
      {
        "title": "Green Lantern Solid Color Tee",
        "description": "Solid green t-shirt representing Green Lantern's theme.",
        "category": "Solid Color",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Solid",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987938/Gemini_Generated_Image_mreh7dmreh7dmreh_pwohf3.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987964/Gemini_Generated_Image_tiyybtiyybtiyybt_mbj4fw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987953/Gemini_Generated_Image_3t99d43t99d43t99_t3jbwb.png"
        ]
      },

      //52
      {
        "title": "Dark Knight Acid Wash Tee",
        "description": "Acid wash t-shirt inspired by Batman's iconic persona.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725891/Gemini_Generated_Image_h3y44hh3y44hh3y4_ksagmt.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725891/Gemini_Generated_Image_h3y44hh3y44hh3y4_ksagmt.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725891/Gemini_Generated_Image_h3y44hh3y44hh3y4_ksagmt.png"
        ]
      },

      //53
      {
        "title": "House Stark Polo T-Shirt",
        "description": "Polo t-shirt featuring the House Stark emblem from Game of Thrones.",
        "category": "Polo T-Shirts",
        "price": 599,
        "discount": 14,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Embroidered",
          "fit": "Regular",
          "neck": "Polo Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725938/Gemini_Generated_Image_o3l95no3l95no3l9_tcezfz.png"
        ]
      },

      //54
      {
        "title": "Superman Sleeveless Tee",
        "description": "Sleeveless t-shirt with Superman's iconic 'S' logo.",
        "category": "Sleeveless",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Sleeveless",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988881/Gemini_Generated_Image_w6x9ygw6x9ygw6x9_jhqpyk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988881/Gemini_Generated_Image_w6x9ygw6x9ygw6x9_jhqpyk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988881/Gemini_Generated_Image_w6x9ygw6x9ygw6x9_jhqpyk.png"
        ]
      },

      //55
      {
        "title": "Captain America Long Sleeve Tee",
        "description": "Long sleeve t-shirt featuring Captain America's shield.",
        "category": "Long Sleeve",
        "price": 799,
        "discount": 20,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1744266668_8553529.jpg?format=webp&w=480&dpr=2.0",
          "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1744266668_8553529.jpg?format=webp&w=480&dpr=2.0",
          "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1744266668_8553529.jpg?format=webp&w=480&dpr=2.0"
        ]
      },

      //56
      {
        "title": "Iron Man Henley T-Shirt",
        "description": "Henley t-shirt with Iron Man's arc reactor design.",
        "category": "Henley",
        "price": 699,
        "discount": 15,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Henley Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725980/Gemini_Generated_Image_h3y44nh3y44nh3y4_whtf1z.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725980/Gemini_Generated_Image_h3y44nh3y44nh3y4_whtf1z.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725980/Gemini_Generated_Image_h3y44nh3y44nh3y4_whtf1z.png"
        ]
      },

      //57
      {
        "title": "Spider-Man Hooded T-Shirt",
        "description": "Hooded t-shirt featuring Spider-Man's web design.",
        "category": "Hooded",
        "price": 899,
        "discount": 25,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Polyester",
          "sleeveLength": "Long Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Hooded",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988646/Gemini_Generated_Image_s6cx82s6cx82s6cx_rlesi9.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988646/Gemini_Generated_Image_s6cx82s6cx82s6cx_rlesi9.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988646/Gemini_Generated_Image_s6cx82s6cx82s6cx_rlesi9.png"
        ]
      },

      //58
      {
        "title": "Wonder Woman Crop Top",
        "description": "Crop top featuring Wonder Woman's emblem.",
        "category": "Crop Tops (for women)",
        "price": 549,
        "discount": 18,
        "sizes": ["XS", "S", "M", "L"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Slim",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988478/Gemini_Generated_Image_xc7uedxc7uedxc7u_zbfshk.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988437/Gemini_Generated_Image_jpl8yojpl8yojpl8_mfpwmj.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988459/Gemini_Generated_Image_6q7pnt6q7pnt6q7p_r44n4x.png"
        ]
      },

      //59
      {
        "title": "Flash Acid Wash Tee",
        "description": "Acid wash t-shirt with Flash's lightning bolt symbol.",
        "category": "Acid Wash",
        "price": 1149,
        "discount": 23,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "Cotton Blend",
          "sleeveLength": "Short Sleeves",
          "pattern": "Printed",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988290/Gemini_Generated_Image_1vcbzj1vcbzj1vcb_volwfu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988290/Gemini_Generated_Image_1vcbzj1vcbzj1vcb_volwfu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747988290/Gemini_Generated_Image_1vcbzj1vcbzj1vcb_volwfu.png"
        ]
      },

      //60
      {
        "title": "Green Lantern Solid Color Tee",
        "description": "Solid green t-shirt representing Green Lantern's theme.",
        "category": "Solid Color",
        "price": 499,
        "discount": 10,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short Sleeves",
          "pattern": "Solid",
          "fit": "Regular",
          "neck": "Round Neck",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987938/Gemini_Generated_Image_mreh7dmreh7dmreh_pwohf3.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987964/Gemini_Generated_Image_tiyybtiyybtiyybt_mbj4fw.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747987953/Gemini_Generated_Image_3t99d43t99d43t99_t3jbwb.png"
        ]
      },

      //61
      {
        "title": "Superman Oversized Tee",
        "description": "A comfortable oversized t-shirt featuring the iconic Superman logo.",
        "category": "Oversized",
        "price": 1999,
        "discount": 10,
        "sizes": ["L", "XL", "XXL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short",
          "pattern": "Graphic",
          "fit": "Loose",
          "neck": "Round",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986548/Gemini_Generated_Image_fhcjyyfhcjyyfhcj_ahqyf6.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986548/Gemini_Generated_Image_fhcjyyfhcjyyfhcj_ahqyf6.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986592/Gemini_Generated_Image_60xloj60xloj60xl_tt9vpx.png"
        ]
      },

      //62
      {
        "title": "Batman Acid Wash Tee",
        "description": "Stylish acid wash t-shirt with a distressed Batman logo.",
        "category": "Acid Wash",
        "price": 2499,
        "discount": 15,
        "sizes": ["M", "L", "XL"],
        "specifications": {
          "fabric": "80% Cotton, 20% Polyester",
          "sleeveLength": "Short",
          "pattern": "Acid Wash",
          "fit": "Regular",
          "neck": "Crew",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986369/Gemini_Generated_Image_w0maz2w0maz2w0ma_zyg1xs.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986368/Gemini_Generated_Image_2hdqea2hdqea2hdq_qfvif2.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986367/Gemini_Generated_Image_k9srhjk9srhjk9sr_iikxbz.png"
        ]
      },

      //63
      {
        "title": "Spider-Man Graphic Printed Tee",
        "description": "A vibrant graphic printed t-shirt featuring Spider-Man in action.",
        "category": "Graphic Printed",
        "price": 1799,
        "discount": 5,
        "sizes": ["S", "M", "L"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short",
          "pattern": "Graphic",
          "fit": "Regular",
          "neck": "Round",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986211/Gemini_Generated_Image_96szdo96szdo96sz_zku3jv.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986211/Gemini_Generated_Image_96szdo96szdo96sz_zku3jv.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986212/Gemini_Generated_Image_qwvxowqwvxowqwvx_p65glr.png"
        ]
      },

      //64
      {
        "title": "Wonder Woman Solid Color Tee",
        "description": "A classic solid color t-shirt with a subtle Wonder Woman emblem.",
        "category": "Solid Color",
        "price": 1499,
        "discount": 0,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short",
          "pattern": "Solid",
          "fit": "Regular",
          "neck": "Round",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986044/Gemini_Generated_Image_rby8ucrby8ucrby8_baib6d.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986043/Gemini_Generated_Image_8okd6q8okd6q8okd_tx4k4j.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747986043/Gemini_Generated_Image_8okd6q8okd6q8okd_tx4k4j.png"
        ]
      },

      //65
      {
        "title": "Hulk Polo T-Shirt",
        "description": "A stylish polo t-shirt featuring a Hulk graphic on the chest.",
        "category": "Polo T-Shirts",
        "price": 2999,
        "discount": 20,
        "sizes": ["M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short",
          "pattern": "Graphic",
          "fit": "Regular",
          "neck": "Polo",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747985877/Gemini_Generated_Image_p0vee4p0vee4p0ve_u0ys72.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747985877/Gemini_Generated_Image_p0vee4p0vee4p0ve_u0ys72.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747985875/Gemini_Generated_Image_ckemeickemeickem_i8bo6h.png"
        ]
      },

      //66
      {
        "title": "Captain America Sleeveless Tee",
        "description": "A cool sleeveless t-shirt featuring Captain America's shield.",
        "category": "Sleeveless",
        "price": 1599,
        "discount": 10,
        "sizes": ["M", "L"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Sleeveless",
          "pattern": "Graphic",
          "fit": "Regular",
          "neck": "Round",
          "origin": "India"
        },
        "images": [
            "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747985878/Gemini_Generated_Image_nb355nnb355nnb35_nsjxje.png",
            "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747985878/Gemini_Generated_Image_nb355nnb355nnb35_nsjxje.png",
            "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747985875/Gemini_Generated_Image_vw58fbvw58fbvw58_mxyt7g.png"
        ]
    },

    //67
    {
        "title": "Thor Long Sleeve Tee",
        "description": "A long sleeve t-shirt featuring Thor's hammer, Mjolnir.",
        "category": "Long Sleeve",
        "price": 2499,
        "discount": 5,
        "sizes": ["S", "M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Long",
          "pattern": "Graphic",
          "fit": "Regular",
          "neck": "Crew",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725900/Gemini_Generated_Image_xly96cxly96cxly9_byz2qr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725900/Gemini_Generated_Image_xly96cxly96cxly9_byz2qr.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725900/Gemini_Generated_Image_xly96cxly96cxly9_byz2qr.png"
        ]
      },

      //68
      {
        "title": "Green Lantern Henley",
        "description": "A stylish Henley t-shirt featuring the Green Lantern logo.",
        "category": "Henley",
        "price": 1999,
        "discount": 10,
        "sizes": ["M", "L", "XL"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short",
          "pattern": "Graphic",
          "fit": "Regular",
          "neck": "Henley",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_xly96bxly96bxly9_yex49p.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_xly96bxly96bxly9_yex49p.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725914/Gemini_Generated_Image_xly96bxly96bxly9_yex49p.png"
        ]
      },

      //69
      {
        "title": "Deadpool Hooded Tee",
        "description": "A unique hooded t-shirt featuring Deadpool's face.",
        "category": "Hooded",
        "price": 2999,
        "discount": 15,
        "sizes": ["M", "L"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short",
          "pattern": "Graphic",
          "fit": "Regular",
          "neck": "Hooded",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725945/Gemini_Generated_Image_y8xpwoy8xpwoy8xp_pcqkq6.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725945/Gemini_Generated_Image_y8xpwoy8xpwoy8xp_pcqkq6.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725945/Gemini_Generated_Image_y8xpwoy8xpwoy8xp_pcqkq6.png"
        ]
      },

      //70
      {
        "title": "Black Panther Crop Top",
        "description": "A trendy crop top featuring the Black Panther logo.",
        "category": "Crop Tops",
        "price": 1799,
        "discount": 5,
        "sizes": ["S", "M"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short",
          "pattern": "Graphic",
          "fit": "Regular",
          "neck": "Round",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725807/Gemini_Generated_Image_h3y44mh3y44mh3y4_yotk5q.png"
        ]
      },

      //71
      {
        "title": "Flash Solid Color Tee",
        "description": "A vibrant solid color t-shirt with a Flash emblem.",
        "category": "Solid Color",
        "price": 1499,
        "discount": 0,
        "sizes": ["S", "M", "L"],
        "specifications": {
          "fabric": "100% Cotton",
          "sleeveLength": "Short",
          "pattern": "Solid",
          "fit": "Regular",
          "neck": "Round",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725850/Gemini_Generated_Image_h3y44ih3y44ih3y4_cgagbu.png"
        ]
      },

      //72
      {
        "title": "Aquaman Acid Wash Tee",
        "description": "Stylish acid wash t-shirt featuring Aquaman's trident.",
        "category": "Acid Wash",
        "price": 2499,
        "discount": 15,
        "sizes": ["M", "L", "XL"],
        "specifications": {  
          "fabric": "80% Cotton, 20% Polyester",
          "sleeveLength": "Short",
          "pattern": "Acid Wash",
          "fit": "Regular",
          "neck": "Crew",
          "origin": "India"
        },
        "images": [
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725815/Gemini_Generated_Image_x6l629x6l629x6l6_xvwt9i.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725815/Gemini_Generated_Image_x6l629x6l629x6l6_xvwt9i.png",
          "https://res.cloudinary.com/dgwffp5i6/image/upload/v1747725815/Gemini_Generated_Image_x6l629x6l629x6l6_xvwt9i.png"
        ]
    }
]

const dbUrl = process.env.MONGO_URL;
console.log(dbUrl);
const main = async () => {
    mongoose.connection.on("connected", () => console.log("Connected to DB")); // another way to show message in terminal
    await mongoose.connect(dbUrl);
};

const initDB = async () => {
  try{
    await Items.deleteMany({});
    let transformedData = initData.map((data) => ({...data, stock: 50, seller:"6821eccff93189074035cde6"}))
    await Items.insertMany(transformedData);
    console.log("Data inserted");
  }
  catch(err){
    console.log("Error inserting data", err);
  }
};

(async () => {
  await main();
  await initDB();
})();