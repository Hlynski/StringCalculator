function add(numbers){
	var numbArr;

	if(numbers == ""){
		return 0;
	}
	else if(numbers.includes(",")){
		numbArr = numbers.split(",");
		return parseInt(numbArr[0]) + parseInt(numbArr[1]);
	}
	return parseInt(numbers);
}
module.exports = add;