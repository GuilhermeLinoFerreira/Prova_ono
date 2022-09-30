const body = document.querySelector('body'); 

//Menu
const menuContainer = document.createElement('div');
menuContainer.setAttribute('id' , 'pagMenu')
menuContainer.classList.add('menu-container');
body.appendChild(menuContainer);

const ul = document.createElement('ul');
menuContainer.appendChild(ul);

const principal = document.createElement('li');
principal.setAttribute('id', 'menu0')
ul.appendChild(principal);
principal.innerHTML='<input type="checkbox" id="btnPrin">Principal</input>';

var btn1 = document.getElementById("btnPrin");


btn1.addEventListener("change" , function(){
    var removeCont =document.getElementById("guicorno");
    removeCont.classList.toggle("hide");
    
})
btn1.addEventListener("change" , function(){
    var removeCont2 =document.getElementById("_contato");
    removeCont2.classList.toggle("hide");
    })


const sobre = document.createElement('li');
sobre.setAttribute('id' , 'menu1');
ul.appendChild(sobre);
sobre.innerHTML='<input type="checkbox" id="btnSob" name= "ovo">Conteúdo da cidade</input';

var btn2 = document.getElementById("btnSob");


btn2.addEventListener("change" , function(){
    var removeCont =document.getElementById("conteudo12");
    removeCont.classList.toggle("hide");
    
})
btn2.addEventListener("change" , function(){
    var removeCont2 =document.getElementById("_contato");
    removeCont2.classList.toggle("hide");
    })

const faleConosco = document.createElement('li');
faleConosco.setAttribute('id' , 'menu2');
ul.appendChild(faleConosco);
faleConosco.innerHTML='<input type="checkbox" id="btnContato" name= "ovo" >Contato</input';

var btn3 = document.getElementById("btnContato");


btn3.addEventListener("change" , function(){
    var removeCont =document.getElementById("conteudo12");
    removeCont.classList.toggle("hide");
    
})
btn3.addEventListener("change" , function(){
    var removeCont2 =document.getElementById("guicorno");
    removeCont2.classList.toggle("hide");
    })

    //Modo escuro 
 const dark = document.createElement('li');  
 ul.appendChild(dark); 
 dark.innerHTML='<input type="checkbox" id = "chk">white</input>' 
  
  
 dark.addEventListener('change', () => { 
    document.body.classList.toggle('Dark') 
 })


const Principal1=document.createElement('div')

const mainContainer = document.createElement('div');
mainContainer.classList.add('cabecalho');
Principal1.appendChild(mainContainer);

const titulo = document.createElement('h1');
titulo.innerHTML = 'MMZ RP';

const header = document.createElement('header');
header.appendChild(titulo);
mainContainer.appendChild(header);

const main = document.createElement('main');
main.setAttribute('id' , 'conteudo12')
body.appendChild(main);

const inicio = document.createElement('div');
inicio.classList.add('informativo');
Principal1.appendChild(inicio);

const texto_inicio = document.createElement('p');
texto_inicio.classList.add('paragrafo');
inicio.appendChild(texto_inicio);
texto_inicio.innerHTML = 'Esse site tem como intuito divulgar a Cidade de Gta RP do cantor Mumuzinho.';

const MMZ = document.createElement('section');
main.appendChild(MMZ);
MMZ.classList.add('guitar');

const titulo_guitarra = document.createElement('h2');
main.appendChild(titulo_guitarra);
MMZ.appendChild(titulo_guitarra);
titulo_guitarra.classList.add('texto_guita');
titulo_guitarra.innerHTML = 'Sobre a cidade';

const MMZ_container = document.createElement('div');
main.appendChild(MMZ_container);
MMZ.appendChild(MMZ_container);
MMZ_container.classList.add('kiko');

const Foto_MMZ = document.createElement('img');
Foto_MMZ.src = 'https://loja.mmzrp.com.br/storage/misc/Lp8oZWOOQ9AnJMPVLo9lDZA0TjscdeiB0JtZgHjX.png';
main.appendChild(Foto_MMZ);
MMZ_container.appendChild(Foto_MMZ);
Foto_MMZ.classList.add('foto');

const texto_kiko = document.createElement('p');
main.appendChild(texto_kiko);
MMZ_container.appendChild(texto_kiko);
texto_kiko.classList.add('texto_geral');
texto_kiko.innerHTML = 'Uma ciade que foi inaugurada no dia 06/09/2022, é uma cidade onde o rp é levado a serio' + 
' e contem uma base muito boa e leve para Pcs que não contem configurações boas, além de conter uma temática' + 
'do Rio de Janeiro, contendo favelas, hospitais, bares, baladas, carros br, dentre muitas outras coisas interessantes.' +
' Além dessa temática, conta com a presença e apoio do cantor mumuzinho, além de ter uma Staff (Administração) excepcional' +
', com atendimento tanto via discord, quanto ingame. Para entrar na cidade você passa por dois processos, um chamado de White list' +
' e a entrevista por voz, onde o player devera explicar com suas palavras regras que o administrador ira fazer aleatoriamente.';

 //botao volta ao topo 
 const topoDiv=document.createElement('div'); 
 body.appendChild(topoDiv) 
  
 const topo = document.createElement('div'); 
 topo.setAttribute('class' , 'topo') 
 topoDiv.appendChild(topo) 
 topo.innerHTML='<button onclick="topFunction()" id="myBtn" title="Go to top">↑</button>' 
  
  
 let mybutton = document.getElementById("myBtn");
 document.onscroll = function() {scrollFunction()}; 
  
 function scrollFunction() { 
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
     mybutton.style.display = "block"; 
   } else { 
     mybutton.style.display = "none"; 
   } 
 } 
  
 function topFunction() { 
   document.body.scrollTop = 0;  
   document.documentElement.scrollTop = 0;  
 }

const sobre_a_cidade = document.createElement('div');
sobre_a_cidade.setAttribute('id' , 'guicorno')
sobre_a_cidade.setAttribute('class' , 'guicorno')
sobre_a_cidade.innerHTML="O que a cidade contém ?"
body.appendChild(sobre_a_cidade);

//faccao
const coisas_da_cidade = document.createElement('div');
sobre_a_cidade.appendChild(coisas_da_cidade);

const txt_da_cidade = document.createElement('div');
txt_da_cidade.setAttribute('id' , 'txt')
txt_da_cidade.innerHTML="Na cidade há 4 facções disponiveis, onde cada uma delas contém uma favela, e essas" +
"são diferentes uma das outras e contem farmes diferentes uns dos outros"
sobre_a_cidade.appendChild(txt_da_cidade);

const Foto_faccao = document.createElement('img');
Foto_faccao.src = 'https://media.discordapp.net/attachments/1009297995302440990/1012568950426570783/FACCAO.jpg?width=473&height=473'
main.appendChild(Foto_faccao);
txt_da_cidade.appendChild(Foto_faccao);
Foto_faccao.classList.add('faccao');

//mafia
const coisas_da_cidade2 = document.createElement('div');
sobre_a_cidade.appendChild(coisas_da_cidade2);

const txt_mafia = document.createElement('div');
txt_mafia.setAttribute('id' , 'txt_M');
txt_mafia.innerHTML='Há 3 mafias na cidade que tem como intuito fazer um RP mais secreto' + 
' sem poder dar muuito as caras, seguindo um farme de produção de armas, coletes e outros itens que irão' + 
' dar a possibilidade de players praticarem um grande plano para assalto a bancos dentre outras coisas.'
sobre_a_cidade.appendChild(txt_mafia);

const Foto_mafia = document.createElement('img');
Foto_mafia.src = 'https://cdn.discordapp.com/attachments/1009297995302440990/1012568950695014470/MAFIA.jpg'
main.appendChild(Foto_mafia);
txt_mafia.appendChild(Foto_mafia);
Foto_mafia.classList.add('mafia');

//Policia
const coisas_da_cidade3 = document.createElement('div');
sobre_a_cidade.appendChild(coisas_da_cidade3);

const txt_pm = document.createElement('div');
txt_pm.setAttribute('id' , 'txt_p');
txt_pm.innerHTML='Como há coisas ilegais, também há empregos legais, há três tipos de Policia na cidade, a PMRJ, PRF e Policia civil' + 
' para entrar na PM, você deve ficar atento a quando os editais abrem e nos materias postados pelo delegado geral,' + 
', quando prestado o edital, você sera avaliado e avisado caso passe ou reprove, mas vale ressaltar que um requisito' +
' obrigatorio é ter a sua ficha limpa e não estar empregado em qualquer emprego da área ilegal.'
sobre_a_cidade.appendChild(txt_pm);

const Foto_pm = document.createElement('img');
Foto_pm.src = 'https://cdn.discordapp.com/attachments/1009297995302440990/1012568951030562816/POLICIA.jpg'
main.appendChild(Foto_pm);
txt_pm.appendChild(Foto_pm);
Foto_pm.classList.add('Policia');

//contato
const contato_ = document.createElement('div');
contato_.setAttribute('id' , '_contato')
contato_.setAttribute('class' , '_contato')
contato_.innerHTML="Contato: (19) 974214433"
body.appendChild(contato_);

const regras_MMZ = document.createElement('div');
regras_MMZ.setAttribute('id' , 'RGM');
regras_MMZ.setAttribute('class' , '_contato')
regras_MMZ.innerHTML = '<a href = "https://docs.google.com/document/d/1H1b5IqFRopT_KpzBitfQ2Qh89BoaaLtby1IlWb99z30/edit">Regras da cidade</a>'
contato_.appendChild(regras_MMZ)


























 


