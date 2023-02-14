function soyAsincrona(nombre, micallback){
    setTimeout(function() {
        console.log('HOla' + nombre);
        micallback();
    }, 1000);
}
function adios(nombre, otrocallback){
    setTimeout(function() {
        console.log('Adios' + nombre);
        otrocallback();
    }, 1000);
}

console.log('Iniciando proceso...');
// hola('Ciro', function(){
//     adios('Ciro', function(){
//         console.log('Finalizando proceso...');
//     });
// });
hola('Ciro', function(){
    
})