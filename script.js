console.log("innan blocket");

{
    let bilmärke = "Mercedes";
    const modellår = 2020;
    var skick = "begagnad"; 

    console.log(bilmärke);
    console.log(modellår);
    console.log(skick);
}

console.log("efter blocket");
console.log(skick); 

/* 
1.Let och const är begränsade till blocket där den anges och var fungerar också utanför blocket. 

2.Före blocket kan man inte komma åt variablerna. 
Men inuti blocket så fungerar alla tre och efter blocket fungerar endast var.
*/

const add = (num1, num2)=> 
    {
        console.log(num1 == 0);
        console.log(num2 === '0');
        console.log(num2 === 0);
        console.log(num1 == NaN);
        
        console.log(num1 ? "truthy" : "falsy");
        
        
        if(num1 != null && num2 != null && typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2;
        }
    }; 

const num1 = 0;
let arg1;
let sum = false; 

console.log(add(sum,1));
console.log(add("0",3));
console.log(add(3,"num1"));
console.log(add(-5,num1));
console.log(add(arg1,7));
console.log(add());

console.log(num1);
console.log(sum);



/*
1.Ifall jag hade använt let istället för const, så hade jag gett variabeln add en ny funktionen för användning. 

2. Jag hade skrivit så här:
   
function add (num1, num2)
    {
        return num1 + num2;
    };

3. Det innebär att funktioen skickar tillbaka ett svar.
*/


/* 
1. Ternary operatorn är en kortare variant av if() sats. Alltså det gör att man kan skriva det kortare.

2. == jämför värdena och === jämför värden och dataypen.

3.  Jag använde !=null för att kolla att parametrarna inte är null. 
*/


/* 
1.
Parameter: Finns i funktione.
Argument: Det skickas in vid anrop av funktionen.
Variabel: Är det som lagrar ett värde.

2. Sista värdet num1 är 0 eftersom variabeln är samma och går inte igenom nån ändring. 

3. 
Test 4, add(-5,num1) 
Parametrarna tilldelas värdet -5 och 0.
Sen så ger jämförelserna false, false, true och false. Och Ternary ger "Truthy".
Därfter if satsen godkänns och skickar tillbaka alltså (returnerar) -5.

Resten av testerna returnerar undefined för att kraven i if satsen uppfylls inte.
*/


