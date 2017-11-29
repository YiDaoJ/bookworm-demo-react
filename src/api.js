import axios from 'axios'

export default {
  projects: {
    fetchAll: () => axios.get('/api/projects').then(res => res.data.projects)
  }
}