//1 - number

let num = 1;
let str = "abcde";

console.log(typeof 2);
console.log(typeof "2");

//2 - Operações aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

// 3 - Special numbers

console.log(typeof Infinity);
console.log(typeof infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - String

console.log(typeof "marcolaPCC");
console.log(typeof "marcolaPCC");
console.log(typeof `marcolaPCC`);

//5 - Símbolos especiais em string

console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");

//6 - Concatenação

console.log("Oi, " + "tudo" + " bem?");
console.log(`Testando com crase `);

//7 - Interpolação

console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

//8 - Booleans

console.log(true);
console.log(false);

console.log(9 > 10);
console.log(30 > 10);
console.log(typeof true);

//9 - Comparações

console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

//10 - Idêntico

console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

//11 - Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && 2 > 10);
console.log(5 > 2 || 2 > 10);
console.log(!5 < 2 || 2 > 10);

//12 - Empty Values

console.log(typeof null, typeof undefined);
console.log(null == undefined);
console.log(null === undefined);
console.log(undefined == false);

//13 - Conversão de Tipo automática

console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);




