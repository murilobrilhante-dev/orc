<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://rajportal.no-ip.org:11890/datasnap/rest/app/OrcamentoCriar',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{"Autenticacao":{"Login":"ICARUS","Senha":"182200186199186197167197162191162187","CodUsuar":92},"ReqPLUG":{"pedido":{"codPedido":"12345695095342ICarus","titulo":"TEstedepedidoICarus1854","codPedCli":"ppePt1rN@z1GId0AERzyRoXe8gmYoT","releaseDate":"b91EfLM4x@  ctGrGJgfktXM  Q7 1","dtEntrega":"mVP.BIi 8b1rm9ng7 .LvW9a oLhaZ","observ":"3gmCHZPA2FQoXhozEBuJ88aKGMLtwG","cliente":{"razao":"S1iw9BUwUu3H2Shsn2MBjErTCGLB0t","apelido":"F56o5JE5d7.DIFGyj1h6 ciAj0.Mjn","tipoEmpresa":"ojFItXmiQbn8KvSSx eMm Jc elvzO","CNPJ":"vUaueaOB 47 IwbNLsKgQWVf6YhEGN","IE":"o2WPMP42Z7abft2Ph x0LZwZfHRz@e","ContribuinteICMS":"2D5nNLTy4BWt7jXT QFrKmJSq1H6yb","Industria":"3bB24xOpoh57fSf39PGojymm7entgQ","Comercio":"oT5zHJqbd hROBh84OwpLGF6d 8yI ","CPF":"N@uiGcDa oIm5YFOZVknLslarxTvGm","RG":"o.EqhhsYJFgHknN k3UXlPwsEO0uwl","CCM":" 5YWLFM@4rGljhRKVDr.wSpj79 IiG","CNAE":"pQ0Tlv5@fN0dAONU2RuQQXcuFKS9Tw","ISuframa":"kA5YH3TP312rO9YVZwHpWDHLam66RN","idEstrangeiro":"gkFaqQJZfk9hYZ4fCJv87tsw5e8Jz1","dtCriaEmpresa":"eRxF4DF7kGB3XgsvTaU4p1YlvIL2l8","ddd":"11","fone":"123456789","email":" zmU BAeu8LnAdzNpF 1PhLhIAbd 3","homePage":"wku.ZreCzSFIKgYl8V69OQtW1ZOkEC","endereco":{"ender":"NU.tPCG3VbvB9vz7rIq@M vOGy tEZ","numero":"@a uVZWWnKcdcz 5dp ZecpSCZ aAV","complemento":"VZtedbU77CAF8lorP1SKlQijY7LskE","bairro":"TM8ce9ahYP@0wglc65JqK6w aCWIcb","cidade":"pySSY sdcvovp dpw7  jXzIALQccG","cidadeCod":"3216549","siglaUF":"cjyC@VKmDFYxK0@DV @eeNYCJiy7fh","pais":"2.0ovJyN9MEQw.3Cjt 7HQBvHZ94SI","paisIBGE":"1058","CEP":"123456789"},"contato":{"nome":"qdBx35O4wsxyv  1Zmhw @ kzpGG6k","ddd":"22","fone":"987654321","email":"DAZVj.0sZOP7cwa1MUnu. KViesKsa"}},"lstItens":[{"sequencia":1,"codigo":"0202710005","nome":"ASDZXCQWE","qtde":123,"valorUn":0,"observ":""},{"sequencia":32,"codigo":"0202710005","nome":"SADSDAQWEQWE","qtde":321,"valorUn":0,"observ":""}]}}}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
 if (curl_errno($curl)) {
        $error_msg = curl_error($curl);
        echo 'Erro na requisição cURL: ' . $error_msg;
    }

    curl_close($curl);
  
?>