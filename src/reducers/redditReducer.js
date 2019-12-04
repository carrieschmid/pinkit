export default (state = {}, action) => {
  switch(action.type) {
  case 'ADD_POST':
  console.log(action);
    const { name, date, topic, post, id } = action;

    let newState = Object.assign({}, state, {
      [id]: {
        name: name,
        date: date,
        topic: topic,
        post: post,
      }
    });
    console.log(newState);
    return newState;
  default:
    return state;
  }
};
 
