(function () {
   dsm.select("perfilId").init();
   dsm.select("paginaId").init();

   $("#btn-add-acesso").click(function () {
      const _data = {
         paginaId: $("#paginaId").val(),
         perfilId: $("#perfilId").val(),
         funcionalidadeId: $("#id").val()
      };

      dsm.http.requisitar("/administrativo/funcionalidade-acesso", "POST", _data, _carregar, _erro);
   });

   $(document).on("click", ".btn-remove-acesso", function () {
      if (confirm("Deseja realizar essa operação?")) {
         const _data = {
            funcionalidadeId: $(this).attr("data-funcionalidade"),
            perfilId: $(this).attr("data-perfil"),
            paginaId: $(this).attr("data-pagina")
         };
         dsm.http.requisitar("/administrativo/funcionalidade-acesso/delete", "POST", _data, _carregar, _erro);
      }
   });

   function _carregar() {
      const _data = {
         funcionalidadeId: $("#id").val()
      };

      dsm.http.requisitar("/administrativo/funcionalidade-acessos", "POST", _data, _sucesso, _erro);

      function _sucesso(response) {
         $(`#container-acesso > tbody`).empty();
         if (response && response.length > 0) {
            $.map(response, function (item) {
               $(`#container-acesso > tbody`).append(
                  `<tr>
                     <td class="text-center" style='padding:5px;width:40px;'>
                        <button type='button' class='btn-remove-acesso btn btn-xs btn-danger' data-pagina='${item.paginaId}' 
                           data-funcionalidade='${item.funcionalidadeId}' data-perfil='${item.perfilId}'>
                           <i class='fa fa-trash'></i>
                        </button>
                     </td>
                     <td style='padding: 5px;'>${item.perfil}</td>
                     <td style='padding: 5px;'>${item.pagina}</td>
                  </tr>`);
            });
         } else {
            $(`#container-acesso > tbody`).append(`
               <tr>
                  <td colspane='3'> Não existem dados registrados. </td>
               </tr>
            `);
         }

         $("#paginaId").val("");
         $("#perfilId").val("");
      }
   }

   function _erro(err) {
      alert(err.responseText);
   }

   _carregar();
})();