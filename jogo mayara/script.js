window.addEventListener("load", ()=>{
    
    const PALAVRAS_PERMITIDAS = ["Salsicha", "Scooby", "Doo"];

    const linha_da_forca = document.querySelector("#container #wrapper #linha");

    const palavra_certa = PALAVRAS_PERMITIDAS[Math.ceil(Math.random() * linha_da_forca.length)];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    
    const teclado_linhas = document.querySelectorAll("#teclado .linha");

    const TECLADO_TECLAS = {
        0:["Q", "W", "E","R", "T", "Y", "U", "I", "O", "P"],
        1:["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        2:["Z", "X", "C", "V", "B", "N", "M"]
    }

    

    teclado_linhas.forEach((linha, ind)=>{
        TECLADO_TECLAS[ind].forEach((letra)=>{
            const tecla = document.createElement("button");
            tecla.innerText = letra; 
            tecla.classList = "tecla";

            tecla.addEventListener("click", (el)=>{

            })

            linha.appendChild(tecla);
        })
    })
})