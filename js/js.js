// prodavnica - kalkulacija
document.getElementById("proizvodi").addEventListener("submit", ukupanIznos);


function ukupanIznos(event) {
  event.preventDefault();


   if (document.getElementById("s-grad").value === '') {
    alert("Niste uneli opštinu za isporuku");

  } 

  var kolPrvi = parseInt(document.getElementById("jedan").value, 10) || 0,
    kolDrugi = parseInt(document.getElementById("dva").value, 10) || 0,
    kolTreci = parseInt(document.getElementById("tri").value, 10) || 0,
    kolCetvrti = parseInt(document.getElementById("cetiri").value, 10) || 0,
    kolPeti = parseInt(document.getElementById("pet").value, 10) || 0,
    kolSesti = parseInt(document.getElementById("sest").value, 10) || 0,
    kolSedmi = parseInt(document.getElementById("sedam").value, 10) || 0,
    kolOsmi = parseInt(document.getElementById("osam").value, 10) || 0,
    kolDeveti = parseInt(document.getElementById("devet").value, 10) || 0,
    kolDeseti = parseInt(document.getElementById("deset").value, 10) || 0,
    kolJedanaesti = parseInt(document.getElementById("jedanaest").value, 10) || 0,
    kolDvanaesti = parseInt(document.getElementById("dvanaest").value, 10) || 0,
    kolTrinaesti = parseInt(document.getElementById("trinaest").value, 10) || 0,
    kolCetrnaesti = parseInt(document.getElementById("cetrnaest").value, 10) || 0,
    kolPetnaesti = parseInt(document.getElementById("petnaest").value, 10) || 0,
    kolSesnaesti = parseInt(document.getElementById("sesnaest").value, 10) || 0,
    kolSedamnaesti = parseInt(document.getElementById("sedamnaest").value, 10) || 0,
    kolOsamnaesti = parseInt(document.getElementById("osamnaest").value, 10) || 0


/*     grad = document.getElementById("s-grad").value;

  var methods = document.getElementById("proizvodi").r_method,
    isporukaMetod;

  for (var i = 0; i < methods.length; i++) {
    if (methods[i].checked == true) {
      isporukaMetod = methods[i].value;
    }
  } */

/*   var pdvIznos = 1;
  if (grad === "DR") {
    pdvIznos = 1.20; // pdv od 20%
  }
 */

/*   var cenaIsporukePo = 0;
  switch (isporukaMetod) {
    case "senf":
      cenaIsporukePo = 50;
      break;  // traži dalje
    case "kecap":
      cenaIsporukePo = 50;
      break;
    case "ljuto":
      cenaIsporukePo = 50;
      break;
    case "krastvcici":
      cenaIsporukePo = 50;
      break;  // traži dalje
    case "kackavalj":
      cenaIsporukePo = 100;
      break;
    case "slaninica":
      cenaIsporukePo = 100;
      break;
  } */
  var ukupnoProizvoda = kolPrvi + kolDrugi + kolTreci + kolCetvrti + kolPeti + kolSesti + kolSedmi + kolOsmi + kolDeveti + kolDeseti + kolJedanaesti + kolDvanaesti + kolTrinaesti + kolCetrnaesti + kolPetnaesti + kolSesnaesti + kolSedamnaesti + kolOsamnaesti;

  var korpa = ((kolPrvi * 250) + (kolDrugi * 250) + (kolTreci * 200) + (kolCetvrti * 150) + (kolPeti * 150) + (kolSesti * 100) + (kolSedmi * 100) + (kolOsmi * 100) + (kolDeveti * 100) + (kolDeseti * 100) + (kolJedanaesti * 150) + (kolDvanaesti * 150) + (kolTrinaesti * 50) + (kolCetrnaesti * 50) + (kolPetnaesti * 50) + (kolSesnaesti * 50) + (kolSedamnaesti * 100) + (kolOsamnaesti * 100)) ;

  var izracunaj = (korpa).toFixed(2);

  document.getElementById("txt-izracunaj").value = izracunaj;

  document.getElementById("rezultati").innerHTML = "Ukupno proizvoda: " + ukupnoProizvoda + '<br>';

  /* document.getElementById("rezultati").innerHTML += "Cena isporuke: " + isporukaCena.toFixed(2) + '<br>'; */


  /* document.getElementById("rezultati").innerHTML += "PDV: " + ((pdvIznos - 1) * 100).toFixed(2) + '%'; */
}
