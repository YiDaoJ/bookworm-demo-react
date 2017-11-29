import api from '../api'
import { READ_PROJECTS } from '../types'

export const readProjects = projects => (
  {
    type: READ_PROJECTS,
    projects
  }
)

export const read = () => () =>
  api.project.read().then(res => console.log(res.data))