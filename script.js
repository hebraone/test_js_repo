
	var name = prompt("What is your name ?");
	alert("Welcome " + name + " !!!");
	var age = prompt ("How old are you " + name + " ?");

	if (age < 18) {
		alert("I am sorry " + name + " you can't enter our website.")
		console.log(name + " is " + age + " years old so content is BLOCKED")
		document.getElementById("content").innerHTML = "CONTENT BLOCKED";
		document.getElementById("content").style.color = "red"
		document.getElementById("content2").style.visibility = "hidden";
	} else {
		alert("Welcome on our website " + name + " !!!")
		console.log(name + " is " + age + " years old so content is AVAILABLE")
		document.getElementById("content").innerHTML = "CONTENT AVAILABLE";
		document.getElementById("content").style.color = "green"
		document.getElementById("content2").style.visibility = "visible";
	}
