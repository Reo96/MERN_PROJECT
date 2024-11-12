import axios from 'axios';

import { ENV_VARS } from '../config/envVars.js';

export const fetchFromTMDB = async (url) => {
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+ENV_VARS.TMDB_API_KEY
        }
      };
      const response = await axios.get(url, options)

      if (response.status!== 200) {
        console.log("err");
        throw new Error(`Failed to fetch data from TMDB: ${response.statusText}`);
      }
      else {return response.data;}

};