/* eslint-disable class-methods-use-this */

const Invite = use('App/Models/Invite');
class InviteController {
  async store({ request, auth }) {
    const invites = request.input('invites');

    const data = invites.map((email) => ({
      email,
      user_id: auth.user.id,
      team_id: request.team.id,
    }));

    const invites_add = await Invite.createMany(data);
    return invites_add;
  }
}

module.exports = InviteController;
