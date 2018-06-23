(function () {

   const _apis = {
      opcoes: "/administrativo/perfis",
      selecionados: "/administrativo/pagina-perfis",
      adiciona: "/administrativo/pagina-perfil",
      deleta: "/administrativo/pagina-perfil/delete",
   };

   const _data = {
      paginaId: $("#id").val(),
      perfilId: ""
   };

   dsm.selectGroup("container-perfis", "perfilId", "btn-add-perfil", "btn-deleta-perfil", "paginaPerfil", _apis, _data);

})();