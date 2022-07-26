function creadorNAV(){
    const borrar = document.getElementById("desplegable");
    borrar.style.display = "none";
    
    

    let menu = document.createElement("NAV");
    menu.id = "navbar"
    let produc = document.createElement("a");
    produc.innerHTML = "NUESTRAS ESPECIALIDADES";
    produc.href = "menu.html";

    let direc = document.createElement("a");
    direc.innerHTML = "DONDE ENCONTRARNOS";
    direc.href = "direcion.html";

    let presu = document.createElement("a");
    presu.innerHTML = "PRESUPUESTO";
    presu.href = "presupuesto.html";

    let testi = document.createElement("a");
    testi.innerHTML = "TESTIMONIOS";
    testi.href = "testimonio.html";

    menu.appendChild(produc);
    menu.appendChild(direc);
    menu.appendChild(testi);
    menu.appendChild(presu);
    document.getElementById("cabecera").appendChild(menu);
}


function reactivarMenu(){
    const des = document.getElementById("desplegable");
    des.style.display = "none";
    const menu = document.getElementById("navbar");
    menu.style.display = "flex";
    
}

function reactivarDes(){
    const des = document.getElementById("desplegable");
    des.style.display = "inline-block"; 
    
    const menu = document.getElementById("navbar");
    menu.style.display = "none";
}


