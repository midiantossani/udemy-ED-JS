// Inserindo elementos
var number = [0,1,2,3,4,5,6,7,8,9]

//para inserir (mas não é o ideal):
number[number.length] = 10
number[number.length] = 11

//O ideal seria:
number.push(12)
number.push(13)

// e para inserir algo antes (na primeira posição):
number.unshift(-1)
number.unshift(-2)

//no JS, a posição não é negativa, apenas o valor.

//sobrescrever o valor existente:
//number[0] = -40

//Remover elementos:
//1.do último array
number.pop()
number.pop()

//2.do começo
number.shift()
number.shift()
console.log(number)

//removendo elementos de uma posição específica:
number.splice(5, 2)
console.log(number)

//Inserindo elementos de uma posiçaõ específica:
number.splice(5, 0, 5, 6, 10, 20)
console.log(number)