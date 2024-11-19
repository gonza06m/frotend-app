const API_URL="http://localhost:3000/api/Gorra"

 //obtener todas las hamburguesas

 export const getGorra = async () => {
    const response= await fertch(API_URL);
    return response.json();
 };
 
 // obtener Gorra por   ID
  export const getGorraByID = async (id) =>{
    const response = await fetch (`${API_URL}/$(id)`);

  };

  //escoger una Gorra

  export const addGorra = async (gorra)=>{
  const response = await fetch( API_URL,{
    method
  }
   )
    }

    //actualizar una gorra
    export const updateGorra = async (id,gorra) => {
      const response = await fetch(`${API_URL}${id}`,{
        method: "PUT",
        headers: {"Content_Type": "application/json"},
        body : json.stringify(gorra)
      });
    return response.json();
    }

    //Borrar una Gorra

    export const deleteGorra =  async(id) => {
      return fetch (`${API_URL}/${id}`, {
        method: "DELETE",
      })
    };


