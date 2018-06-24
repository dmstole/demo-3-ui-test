module.exports = app => {

   const _cliente = app.datasource.models.Cliente;

   app.get(`/cliente`, (req, res) => {
      const _novoCliente = {
         id: "",
         nome: "",
         logradouro: "",
         numero: "",
         bairro: "",
         cidade: "",
         estado: ""
      };
      _responseDefault(res, {
         model: _novoCliente,
         mensagem: {
            descricao: ""
         }
      });
   });

   app.post(`/cliente`, (req, res) => {
      _cliente.create(req.body)
         .then(result => {
            _responseDefault(res, {
               model: result.dataValues,
               mensagem: {
                  descricao: "Criação realizada com sucesso.",
                  status: "success"
               }
            });
         })
         .catch(err => {

            const _validadores = [];
            if (Array.isArray(err.errors)) {
               err.errors.forEach(item => _validadores.push(item.message));
            }

            _responseDefault(res, {
               model: req.body,
               mensagem: {
                  descricao: "Ocorreu erro ao realizar essa operação.",
                  status: "danger",
                  validacoes: _validadores,
                  erro: err
               }
            });
            
         });
   });

   function _responseDefault(res, result) {
      res.render("cliente/form", result);
   }

};