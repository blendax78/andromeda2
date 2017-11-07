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
    case ACTIONS.USER.FETCH:
      // User
      request
        .get(Config.URLS.API + Config.URLS.USER + '/1')
        .end((err, res) => {
          if (err) {
            return;
          }
          const data = JSON.parse(res.text);

          next({
            type: ACTIONS.USER.GET,
            payload: data
          });

        // Player
        request
          .get(Config.URLS.API + Config.URLS.PLAYER + '/' +  payload.id)
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
          .get(Config.URLS.API + Config.URLS.INVENTORY + '/' +  payload.id)
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

        });
    break;
    case ACTIONS.INVENTORY.FETCH:
      request
        .get(Config.URLS.API + Config.URLS.INVENTORY + '/1')
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
    default:
    break;
  }

};

export default AndromedaService;
