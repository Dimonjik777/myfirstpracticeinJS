/*let names = ["James", "Tom", "Jhon"];
//displays all names
for(var i = 0; i < names.length; i++)
{
	console.log(names[i]);
}
var i = 0;
while(i < 10){
	console.log(i);
	i++;
}

//Function
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 5));

//Object
let myObject = {
	name: "Jhon",
	surname: "McGill",
	age: 23,
	getFullName: function() {
		return this.name + " " + this.surname;
	}
};
console.log(myObject.getFullName());
*/
function Alert() {
	var Alert = document.getElementsByClassName('alert')[0];
	Alert.style.top = '0';
}
let colors = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"];//colors for background
	var i = 0;
function Phone() {	
	document.body.style.backgroundColor=colors[i];//color body haved in variable colors
	i++;
	if(i > colors.length - 1)
	{
		i = 0;
	}
}
function 	Back() {
	var Alert = document.getElementsByClassName('alert')[0];
	Alert.style.top='-150px';
}