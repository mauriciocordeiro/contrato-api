use db

db.empresa.remove({});

db.empresa.insertOne({"_id":ObjectId("5fd51803930f59b362fe30e5"), cnpj:"11111111111111", razaoSocial:"Coelba Limitada", nomeFantasia:"Coelba Conquista", email:"coelba@provedor.com", "endereco":{rua:"Olívia Flores", numero:NumberInt(100), bairro:"Candeias", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"11111111"}});
db.empresa.insertOne({"_id":ObjectId("5fd51803930f59b362fe30e6"), cnpj:"22222222222222", razaoSocial:"Embasa Limitada", nomeFantasia:"Embasa Conquista", email:"embasa@provedor.com", "endereco":{rua:"Pará", numero:NumberInt(200), bairro:"Ibirapuera", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"22222222"}});
db.empresa.insertOne({"_id":ObjectId("5fd51803930f59b362fe30e7"), cnpj:"33333333333333", razaoSocial:"Lanchonete Teixeira", nomeFantasia:"Lanchonete Teixeira", email:"teixeirao@provedor.com", "endereco":{rua:"Siqueira Campos", numero:NumberInt(300), bairro:"Centro", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"33333333"}});
db.empresa.insertOne({"_id":ObjectId("5fd51803930f59b362fe30e8"), cnpj:"44444444444444", razaoSocial:"Seguro Alunos RSA", nomeFantasia:"Seguro", email:"segurorsa@provedor.com", "endereco":{rua:"Nove de Novembro", numero:NumberInt(400), bairro:"Guarani", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"44444444"}});

db.contrato.remove({});

db.contrato.insertOne({_idEmpresa:ObjectId("5fd51803930f59b362fe30e5"), copiaContrato:"C:\copia100.pdf", tipoContrato:NumberInt(1), prestacao:NumberInt(1), statusContrato:NumberInt(1), valorContrato:12357, dataCelebracao:new ISODate('2016-11-02'), dataFinalizacao:new ISODate('2017-11-02'), numero:NumberInt(100), "aditivos":[{copiaContratoAditivo:"C:\copia10002.pdf", valorContratoAditivo:13000, dataRenovacao:new ISODate('2017-11-04'), dataVencimento:new ISODate('2018-11-04')},{copiaContratoAditivo:"C:\copia10001.pdf", valorContratoAditivo:12700, dataRenovacao:new ISODate('2018-11-03'), dataVencimento:new ISODate('2019-11-03')}]});
db.contrato.insertOne({_idEmpresa:ObjectId("5fd51803930f59b362fe30e5"), copiaContrato:"C:\copia200.pdf", tipoContrato:NumberInt(1), prestacao:NumberInt(1), statusContrato:NumberInt(1), valorContrato:8570, dataCelebracao:new ISODate('2016-12-01'), dataFinalizacao:new ISODate('2017-12-01'), observacoes:"Reclamações por parte dos Alunos do Curso dde BSI no dia  23/10/2014", numero:NumberInt(200), "aditivos":[{copiaContratoAditivo:"C:\copia201.pdf", valorContratoAditivo:9300, dataRenovacao:new ISODate('2017-12-02'), dataVencimento:new ISODate('2018-12-02'), observacoes:"Foi conversado que será oferecido um serviço combo para alunos de baixa renda"},{copiaContratoAditivo:"C:\copia201.pdf", valorContratoAditivo:10100, dataRenovacao:new ISODate('2018-12-03'), dataVencimento:new ISODate('2019-12-03')}], "contas":[{copiaConta:"C:\copia200_01.pdf", tipoConta:NumberInt(1), statusConta:NumberInt(1),  dataVencimento:new ISODate('2019-06-11'), dataRecebimentoSetor:new ISODate('2019-06-07'), dataEnvioDof:new ISODate('2019-06-07'), valorConta:760, "pagamentos":[{valorPago:760, dataPagamentoConta:new ISODate('2019-06-09')}]},{copiaConta:"C:\copia200_02.pdf", tipoConta:NumberInt(1), statusConta:NumberInt(2),  dataVencimento:new ISODate('2019-07-11'), dataRecebimentoSetor:new ISODate('2019-07-07'), dataEnvioDof:new ISODate('2019-07-07'), valorConta:760}]});
db.contrato.insertOne({_idEmpresa:ObjectId("5fd51803930f59b362fe30e5"), copiaContrato:"C:\copia50.pdf", tipoContrato:NumberInt(1), prestacao:NumberInt(1), statusContrato:NumberInt(2), valorContrato:17400, dataCelebracao:new ISODate('2016-05-16'), dataFinalizacao:new ISODate('2017-05-06'), numero:NumberInt(50), "aditivos":[{copiaContratoAditivo:"C:\copia5501.pdf", valorContratoAditivo:22000, dataRenovacao:new ISODate('2017-05-07'), dataVencimento:new ISODate('2018-05-07')},{copiaContratoAditivo:"C:\copia5502.pdf", valorContratoAditivo:23500, dataRenovacao:new ISODate('2018-05-08'), dataVencimento:new ISODate('2019-05-08'), observacoes:"Foi mantido o mesmo plano, sem adicionais. Empresa não está cumprindo com a garantia de serviço de internet. Qualidade baixa."},{copiaContratoAditivo:"C:\copia5503.pdf", valorContratoAditivo:31250, dataRenovacao:new ISODate('2019-05-09'), dataVencimento:new ISODate('2020-05-09'), observacoes:"Aumento da largura de banda pra tentar suprir a necessidade do instituto. Ligar e dar retorno do servi�o."}]});
db.contrato.insertOne({_idEmpresa:ObjectId("5fd51803930f59b362fe30e6"), copiaContrato:"C:\copia3000.pdf", tipoContrato:NumberInt(1), prestacao:NumberInt(2), statusContrato:NumberInt(2), valorContrato:8000, dataCelebracao:new ISODate('2018-10-05'), dataFinalizacao:new ISODate('2019-11-18'), numero:NumberInt(3000)});
db.contrato.insertOne({_idEmpresa:ObjectId("5fd51803930f59b362fe30e6"), copiaContrato:"C:\copia300.pdf", tipoContrato:NumberInt(2), prestacao:NumberInt(1), statusContrato:NumberInt(1), valorContrato:7500, dataCelebracao:new ISODate('2017-11-15'), numero:NumberInt(300),contas:[{copiaConta:"C:\copia300_01.pdf", tipoConta:NumberInt(2), statusConta:NumberInt(1),  dataVencimento:new ISODate('2019-05-06'), dataRecebimentoSetor:new ISODate('2019-05-02'), dataEnvioDof:new ISODate('2019-05-02'), valorConta:12987, "pagamentos":[{valorPago:12987, taxaJuros:null, dataPagamentoConta:new ISODate('2019-09-25')}]},{copiaConta:"C:\copia300_02.pdf", tipoConta:NumberInt(2), statusConta:NumberInt(1),  dataVencimento:new ISODate('2019-06-06'), dataRecebimentoSetor:new ISODate('2019-06-05'), dataEnvioDof:new ISODate('2019-06-05'), valorConta:15321, "pagamentos":[{valorPago:15321, dataPagamentoConta:new ISODate('2019-09-25')}]}, {copiaConta:"C:\copia300_03.pdf", tipoConta:NumberInt(2), statusConta:NumberInt(1),  dataVencimento:new ISODate('2019-07-06'), dataRecebimentoSetor:new ISODate('2019-07-01'), dataEnvioDof:new ISODate('2019-07-04'), valorConta:11570},{copiaConta:"C:\copia300_04.pdf", tipoConta:NumberInt(2), statusConta:NumberInt(1),  dataVencimento:new ISODate('2019-10-25'), dataRecebimentoSetor:new ISODate('2019-10-21'), dataEnvioDof:new ISODate('2019-10-21'), valorConta:15321},{copiaConta:"C:\copia300_05.pdf", tipoConta:NumberInt(2), statusConta:NumberInt(2),  dataVencimento:new ISODate('2019-10-26'), dataRecebimentoSetor:new ISODate('2019-10-22'), dataEnvioDof:new ISODate('2019-10-22'), valorConta:15321}]});
db.contrato.insertOne({_idEmpresa:ObjectId("5fd51803930f59b362fe30e7"), copiaContrato:"C:\copia400.pdf", tipoContrato:NumberInt(1), prestacao:NumberInt(1), statusContrato:NumberInt(3), valorContrato:13985, dataCelebracao:new ISODate('2017-12-01'), dataFinalizacao:new ISODate('2018-12-01'), numero:NumberInt(400)});