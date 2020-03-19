
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ greeting: 'Hello world in JSON' }));

Route.post('users', 'UserController.store');
Route.post('sessions', 'SessionController.store');

Route.group(() => {
  Route.resource('teams', 'TeamController').apiOnly();
}).middleware('auth');


Route.group(() => {
  Route.post('invites', 'InviteController.store');
}).middleware(['auth']);

Route.group(() => {
  Route.resource('projects', 'ProjectController').apiOnly();
}).middleware(['auth', 'team']);
