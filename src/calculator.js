function add(numbers){
	var newLine = numbers.includes("\n");

	if(numbers == ""){
		return 0;
	}

	if(newLine){
		numbers = numbers.replace("\n", ",");
	}
	
	if(numbers.includes(",")){
		var numbArr1 = numbers.split(",");
		
		return sum(numbArr1);
	}
	else{
		return parseInt(numbers);
	}

}

function sum(numbArr){
	var total = 0;
		for(var i = 0; i < numbArr.length; i++){
			total += parseInt(numbArr[i]);
		}
		return total;
}


module.exports = add;