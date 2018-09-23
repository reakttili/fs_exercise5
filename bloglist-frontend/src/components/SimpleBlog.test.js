import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'
import Blog from './Blog'

describe('<SimpleBlog />', () => {
  it('renders content', () => {
    const blog = {
      author: 'VB',
      likes: 5,
      title: 'title'
    }
    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    let contentDiv = blogComponent.find('.likesdiv')
    console.log(contentDiv.text())
    expect(contentDiv.text()).toContain('blog has 5 likes')
    contentDiv = blogComponent.find('.titleauthordiv')
    console.log(contentDiv.text())
    expect(contentDiv.text()).toContain('title VB')
  })
  it('clicking the button calls event handler once', () => {
    const blog = {
        author: 'VB',
        likes: 5,
        title: 'title'
      }
    const mockHandler = jest.fn()
    const blogComponent = shallow(
      <SimpleBlog
        blog={blog}
        onClick={mockHandler}
      />
    )
    const button = blogComponent.find('button')
    button.simulate('click')
    button.simulate('click')
    expect(mockHandler.mock.calls.length).toBe(2)
  })
})

