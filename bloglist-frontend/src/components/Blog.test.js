import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.only('<Blog />', () => {
    it('renders content', () => {
        const blog = {
        title: 'title',
        author: 'VB',
        url: "www",
        likes: 5,
        adder: "user",
        blogid: 100
      }
      const mockHandler = jest.fn()
      const blogComponent = shallow(<Blog blog={blog} parentRender={mockHandler}/>)
      let maindiv = blogComponent.find('.maindiv')
      console.log(maindiv.text())
      expect(maindiv.text()).toBe('title VBdelete')
    })

    it('after clicking name the details are displayed', () => {
        const blog = {
            title: 'title',
            author: 'VB',
            url: "www",
            likes: 5,
            adder: "user",
            blogid: 100
          }
        const mockHandler = jest.fn()
        const blogComponent = shallow(<Blog blog={blog} parentRender={mockHandler}/>)
        let maindiv = blogComponent.find('.maindiv')
        console.log(maindiv.text())
        expect(maindiv.text()).toBe('title VBdelete')
        const nameDiv = blogComponent.find('.namediv')
        console.log(nameDiv.text())
        nameDiv.simulate('click')
        maindiv = blogComponent.find('.maindiv')
        console.log(maindiv.text())
        expect(maindiv.text()).toBe('title VBwww5 likeslikeadded by: delete')
    })
  })