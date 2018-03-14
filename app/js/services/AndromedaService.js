import request from 'superagent';
import Config from '../components/Config';

let ACTIONS = Config.ACTIONS;

const AndromedaService = store => next => action => {
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
    case ACTIONS.USER.FETCH:
      // User
      request
        .get(Config.URLS.API + Config.URLS.USER)
        .end((err, res) => {
          const data = (!!res) ? JSON.parse(res.text) : {};

          next({
            type: ACTIONS.USER.GET,
            payload: data
          });

        // Player
      request
        .get(Config.URLS.API + Config.URLS.PLAYER + '/' +  data.player_id)
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

      // Inventory
      request
        .get(Config.URLS.API + Config.URLS.INVENTORY + '/' +  data.player_id)
        .end((err, res) => {
          if (err) {
            return;
          }
          const data = JSON.parse(res.text);

          next({
            type: ACTIONS.INVENTORY.GET,
            payload: data.object
          });
        });

      // Skills
      request
        .get(Config.URLS.API + Config.URLS.SKILLS + '/' +  data.player_id)
        .end((err, res) => {
          if (err) {
            return;
          }
          const data = JSON.parse(res.text);

          next({
            type: ACTIONS.SKILLS.GET,
            payload: data.object
          });
        });

      });
    break;
    case ACTIONS.INVENTORY.FETCH:
      request
        .get(Config.URLS.API + Config.URLS.INVENTORY + '/' + payload.player_id)
        .end((err, res) => {
          if (err) {
            return;
          }
          const data = JSON.parse(res.text);

          next({
            type: ACTIONS.INVENTORY.GET,
            payload: data.object
          });
        });
    break;
    case ACTIONS.INVENTORY.SAVE:
      // Fire and forget request
      if (Config.ENV === 'prod') {
        request
          .post(Config.URLS.API + Config.URLS.INVENTORY + '/' +  payload.player_id)
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
    default:
    break;
  }

};

export default AndromedaService;
