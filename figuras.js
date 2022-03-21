//------------Constantes-e-inicializacion--------
//Lados
const lado_a = document.getElementById("Lado_a");
const a = Number(lado_a.value);
const lado_b = document.getElementById("Lado_b");
const b = Number(lado_b.value);
const lado_c = document.getElementById("Lado_c");
const c = Number(lado_c.value);
//Angulos
const angulo_A = document.getElementById("Angulo_A");
const A = Number(angulo_A.value);
const angulo_B = document.getElementById("Angulo_B");
const B = Number(angulo_B.value);
const angulo_C = document.getElementById("Angulo_C");
const C = Number(angulo_C.value);
//Base-y/o-altura
const Base_ = document.getElementById("Base");
const base = Number(Base_.value);
const Altura_ = document.getElementById("Altura");
const altura = Number(Altura_.value);

//-----------Formulas-calculo-de-datos (suma de lados, formula Heron)-------------------
function perimetro (a,b,c){
    return a+b+c;
};

const SP = perimetro/2;  //semiPerimetro

function area(a,b,c){
    return Math.sqrt(SP*(SP-a)*(SP-b)*(SP-c))
}

//-----------Formulas-calculo-de-variables (lados y angulos)-----------




function equilatero (a,b,c,A,B,C){
    if ((a == b == c) || (A == B == C))
    return 
}




{

}


function triangle (a,b,c,A,B,C,base,altura){
    (a == b == c) || (A == B == C)
}


function twoSidesToAngle (a,b,c,A,B,C,base,altura){

    if ()

}

