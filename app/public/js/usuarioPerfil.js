(function () {

   const _apis = {
      opcoes: "/administrativo/perfis",
      selecionados: "/administrativo/usuario-perfis",
      adiciona: "/administrativo/usuario-perfil",
      deleta: "/administrativo/usuario-perfil/delete",
   };

   const _data = {
      usuarioId: $("#id").val(),
      perfilId: ""
   };

   dsm.selectGroup("container-perfis", "perfilId", "btn-add-perfil", "btn-deleta-perfil", "usuarioPerfil", _apis, _data);

})();