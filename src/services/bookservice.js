import Api from '@/services/api'

export default {
  fetchBooks () {
    return Api().get('/books')
  },
  fetchUsers () {
    return Api().get('/users')
  },
  postBook (book) {
    return Api().post('/books/addBook', book,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteBook (id) {
    return Api().delete(`/books/id=${id}`)
  },
  rankBook () {
    return Api().get(`/users/rank`)
  },
  fetchBookByID (id) {
    return Api().get(`/books/${id}`)
  },
  fetchBookByName (name) {
    return Api().get(`/books/${name}`)
  },
  putDonation (id, donation) {
    console.log('REQUESTING ' + id + ' ' +
      JSON.stringify(donation, null, 5))
    console.log('donation : ' + donation._id + '  ' + id)
    return Api().put(`/donations/${id}`, donation,
      { headers: {'Content-type': 'application/json'} })
  }
}
