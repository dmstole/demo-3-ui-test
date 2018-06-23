dsm.select = function (id) {

   function Select(_id) {
      this._id = _id;
      this._obj = {};
   }

   Select.prototype.init = function () {
      const _obj = this.find();
      this.request(_obj);
   };

   Select.prototype.find = function () {
      if ($("#" + this._id).attr("dsm-select")) {
         this._obj = {
            id: $("#" + this._id).attr("id"),
            itemSelected: $("#" + this._id).attr("data-id"),
            href: $("#" + this._id).attr("data-href")
         };
      }

      if (!this._obj.id) throw "Combo não encontrada !!!";

      return this._obj;
   };

   Select.prototype.request = function () {
      this.loading(this._obj.id);
      dsm.http.requisitar(this._obj.href, "GET", null,
         response => {
            this.bind(response);
         },
         err => {
            this.bindError();
            console.log(err);
         });
   };

   Select.prototype.bind = function (options) {
      $("#" + this._id).empty().append("<option value=''> Selecione... </option>");
      $.map(options, item => {
         $("#" + this._id).append("<option value='" + item.id + "'" + ((this._obj.itemSelected == item.id) ? " selected" : "") + "> " + item.nome + " </option>");
      });
   };

   Select.prototype.bindError = function () {
      $("#" + this._id).empty().attr('disabled', 'true').append("<option value=''> Erro... </option>");
   };

   Select.prototype.loading = function () {
      $("#" + this._id).empty().append("<option value=''> Carregando... </option>");
   };

   const _select = new Select(id);
   return _select;
};