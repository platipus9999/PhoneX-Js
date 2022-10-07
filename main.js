var phonelib = require('phonelib');
const fs = require('fs');
var randomstring = require("randomstring");
var colors = require('colors');
var sleep = require('system-sleep');	
var setTitle = require('console-title');
console.log("						Phone Debouncer\n\n".green)
console.log("Starting in 1 seconds...".red)
sleep(1*1000);
function gen() {
	var count = 0
	while (true) {
		num = randomstring.generate({
			length: 9,
			charset: 'numeric'
		});
		var phoneNumber = {
			phone: num,
			country: "FR"
		}


		phonelib.isValid(phoneNumber, function(err, result) {
			var numjson = JSON.stringify(result);
			nice = numjson + "\n"
			if (nice.indexOf(":1") > -1) {

				function findsubstr(str) {

					var etape1 = str.slice(18, 35);

					//console.log(" > ".green + "Numbers : ".yellow + etape1.yellow + " | Pays : France".yellow);
					finish = etape1 + "\n"
					
					fs.appendFileSync('phone.txt', finish);
				}

				var string = nice;
				var finals = findsubstr(string);
				count = count + 1
				setTitle('Phone Debouncer | Numbers :' + count);

			};
		});
	}
}
gen()
