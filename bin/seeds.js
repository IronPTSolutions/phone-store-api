const mongoose = require('mongoose');
require('../configs/db.config');
const Phone = require('../models/phone.model');

const phones = [
  {
    "name": "P8 Lite Black",
    "brand": "Huawei",
    "image": "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/support/list-image/phones/p8-lite-2017/p8-lite-2017-listimage-black.png",
    "specs": [
      "1080p Display",
      "2GB RAM"
    ]
  },
  {
    "name": "iPhone 7S",
    "brand": "Apple",
    "image": "https://boltmobile.ca/wp-content/uploads/2016/09/iphone7-plus-front-web-boltmobile-sasktel.png",
    "specs": [
      "4.87 ounces",
      "12MP camera"
    ]
  },
  {
    "name": "G Flex2 H955",
    "brand": "LG",
    "image": "http://catalogo.movistar.com.pe/ArchivosUsuario/EquipoCaracteristica/g-flex-2-h955p_528_Imagen.png",
    "specs": [
      "16GB Storage"
    ]
  }
];

Phone.create(phones)
  .then(() => {
    console.info("Seeds success:", phones);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error("Seeds error:", phones);
    mongoose.connection.close();
  });