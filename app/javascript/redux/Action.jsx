import { add, remove } from "./Types";

export const Addtemplate = (data, path) =>{
  return{
    type : add,
    path : path,
    payload : data
  }
}

export const Removetemplate = (data, path) => {
  return{
    type : remove,
    path : `${data}.${path}`,
  }
}