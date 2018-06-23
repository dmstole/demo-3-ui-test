dsm.http = (function () {

   function Http() { }

   Http.prototype.requisitar = (url, method, data, success, error) =>
      $.ajax({
         url: url,
         method: method,
         data: data,
         dataType: 'json',
         success: success,
         error: error || _error
      });

   function _error(err) {
      console.log(err);
   }

   return new Http();

})();