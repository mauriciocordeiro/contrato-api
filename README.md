# contrato-api

![Node.js CI](https://github.com/mauriciocordeiro/contrato-api/workflows/Node.js%20CI/badge.svg)

API Node.js para gestão de contratos com MongoDB

## Modelo de dados

Consulte [https://contrato-api.herokuapp.com/models](https://contrato-api.herokuapp.com/models) para ver o modelo dos documentos.

## Serviços

### _/empresas_

* **GET** `/empresas`
* **GET** `/empresas/:id`
* **POST** `/empresas`
* **PUT** `/empresas/:id`
* **DELETE** `/empresas/:id`

### _/contratos_

* **GET** `/contratos`  _(queryParam: `idEmpresa`, `status`, `tipo`, `prestacao`)_

* **GET** `/contratos/:id`

* **GET** `/contratos/pagamentos` _(queryParam: `idEmpresa`)_ <sub>contratos de uma empresa com pagamentos</sub>

* **GET** `/contratos/aditivos` _(queryParam: `idEmpresa`)_ <sub>contratos de uma empresa com aditivos</sub>

* **POST** `/contratos`

* **PUT** `/contratos/:id`

* **DELETE** `/contratos/:id`

#### Enums

* **contrato**

| Campo            | Valores    | Descrição                                         |
|------------------|------------|---------------------------------------------------|
| `tipoContrato`   | [1, 2, 3]  | 1: Licitatório<br>2: Permanente<br>3: Consultoria |
| `statusContrato` | [1, 2, 3]  | 1: Ativo<br>2: Finalizado<br>3: Cancelado         |
| `prestacao`      | [1, 2]     | 1: Serviço<br>2: Produto                          |

### _/models_

* **GET** `/models`
