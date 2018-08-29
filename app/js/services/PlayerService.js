import request from 'superagent';
import Config from '../components/Config';

let ACTIONS = Config.ACTIONS;

const PlayerService = store => next => action => {
  const { type, payload } = action;

  /*
  Pass all actions through by default
  */
  next(action);

  switch (type) {
    case ACTIONS.PLAYER.FETCH:
      /*
      In case we receive an action to send an API request, send the appropriate request
      */
      request
        .get(Config.URLS.API + Config.URLS.PLAYER + '/' + payload.id)
        .end((err, res) => {
          if (err) {
            return;
          }
          const data = JSON.parse(res.text);

          next({
            type: ACTIONS.PLAYER.GET,
            payload: data
          });
        });
    break;
    case ACTIONS.PLAYER.SAVE:
      // Fire and forget request
      if (Config.ENV === 'prod') {
        request
          .post(Config.URLS.API + Config.URLS.PLAYER + '/' +  payload.id)
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

export default PlayerService;