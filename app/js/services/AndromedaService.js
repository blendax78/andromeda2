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
      console.log(ACTIONS.PLAYER.FETCH);
      /*
      In case we receive an action to send an API request, send the appropriate request
      */
      // request
      //   .get(Config.URLS.QUOTE_API)
      //   .end((err, res) => {
      //     const data = JSON.parse(res.text);
         
      //     next({
      //       type: ACTIONS.QUOTE.SET,
      //       payload: data
      //     });
      //   });
    break;
    case ACTIONS.USER.FETCH:
      console.log(ACTIONS.USER.FETCH);
      /*
      In case we receive an action to send an API request, send the appropriate request
      */
      // request
      //   .get(Config.URLS.QUOTE_API)
      //   .end((err, res) => {
      //     const data = JSON.parse(res.text);
         
      //     next({
      //       type: ACTIONS.QUOTE.SET,
      //       payload: data
      //     });
      //   });
    break;
    default:
    break;
  }

};

export default AndromedaService;
