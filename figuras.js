const ladoCuadrado = 5;
console.group("Cuadrados");

console.log("Los lados del cuadrado miden:" + ladoCuadrado +" cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es:" + perimetroCuadrado+" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es:" + areaCuadrado+" cm^2");

console.groupEnd();

//Codigo del triangulo
console.group("Triángulos");

const ladotriangulo1 = 6;

const ladotriangulo2 = 6;
const baseTriangulo = 4;



console.log("Los lados del triangulo miden:" 
+ ladotriangulo1 
+" cm, "
+ ladotriangulo2 
+"cm ," 
+ baseTriangulo 
+ "cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de:" + alturaTriangulo);

const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + baseTriangulo;

console.log("El perimetro del triángulo es:" + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/ 2;
console.log("El area del triángulo es:" + areaTriangulo + "cm^2");

console.groupEnd();

console.group("Círculos");
const radioCirculo = 4;
console.log("El radio del círculo es:" + radioCirculo +"cm")
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es:" + diametroCirculo +"cm")

const PI = Math.PI;
console.log("PI es :" + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del círculo es:" + perimetroCirculo +"cm")

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del círculo es:" + areaCirculo +"cm^2")



console.groupEnd();
