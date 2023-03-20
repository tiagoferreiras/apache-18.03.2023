function buscar() {
    var cep = document.getElementById("cep").value;
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var endereco = JSON.parse(this.responseText);
        document.getElementById("endereco").value = endereco.logradouro;
        document.getElementById("complemento").value = endereco.complemento;
        document.getElementById("bairro").value = endereco.bairro;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("uf").value = endereco.uf;
      }
    }
    
    xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/", true);
    xhr.send();
  }
  
  function buscarCliente() {
    var id = document.getElementById("cliente").value;
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var cliente = JSON.parse(this.responseText);
        document.getElementById("nome").value = cliente.nome;
        document.getElementById("email").value = cliente.email;
        document.getElementById("phone").value = cliente.telefone;
        document.getElementById("cep").value = cliente.cep;
        document.getElementById("numero").value = cliente.numero;
        document.getElementById("complemento").value = cliente.complemento;
        document.getElementById("bairro").value = cliente.bairro;
        document.getElementById("cidade").value = cliente.cidade;
        document.getElementById("uf").value = cliente.uf;
        document.getElementById("tipo_cliente").value = cliente.tipo;
      }
    }
    
    xhr.open("GET", "http://localhost:3000/contatos/" + id, true);
    xhr.send();
  }