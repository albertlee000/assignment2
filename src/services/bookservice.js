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
  editBook (id,book) {
    return Api().put(`/books/editBook=${id}`,book,
      { headers: {'Content-type': 'application/json'} })
  },
  like(uid,bookname){
    return Api().put(`/users/like=${uid}`,bookname,
      { headers: {'Access-Control-Allow-Origin': 'application/json'} })
  },
  unlike(uid,bookname){
    return Api().put(`/users/unlike=${uid}`,bookname,
      { headers: {'Access-Control-Allow-Origin': 'application/json'} })
  },
  getUserID(account){
    return Api().get(`/users/getid=${account}`)
  }
}
