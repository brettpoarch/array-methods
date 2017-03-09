var avg = (items.reduce(function(a,b){
	return a + b.price;
}, 0)/ items.length).toFixed(2);


document.querySelector('#answer1').innerHTML = ` The average price is $${avg}`




var costBetween = items.filter(function(value){
	return value.price > 14.00 && value.price < 18.00
}).map(function(value){
	return value.title;
});

var answer2 = document.querySelector('#answer2')

var htmlStr = ""
costBetween.forEach(function(value){
    htmlStr += `${value}\n`
})
answer2.innerHTML = htmlStr


var currencyCode = items.filter(function(value){
	return value.currency_code === "GBP"
}).map(function(value){
	return { 
		title: value.title,
		price: value.price
	}
})

var answer3 = document.querySelector('#answer3')

var htmlStr = ""
currencyCode.forEach(function(value){
    htmlStr += `${value.title} costs &pound;${value.price}\n`
})
answer3.innerHTML = htmlStr



var woodMaterial = items.filter(function(value){
	return value.materials.includes("wood");
}).map(function(value){
	return value.title
})


var answer4 = document.querySelector('#answer4')

var htmlStr = ""
woodMaterial.forEach(function(value){
    htmlStr += `${value}\n`
})

answer4.innerHTML = htmlStr



var materialAmnt = items.filter(function(value){
	return value.materials.length > 8
}).map(function(value){
	return {
		title: value.title,
		materials: value.materials
	}
})

var answer5 = document.querySelector('#answer5')

var htmlStr = ""
materialAmnt.forEach(function(value){
    htmlStr += `${value.title} has ${value.materials.length}\n`
    	value.materials.forEach(function(value){
    		htmlStr += `${value}\n`
    }) 
})

answer5.innerHTML = htmlStr

var madeBy = items.filter(function(value){
	return value.who_made === "i_did"
}).length

document.querySelector('#answer6').innerHTML = `${madeBy} were made by their sellers`;

