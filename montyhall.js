function montyHall(num, switches) {

	var wins = 0;
	var losses = 0;
	var count = 0;

	while(count < num) {
		var prize = Math.floor((Math.random() * 3) + 1);
		var firstChoice = Math.floor((Math.random() * 3) + 1);

		if(prize == firstChoice){
			if(switches) {
				losses++;
			} else {
				wins++;
			}
		} else {
			if(switches){
				wins++;
			} else {
				losses++;
			}
		}
		count++;
	}
    console.log("win % : " + ((wins/1000)*100).toFixed(2) + "% <br> loss % : " + ((losses/1000)*100).toFixed(2) + "%");
};

montyHall(1000, false);
montyHall(1000, true);