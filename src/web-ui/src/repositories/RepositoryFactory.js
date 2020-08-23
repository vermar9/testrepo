 import ProductsRepository from "./productsRepository.js"
 import UsersRepository from "./usersRepository.js"
 import CartsRepository from "./cartsRepository.js"
 import OrdersRepository from "./ordersRepository.js"
 import RecommendationsRepository from "./recommendationsRepository.js"
 import SearchRepository from "./searchRepository.js"

 const repositories = {
     products: ProductsRepository,
     users: UsersRepository,
     carts: CartsRepository,
     orders: OrdersRepository,
     recommendations: RecommendationsRepository,
     search: SearchRepository
 }

 export const RepositoryFactory = {
     get: name => repositories[name]
 }