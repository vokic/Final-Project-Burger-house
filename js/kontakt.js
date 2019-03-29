
function proveri()  {
	let testIme = /^[a-zA-Z '-]{2,32}$/g
	let testMail = /^[a-z0-9]+_?([.]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,5}$/g
	let testTel = /^0\d\d\/\d{3}-\d{3,4}$/g
	let testPoruka =  /^[A-Za-z_0-9.,!? ]{10,600}$/g

	let ime = document.forma.ime.value;
	let email = document.forma.email.value;
	let telefon = document.forma.telefon.value;
	let poruka = document.forma.poruka.value;


	let rezultatIme = ime.match(testIme);
	let rezultatMail = email.match(testMail);
	let rezultatTel = telefon.match(testTel);
	let rezultatPoruka = poruka.match(testPoruka);

	if (rezultatIme == null)
	{
		alert("Uneto ime i prezime nisu ispravni!");
		document.forma.ime.focus();
	}

	else if(rezultatMail == null)
	{
	alert("Uneta email adresa nije ispravna!");
		document.forma.email.focus();
	}
	else if(rezultatTel == null)
	{
	alert("Uneti telefon nije ispravan!");
		document.forma.telefon.focus();
	}
else if (rezultatPoruka == null) {
		alert("Neispravam format poruke!");
		document.forma.poruka.focus();
	}
	else {
			document.forma.submit();
			alert("Hvala što ste nam pisali. Uskoro ćemo vas kontaktirati!");
			window.open("hvala.html");
			document.forma.reset();
		}
};


