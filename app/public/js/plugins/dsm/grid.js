dsm.grid = (function () {

   function Grid() {
      this.container = null;
   }

   Grid.prototype.setContainer = function (valor) {
      this.container = valor;
      return this;
   };

   Grid.prototype.delete = (el) => {
      if (confirm("Deseja realizar essa operação?")) {
         dsm.http.requisitar(el.attr("data-href"), "POST", {
            id: el.attr("data-id")
         }, dsm.reload);
      }
   };

   return new Grid();
})();


$(document).ready(function () {

   $(".btn-remove").click(function () {
      dsm.grid.delete($(this));
   });

});