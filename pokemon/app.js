// https://raw.githubusercontent.com/jaylynch/pokemoji/master/img/1.png
const baseurl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container=document.querySelector('#container');
const button1= document.querySelector('#explore');
button1.addEventListener('click', function(){
    for(let i=1;i<152;i++){
        const pokediv = document.createElement('div');
        const pokeimg=document.createElement('img');
        pokeimg.src=`${baseurl}${i}.png`;
        pokediv.appendChild(pokeimg);
        const pokenum=document.createElement('span');
        pokenum.innerText=`#${i}`;
        pokediv.appendChild(pokenum);
        //finally
        container.appendChild(pokediv);
    }
});
function randomcolor(){
 const r=Math.floor(Math.random()*256);
 const g=Math.floor(Math.random()*256);
 const b=Math.floor(Math.random()*256);
 return `rgb(${r},${g},${b})`
};
const button2=document.querySelector('#backgd');
const h2tag=document.querySelector('h2');
button2.addEventListener('click',function(){
const color=randomcolor();
document.body.style.backgroundColor=color;
h2tag.innerHTML=color;
});