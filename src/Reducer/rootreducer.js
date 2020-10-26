const initState = {
  posts:[
    {id: '1', title: 'hello', body: 'This is adebayo'},
    {id: '2', title: 'hello,I', body: 'This is adebayo'},
    {id: '3', title: 'hello,I', body: 'This is adebayo'},
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;