window.addEventListener("load", ()=>{


    // ESCOLHA DA PALAVRA ---------------
    const TEMAS_PERMITIDOS = ["Poluição do ar", "Poluição do solo"];

    const PALAVRAS_PERMITIDAS = {
        "Poluição do ar": ["Enxofre", "Metano", "Chuva"],
        "Poluição do solo": ["Uranio", "Chorume"]
    };

    //Exemplo para a Minnie ver  
    //"Poluição do ar": {"Enxofre": {"img":"./assets", "texto":"sda"}, "Chuva"};

    
    let tema_da_vez = TEMAS_PERMITIDOS[Math.round(Math.random() * (TEMAS_PERMITIDOS.length - 1))];
    
    let palavra_certa = PALAVRAS_PERMITIDAS[tema_da_vez][Math.round(Math.random() * (PALAVRAS_PERMITIDAS[tema_da_vez].length - 1))].toLowerCase();
    
    const dica = document.querySelector("#cabecalho h3");
    dica.innerText = `O tema é: ${tema_da_vez}`;
    
    const linha_da_forca = document.querySelector("#container #wrapper #linha");

    for (let index = 0; index < palavra_certa.length; index++) {
        const campo = document.createElement("input");
        campo.setAttribute("disabled", "true");

        linha_da_forca.appendChild(campo);
    }
    // ----------------------------------------



    // TECLADO -------------------------------
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

            tecla.addEventListener("click", (e)=>{
                if(palavra_certa.includes(e.target.innerText.toLowerCase())){
                    e.target.classList = "tecla tecla_certa";
                } else {
                    e.target.classList = "tecla tecla_errada";
                }
            })



            linha.appendChild(tecla);
        })
    })
    // ---------------------------------------


})