function add(numbers){
	if(numbers == ""){
		return 0;
	}

	if(hasSign(numbers)){
		numbers = numbers.replace("\n", ",");
		var numbArr = numbers.split(",");
		return sum(numbArr);
	}
	else{
		return parseInt(numbers);
	}
}


function sum(numbArr){
	var total = 0;
	var negRes = 0;
	var numb = numbArr + "";
	var delimiters = ",";
	var text = "Negetives not allowed: ";
		for(var i = 0; i < numbArr.length; i++){
			if(numbArr < 0){
				if(!(numbArr == "")){
					negRes += ", " + numb;
				}
				else{
					negRes += numb;
				}
			}
			else if(isNaN(numbArr[i]) || numbArr[i] >= 1000){
				numbArr[i] = 0;
			}
			else{
				total += parseInt(numbArr[i]);
			}
		}
		if(negRes.length > 0){
			throw "Negetives not allowed: " + negRes;
		}
		
		return total;
	
}
function hasSign(numbers){
	if(numbers.includes(",") || numbers.includes("\n")){
		
		return true;
	}
	return false;
}


module.exports = add;