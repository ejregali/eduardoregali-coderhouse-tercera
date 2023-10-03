// Render Productos
const productos = [
    {id:1, nombre: "Gaseosa 7 Up lima limón 1.5 1.", precio:323, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/277290-1200-auto?v=638128491314900000&width=1200&height=auto&aspect=true"},
    {id:2, nombre: "Gaseosa Pepsi black 1.5 1.", precio:330, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/191207-1200-auto?v=637511787821470000&width=1200&height=auto&aspect=true"},
    {id: 3, nombre: "Gaseosa pomelo sin azúcar Paso De Los Toros pet 1.5 l.", precio:280.56, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/308945-1200-auto?v=638146793700400000&width=1200&height=auto&aspect=true"},
    {id:4, nombre: "Gaseosa Schweppes tónica 1.5 1.", precio:576, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/332234-1200-auto?v=638211437653630000&width=1200&height=auto&aspect=true"},
    {id:5, nombre: "Gaseosa cola zero Coca Cola pet 2.25 lts.", precio:833, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/333788-1200-auto?v=638215824531870000&width=1200&height=auto&aspect=true"},
    {id:6, nombre: "Schweppes zero pomelo 2,25 lts.", precio:802, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/378997-1200-auto?v=638313440596100000&width=1200&height=auto&aspect=true"},

];
console.log(productos)
let contenido = document. getElementById ("contenido");

let salida  = "";

for (const producto of productos) {
salida += `
<div class="col-md-4 card">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
    <div class="card-body">
        <p class="card-title"><b>$${producto.precio}</b></p>
        <p class="card-text">${producto. nombre}</p>
    </div>
</div>`;
};

contenido.innerHTML = salida;