const produtos = [
  {imagem:"img/fogo.oculto.jpg",nome:" Amuleto Fogo Oculto",categoria:"Amuletos",descricao:"Amuleto associado à força interior, proteção e transformação.",preco:39.90},
  {imagem:"img/olhar.dourado.jpg",nome:" Amuleto Olhar Dourado",categoria:"Amuletos",descricao:"Amuleto dourado associado à proteção, clareza e à capacidade de enxergar além.",preco:34.90},
  {imagem:"img/almofariz.pestal.jpg",nome:"Almofariz com Pilão",categoria:"Acessórios",descricao:"Almofariz com pilão para preparar ervas, resinas e outros elementos esotéricos.",preco:49.90},
  {imagem:"img/baralho.sibilla.jpg",nome:"Oráculo Vera Sibilla Italiana",categoria:"Oráculos",descricao:"Baralho tradicional para leituras intuitivas e consultas oraculares.",preco:59.90},
  {imagem:"img/baralho.tarot.jpg",nome:"Tarot Clássico",categoria:"Oráculos",descricao:"Baralho de Tarot com ilustrações tradicionais para estudos e leituras.",preco:54.90},
  {imagem:"img/cristais.coloridos.jpg",nome:"Kit Cristais Coloridos",categoria:"Cristais",descricao:"Seleção de cristais naturais para coleção, decoração e práticas energéticas.",preco:39.90},
  {imagem:"img/essencias.ervas.jpg",nome:"Kit Essências de Ervas",categoria:"Aromas",descricao:"Essências aromáticas com ervas para relaxamento e práticas pessoais.",preco:34.90},
  {imagem:"img/insenco.erva.jpg",nome:"Incenso de Ervas",categoria:"Aromas",descricao:"Incenso aromático de ervas para perfumar ambientes e momentos de relaxamento.",preco:12.90},
  {imagem:"img/livro.cigano.jpg",nome:"Baralho Cigano",categoria:"Oráculos",descricao:"Baralho inspirado na tradição cigana para leituras e estudos simbólicos.",preco:42.90},
  {imagem:"img/livro.oraculo.jpg",nome:"O Oráculo Mágico",categoria:"Livros",descricao:"Livro sobre práticas oraculares e simbologia esotérica.",preco:49.90},
  {imagem:"img/livro.tarot.jpg",nome:"Guia de Tarot",categoria:"Livros",descricao:"Guia introdutório sobre os Arcanos e a interpretação das cartas.",preco:44.90},
  {imagem:"img/pendulo.dourado.jpg",nome:"Pêndulo Dourado",categoria:"Acessórios",descricao:"Pêndulo com acabamento dourado para radiestesia e práticas intuitivas.",preco:29.90},
  {imagem:"img/pendulo.estrela.jpg",nome:"Pêndulo de pentagrama",categoria:"Acessórios",descricao:"Pêndulo com detalhe de estrela e pedra para radiestesia.",preco:32.90},
  {imagem:"img/pendulo.rosa.jpg",nome:"Pêndulo Rosa",categoria:"Acessórios",descricao:"Pêndulo de pedra rosada para radiestesia e práticas intuitivas.",preco:34.90},
  {imagem:"img/velas.coloridas.jpg",nome:"Kit Velas Coloridas",categoria:"Velas",descricao:"Conjunto de velas coloridas para decoração e práticas simbólicas.",preco:24.90},
  {imagem:"img/velas.roxas.jpg",nome:"Velas com Pentagrama",categoria:"Velas",descricao:"Velas roxas decoradas para compor altares e ambientes místicos.",preco:27.90}
];
// Deixa o JS mexer nos elementos do HTML:
 const caixaProdutos = document.getElementById("caixaProdutos");
 const busca = document.getElementById("busca");
 
 function mostrarProdutos(lista){

   caixaProdutos.innerHTML = "";

    lista.forEach(produto => {

// Cria os cards:
const card = document.createElement("div");
card.classList.add("card");

// Coloca HTML dentro do card:
card.innerHTML =`
<img src ="${produto.imagem}">
<h2>${produto.nome}</h2>
<p>${produto.descricao}</p>
<div class="rodape-card">
<span>${produto.categoria}</span>
<strong>R$ ${produto.preco.toFixed(2)}</strong>
</div>
`;

caixaProdutos.appendChild(card); // Coloca os cards dentro da div principal

    });
  }
  
 mostrarProdutos(produtos);

 // Faz a barra de pesquisa funcionar
 busca.addEventListener("input", () => {

 const texto = busca.value.toLowerCase(); // "toLowerCase()" deixa tudo em minúsculo
 const produtosFiltrados = produtos.filter(produto => {

    return produto.nome.toLowerCase().includes(texto) ||
           produto.descricao.toLowerCase().includes(texto) ||
           produto.categoria.toLowerCase().includes(texto);

 });
 
 mostrarProdutos(produtosFiltrados);

 });
