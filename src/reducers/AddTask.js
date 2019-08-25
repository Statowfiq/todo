const initialState = {
  cards: [{
    id: 0,
    text: 'Write a cool JS library',
    status: 0,
    order: 0
  }, {
    id: 1,
    text: 'Make it generic enough',
    status: 0,
    order: 1
  }, {
    id: 2,
    text: 'Write README',
    status: 1,
    order: 0
  }, {
    id: 3,
    text: 'Create some examples',
    status: 1,
    order: 1
  }, {
    id: 4,
    text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    status: 2,
    order: 0
  }, {
    id: 5,
    text: '???',
    status: 2,
    order: 1
  }, {
    id: 6,
    text: 'PROFIT',
    status: 2,
    order: 2
  }]
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTASK":
      return {
        cards: [ ...state.cards,
         { id: action.id,
          text: action.text,
          status: action.status,
          order: action.order}
        ]
      }
      case "UPDATETASK":
      return {
        cards: [...action.updatedArray]
      }
    default:
      return state;
  }


}

export default reducer;