document.addEventListener('DOMContentLoaded', function() {
    function buscar() {
      var ycep = document.getElementById("cep").value;
  
      fetch("https://viacep.com.br/ws/" + ycep + "/json/")
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('CEP não encontrado');
          }
        })
        .then(ret => {
          document.getElementById("endereco").value = ret.logradouro;
          document.getElementById("complemento").value = ret.complemento;
          document.getElementById("bairro").value = ret.bairro;
          document.getElementById("cidade").value = ret.localidade;
          document.getElementById("uf").value = ret.uf;
        })
        .catch(error => {
          console.error('Erro:', error);
          alert('Erro ao buscar o CEP.');
        });
    }
  
    const btnBuscar = document.getElementById("btn-buscar");
    btnBuscar.addEventListener('click', buscar);
  });