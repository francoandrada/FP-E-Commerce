const { Router } = require('express');
const routerHelper = require('../helpers/routerHelper');
const pagination = require('../Controllers/pagination/pagination.controller');
const router = Router();

/*
  PAGINADO
  El paginado inicia en cero (0) y termina en "totalPages"

  FILTRADO
  Valor inicial de "category" deberia ser "default" ["default", "...categories name"]
  Valor inicial de "order" deberia ser "default" otros valores["default", "ASC", "DESC"]

  URL
  http://localhost:3001/pagination?page=2&category=tabletas&order=ASC

  VALOR DEVUELTO
  "pagination" devuelve un objeto con el "total de paginas" y los "productos".
  El objeto devuelto tiene la siguiente forma:
{
  totalPages: number
  products: array de objetos
}

  Para modificar el numero de elementos a enviar
  pagination.controller => modificar settear "LIMIT" con el numero deseado.

*/
router.get('/', routerHelper(pagination));

module.exports = router;
