
/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User');

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'Ismael moreira',
      email: 'ismaelsousa1998@outlook.com',
      password: '123455',
    });

    await user.teams().create({
      name: 'taki',
      user_id: user.id,
    });
  }
}

module.exports = DatabaseSeeder;
