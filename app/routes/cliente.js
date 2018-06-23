module.exports = app => {

   const _root = "clientes";

   const Db = require('../db')();
   const Cliente = require('../models/Cliente')();

   app.get(`/clientes`, (req, res) => {

      const _cliente = new Cliente(new Db());

      _cliente.obter({}, (err, result) =>
         res.render("cliente/grid", {
            data: result,
            error: err
         }));

   });

   app.get(`/cliente`, (req, res) => {
      res.render("cliente/form", {
         model: {
            id: "",
            nome: "",
            logradouro: "",
            numero: "",
            bairro: "",
            cidade: "",
            estado: ""
         },
         mensagem: null
      });
   });

   app.post(`/cliente`, (req, res) => {

      const _cliente = new Cliente(new Db());

      _cliente.criar(req.body, (err, result) => {

         let _mensagem = {};
         if (err) {
            _mensagem.status = "danger";
            _mensagem.descricao = "Ocorreu erro nessa operação";
         } else {
            _mensagem.status = "success";
            _mensagem.descricao = "Operação realizada com sucesso";
         }

         res.render("cliente/form", {
            model: req.body,
            mensagem: _mensagem
         });
      });
   });

};