(function(){

	var app = document.getElementById('app');

	var inputCharacters = document.getElementById('number-characters');

	var configuration = {
		characters: parseInt(inputCharacters.value),
		symbols: true,
		numbers: true,
		capitalLetters: true,
		smallLetters: true
	}

	var characters = {
		numbers: '0 1 2 3 4 5 6 7 8 9',
		symbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		capitalLetters: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		smallLetters: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
	}

	app.addEventListener('submit', function(e){
		e.preventDefault();
	});

	app.elements.namedItem('btn-one-up').addEventListener('click', function(){
		configuration.characters++;
		inputCharacters.value = configuration.characters;
	});

	app.elements.namedItem('btn-one-down').addEventListener('click', function(){
		if (configuration.characters > 1) {
			configuration.characters--;
			inputCharacters.value = configuration.characters;
		}
	});

	app.elements.namedItem('btn-symbols').addEventListener('click', function(){
		btnToggle(this);

		configuration.symbols = !configuration.symbols;
	});

	app.elements.namedItem('btn-numbers').addEventListener('click', function(){
		btnToggle(this);

		configuration.numbers = !configuration.numbers;
	});

	app.elements.namedItem('btn-capitalLetters').addEventListener('click', function(){
		btnToggle(this);

		configuration.capitalLetters = !configuration.capitalLetters;
	});

	app.elements.namedItem('btn-generate').addEventListener('click', function(){
		generatePassword();
	});

	app.elements.namedItem('input-password').addEventListener('click', function(){
		copyPassword();
	});

	function btnToggle(elemento){
		elemento.classList.toggle('false');
		elemento.childNodes[0].classList.toggle('fa-check');
		elemento.childNodes[0].classList.toggle('fa-times');
	}

	function generatePassword(){
		var endingCharacters = '';
		var password = '';

		for(property in configuration){
			if (configuration[property] == true){
				endingCharacters += characters[property] + ' ';
			}
		}

		endingCharacters = endingCharacters.trim();
		endingCharacters = endingCharacters.split(' ');

		for(var i = 0; i < configuration.characters; i++){
			password += endingCharacters[Math.floor(Math.random() * endingCharacters.length)];
		}

		app.elements.namedItem('input-password').value = password;
	}

	function copyPassword(){
		app.elements.namedItem('input-password').select();
		document.execCommand("copy");
		document.getElementById('alert-copy').classList.add('active');

		setTimeout(function(){
			document.getElementById('alert-copy').classList.remove('active');
		}, 2000)
	}

	generatePassword();
}())
