const store = require("./controllers/storeControllers");
const products = require("./controllers/productsControllers");

const generator = () => {
  const species = {
    1: "Perros",
    2: "Gatos",
  };
  const brands = {
    1: "Pedigree",
    2: "Royal Canin",
    3: "Wiskas",
    4: "Pro Plan",
    5: "Eukanuba",
    6: "Sabrocitos",
    7: "Balanced",
    8: "Excellent",
    9: "Fanwa",
    10: "Old Prince",
    11: "Vital",
    12: "Chow",
    13: "Agility",
  };
  const colors = {
    1: "blanco",
    2: "negro",
    3: "amarillo",
    4: "marrón",
  };
  const sizes = {
    1: "chico",
    2: "mediano",
    3: "grande",
  };
  const imgs = {
    1: "https://www.pedigree.com.ar/cdn-cgi/image/width%3D410%2Cformat%3Dauto%2Cq%3D90/sites/g/files/fnmzdf1506/files/2022-10/7797453973489-product-image-1.png",
    2: "https://d3ugyf2ht6aenh.cloudfront.net/stores/979/500/products/royal-gato-urinary-care1-c07ed7872f79588f8816376908403393-640-0.webp",
    3: "https://www.revistaneo.com/sites/default/files/2022-08/salmon.png",
    4: "https://maxipet.com.ar/wp-content/uploads/2020/08/pro-plan-cach-gde.png",
    5: "https://ss-static-01.esmsv.com/id/69550/productos/obtenerimagen/?id=811&useDensity=false&width=1280&height=720&tipoEscala=contain",
    6: "https://www.metrive.com.ar/images/mascotas/Metrive-Sabrositos-pack-mix.png",
    7: "https://kangoopet.com.ar/wp-content/uploads/2019/12/Balance_FTE_15kg-768x1055-1-600x824.png",
    8: "https://www.timberline.com.ar/3253-medium_default/excellent-dog-adulto-chicken-rice-x-20-kg.jpg",
    9: "https://fawna.com.ar/wp-content/uploads/2021/05/FAWNA_gato_esterilizado-777x1024.png",
    10: "https://www.canrock.com.ar/9012-thickbox_default/old-prince-original-recipe-203kg.jpg",
    11: "https://d22fxaf9t8d39k.cloudfront.net/1d848048c0a6b6efba5d4ed2b6b30891d1dc20d9ce65f1e42673c4f179705797176330.png",
    12: "https://mascotaselmolino.com.ar/8343-thickbox_default/cat-chow-gatitos.jpg",
    13: "https://animall.com.ar/5604/agility-perro-adulto-medianos-y-grandes-x-20-kg.jpg",
  };

  setTimeout(async () => {
    for (let i = 1; i <= 10; i++) {
      await store.createStore(`Store ${i}`, `Store location ${i}`);
      for (let s = 1; s <= 30; s++) {
        let description = `Una descripción apropiada para este producto`;
        let price = Math.floor(Math.random() * 200 + 51);
        let stock = Math.ceil(Math.random() * 15);
        let specie = species[Math.ceil(Math.random() * 2)];
        let indexBrandImg = Math.ceil(Math.random() * 13);
        let brand = brands[indexBrandImg];
        let img = imgs[indexBrandImg];
        let color = colors[Math.ceil(Math.random() * 4)];
        let size = sizes[Math.ceil(Math.random() * 3)];
        let weight = Math.ceil(Math.random() * 2) * 5 + 5;
        await products.createProduct({
          name: `Producto ${i}${s}`,
          img,
          price,
          description,
          stock,
          specie,
          breed: `raza${i}`,
          brand,
          storeId: i,
          color,
          size,
          weight,
        });
      }
    }
  }, 5000);
};

module.exports = { generator };

// {
// 	"name": "Producto de Prueba",
// 	"price": 25,
// 	"description": "una descripción apropiada",
// 	"stock": 35,
// 	"specie": "pegeLag",
// 	"breed": "volador",
// 	"storeId": 1
// }
