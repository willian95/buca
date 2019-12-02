'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/api/register', 'RegisterController.store')
Route.post('/api/login', 'LoginController.login')
Route.get('/api/verify', 'VerifyController.verify').middleware('auth')
Route.get('/api/users/edit', 'UserController.edit').middleware('auth')
Route.post('/api/users/update', 'UserController.update').middleware('auth')

Route.post('/api/password/recovery', 'PasswordRecoveryController.recover')
Route.post('/api/password/token/verify', 'PasswordRecoveryController.verify')
Route.post('/api/password/change', 'PasswordRecoveryController.change')

Route.get('/api/brands/all', 'BrandController.getAll')
Route.get('/api/models/:id', 'ModelController.find')

Route.post('/api/cars/store', 'CarController.store').middleware('auth')
Route.get('/api/cars/user', 'CarController.showCarsByUserId').middleware('auth')
Route.get('/api/cars/latest', 'CarController.latestPosts')
Route.post('/api/cars/delete', 'CarController.delete').middleware('auth')
Route.get('/api/cars/find/:id', 'CarController.show')
Route.get('/api/cars/edit/:id', 'CarController.edit')
Route.post('/api/cars/update', 'CarController.update').middleware('auth')

Route.post('/api/search', 'SearchController.search')

Route.post('/api/favorite', 'FavoriteController.store')
Route.post('/api/favorite/remove', 'FavoriteController.remove')
Route.post('/api/favorite/check', 'FavoriteController.isFavorite')
Route.get('/api/favorite/count', 'FavoriteController.countFavorites')
Route.get('/api/favorite/fetch', 'FavoriteController.fetch')

Route.post('/api/view/store', 'ViewController.store')
Route.post('/api/view/count', 'ViewController.count')
