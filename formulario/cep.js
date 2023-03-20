function buscar() {
  var ycep = document.getElementById("cep").value;
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var ret = JSON.parse(this.responseText);
      document.getElementById("endereco").value = ret.logradouro;
      document.getElementById("complemento").value = ret.complemento;
      document.getElementById("bairro").value = ret.bairro;
      document.getElementById("cidade").value = ret.localidade;
      document.getElementById("uf").value = ret.uf;
    }
  }

  xhttp.open("GET", "http://viacep.com.br/ws/"+ycep+"/json/", true);
  xhttp.send();
}