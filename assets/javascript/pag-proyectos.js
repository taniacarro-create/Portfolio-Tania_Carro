// GSAP SCROLLER

gsap.to(".galeria .fotos",{
    transform: "translateX(-180%)",

    scrollTrigger:{
        trigger:"#galeria",
        scroller:"body",
        start:"top 2.5%",
        end:"bottom -90%",
        pin:true,
        scrub:2,
        // markers:true,
    }
})

// PARA CARGAR LOS DATOS DEL JSON

function cargarDatos (datos) {
    console.log(datos.titulo)
    contenedor = document.getElementById("intro");
    spanTitulo = document.createElement("span");
    contenedor.appendChild(spanTitulo);
    titulo1 = document.createElement("h1");
    titulo1.innerText = datos.titulo;
    titulo2 = document.createElement("h1");
    titulo2.innerText = datos.titulo2;
    titulo2.classList.add("tituloSinSwash");
    spanTitulo.appendChild(titulo1);
    spanTitulo.appendChild(titulo2);
    subtitulo = document.createElement("h2");
    subtitulo.innerHTML = datos.subtitulo;
    contenedor.appendChild(subtitulo);
    descripcion = document.createElement("p");
    descripcion.innerHTML = datos.descripcion;
    contenedor.appendChild(descripcion);
}