import axios from 'axios';

class IdeasApi {
  constructor() {
    this._apiUrl =
      process.env.NODE_ENV === 'production'
        ? '/api/ideas'
        : 'http://localhost:5000/api/ideas';

    console.log(process.env.NODE_ENV);
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }

  createIdea(data) {
    return axios.post(this._apiUrl, data);
  }

  updateIdea(id, data) {
    return axios.put(`${this._apiUrl}/${id}`, data);
  }

  deleteIdea(id) {
    const username = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : '';
    return axios.delete(`${this._apiUrl}/${id}`, {
      data: {
        username,
      },
    });
  }
}

export default new IdeasApi();
