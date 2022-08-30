/**
 * 
 * TYPE CONVERSION
 * 
 * can convert a string to a number using Number(string), but would have to assign it to a new variable to store it
 * get Nan if the string you are converting does not include a number
 * NOTE the type of Nan is actually still a number - it is a number, just not a valid one. So you can't use if type == number as it won't catch Nan!!!
 * 
 * can convert things to a string using String()
 * 
 * TYPE COERCION
 * 
 * type coercion happens automatically whenever an operator is dealing with 2 values of different types, it converts one value to the type of the other value so that the opeartor can be executed
 * like 'I am' + 23 + ' years old';
 * the number 23 is converted to a string
 * 
 * + always converts to string and concacenates
 * -, *, / always convert to a number (or Nan)
 * 
 */