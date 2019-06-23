
function proveri()  {
	let testIme = /^[a-zA-Z '-]{2,32}$/g
	let testMail = /^[a-z0-9]+_?([.]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,5}$/g
	/* let testPass = /^[\d\w]{8,}$/g
	let testWeb = /^(https?(:\/\/))?www\.[a-z0-9]+[-.]?[a-z0-9]+\.[a-z]{2,7}$/g */
	let testTel = /^0\d\d\/\d{3}-\d{3,4}$/g
	let testPoruka = /^.{2,500}$/gm

	let ime = document.forma.ime.value;
	/* let prezime = document.forma.prezime.value; */
	let email = document.forma.email.value;
	/* let password = document.forma.password.value;
	let web = document.forma.web.value; */
	let telefon = document.forma.telefon.value;
	let poruka = document.forma.poruka.value;


	let rezultatIme = ime.match(testIme);
	/* let rezultatPrezime = prezime.match(testIme); */
	let rezultatMail = email.match(testMail);
	/* let rezultatPass = password.match(testPass);
    let rezultatWeb = web.match(testWeb); */
	let rezultatTel = telefon.match(testTel);
	let rezultatPoruka = poruka.match(testPoruka);

	if (rezultatIme == null)
	{
		alert("Uneto ime i prezime nisu ispravni!");
		document.forma.ime.focus();
	}
	/* else if(rezultatPrezime == null)
	{
	alert("Prezime nije ispavan!");
		document.forma.prezime.focus();
	} */
	else if(rezultatMail == null)
	{
	alert("Uneta email adresa nije ispravna!");
		document.forma.email.focus();
	}
	/* else if(rezultatPass == null)
	{
	alert("Password nije ispavan!");
		document.forma.password.focus();
	}
	else if(rezultatWeb == null)
	{
	alert("Web adresa nije ispavan!");
		document.forma.web.focus();
	} */
	else if(rezultatTel == null)
	{
	alert("Uneti telefon nije ispravan!");
		document.forma.telefon.focus();
	}
else if (rezultatPoruka == null) {
		alert("Niste uneli tekst poruke!");
		document.forma.poruka.focus();
	}
	else {
			document.forma.submit();
			alert("Hvala što ste nam pisali. Uskoro ćemo vas kontaktirati!");
			window.open("hvala.html");
			document.forma.reset();
		}
};


