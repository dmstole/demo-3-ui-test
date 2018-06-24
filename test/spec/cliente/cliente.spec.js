describe('cadastro de cliente', () => {

   const _sleep = 1000;

   const ClientePo = require('./cliente.po')();

   beforeEach(done => {
      driver = new webdriver.Builder()
         .forBrowser('chrome')
         .build();

      driver.manage().window().maximize();
      done();
   });

   afterEach(done => {
      driver.quit();
      done();
   });

   describe('Cria novo cliente', () => {

      it('cadastre novo cliente e visualize mensagem de sucesso', done => {

         driver.get("http://localhost:3000/cliente")
            .then(() => ClientePo.digitaCampo("nome", "Diogo A. Miranda"))
            .then(() => ClientePo.digitaCampo("logradouro", "Rua Campo Belo"))
            //Numero certo
            .then(() => ClientePo.digitaCampo("numero", "100"))
            .then(() => ClientePo.digitaCampo("bairro", "Bosque dos Eucaliptos"))
            .then(() => ClientePo.digitaCampo("cidade", "São José dos Campos"))
            .then(() => ClientePo.digitaCampo("estado", "SP"))
            .then(() => ClientePo.clicaBotaoSalvar())
            .then(() => ClientePo.verificaMensagemSucesso())
            .then(() => done())
            .catch(err => done(err));
      });

      it('cadastre novo cliente e visualize mensagem de erro', done => {

         driver.get("http://localhost:3000/cliente")
            .then(() => ClientePo.digitaCampo("nome", "Diogo A. Miranda"))
            .then(() => ClientePo.digitaCampo("logradouro", "Rua Campo Belo"))
            //Numero errado
            .then(() => ClientePo.digitaCampo("numero", "A"))
            .then(() => ClientePo.digitaCampo("bairro", "Bosque dos Eucaliptos"))
            .then(() => ClientePo.digitaCampo("cidade", "São José dos Campos"))
            .then(() => ClientePo.digitaCampo("estado", "SP"))
            .then(() => ClientePo.clicaBotaoSalvar())
            .then(() => ClientePo.verificaMensagemErro())
            .then(() => done())
            .catch(err => done(err));
      });

   });

});