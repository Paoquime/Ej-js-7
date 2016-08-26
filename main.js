var numeroEntero = prompt ("Ingrese un número");

if (numeroEntero > 0 && numeroEntero < 101) {
	if (numeroEntero % 2 == 0) {
		if (numeroEntero > 1 && numeroEntero < 6) {
		document.write ("Good!");
		}
		else if (numeroEntero > 5 && numeroEntero < 21) {
			document.write ("Great");
		}
		else if (numeroEntero > 20) {
			document.write ("Perfect");
		}
	}
	else {
		document.write ("Odd");
	}
}