// kinds: tool, seasoning, foodstuff, challenge
export const todoItems = [
  {
    "module-id": "01",
    "id": "bowl",
    "name": "Bowl",
    "kind": "tool",
  },
  {
    "module-id": "01",
    "id": "colander",
    "name": "Colander",
    "kind": "tool",
  },
  {
    "module-id": "01",
    "id": "small-bowl",
    "name": "Small bowl",
    "kind": "tool",
  },
  {
    "module-id": "01",
    "id": "spoon",
    "name": "Spoon",
    "kind": "tool",
  },
  {
    "module-id": "01",
    "id": "fork",
    "name": "Fork",
    "kind": "tool",
  },
  {
    "module-id": "01",
    "id": "dish-soap",
    "name": "Dish Soap",
    "kind": "tool",
  },
  {
    "module-id": "01",
    "id": "sponge",
    "name": "Sponge",
    "kind": "tool",
  },
  {
    "module-id": "01",
    "id": "paper-towel",
    "name": "Paper towel",
    "kind": "tool",
  },
  {
    "module-id": "01",
    "id": "olive-oil",
    "name": "Olive oil",
    "kind": "seasoning",
  },
  {
    "module-id": "01",
    "id": "vinegar",
    "name": "Vinegar",
    "kind": "seasoning",
  },
  {
    "module-id": "01",
    "id": "salt",
    "name": "Salt",
    "kind": "seasoning",
  },
  {
    "module-id": "01",
    "id": "sugar",
    "name": "Sugar",
    "kind": "seasoning",
  },
  {
    "module-id": "01",
    "id": "black-pepper",
    "name": "Black pepper",
    "kind": "seasoning",
  },
  {
    "module-id": "01",
    "id": "head-lettuce",
    "name": "Head lettuce",
    "kind": "foodstuff",
  },
  {
    "module-id": "01",
    "id": "challenge-01",
    "name": "Challenge 01",
    "kind": "challenge",
  },
  {
    "module-id": "01",
    "id": "challenge-02",
    "name": "Challenge 02",
    "kind": "challenge",
  },
  {
    "module-id": "01",
    "id": "challenge-03",
    "name": "Challenge 03",
    "kind": "challenge",
  },
];

export function todoIdentifierFrom(todoItem) {
    return todoItem["module-id"] + "-" + todoItem["id"];
}
