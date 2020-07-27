import React, { PureComponent } from 'react'
import store from '../store'
import { incrementAction, addAction } from '../store/actionCreators'
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ counter: store.getState().counter})
    })
  }
  
  componentWillUnmount() {
    this.unsubscribe()
  }
  
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数：{ this.state.counter } </h2>
        <button onClick={e => this.increment()} >+1</button>
        <button onClick={e => this.addNumber(5)} >+5</button>
      </div>
    )
  }
  increment() {
    store.dispatch(incrementAction())
  }
  addNumber(num) {
    store.dispatch(addAction(num))
  }
}
