import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
  let app
  describe('when user is not logged', () => {
    beforeEach(() => {
      // luo sovellus siten, että käyttäjä ei ole kirjautuneena
      localStorage.setItem('loggeUser',null)
      app = mount(<App />)
    })

    it('only login form is rendered', () => {
      app.update()
      console.log('Any Blogs? ', app.find(Blog).length)
      expect(app.find(Blog).length).toEqual(0)
    })
  })

  describe('when user is logged', () => {
    beforeEach(() => {
      const user = {
        username: 'VB',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZCIiwiaWQiOiI1YjcwNjA4ZTI4M2ExZTJiZmMwNzdlOGMiLCJpYXQiOjE1MzQ1OTA3MDF9.atPChjHm7Y4QOdRkvzHHvb0OJYKXSBVkUzgi34dsN6k',
        name: 'Ville'
      }
      localStorage.setItem('loggeUser', JSON.stringify(user))
      app = mount(<App />)
    })

    it('all notes are rendered', () => {
      app.update()
      console.log('Any Blogs? ', app.find(Blog).length)
      expect(app.find(Blog).length).toEqual(blogService.blogs.length)
    })
  })
})
