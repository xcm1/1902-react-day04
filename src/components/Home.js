import React, { Component } from 'react';
import ProList from './ProList'
class Com extends Component {
  render() {
    return (
      <div className="box">
        <header className="header">首页头部</header>
        <div className="content">
          <ProList />
          首页内容</div>
      </div>
    )
  }
}
export default Com;