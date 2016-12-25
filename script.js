var name = prompt("What is your name ?"),
	contentElement = document.getElementById("content"),
	contentElement2 = document.getElementById("content2"),
	age;

alert("Welcome " + name + " !!!");
age = prompt ("How old are you " + name + " ?");

if (age < 18) {
	alert("I am sorry " + name + " you can't enter our website.")
	console.log(name + " is " + age + " years old so content is BLOCKED")
	contentElement.innerHTML = "CONTENT BLOCKED";
	contentElement.style.color = "red"
	contentElement2.style.visibility = "hidden";
} else {
	alert("Welcome on our website " + name + " !!!")
	console.log(name + " is " + age + " years old so content is AVAILABLE")
	contentElement.innerHTML = "CONTENT AVAILABLE";
	contentElement.style.color = "green"
	contentElement2.style.visibility = "visible";
}
