module.exports = function () {

   class ClientePo {

      static digitaCampo(id, valor) {
         return driver.findElement(By.id(id))
            .then(input => {
               input.clear();
               return input;
            })
            .then(input => input.sendKeys(valor))
            .then(() => driver.sleep(500));
      }

      static clicaBotaoSalvar() {
         return driver.findElement(By.id("btn-salva")).click();
      }

      static verificaMensagemSucesso() {
         return driver.findElement(By.id("mensagem")).getText()
            .then(text => expect(text).to.be.eql("Criação realizada com sucesso."));
      }

      static verificaMensagemErro() {
         return driver.findElement(By.id("mensagem")).getText()
            .then(text => expect(text).to.be.eql("Ocorreu erro ao realizar essa operação."));
      }

   }

   return ClientePo;
};