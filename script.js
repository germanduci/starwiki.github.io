let audioChewie = new Audio("./files/chewie.mp3");
let audioR2d2 = new Audio("./files/r2d2.mp3")
let audioC3po = new Audio("./files/c3po.mp3")

function mensaje(){
    let cantina = new Audio("./files/cantina.mp3")
    cantina.play()
    let input1 = document.getElementById("nombre").value
        if(input1){
            document.getElementById("name").innerHTML = `<h3>
            Bienvenido a la cantina de mos-easley ${input1}!<h3>`;
            document.getElementById("name").className = "fuente";        
        }else{
            document.getElementById("name").innerHTML = `<h3>
            Bienvenido a la cantina de mos-easley sin nombre!<h3>`;
            document.getElementById("name").className = "fuente"; 
        }   
}


let chewie = document.getElementById("chewie")
chewie.onclick = () => {    
    audioR2d2.pause();
    audioC3po.pause();
    audioChewie.play();
    document.getElementById("info").innerText = `
    chewbacca, llamado afectuosamente chewie por sus amigos, fue un guerrero wookiee,
    un contrabandista y un luchador de resistencia que peleó en las guerras clon,
    la guerra Civil galáctica y la guerra Fría. Fue criado en el planeta kashyyyk
    y se convirtió en un líder militar.
    `
}

let r2d2 = document.getElementById("r2d2")
r2d2.onclick = () => {    
    audioChewie.pause();
    audioC3po.pause();
    audioR2d2.play();
    document.getElementById("info").innerText = `
    r2-d2 (fonéticamente en inglés artoo-detoo o artoo y en español erredós-dedós) fue un
    droide astromecánico y, sin duda, la unidad más famosa de la serie r2.
    viejo amigo y colega del droide de protocolo c-3po, sirvió a la familia skywalker fielmente
    por muchos años. junto con su ingenio, r2-d2 fue equipado por su propietario original,
    la casa real de naboo, con la herramienta con punta de muchos apéndices que le permitió
    servir como un mecánico en naves superiores y especialista en el interfaz de la computadora.
    `
}

let c3po = document.getElementById("c3po")
c3po.onclick = () => {
    audioR2d2.pause();
    audioChewie.pause();
    audioC3po.play();
    document.getElementById("info").innerText = `
    c-3po ( "citripio" , a veces abreviado como 3po, "tripio" o también cetrespeó)
    era un droide de protocolo serie 3po, diseñado para interactuar con humanos.
    Hablaba con fluidez más de seis millones de formas de comunicación, y desarrolló una
    exigente y preocupada personalidad a lo largo de sus varias décadas de operación.
    `
}
