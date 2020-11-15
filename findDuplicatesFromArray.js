var arr_string = ["a", "b", "c", "d", "a", "c"]
var temp_arr3 = arr_string.filter((elem, index) => arr_string.indexOf(elem) !== index)
console.log(temp_arr3)