# contrato-api

![Node.js CI](https://github.com/mauriciocordeiro/contrato-api/workflows/Node.js%20CI/badge.svg)

API Node.js para gestão de contratos com MongoDB

## Modelo de dados

Consulte [https://contrato-api.herokuapp.com/models](https://contrato-api.herokuapp.com/models) para ver o modelo dos documentos.

## Serviços

### _/empresas_

* **GET** `/empresas` (com paginação de 10 itens por página)

_Ex.:_ `/empresas?page=3`, onde `"docs"` é a lista de resultados
```json
{
    "docs":[ ],
    "total":50,
    "limit":10,
    "page":"3",
    "pages":5
}
```

* **GET** `/empresas/:id`
* **POST** `/empresas`
* **PUT** `/empresas/:id`
* **DELETE** `/empresas/:id`

### _/contratos_

* **GET** `/contratos`
 * queryParam: `idEmpresa`, `status`
* **GET** `/contratos/:id`
* **POST** `/contratos`
* **PUT** `/contratos/:id`
* **DELETE** `/contratos/:id`

### _/models_

* **GET** `/models`
