// Importar los metodos de api.js
import { getGorra, getGorraByID, updateGorra, deleteGorra } from "./api";

// traer todas las gorras y mostrarlas en la pagina principal
document.addEventListener("DOMConternLoaded", async() =>{
    const gorraList = document.getElementById("gorra-List");

    const gorra = await getGorra();
    gorraList.innwrHTML = gorras.map(gorras=> `
        <div class="col-xs-10 col-sm-6 col-md-3 card">
            <div class="card -body d-flex-colum justify-content-end">
               <h5 class="card-title">${gorra.name}</h5>
               <p class="card-text">${gorra.price}</p>
                <a onclick="viewGorra(${Gorra.id})" class=btn btn-primary">Ver mas</a>
                </div>
                </div>
        `).join("");
})