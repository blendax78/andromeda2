import request from 'superagent';
import Config from '../components/Config';

let ACTIONS = Config.ACTIONS;

const UserService = store => next => action => {
  const { type, payload } = action;

  /*
  Pass all actions through by default
  */
  next(action);

  switch (type) {
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
          let data = JSON.parse(res.text);
          data.score = (!!data.score) ? JSON.parse(data.score) : {};
          data.status = (!!data.status) ? JSON.parse(data.status) : {};

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

      // Bank
      request
        .get(Config.URLS.API + Config.URLS.BANK + '/' +  data.player_id)
        .end((err, res) => {
          if (err) {
            return;
          }
          const data = JSON.parse(res.text);

          next({
            type: ACTIONS.BANK.GET,
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
  }

}

export default UserService;