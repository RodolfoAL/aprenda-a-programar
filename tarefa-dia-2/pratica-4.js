/*Um cliente que vende produtos internacionais e nacionais conseguiu extrair 
alguns dados de seu programa financeiro. O problema é que esse programa 
retorna os dados na forma de mapas e traz apenas o valor do produto e se ele 
é internacional ou nacional, mas não calcula os impostos.

Dada essa situação, ele contratou você para criar um programa que, ao receber 
o mapa de um produto, verifica se ele é nacional ou internacional e aplica 
20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez 
aplicado o imposto, o programa imprime na tela o valor total do produto.

Copie essa base para o arquivo pratica-4.js e escreva um programa que resolve 
o problema do cliente e exibe as informações dos produtos e o valor aplicado 
os impostos devidos. Você deve testar o seu código com os 3 produtos. 
Não esqueça do de sempre: testar o código, ver se ele está funcionando e 
depois subir ele no GitHub.
*/

let produtoA = { nome: 'camiseta', valor: 100.0, internacional: true };
let produtoB = { nome: 'perfume', valor: 200.0, internacional: true };
let produtoC = { nome: 'sandália', valor: 120.0, internacional: false };

/*if ((produtoA['internacional'] = true)) {
  console.log(`A ${produtoA['nome']} é internacional`);
} else {
  console.log(`A ${produtoA['nome']} não é internacional`);
}

if ((produtoB['internacional'] = true)) {
  console.log(`A ${produtoB['nome']} é internacional`);
} else {
  console.log(`A ${produtoB['nome']} não é internacional`);
}*/

var produtos = [produtoA, produtoB, produtoC];

for (var i = 0; i < produtos.length; i++) {
  if (produtos[i].internacional == true) {
    console.log(
      `O Pruduto ${produtos[i].nome} é internacional e seu valor com importo é de: R$` +
        produtos[i].valor * 1.2
    );
  } else {
    console.log(
      `O produto ${produtos[i].nome} é nacional e seu valor com importo é de: R$` +
        produtos[i].valor * 1.12
    );
  }
}
