const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000*Math.random()).toFixed(0)

const sortAnecdotes = (anecdotes) => {
  const cmp = (a,b) => {
    if (a.votes > b.votes ) {
      return -1
    }
    if (a.votes < b.votes ) {
      return 1
    }
    return 0
  }
  return anecdotes.sort(cmp)
}

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)



const reducer = (state = initialState, action) => {
  console.log('state now: ',state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const votedId = action.data
      const voted = state.find(item => item.id===votedId)
      const updated = {...voted, votes:voted.votes+1}
      state = state.map(item => item.id===updated.id ? updated : item)
      return sortAnecdotes(state)
    case 'CREATE':
      const anecdoteStr = action.data
      const newAnec = {
        content: anecdoteStr,
        id: getId(),
        votes: 0
      }
      state = [...state, newAnec]
      return state
    default:
      return state
  }
}

export default reducer
