import request from 'superagent';
import Config from '../components/Config';

let ACTIONS = Config.ACTIONS;

const SkillService = store => next => action => {
  const { type, payload } = action;

  /*
  Pass all actions through by default
  */
  next(action);

  switch (type) {
    case ACTIONS.SKILLS.SAVE:
      // Fire and forget request
      if (Config.ENV === 'prod') {
        request
          .post(Config.URLS.API + Config.URLS.SKILLS + '/' +  payload.player_id)
          .send({ data: JSON.stringify(payload) })
          .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
          .end((err, res) => {
            if (err) {
              console.error(err);
              return;
            }
          });
      }
    break;
  }

}

export default SkillService;