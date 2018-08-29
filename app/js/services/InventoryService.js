import request from 'superagent';
import Config from '../components/Config';

let ACTIONS = Config.ACTIONS;

const InventoryService = store => next => action => {
  const { type, payload } = action;

  /*
  Pass all actions through by default
  */
  next(action);

  switch (type) {
    case ACTIONS.INVENTORY.ADD:
      // Save inventory updates
      store.dispatch({
        type: ACTIONS.INVENTORY.SAVE,
        payload: { ...store.getState().Inventory, player_id: store.getState().Player.id }
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
  }

}

export default InventoryService;