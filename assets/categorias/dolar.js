$(document).ready(() => {

  // url del json dolar
  const URLDOLAR = "./datos.json";



  // imprime la informacion en el div secciones
  const imprimir = (dato) => {
    $(".secciones").append(`
    <ul class="secciondolar">
    <li id="nombredolar">${dato.nombre}</li>
     <li id="compradolar">Compra ${dato.compra}</li>
      <li id="ventadolar">venta ${dato.venta}</li>
    </ul>
       

  
          `)
  }

  //llama la url y filtramos los dolar por ventacero == true 
  $.getJSON(URLDOLAR, (datos) => {


    const filtrardolar = datos.filter((dato) => {

      if (dato.ventaCero == "TRUE") {
        return true
      }

      return false
    }

    )

    filtrardolar.forEach(dato => {
      imprimir(dato)
    });




  })


}

)