/** JS */

let nameObj = {
    first: 'John',
    last: 'Doe',
    printfullname: function (){
        console.log(this.first+' '+this.last);    // Joh Doe
    }
}
nameObj.printfullname();

let person = {
    first: 'Dinesh',
    last:'Yadav'
}

//function borrowing.
nameObj.printfullname.call(person); // Dinesh Yadav

//Reusable functions.
let newName = {
    first: 'Jane',
    last: 'Smith'
}

let printName = function() {
    console.log(this.first+' '+this.last);
}
printName.call(newName); // Jane Smith

let Emp = {
    first: 'Sonu',
    last: 'Singh',
}

printName.call(Emp); // Sonu Singh

// Call method with arguments
let sport = {
    sname:"Cricket",
    playerCount: 11
}

let printSportDetails = function(team, year) {
    console.log('Sport: '+this.sname +' '+ 'Team: ' + team + ' Year: '+ year + ' Player Count: '+ this.playerCount); // //Sport: Cricket Team: India Year: 2018 Player Count: 11
}

printSportDetails.call(sport, 'India', 2018);

// Apply method.

let teamDetails = {
    sname: 'Football',
    playerCount: 11
}

let printTeamDetails = function(country,year){
    console.log('Sport: '+this.sname +' '+ 'Team: ' + country + ' Year: '+ year +' Player Count: '+ this.playerCount); // Sport: Football Team: Urgway Year: 2023 Player Count: 11
}

printSportDetails.apply(teamDetails, ['Urgway', 2023]); //Sport: Football Team: Urgway Year: 2023 Player Count: 11

// Bind method.

let bindPrintDetails = printSportDetails.bind(sport);
bindPrintDetails('England', 2022); // Sport: Cricket Team: England Year: 2022 Player Count: 11
