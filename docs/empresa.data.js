use db

db.empresa.remove({});

db.empresa.insertOne({"_id":ObjectId("5fd51803930f59b362fe30e5"), cnpj:"11111111111111", razaoSocial:"Coelba Limitada", nomeFantasia:"Coelba Conquista", email:"coelba@provedor.com", "endereco":{rua:"Olívia Flores", numero:NumberInt(100), bairro:"Candeias", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"11111111"}});
db.empresa.insertOne({"_id":ObjectId("5fd51803930f59b362fe30e6"), cnpj:"22222222222222", razaoSocial:"Embasa Limitada", nomeFantasia:"Embasa Conquista", email:"embasa@provedor.com", "endereco":{rua:"Pará", numero:NumberInt(200), bairro:"Ibirapuera", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"22222222"}});
db.empresa.insertOne({"_id":ObjectId("5fd51803930f59b362fe30e7"), cnpj:"33333333333333", razaoSocial:"Lanchonete Teixeira", nomeFantasia:"Lanchonete Teixeira", email:"teixeirao@provedor.com", "endereco":{rua:"Siqueira Campos", numero:NumberInt(300), bairro:"Centro", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"33333333"}});
db.empresa.insertOne({"_id":ObjectId("5fd51803930f59b362fe30e8"), cnpj:"44444444444444", razaoSocial:"Seguro Alunos RSA", nomeFantasia:"Seguro", email:"segurorsa@provedor.com", "endereco":{rua:"Nove de Novembro", numero:NumberInt(400), bairro:"Guarani", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"44444444"}});
