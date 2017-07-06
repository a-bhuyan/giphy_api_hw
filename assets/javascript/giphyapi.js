$(document).ready(function() {

	var animalList;
	animalList = [];

	function clearSearch() {
		var animalList = [];
	}

	$("#clearButton").on("click", function() {
		clearSearch();
	});


	$("input").keypress(function(event) {
  		if (event.which === 13) {
   			addAnimal();
  		}
  	});




	$("#addButton").click(addAnimal); 
	
	//adds animal to array animalList, and then resets the text box
	function addAnimal() {
		var animal = $("#newAnimal").val();
		if (animal){
			animalList.push(animal);
			$("#newAnimal").val("");
			var buttonToAdd = "<button id='animalButton'>"+ animal +"</button>";
			
			console.log(buttonToAdd);
			$("#animalButtons").append(buttonToAdd);
			//displayButtons();
			//console.log(animalList);

		}
	}


	$("#animalButton").click(showAnimal);

	function showAnimal(){
		console.log("something");
	}
	//https://api.giphy.com/v1/gifs/search?api_key=
	//4921731e2b254a8fb68a8e89e48143cc&q=dog&limit=10&offset=0&rating=PG&lang=en



});