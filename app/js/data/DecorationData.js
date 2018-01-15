import Config from '../components/Config';

export const DecorationData = [
  {
    id: 1,
    description: 'A small tree is growing here.',
    action: {
      message: 'You hack at the tree.',
      skill: Config.ACTIONS.SKILLS.LUMBERJACKING,
      current: 1,
      maxMessage: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true,
        item: 1
      }
    }
  },
  {
    id: 2,
    description: 'A large tree looms over you.',
    action: {
      message: 'You hack at the tree.',
      skill: Config.ACTIONS.SKILLS.LUMBERJACKING,
      current: 2,
      maxMessage: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true, // Means that a successful skill check will place this item in inventory
        item: 1
      }
    }
  },
  {
    id: 3,
    description: 'An enormous tree dominates your view.',
    action: {
      message: 'You hack at the tree.',
      skill: Config.ACTIONS.SKILLS.LUMBERJACKING,
      current: 3,
      maxMessage: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true,
        item: 1
      }
    }      
  },
  {
    id: 4,
    description: 'A small mound of rock juts out of the ground.',
    action: {
      message: 'You pick at the rock.',
      skill: Config.ACTIONS.SKILLS.MINING,
      current: 1,
      maxMessage: 'There is no more ore to be harvested.',
      result: {
        message: 'You pick up some ore.',
        inventory: true,
        item: 2
      }
    }      
  },
  {
    id: 5,
    description: 'A large group of rocks catches your eye.',
    action: {
      message: 'You pick at the rocks.',
      skill: Config.ACTIONS.SKILLS.MINING,
      current: 2,
      maxMessage: 'There is no more ore to be harvested.',
      result: {
        message: 'You pick up some ore.',
        inventory: true,
        item: 2
      }
    }      
  },
  {
    id: 6,
    description: 'A huge boulder looms over you.',
    action: {
      message: 'You pick at the boulder.',
      skill: Config.ACTIONS.SKILLS.MINING,
      current: 3,
      maxMessage: 'There is no more ore to be harvested.',
      result: {
        message: 'You pick up some ore.',
        inventory: true,
        item: 2
      }
    }      
  }

];
