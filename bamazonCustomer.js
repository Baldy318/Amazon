var mysql = require ('mysql');
var inquirer = require('inquirer');
require ("dotenv").config()

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
	user: process.env.PASSWORD,
	
    database: 'bamazon',
});

// To Confirm if Connection Went Thru
connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id" + connection.threadId);
});

// To display the products 
var displayProducts = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,25,25,10,10]
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
		purchasePrompt();
	});
}

//
function purchasePrompt(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter the item number you would like to purchase today?",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"Please enter the quantity of the item of the item you would like to purchase today?",
		filter:Number
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
 	var IDrequested = answers.ID;
 	purchaseOrder(IDrequested, quantityNeeded);
 });
};

function purchaseOrder(ID, amtNeeded){
	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(amtNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * amtNeeded;
			console.log("We have your order in stock!");
			console.log("Your total cost for " + amtNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you!");

			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + "WHERE item_id = " + ID);
		} else{
			console.log("Sorry it seems the item(s) requested may be out of stock. We may not have enough " + res[0].product_name + "to complete your order.");
		};
		displayProducts();
	});
};

displayProducts(); 