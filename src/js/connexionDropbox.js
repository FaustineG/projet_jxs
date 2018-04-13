function connectDropbox(){
  var Dropbox = require('dropbox').Dropbox;
  var dbx = new Dropbox({ accessToken:'eo-V0OK54IoAAAAAAAAZ8e8_Guiar7rqBBL4EwWUGZTfH7Q49l0lUtbbzwourEPb'  });
  dbx.filesListFolder({path: ''})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
