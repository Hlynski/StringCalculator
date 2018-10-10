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
	var num = numbArr;
	var negRes = 0;
	var text = "Negetives not allowed: ";
		for(var i = 0; i < numbArr.length; i++){
			if(num < 0){
				if(!(num == "")){
					negRes += negRes + ", " + numb;
				}
				else{
					negRes += numb;
				}
			}
			else{
				total += parseInt(numbArr[i]);
			}
		}
		if(negRes.length > 0){
			throw "Negetives not allowed: " + negRes;
		}
		else{
			return total;
		}
}

module.exports = add;