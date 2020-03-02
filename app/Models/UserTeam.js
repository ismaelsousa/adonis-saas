
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class UserTeam extends Model {
  user() {
    return this.belongsTo('App/Model/User');
  }
}

module.exports = UserTeam;
