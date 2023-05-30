import axios from 'axios'





const api = axios.create({
  // baseURL: process.env.API_BASE_URL,
     baseURL: 'http://localhost:1337',
    headers:{
        //Authorization:'Bearer ${process.env.BACKEND_API_KEY}',
    }
  
})

/*
export const fetchCategories = async ()=> api.get('/api/categories');
*/

export async function fetchData() {
  
    // console.log(process.env.API_BASE_URL);
    try {

  /*    const response  = await axios.get('http://localhost:1337/api/categories',{
        headers: {
           'Authorization': 'Bearer c0f00e11e1855f49e2f1256d2f1c70d67ed635b3211497c27ab32a8a729c5e006e10bf0c3f773f1258126dcb743df9d1b42470ca9819fe979b86706984f5ab5a04e22df772f44c10e65bbff10569b01ce45df3d487202fe449709e8b3bcd0641cc0a43c1669a4a5a00705361e08c047cfed9a14561031a6ee522d07a2fb56247'
        }  });   */

      const response  = await axios.get('http://localhost:1337/api/categories')
      .then(function (response) {
        console.log("this data feacth in fetchData function");
       const hello = response.data.data;
        console.log(hello);
      });
     // const data = response.data;
      
      // console.log("this data feacth in fetchData function");
    //   console.log(data.data); // Log the fetched data

       return response;
      // Process the data or update your component's state with the fetched data  ...
    } catch (error) {
      // Handle any errors that occurred during the request
    }
  }