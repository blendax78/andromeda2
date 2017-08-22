export const DecorationData = [
  {
    id: 1,
    description: 'A small tree is growing here.',
    action: {
      message: 'You hack at the tree.',
      skill: 'lumberjacking', // Use ID
      current: 1,
      maxMessage: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true,
        item: 'a log', //Use ID
      }
    }
  },
  {
    id: 2,
    description: 'A large tree looms over you.',
    action: {
      message: 'You hack at the tree.',
      skill: 'lumberjacking', // Use ID
      current: 2,
      maxMessage: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true,
        item: 'a log', //Use ID
      }
    }
  },
  {
    id: 3,
    description: 'An enormous tree dominates your view.',
    action: {
      message: 'You hack at the tree.',
      skill: 'lumberjacking', // Use ID
      current: 3,
      maxMessage: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true,
        item: 'a log', //Use ID
      }
    }      
  }
];
