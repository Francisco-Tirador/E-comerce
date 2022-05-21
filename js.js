
var accep=`application/json`
const headers= {
         Accept: `Bearer ${accep}`
}
   
// var myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");
var baseurl="https://e-commerce-api-academlo.herokuapp.com/api"
let editID=null
function printProduct(products){
    const conten= document.getElementById("conten_products");

    let html="";
    for(let i=0;i<products.length;i++){

        html+= `<div class="espacio_celda_4 la">
        <div "><img src=${products[i].image} class="ima"></div>
        <div><h3>${products[i].name}</h3></div>
        <div>${products[i].price}</div>
        <button onclick="delateProducts(${products[i].id})" >Eliminar articulo</button>
        <button onclick="editProducts(${products[i].id})" >Editar producto</button>
        </div>`

    conten.innerHTML=html
    }
}


function getProducts(){

    axios.get("https://e-commerce-api-academlo.herokuapp.com/api/products")
    .then(function (response){
         const products= response.data;
        printProduct(products);}
    )
    .catch(function(error){
        console.log()
    }
    )
}
getProducts()


function creatProducts(){
    const newProduct={
        image: document.getElementById("URLnew").value,
        name: document.getElementById("nameNew").value,
        price: document.getElementById("priceNew").value
    };
    axios.post("https://e-commerce-api-academlo.herokuapp.com/api/products",newProduct,{headers:headers})
    .then(function (response){
       console.log(response);
       alert("Articulo creado con exito");
       getProducts();
    }
    )
    .catch(function(response){
        console.log("hola")
        alert("No se pudo crear el articulo")
    }
    )
}

function delateProducts(id){
    let confirmation=confirm("¿Estas seguro de eliminar este articulo?")
    if(!confirmation){
        return 
    }
 
    axios.delete(`${baseurl}/products/${id}`)
    
    .then(function (response){
        console.log(response)
        getProducts()
        alert("Articulo eliminado")
        
     }
     )
     .catch(function(rsp){
         console.log("hola")
         alert("No se pudo crear el articulo")
     }
     )
}


function editProducts(id){
    axios.get(`${baseurl}/products/${id}`)
    .then(function(response){
        const Product=response.data
        editID=id
        document.getElementById("URL").value=Product.image
        document.getElementById("name").value=Product.name
        document.getElementById("Price").value=Product.price

        console.log(response.data)
        
        
    }
     
     )
     .catch(function(rsp){
         console.log("hola")
         alert("No se pudo editar el articulo")
     }
     )
}


function updateProducts(){
    alert("Se edito la tarea")

    const ProductEdit={
        image:document.getElementById("URL").value,
        name:document.getElementById("name").value,
        price:document.getElementById("Price").value
    };
    axios.put(`${baseurl}/products/${editID}`,ProductEdit)
    .then(function (response){
       
       console.log(response);
       alert("Articulo creado con exito");
       getProducts();
    }
    )
    .catch(function(response){
        console.log("hola")
        alert("No se pudo crear el articulo")
    }
    )


}

function creacionProducto(){

}

















// function correcto(){
//     console.log("hola")
// }

// function error(){
//     console.log("error")
// }

// function getProducts(){
// axios.get('https://e-commerce-api-academ.herokuapp.com/api/products')
// .then(function (response) {
//     const tasks = response.data;
//     printTasks(tasks);
// })
// .catch(function (error) {
//     console.log(error);
// })
// }

// function printTasks(tasks) {
//     // Identificar el contenedor
//     const container = document.getElementById('tasks-container');
//     // Generar el HTML
//     let html = '';
//     for(let i = 0; i < tasks.length; i++) {
//         html += `<div class="col-md-6 col-lg-4 mt-3">
//                     <div class="card">
//                         <div class="card-body">
//                             <h5 class="card-title">${tasks[i].name}</h5>
//                             <p class="card-text">${tasks[i].price}</p>
//                             <div class="text-end">
//                                 <button class="btn btn-danger" onclick="deleteTask(${tasks[i].id})">
//                                     <i class="fas fa-trash-alt"></i>
//                                 </button>
//                                 <button class="btn btn-primary" onclick="editTask(${tasks[i].id})">
//                                     <i class="fas fa-pen"></i>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//     }
//     // Imprimir el HTML
//     container.innerHTML = html;
// }
