function add(numbers){

	if(numbers == ""){
		return 0;
	}
	if(numbers.includes(",")){
		var numbArr = numbers.split(",");
		var total = 0;

		for(var i = 0; i < numbArr.length; i++){
			total += parseInt(numbArr[i]);
			
		}
		return total;
		
	}
	else{
		return parseInt(numbers);
	}
}
module.exports = add;