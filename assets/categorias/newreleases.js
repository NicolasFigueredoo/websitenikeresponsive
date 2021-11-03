$(document).ready(() => {
  // en esta funcion esta el producto que se va a imprimir
  const imprimirproductos = (producto) => {
    $("#content").append(` 
<div class="col">
      <div class="card h-100">
        <img src="../img/${producto.img} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.edicion} </h5>
          <p class="card-text-producto"> ${producto.nombre} </p>
          <div class="card-text-genero">${producto.genero} </div>
          <p class="card-text-precio"> $${producto.precio}</p>
                      <button id="${producto.id}"  class="agregaralcarrito">Agregar</button>

        </div>
      </div>
    </div>
`)
  }

  // en esta funcion se van a imprimir los productos filtrados segun la categoria

  const imprimirproductosfiltrados = (misproductos, categoria) => {

    const cardsId = $("#content");
    cardsId.html("");

    if (categoria == "INICIO") {
      for (let producto of misproductos) {
        imprimirproductos(producto);
      }


    } else {
      const productosfiltrados = misproductos.filter(dato => dato.producto === categoria);
      productosfiltrados.forEach(dato => {
        imprimirproductos(dato);
      });
    }

    $(".compra").css("height", "1070px")
    animacionContenido()
    agregarAlcarrito()


  }
  // en esta funcion se imprimen los productos de edicion nueva

  const imprimirProductosEdicionNueva = (misproductos) => {
    const cardsId = $("#content");
    cardsId.html("");

    const productonew = misproductos.filter((dato) => {
      if (dato.clase == "new") {
        return true
      }

      else {
        return false
      }
    })

    productonew.forEach((dato) => {
      imprimirproductos(dato)

    })

    $(".compra").css("height", "3800px")
    animacionContenido()


  }

  // en esta funcion se van a imprimir los productos segun el genero

  const imprimirProductosGenero = (misproductos, buscador) => {
    const cardsId = $("#content");
    cardsId.html("");

    const productonew = misproductos.filter((dato) => {
      if (dato.categoria == buscador) {
        return true
      }

      else {
        return false
      }
    })


    productonew.forEach((dato) => {
      imprimirproductos(dato)
    })

    $(".compra").css("height", "2700px")
    if (buscador == "women") {
      $(".compra").css("height", "1600px")

    }
    animacionContenido()
    agregarAlcarrito()

  }

  // esta funcion es una animacion del contenido donde se ubican los productos
  const animacionContenido = () => {
    $("#content").animate({
      width: "2500px",
      transition: "0.5s"

    })
  }

  // ARRAYS DE PRODUCTS
  const data = [
    {
      "producto": "Tshirt",
      "id": 1,
      "categoria": "men",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "Sportswear Sport Essentials+",
      "precio": 130,
      "genero": "Men's Semi-Brushed Crew",
      "img": "NikeSportswearSportEssentials.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 2,
      "categoria": "women",
      "clase": "new",
      "edicion": "Just In",
      "nombre": "Sportswear Essential",
      "precio": 65,
      "genero": "Women's Fleece Pullover",
      "img": "NikeSportswearEssential.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 3,
      "clase": "new",
      "categoria": "men",
      "edicion": "Just In",
      "nombre": "Giannis 'Freak'",
      "precio": 85,
      "genero": "Men's French Terry Pullover",
      "img": "sportswearclubmenspulloverhoodie.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 4,
      "clase": "new",
      "categoria": "men",
      "edicion": "Just In",
      "nombre": "Sportswear Club",
      "precio": 40,
      "genero": "Men's Premium Basketball",
      "img": "GiannisFreak.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 5,
      "clase": "new",
      "categoria": "men",
      "edicion": "Just In",
      "nombre": "Nike ACG",
      "precio": 40,
      "genero": "Men's Short-Sleeve T-Shirt",
      "img": "NikeAcg.jpg"
    },
    {
      "producto": "Tshirt",
      "id": 6,
      "clase": "new",
      "categoria": "women",
      "edicion": "Sustainable Materials",
      "nombre": "Dri-FIT One Luxe",
      "precio": 45,
      "genero": "Women's Standard Fit Tank",
      "img": "driwomensstandard.jpg"
    },
    {
      "producto": "Shoes",
      "id": 7,
      "clase": "new",
      "categoria": "men",
      "edicion": "Sustainable Materials",
      "nombre": "air max 90",
      "precio": 130,
      "genero": "Men's Shoes",
      "img": "nikearimax90.jpg"
    },
    {
      "producto": "Shoes",
      "id": 8,
      "clase": "new",
      "categoria": "men",
      "edicion": "Just In",
      "nombre": "AF 1/1",
      "precio": 140,
      "genero": "Men's Shoes",
      "img": "NikeAf.jpg"
    },
    {
      "producto": "Shoes",
      "id": 9,
      "clase": "new",
      "categoria": "women",
      "edicion": "Just In",
      "nombre": "Air Jordan 1 Mid",
      "precio": 120,
      "genero": "Women's Shoes",
      "img": "Airjordan1mid.jpg"
    },
    {
      "producto": "Shoes",
      "id": 10,
      "clase": "new",
      "categoria": "men",
      "edicion": "Sustainable Materials",
      "nombre": "Air Vapormax 2021 FK",
      "precio": 200,
      "genero": "Men's Shoes",
      "img": "airvapormax2021.jpg"
    },
    {
      "producto": "Shoes",
      "id": 11,
      "clase": "new",
      "categoria": "men",
      "edicion": "Exclusively on SNKRS",
      "nombre": "Space Hippie 01",
      "precio": 130,
      "genero": "Men's Shoes",
      "img": "nikespace.jpg"
    },
    {
      "producto": "Shoes",
      "id": 12,
      "clase": "new",
      "categoria": "women",
      "edicion": "Coming Soon",
      "nombre": "Air Force 1 '07 LX",
      "precio": 110,
      "genero": "Women's Shoes",
      "img": "nikeairforce.jpg"
    },
    {
      "producto": "Accesories",
      "id": 13,
      "categoria": "women",
      "edicion": "",
      "nombre": "Sportswear",
      "precio": 28,
      "genero": "Women's Bucket Hat",
      "img": "sportswearwomens.jpg"
    },
    {
      "producto": "Accesories",
      "id": 14,
      "categoria": "women",
      "clase": "new",
      "edicion": "Just In",
      "nombre": "Nike Elemental",
      "precio": 40,
      "genero": "Backpack",
      "img": "nikelement.jpg"
    },
    {
      "producto": "Accesories",
      "id": 15,
      "categoria": "men",
      "edicion": "",
      "nombre": "AeroBill Classic 99",
      "precio": 28,
      "genero": "Hat",
      "img": "aerobillclassic99.jpg"
    },
    {
      "producto": "Accesories",
      "id": 16,
      "categoria": "women",
      "clase": "new",
      "edicion": "Just In",
      "nombre": "KD",
      "precio": 90,
      "genero": "Basketball Backpack",
      "img": "kd-basketballbackpack.jpg"
    },
    {
      "producto": "Accesories",
      "id": 17,
      "categoria": "men",
      "clase": "new",
      "edicion": "Sold Out",
      "nombre": "Nike Classic",
      "precio": 30,
      "genero": "Backpack",
      "img": "classicbackpack.jpg"
    },
    {
      "producto": "Accesories",
      "id": 18,
      "categoria": "women",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "One Club",
      "precio": 65,
      "genero": "Women's Training Duffel Bag",
      "img": "oneclub.jpg"
    },
    {
      "producto": "Pants",
      "id": 19,
      "categoria": "men",
      "edicion": "",
      "nombre": "Sportswear Swoosh",
      "precio": 80,
      "genero": "Men's Semi-Brushed Back Pants",
      "img": "sportswearswoosh.jpg"
    },
    {
      "producto": "Pants",
      "id": 20,
      "categoria": "women",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "Sportswear KP",
      "precio": 40,
      "genero": "Men's (Boys') Pants",
      "img": "sportswearbigboys.jpg"
    },
    {
      "producto": "Pants",
      "id": 21,
      "categoria": "Women",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "Pro Dri-FIT",
      "precio": 32,
      "genero": "Women's 3/4 Tights",
      "img": "pro-dri-fit-women.jpg"
    },
    {
      "producto": "Pants",
      "id": 22,
      "categoria": "Women",
      "clase": "new",
      "edicion": "Just In",
      "nombre": "Sportswear",
      "precio": 85,
      "genero": "Women's Easy Woven Pants",
      "img": "sportswearwomens-easy.jpg"
    },
    {
      "producto": "Pants",
      "id": 23,
      "categoria": "men",
      "clase": "new",
      "edicion": "Sustainable Materials",
      "nombre": "Court",
      "precio": 70,
      "genero": "Men's Tennis Pants",
      "img": "nikecourt.jpg"
    },
    {
      "producto": "Pants",
      "id": 24,
      "categoria": "men",
      "edicion": "",
      "nombre": "Jordan Dri-FIT Air",
      "precio": 90,
      "genero": "Men's Pants",
      "img": "jordan-dri-fit-air.jpg"
    }
  ]

  // SI SE TOCA CLICK EN EL BOTON WOMEN SE IMPRIMEN LOS PRODUCTOS DE GENERO WOMEN
  const botonwomen = $("#women")
  botonwomen.click(() => { imprimirProductosGenero(data, "women") })

  // SI SE TOCA CLICK EN EL BOTON WOMEN SE IMPRIMEN LOS PRODUCTOS DE GENERO MEN
  const botonmen = $("#men");
  botonmen.click(() => { imprimirProductosGenero(data, "men") })

  // SI SE TOCA CLICK EN EL BOTON NEW RELEASES SE IMPRIMEN LOS PRODUCTOS DE EDICION NUEVA
  const seccionNewReleases = $("#seccionNewReleases")
  seccionNewReleases.click(() => { imprimirProductosEdicionNueva(data) })

  // SI SE TOCA CLICK EN EL BOTON NEW RELEASES SE IMPRIMEN LOS PRODUCTOS DE EDICION NUEVA
  const botonNewReleases = $("#newproductos");
  botonNewReleases.click(() => { imprimirProductosEdicionNueva(data) })

  // SI SE TOCA CLICK EN EL BOTON SHOES SE IMPRIMEN LOS PRODUCTOS SOLO ZAPATILLAS
  const botonshoesseccion = $("#shoesseccion");
  botonshoesseccion.click(() => { imprimirproductosfiltrados(data, "Shoes") },);

  // SI SE TOCA CLICK EN EL BOTON T-SHIRT SE IMPRIMEN LOS PRODUCTOS SOLO REMERAS
  const botonshirt = $("#shirt");
  botonshirt.click(() => { imprimirproductosfiltrados(data, "Tshirt") },);
  // SI SE TOCA CLICK EN EL BOTON SHOES SE IMPRIMEN LOS PRODUCTOS SOLO ZAPATILLAS
  const botonshoes = $("#shoes");
  botonshoes.click(() => { imprimirproductosfiltrados(data, "Shoes") });

  // SI SE TOCA CLICK EN EL BOTON PANTS SE IMPRIMEN LOS PRODUCTOS SOLO PANTALONES
  const botonpants = $("#pants");
  botonpants.click(() => { imprimirproductosfiltrados(data, "Pants") });

  // SI SE TOCA CLICK EN EL BOTON ACCESORIES SE IMPRIMEN LOS PRODUCTOS SOLO ACCESORIOS
  const botonAccessories = $("#Accessories");
  botonAccessories.click(() => { imprimirproductosfiltrados(data, "Accesories") });

  //imprime por default los productos de edicion nuueva
  imprimirProductosEdicionNueva(data)

  // en esta funcion se imprimen los productos segun lo que el usuario escriba en el buscador
  const buscador = () => {

    const cardsId = $("#content");
    cardsId.html("");

    const search = $("#search").val();
    const listaResultados = data.filter(item => item.nombre.toLowerCase().includes(`${search.trim().toLowerCase()}`));

    listaResultados.forEach(item => {

      imprimirproductos(item)



    })


    if (search === "") {
      imprimirProductosEdicionNueva(data)

    }

    agregarAlcarrito()

  }
  // cuando el usuaruio haga click se ejecuta la funcion buscador
  $("#botonsearch").click(buscador)
  $("#botonsearchnav").click(buscador)

  //cuando el usuario levante el dedo del teclado se ejecuta la funcion buscador
  $("#search").keyup(buscador)





  // CODIGO CARRITO
  //ARRAY DE PRODUCTOS EN EL CARRITO
  let productosEnElCarrito = [];


  // en esta funcion se hace la suma de los productos que estan en carrito
  const sumaTotalDelCarrito = () => {
    let total = 0
    const itemCardTotal = document.querySelector(".totalprecio");
    productosEnElCarrito.forEach((item) => {
      let precio = Number(item.precio.replace("$", ""))
      total = total + precio
    })

    itemCardTotal.innerHTML = `Total $${total}`
  }
  // en esta funcion se guardan los productos en el storage

  const guardarProductoEnStorage = (ProductoAAguardar) => {

    const productosEnStorage = JSON.parse(localStorage.getItem("productos"))

    if (!productosEnStorage) {
      localStorage.setItem("productos", JSON.stringify([ProductoAAguardar]))
    } else {
      productosEnStorage.push(ProductoAAguardar)
      localStorage.setItem("productos", JSON.stringify(productosEnStorage))
    }

  }
  // en esta funcion se muestra el producto que esta en el carrito
  const mostrarProductosEnCarrito = () => {
    const productosEnStorage = JSON.parse(localStorage.getItem("productos"))

    productosEnElCarrito = []
    if (productosEnStorage) {
      let productocarrito = "";

      for (const producto of productosEnStorage) {

        productocarrito += ` 
        <tr>
          <th scope="row"></th>
          <td>${producto.nombre}</td>
          <td><input type="number" value="1"  id="cantidadcarrito"></td> 
          <td>${producto.precio}</td>
          <td><button id="${producto.id}" class="quitardelcarrito">X</button></td>

        </tr>
      `
        productosEnElCarrito.push(producto)

      }

      $("#productoscargados").html(productocarrito)
      sumaTotalDelCarrito()

    }

  }
  mostrarProductosEnCarrito()

  // esta funcion es si existe el producto en carrito me devuelve un booleano
  const existeEnCarrito = (productoAgregar) => {

    const elementosEncontrados = productosEnElCarrito.filter(item => item.id == productoAgregar.id);
    if (elementosEncontrados.length > 0) {
      return true
    }

    return false
  }
  // esta funcion es para agregar el producto al carrito
  const agregarAlCarrito = (producto) => {
    let productocarrito = "";
    if (!existeEnCarrito(producto)) {

      productocarrito += ` 
        <tr>
          <th scope="row"></th>
          <td>${producto.nombre}</td>
          <td><input type="number" value="1"  id="cantidadcarrito"></td> 
          <td>${producto.precio}</td>
          <td><button id="${producto.id}" class="quitardelcarrito">X</button></td>
  
        </tr>
      `
      $("#productoscargados").append(productocarrito)
      productosEnElCarrito.push(producto)
      guardarProductoEnStorage(producto)
    }
  }

  const sacarDelCarrito = (producto) => {
    productosEnElCarrito = productosEnElCarrito.filter(item => item.id != producto.id)

    let productosEnStorage = JSON.parse(localStorage.getItem("productos"))
    productosEnStorage = productosEnStorage.filter(item => item.id != producto.id)

    localStorage.setItem("productos", JSON.stringify(productosEnStorage))
    mostrarProductosEnCarrito()

  }

  // sacar el elemento tocado del carrito
  $(document).on("click", ".quitardelcarrito", (event) => {

    const nodoPadre = $(event.target).parent();
    const nodosHijos = nodoPadre.children();
    sacarDelCarrito({
      id: nodosHijos[0].id,
      nombre: nodosHijos[1],
      precio: nodosHijos[3]
    });
    sumaTotalDelCarrito()

  });


  // si toco click en el boton agregaralcarrito se agregan los productos
  $(".agregaralcarrito").click((event) => {
    const nodoPadre = $(event.target).parent()
    const nodoHijos = nodoPadre.children()

    agregarAlCarrito({
      id: nodoHijos[4].id,
      nombre: nodoHijos[1].innerHTML,
      precio: nodoHijos[3].innerHTML

    })
    console.log(nodoHijos)
    sumaTotalDelCarrito()
  })









})


