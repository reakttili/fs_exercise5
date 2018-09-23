import React from 'react'
import blogService from './../services/blogs'
import PropTypes from 'prop-types'

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}

class Blog extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      bShowAll: false,
      title: props.blog.title,
      author: props.blog.author,
      url: props.blog.url,
      likes: props.blog.likes,
      adder: props.blog.user,
      blogid: props.blog.id
    }
    this.parentRender = props.parentRender
    this.hideDelete = false
  }

  static propTypes = {
    blog: PropTypes.object.isRequired,
    parentRender: PropTypes.func.isRequired
  }


  toggleShowAll = () => {
    this.setState({ bShowAll: !this.state.bShowAll })
  }

  handleLikeClick = async (event) => {
    const updated = await blogService.updateLikes(
      this.state.title, 
      this.state.author, 
      this.state.url, 
      this.state.adder._id,
      this.state.likes,
      this.state.blogid) 
    console.log('paivitetty', updated)
    console.log(this.state.blogid)
    console.log(this.state.adder._id)
    console.log("@handleLikeClick")
    //console.log(updated.data)
    this.setState({likes:updated.data.likes},this.parentRender)
    const allblogs = await blogService.getAll()
    console.log('allafterlikeclick',allblogs)
    this.parentRender()

    //console.log(this.parentRender())
  }

  handleDeleteClick = async (event) => {
    if (window.confirm("Delete blog?")) {
      const updated = await blogService.deleteBlog(this.state.blogid) 
      this.parentRender()
    }
  }

  showAll = () => {
    const addedby = (this.state.adder) ? this.state.adder.name : '';
    return(
      <div>
        <div className="namediv" onClick={() => this.setState({bShowAll:false})}>
          {this.state.title} {this.state.author}
        </div>
        <div>
          <a href={this.state.url}>{this.state.url}</a>
        </div>
        <div>
          {this.state.likes} likes
          <button name='like' onClick={this.handleLikeClick}>like</button>
        </div>
        <div>
          added by: {addedby}
        </div>

        
      </div>
    )
  }

  showLimited = () => {
    return(
      <div className="namediv" onClick={() => this.setState({bShowAll:true})}>
        {this.state.title} {this.state.author} 
      </div>)
  }

  render() {
    //console.log('adder here',this.state.adder.name)
    let show = this.showAll
    if (this.state.bShowAll) {
      show = this.showAll
    } else {
      show = this.showLimited
    }
    
    let showDelete = () => {return null}
    if (window.localStorage)
    {
      let loggeduser = window.localStorage.getItem('loggeUser')
      let blogadder = this.state.adder
      //console.log('logged', loggeduser)
      //console.log('blogsuser', blogadder)
      if (!blogadder) {
        showDelete = () =>{
          return <button name='delete' onClick={this.handleDeleteClick}>delete</button>
        }
      }
      else { 
        loggeduser = JSON.parse(loggeduser).username
        blogadder = blogadder.username
        //console.log('logged', loggeduser)
        //console.log('blogsuser', blogadder)
        if (loggeduser === String(blogadder)) {
          showDelete = () =>{
            return <button name='delete' onClick={this.handleDeleteClick}>delete</button>
          }
        }
      }
    }
    

    
    
    
    return (
      <div className="maindiv" style={blogStyle}> 
      {show()}
      {showDelete()}
      </div>
    )
  }
}

export default Blog