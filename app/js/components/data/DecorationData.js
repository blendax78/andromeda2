export const DecorationData = [
  {
    id: 1,
    name: 'A small tree is growing here.',
    action: {
      message: 'You hack at the tree.',
      skill: 'lumberjacking', // Use ID
      max: 1, //Need a way to store current value.
      max_message: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true,
        item: 'a log', //Use ID
      }
    }
  },
  {
    id: 2,
    name: 'A large tree looms over you.',
    action: {
      message: 'You hack at the tree.',
      skill: 'lumberjacking', // Use ID
      max: 2,
      max_message: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true,
        item: 'a log', //Use ID
      }
    }
  },
  {
    id: 3,
    name: 'An enormous tree dominates your view.',
    action: {
      message: 'You hack at the tree.',
      skill: 'lumberjacking', // Use ID
      max: 3,
      max_message: 'There is no more wood to be harvested.',
      result: {
        message: 'You pick up some logs.',
        inventory: true,
        item: 'a log', //Use ID
      }
    }      
  }
];
