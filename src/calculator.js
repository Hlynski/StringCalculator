function add(numbers){
	var newLine = numbers.includes("\n");
	
	if(numbers == ""){
		return 0;
	}

	if(newLine){
		numbers = numbers.replace("\n", ",");
	}
	
	if(numbers.includes(",")){
		var numbArr = numbers.split(",");
		
		return sum(numbArr);
	}
	else{
		return parseInt(numbers);
	}

}

function sum(numbArr){
	var total = 0;
	
		for(var i = 0; i < numbArr.length; i++){
			if(numbArr[i] < 0){
				throw "Negetives not allowed: " + numbArr[i];
			}
			total += parseInt(numbArr[i]);
		}
		return total;
}


module.exports = add;