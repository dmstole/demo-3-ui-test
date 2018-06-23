var dsm = (function () {

   function Dsm() {}

   Dsm.prototype.reload = function () {
      location.reload();
   };

   return new Dsm();

})();