import { add, remove } from "./Types";
const dotProp = require('dot-prop-immutable')
const initialState = {
  template : [
    {color : "Blue", number : 8}
  ],
  branding : {
    Model : "lenovo thinkbook",
    price : 75000
  }
}

const Reducer = (state = initialState, Action) => {
  switch(Action.type){
    case add :
      return dotProp.set(state, `${Action.path}`, Action.payload)
    case remove : 
      return dotProp.delete(state, `${Action.path}`)
    default : 
    return state
  }
}

export default Reducer;