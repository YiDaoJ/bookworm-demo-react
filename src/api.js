import axios from 'axios'

export default {
  projects: {
    fetchAll: () => axios.get('/api/projects').then(res => res.data.projects),
    // fetchProjectLanguage: project => axios.get('/api/projects', { project }).then( res => res.data.projects )
  },
  languages: {
    fetchAll: () => axios.get('/api/languages').then(res => res.data.languages)
  }
}