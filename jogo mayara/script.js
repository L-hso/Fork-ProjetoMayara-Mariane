window.addEventListener("load", ()=>{
    const MAX_ERROS = 6;
    let quantidade_erros = 0;

    // ESCOLHA DA PALAVRA ---------------
    const TEMAS_PERMITIDOS = ["Poluição do ar", "Poluição do solo"];

    const PALAVRAS_PERMITIDAS = {
        "Poluição do ar": ["Enxofre", "Metano", "Chuva"],
        "Poluição do solo": ["Uranio", "Chorume"]
    };


    //  
    //"Poluição do ar": {"Enxofre": {"img":"./assets", "texto":"sda"}, "Chuva"};
    
    let tema_da_vez = TEMAS_PERMITIDOS[Math.round(Math.random() * (TEMAS_PERMITIDOS.length - 1))];
    
    let palavra_certa = PALAVRAS_PERMITIDAS[tema_da_vez][Math.round(Math.random() * (PALAVRAS_PERMITIDAS[tema_da_vez].length - 1))].toLowerCase();


    const dica = document.querySelector("#cabecalho h3");
    dica.innerText = `O tema é: ${tema_da_vez}`;
    
    const linha_da_forca = document.querySelector("#container #wrapper #linha");

    for (let index = 0; index < palavra_certa.length; index++) {
        const campo = document.createElement("div");

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

                if(quantidade_erros < MAX_ERROS  && Array.from(linha_da_forca.children).reduce((a, b)=>a + b.innerText, "").toLowerCase() != palavra_certa){
                    if(palavra_certa.includes(e.target.innerText.toLowerCase())){
                        e.target.classList = "tecla tecla_certa";


                        for(let posicao = 0; posicao < linha_da_forca.childNodes.length; posicao++){
                            if(palavra_certa[posicao] == e.target.innerText.toLowerCase()){
                                linha_da_forca.children.item(posicao).innerText = e.target.innerText.toUpperCase();
                            }
                        }
                        
                    } 
        
                    if( !palavra_certa.includes(e.target.innerText.toLowerCase()) && e.target.classList != "tecla tecla_errada") {
                        e.target.classList = "tecla tecla_errada";

                        const forca = document.querySelector("#container img");

                        quantidade_erros++;
                        
                        forca.setAttribute("src", "./assets/erro" + quantidade_erros + ".png"); 
                    
                    }
                }

                if(palavra_certa == Array.from(linha_da_forca.children).reduce((a, b)=>a + b.innerText, "").toLowerCase()) {
                    document.querySelector("#final h1").innerText = "Você ganhou!";
                    document.querySelector("#final").style.display = "block";
                    document.querySelector("#fundoescuro").style.display = "flex";
                } 
                
                if(MAX_ERROS == quantidade_erros) {
                    document.querySelector("#final h1").innerText = "Você é um bosta!";
                    document.querySelector("#final").style.display = "block";
                    document.querySelector("#fundoescuro").style.display = "flex";
                }
            })

            linha.appendChild(tecla);

        })
    })
    // ---------------------------------------
    const teclas = document.querySelectorAll("#teclado .linha .tecla");
    
    // TECLADO MANUAL ------------------------
    window.addEventListener("keypress", (e)=>{
        const tecla_manual = e.key.toLowerCase();

        if(quantidade_erros < MAX_ERROS && Array.from(linha_da_forca.children).reduce((a, b)=>a + b.innerText, "").toLowerCase() != palavra_certa){   
        linha_da_forca.childNodes.forEach((campo, ind)=>{
            if(palavra_certa[ind] == tecla_manual){
                campo.textContent = tecla_manual.toUpperCase();
            }
        })
                
        
            if(palavra_certa.includes(tecla_manual)){
            teclas.forEach((tecla)=>{
                if(tecla.textContent.toLowerCase() == tecla_manual && tecla.classList != "tecla tecla_certa"){
                    tecla.classList = "tecla tecla_certa";
                }
            })

            } else {
                teclas.forEach((tecla)=>{
                    if(tecla.innerText.toLowerCase() == tecla_manual && tecla.classList != "tecla tecla_errada"){
                        tecla.classList = "tecla tecla_errada";
                    }
                })

                 const forca = document.querySelector("#container img");

                quantidade_erros++;
                        
                forca.setAttribute("src", "./assets/erro" + quantidade_erros + ".png"); 
            }


    } 
    
    if(palavra_certa == Array.from(linha_da_forca.children).reduce((a, b)=>a + b.innerText, "").toLowerCase()) {
        document.querySelector("#final h1").innerText = "Você ganhou!";
        document.querySelector("#final").style.display = "block";
        document.querySelector("#fundoescuro").style.display = "flex";
    } 

    if(MAX_ERROS == quantidade_erros) {
        document.querySelector("#final h1").innerText = "Você é um bosta!";
        document.querySelector("#final").style.display = "block";
        document.querySelector("#fundoescuro").style.display = "flex";
    }
})
// -------------------------------------

    document.querySelector("#btn_dica").addEventListener("click", ()=>{
        document.querySelector("#dica").style.display = "flex";
        document.querySelector("#fundoescuro").style.display = "flex";
    })

    document.querySelectorAll(".fechar_btn").forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
        document.querySelector("#fundoescuro").style.display = "none";
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.style.display = "none";
    })
})

    
})