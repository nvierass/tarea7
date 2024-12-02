const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

console.log("\nEl conjunto de productos registrados es:");
products.map(product => {
	console.log("\tNombre del producto:", product.name);
	console.log("\tCategoría:", product.category);
	console.log("\tPrecio:", product.price);
	console.log("\n");
	});

//Punto 1
console.log("--------------------Punto 1--------------------");

const productsWithDiscount = products.filter((product) => product.discount > 0);
console.log("\nLos productos que poseen descuento son los siguientes:");
productsWithDiscount.map(product => {
	console.log("\tNombre del producto:", product.name);
	console.log("\tDescuento:", product.discount, "%");
	console.log("\n");
	})

//Punto 2
console.log("--------------------Punto 2--------------------");

const productsWithPriceAfterDiscount = productsWithDiscount.map((product) => {
	let finalPrice = product.price * (1 - product.discount/100);
	product.priceAfterDiscount = finalPrice;
	return product;
	})

console.log("\nLos precios finales de los productos que poseen descuento son los siguientes:");
productsWithPriceAfterDiscount.map(product => {
	console.log("\tNombre del producto:", product.name);
	console.log("\tPrecio original:", product.price);
	console.log("\tPrecio tras descuento(", product.discount,"%):",product.priceAfterDiscount);
	console.log("\n");
	});

//Punto 3
console.log("--------------------Punto 3--------------------");

function getLowStockProducts(products, threshold){
	const lowStockProducts = [];
	for(product of products){
		if(product.stock < threshold){
			lowStockProducts.push(product);
		}
	}
	return lowStockProducts;
}

const warningQuantityThreshold = 5;
const lowStockProducts = getLowStockProducts(products, warningQuantityThreshold);
console.log("\nLos productos que poseen una cantidad estrictamente menor a", warningQuantityThreshold,"son:");
lowStockProducts.map(product => {
	console.log("\tNombre del producto:", product.name);
	console.log("\tStock actual:", product.stock);
	console.log("\n");
})

//Punto 4
console.log("--------------------Punto 4--------------------");

function addProductStock(productName, productQuantity){
	try{
		let targetProduct = products.find((product) => product.name === productName);
		let originalStock = targetProduct.stock;
		targetProduct.stock += productQuantity;
		console.log("El producto", productName , "tenía", originalStock ,"unidades, se ha aumentado a", targetProduct.stock, "\n");
	}
	catch{
		console.log("El producto indicado no existe en los productos registrados.\n")
	}
}

let productName = "Laptop";
let productQuantity = 5;
console.log("\nSe agregará un stock de", productQuantity, "unidades al producto", productName);
addProductStock(productName, productQuantity);

productName = "Motocicleta";
productQuantity = 2;
console.log("\nSe agregará un stock de", productQuantity, "unidades al producto", productName);
addProductStock(productName, productQuantity);


//Punto 5
console.log("--------------------Punto 5--------------------");

function generateCategoriesReport(products){
	console.log("\nComienzo de generación de reporte de productos por categoría.")
	const productsByCategory = {};
	for(product of products){
		if(product.category in productsByCategory){
			productsByCategory[product.category]++;
			console.log("\tSe ha añadido un tipo de producto a la categoría ", product.category);
		}
		else{
			productsByCategory[product.category] = 1;
			console.log("\tSe ha agregado al reporte la categoría ", product.category);
		}
	}
	return productsByCategory;
}

function showReport(productsByCategory){
	console.log("\nResultados del reporte:")
	for(category in productsByCategory){
		console.log("\tLa categoría \""+ category + "\" posee", productsByCategory[category], "productos.");
	}
}

const productsByCategory = generateCategoriesReport(products);
showReport(productsByCategory);