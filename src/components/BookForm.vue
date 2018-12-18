<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.bookname.$error }">
      <label class="form-control-label">Book Name</label>
      <input data-test="inputbook" class="form__input" placeholder="book name" v-model.trim='bookname'/>
    </div>
    <div class="error" v-if="!$v.bookname.required">Book name is Required</div>
    <div class="error" v-if="!$v.bookname.minLength">Book name must have at least {{$v.bookname.$params.minLength.min}} letters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.author.$error }">
      <label class="form__label">Author</label>
      <input data-test="inputauthor" class="form__input" placeholder="author name" v-model.trim='author'/>
    </div>
    <div class="error" v-if="!$v.author.required">Author is Required</div>
    <div class="error" v-if="!$v.author.minLength">Author must have at least {{$v.author.$params.minLength.min}} letters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.summary.$error }">
      <label class="form__label">Summary</label>
      <input data-test="inputsummary" class="form__input" placeholder="describe this book" v-model.trim='summary'/>
    </div>
    <div class="error" v-if="!$v.summary.required">Summary is Required</div>
    <div class="error" v-if="!$v.summary.minLength">Summary must have at least {{$v.summary.$params.minLength.min}} letters.</div>
    <p>
      <button data-test="summitbtn" class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ bookBtnTitle }}</button>
    </p>
    <p>
      <a href="#/books" class="btn btn-primary btn1" role="button">Manage Book</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'" style="color:white">Thanks for your sharing!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'" style="color:white">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'" style="color:white">Uploading...</p>
  </form>
</template>

<script>
  import Vue from 'vue'
  import VueForm from 'vueform'
  import Vuelidate from 'vuelidate'
  import {minLength, required} from 'vuelidate/lib/validators'

  Vue.use(VueForm, {
    inputClasses: {
      valid: 'form-control-success',
      invalid: 'form-control-danger'
    }
  })
  Vue.use(Vuelidate)
  export default {
    name: 'FormData',
    props: ['bookBtnTitle', 'book'],
    data () {
      return {
        messagetitle: 'Book ',
        bookname: this.book.bookname,
        author: this.book.author,
        summary: this.book.summary,
        book1 : {},
        submitStatus: null
      }
    },
    validations: {
      bookname: {
        required,
        minLength: minLength(1)
      },
      author: {
        required,
        minLength: minLength(3)
      },
      summary: {
        required,
        minLength: minLength(5)
      }
    },
    methods: {
      submit () {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
            var book = {
              bookname: this.bookname,
              author: this.author,
              summary: this.summary
            }
            this.book1 = book
            console.log('Submitting in BookForm : ' + JSON.stringify(this.book1, null, 5))
            this.$emit('book-is-created-updated', this.book1)
          }, 500)
        }
      }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .book-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
