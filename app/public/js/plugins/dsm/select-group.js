dsm.selectGroup = function (container, selectName, btnAdd, btnDelete, objSelectGroup, api, data) {

   $(function () {
      $(document).on('click', '.btn-deleta-perfil', function () {
         _selectGroup.deletar($(this));
      });
   });

   function SelectGroup() {}

   SelectGroup.prototype.setContainer = function(valor) {
      container = valor;
   };

   SelectGroup.prototype.init = function () {
      if ($(`${'#' + container}`).length) {
         $('#' + selectName).val(0);
         this.carregar();
         this.carregarSelecionados();
         this.criarEventoClickAdicionar();
      }
   };

   SelectGroup.prototype.carregar = function () {

      function _success(response) {
         setTimeout(function () {
            _selectGroup.renderizar(response);
         }, 100);
      }

      function _error(err) {
         setTimeout(function () {
            _selectGroup.mensagemErro(err);
         }, 100);
      }

      return dsm.http.requisitar(api.opcoes, "GET", null, _success, _error);
   };

   SelectGroup.prototype.carregarSelecionados = function () {

      function _success(response) {
         setTimeout(function () {
            _selectGroup.renderizarSelecionados(response);
         }, 100);
      }

      function _error(err) {
         setTimeout(function () {
            _selectGroup.mensagemErro(err);
         }, 100);
      }

      return dsm.http.requisitar(api.selecionados, "POST", data, _success, _error);
   };

   SelectGroup.prototype.renderizar = function (response) {
      $('#' + selectName).empty().append("<option value=''> Selecione... </option>");
      $.map(response, function (item) {
         $('#' + selectName).append("<option value='" + item.id + "'>" + item.nome + "</option>");
      });
   };

   SelectGroup.prototype.renderizarSelecionados = function (response) {
      $(`${'#' + container} > tbody`).empty();
      if (response) {
         $.map(response, function (item) {
            $(`${'#' + container} > tbody`).append(
               `<tr>
               <td class="text-center" style='padding:5px;width:40px;'>
                  <button type='button' class='${btnDelete} btn btn-xs btn-danger' data-id='${item.id}'>
                     <i class='fa fa-trash'></i>
                  </button>
               </td>
               <td style='padding: 5px;'>${item.nome}</td>
            </tr>`);
         });
      } else {
         $(`${'#' + container} > tbody`).append(`
            <tr>
               <td colspane='2'> Não existem dados registrados. </td>
            </tr>
         `);
      }
   };

   SelectGroup.prototype.adicionar = function () {

      function _success() {
         setTimeout(function () {
            _selectGroup.init();
         }, 100);
      }

      function _error(err) {
         setTimeout(function () {
            _selectGroup.mensagemErro(err);
         }, 100);
      }

      if ($('#' + selectName).val()) {
         data[selectName] = $('#' + selectName).val();
         return dsm.http.requisitar(api.adiciona, "POST", data, _success, _error);
      } else {
         alert("Selecione uma opção !");
      }
   };

   SelectGroup.prototype.deletar = function (o) {

      function _success() {
         setTimeout(function () {
            _selectGroup.init();
         }, 100);
      }

      function _error(err) {
         setTimeout(function () {
            _selectGroup.mensagemErro(err);
         }, 100);
      }

      if (confirm("Deseja realizar essa operação?")) {
         data[selectName] = $(o).attr("data-id");
         return dsm.http.requisitar(api.deleta, "POST", data, _success, _error);
      }
   };

   SelectGroup.prototype.mensagemErro = function (err) {
      alert(err.responseText);
   };

   SelectGroup.prototype.criarEventoClickAdicionar = function () {
      document.querySelector("#" + btnAdd).addEventListener("click", _selectGroup.adicionar);
   };

   let _selectGroup = new SelectGroup();
   _selectGroup.init();

   return _selectGroup;

};