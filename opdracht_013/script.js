function myFunction() {
    var person = prompt("Wat is jouw naam?");
    if (person != null) {
      alert (`Hey ` + person);
      alert (`Raadt het nummer. Je krijgt 5 pogingen`);
    }
    var randomNumber = Math.floor(Math.random() * prompt("Om de range te bepalen, vul hier het grootste nummer in:"));
    var number = prompt("Vul hier jouw nummer in");
    if (randomNumber==number) { 
    alert (`Gefeliciteerd! Je hebt gewonnen.`);
      alert (`Dag ` + person);
      return;
      } else {
        alert (`Dat is niet correct. Probeer het nog een keer.(Je hebt nog 4 pogingen)`);
      var number = prompt("Vul hier nogmaals een nummer in:");
    }  
    if (randomNumber==number) {
      alert (`Gefeliciteerd! Je hebt gewonnen.`);
      alert (`Dag ` + person);
      return;
      } else {
        alert (`Dat is niet correct. Probeer het nog een keer. (Je hebt nog 3 pogingen)`);
      var number = prompt("Vul hier nogmaals een nummer in:");    
  }
  if (randomNumber==number) {
    alert (`Gefeliciteerd! Je hebt gewonnen.`);
    alert (`Dag ` + person);
    return;
    } else {
      alert (`Dat is niet correct. Probeer het nog een keer. (Je hebt nog 2 pogingen)`);
    var number = prompt("Vul hier nogmaals een nummer in:");
    }
    if (randomNumber==number) {
      alert (`Gefeliciteerd! Je hebt gewonnen.`);
      alert (`Dag ` + person);
      return;
      } else {
        alert (`Dat is niet correct. Probeer het nog een keer.(Dit is jouw laatste poging)`);
      var number = prompt("Vul hier nogmaals een nummer in:");
      }
      if (randomNumber==number) {
        alert (`Gefeliciteerd! Je hebt gewonnen.`);
        alert (`Dag ` + person); 
      } else {
          alert (`Dat is niet correct. Helaas je hebt verloren`);
          alert (`Dag ` + person);
        }
      }