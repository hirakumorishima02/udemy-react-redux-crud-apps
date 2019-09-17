import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, hyakubai } from '../actions';

class App extends Component {
  render() {
    // stateやactionを格納するためのprops
    const props = this.props

    return (
    <div>
    {/* reducerのcount.js内にあるvalue（initialState）を表示する */}
    { props.value }
    <button onClick={props.increment}>+1</button>
    <button onClick={props.decrement}>-1</button>
    <button onClick={props.hyakubai}>100倍!</button>
    </div>)
  }
}
// mapStateToPropsはStateの情報からコンポーネントで必要な情報を取り出して、
// コンポーネント内のpropsとしてマッピングする機能を持つ
// 引数にはstateを書いて、どういったオブジェクトをpropsとして対応させるのかを定義させる
const mapStateToProps = state => ({ value: state.count.value })

// mapDispatchToPropsはあるアクションが発生した時にReducerにTypeに応じた状態遷移を実行させるための関数
// incrementのためのボタンとdecrementのためのボタンに必要なアクションをdispatch関数の引数に渡す
// const mapDispatchToProps = dispatch => ({ 
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({ increment, decrement, hyakubai })

export default connect(mapStateToProps, mapDispatchToProps)(App);
