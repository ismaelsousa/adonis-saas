/* eslint-disable class-methods-use-this */

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
const Role = use('Adonis/Acl/Role');
const Permission = use('Adonis/Acl/Permission');
class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'Ismael moreira',
      email: 'ismaelsousa1998@outlook.com',
      password: '123455',
    });

    const createInvite = await Permission.create({
      slug: 'invites_create',
      name: 'Convidar membros',
    });

    const createProject = await Permission.create({
      slug: 'projects_create',
      name: 'Criar projetos',
    });


    const admin = await Role.create({
      slug: 'administrator',
      name: 'Administrador',
    });

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderador',
    });

    await Role.create({
      slug: 'visitor',
      name: 'Visitante',
    });

    await admin.permissions().attach([createInvite.id, createProject.id]);
    await moderator.permissions().attach([createProject.id]);

    const team = await user.teams().create({
      name: 'taki',
      user_id: user.id,
    });

    const teamJoin = await user.teamJoins().where('team_id', team.id).first();
    await teamJoin.roles().attach([admin.id]);
  }
}

module.exports = DatabaseSeeder;
