import { READ_PROJECTS } from '../types'

const projects = (state={}, action ) => {
  switch (action.type) {

    case READ_PROJECTS:
      return action.projects

    default:
      return state
  }
}

export default projects