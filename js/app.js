const txtBtn = document.getElementById('txtBtn');
txtBtn.addEventListener('click',cargarTXT);

const jsonBtn = document.getElementById('jsonBtn');
jsonBtn.addEventListener('click',cargarJSON);

const apiBTN = document.getElementById('apiBTN');
apiBTN.addEventListener('click',cargarRest);






function cargarTXT() { 
    fetch('datos.txt')
    .then((result) => {
       return result.text();
    }).then((data)=>{
        document.getElementById('resultado').innerHTML = data;
    })
    
    .catch((err) => {
        console.log(err);
    });
 };


 function cargarJSON(){
     fetch('empleados.json')
     .then((result)=>{
         return result.json();

     }).then((data)=>{
      let html = '';

      data.forEach(dat => {
          html += `
            <li>Nombre ${dat.nombre}</li>
            <li>Puesto ${dat.puesto}</li>
          `;
      });

      document.getElementById('resultado').innerHTML = html;

     }).catch((err)=>{
            console.log(err);
     })
 };


 function cargarRest(){
    fetch('https://picsum.photos/list')
    .then((result)=>{
       return result.json();
    }).then((data)=>{
        let html = '';


        data.forEach(function(dat){
            html += `
                <li>
                    <a target="_blank" href="${dat.post_url}">Ver Imagen</a>
                    ${dat.author}
                </li>
            
            `;

            document.getElementById('resultado').innerHTML = html;
        })
    })
}
