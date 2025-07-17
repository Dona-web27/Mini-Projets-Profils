const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

/* Erreur ici car je reasigner au lieu de declarer
une nouvelle variable pour une bonne utilisation
car l'effect de reasigner casse completement le bouton
et on peut plus l'utiliser */
/* 
btn1.addEventListener("click", () => {
  btn1 = document.querySelector("h2");
  btn1.style.color = "red";
}); */

/* Meilleur utilisation ici */
/* J'aimerais faire en sorte qu'il ait 2 action quand j'appuie
sur un bouton */
let click = true;
btn1.addEventListener("click", () => {
  if (click == true) {
    const title = document.querySelector("h2");
    title.style.color = "red";
    title.textContent = "Following";
  } else {
    const title = document.querySelector("h2");
    title.style.color = "black";
    title.textContent = "Jin Hoo";
  }
  click = !click;
});

/*
 btn2.addEventListener("click", () => {
  btn2 = document.querySelector("img");
  btn2.style.transform = "translateX(-40px)";
  btn2.style.transition = "0.7s ease";
}); */

/* Je vais utiluser l'alternance pour 3 logique  
pour sa je besoin du modulo*/
let click2 = 0;
btn2.addEventListener("click", () => {
  if (click2 === 0) {
    const para = document.querySelector("img");
    para.style.transform = "translateX(-40px)";
    para.style.transition = "0.7s ease";
    console.log(click2);
  } else if (click2 === 1) {
    const para = document.querySelector("img");
    para.style.transform = "translateX(40px)";
    para.style.transition = "0.7s ease";
    console.log(click2);
  } else if (click2 === 2) {
    const para = document.querySelector("img");
    para.style.transform = "translateX(0)";
    para.style.transition = "0.7s ease";
    console.log(click2);
  }
  click2 = (click2 + 1) % 3;
});
