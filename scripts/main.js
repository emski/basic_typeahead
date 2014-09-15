(function(){
	var choices = ['apple', 'cherry', 'banana', 'orange', 'kiwi', 'strawberry'];
	
	// basick clickaway handler
	var clickAwayHandler = function(e){
		//not implemented
	}

	var selectItem = function(e){
		var _el = e.target
		inputElement.value = _el.innerText;

		// thide the values container
		valuesElement.classList.add('hidden');
	}

	var handleTypeahead = function(e){
		var matches = getMatches(this.value);
		if(!matches.length){
			valuesElement.classList.add('hidden');
		} else {
			// clear child list
			while (valuesElement.firstChild) 
				valuesElement.removeChild(valuesElement.firstChild);
			
			// add matches to the list
			matches.forEach(function(val, index){
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(val));
				valuesElement.appendChild(li);

				// assign click handler
				li.onclick = selectItem;
			});

			// thide the values container
			valuesElement.classList.remove('hidden');
		}

	}

	var getMatches = function(val){
		var _matchList = []

		// return if empty
		if(!val.split(' ').join('').length)
			return _matchList;

		choices.forEach(function(choice, index){
			if(choice.match(val))
				_matchList.push(choice);
		});
		return _matchList;
	}

	var inputElement = document.getElementById('typeahead-input')
	var valuesElement = document.getElementById('typeahead-values')
	
	// wireup input with typeahaed event
	inputElement.onkeyup = handleTypeahead;


})()