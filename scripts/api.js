'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/eddielaurel';

  function getItems(){
    return Promise.resolve('A successfil response!');
  }

  return {
    getItems
  };
})();