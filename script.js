function firstWord(s) {
  // your code here
	s = s.trim();

	if(s === "") return "";

	const spaceIdx = s.indexOf(" ");

	if(spaceIdx === -1){
		return s;
	}

	return s.substring(0, spaceIdx);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
