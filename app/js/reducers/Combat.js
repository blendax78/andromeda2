// get rid of this reducer
import Config from '../components/Config';
let COMBAT = Config.ACTIONS.COMBAT;

const Combat = (state = {}, action) => {
  state.Combat = state.Combat || {
    actions: {
      melee: false,
      ranged: false,
      run: false
    }
  };

  const { type, payload } = action;

  let switchOffActions = (current) => {
    for (let action in state.Combat.actions) {
      if (action !== current) {
        state.Combat.actions[action] = false;
      }
    }
  };

  switch (type) {
    case COMBAT.RUN:
      state.Combat.actions.run = payload.run;
      switchOffActions('run');
    break;
    case COMBAT.MELEE:
      state.Combat.actions.melee = payload.melee;
      switchOffActions('melee');
    break;
    case COMBAT.RANGED:
      state.Combat.actions.ranged = payload.ranged;
      switchOffActions('ranged');
    break;
  }

  return state.Combat;
}

export default Combat;
