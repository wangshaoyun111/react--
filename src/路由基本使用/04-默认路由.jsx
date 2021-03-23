import React from 'react'

// 路由使用

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class App extends React.Component {
    render() {
        return (
            // 使用Router将组件包裹住
            <Router>
                <div>
                    <h4>路由基本使用</h4>
                    {/* 路由入口 */}
                    <Link to='/cart'>跳转到购物车</Link><br />
                    <Link to='/cate'>跳转到分类</Link>

                    {/* 配置路由规则和对应的组件 */}
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/cate' component={Cate}></Route>
                    <Route exact path='/' component={Cart}></Route>
                </div>
            </Router>
        )
    }
}

function Cart(props) {
    function click() {
        props.history.push('./cate')
    }
    return (
        <div>
            <p>我是购物车</p>
            <button onClick={click}>跳转到分类</button>
        </div>
    )
}
function Cate(props) {
    function back() {
        props.history.go(-1)
    }
    return (
        <div>
            <p>我是分类</p>
            <button onClick={back}>返回上一页</button>
        </div>
    )
}