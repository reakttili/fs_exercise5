import React from 'react';


class App extends React.Component {

  onSubmit(event) {
    event.preventDefault()
    const anecdote = event.target.anecdoteinput.value
    this.props.store.dispatch({type:'CREATE',data:anecdote})
  }
  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={()=>{this.props.store.dispatch({type:'VOTE',data:anecdote.id})}}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        
        <form onSubmit={this.onSubmit.bind(this)}>
          <div><input name="anecdoteinput" /></div>
          <button type="submit" >create</button> 
        </form>
      </div>
    )
  }
}

export default App