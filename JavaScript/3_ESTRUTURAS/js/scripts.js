//1 - variáveis
let nome = "Marcola do PCC"

console.log(nome);
console.log("Marcola do PCC");

nome = "Marcola do CV"

console.log(nome);

const idade = 23

console.log(idade);

// idade = 32

console.log(typeof nome);
console.log(typeof idade);


//2 - Mais sobre variáveis

//let 2teste = "inválido"
//let @teste = "inválido"

let a = 10, b = 20 , c = 30

console.log(a, b, c);

const nomecompleto = "Marcola do pcc"

const nomeCompleto = "Marcola do CV"

console.log(nomeCompleto);
console.log(nomecompleto);

//3 - Prompt

// const age = prompt("Digite a sua idade: ")

// console.log("Você tem " + age + " anos")

//4 - Alert

// let numero = 15
// alert("O número é: " + numero)

//5 - Math
console.log("O maior número é: " + Math.max(5, 2 , 1 ,10))

console.log("O número a ser arredondado é 5.14, ele arredondado para baixo é: " + Math.floor(5.14))
console.log("O número a ser arredondado é 5.14, ele arredondado para cima é: " + Math.ceil(5.14))

//6 - Console

console.log("Teste!")

console.error("erro!")

console.warn("Aviso!");

//7 - if 
const m = 10;

if(m > 5){
    console.log("M é maior que 5")
}


//8 - else
const user = "João"

if(user === "João"){
    console.log("User é João");
}
else{
    console.log("User não é João");    
}

const loggedIn = false

if(loggedIn){
    console.log("Usuário logado");
}
else{
    console.log("Não está autenticado");
    
}


//9 - else if

if(1 > 2){
    console.log("If verdadeiro");
}else if(2 > 3){
    console.log("Else if verdadeiro");
}else if(3 > 2){
    console.log("Agora sim else if é verdadeiro");
}

//10 - Estruturas de Repetição (While)
let todosOsCarrosConsertados = false
let carrosConsertados = 0
while(todosOsCarrosConsertados !== true){

    console.log("carros consertados: " + ++carrosConsertados);
    if(carrosConsertados == 10)
        todosOsCarrosConsertados = true
}
console.log("total de carros consertados: " + carrosConsertados);


//11 - Do While

let o = 10

do{
    console.log(`Valor de o: ${o}`);
    o--
}while(o > 1)


//12 - For
for(let i = 0; i < 10 ; i++){
    console.log(`Repetindo ${i} vezes!!`)
}

//13 - Identação

for(let u = 0; u < 10; u++){
    if(u * 2 > 10){
        console.log("Maior que 10");
    }
}

//14 - Break

for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`);
    if(g  == 12){
        console.log("o g é 12!!");
        break;
    }
}

//15 - Continue

for(let s = 0; s < 10; s = s+ 1){
    //operador resto = %

    if(s % 2 == 0){
        console.log(`${s} é par`);
        continue
    }
    console.log(`${s} é impar`);
}

//16 - Switch

const job = "Advogado"

switch (job) {
    case "Programador":
        console.log("Você é um programador");
        break;
    case "Advogado":
        console.log("Você é um advogado");
        break;
    case "Engenheiro":
        console.log("Você é engenheiro");
        break;
    default:
        console.log("Profissão não encontrada");
        break;
}