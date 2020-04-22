import React from 'react';
import './state.css'
import { Input } from 'antd'
import { Button } from 'antd'
import './add.css'

class add extends React.Component {
  constructor() {
    super()
    this.state = {
      num: '',
      title: ''
    }
  }
  enterLoading = () => {
    this.fn();
  };
  fn() {
    this.$axios.post('http://127.0.0.1:3001/mylist', {
      title: this.state.title
    }).then(res => {
      if (res.status == '201') {
        this.props.history.push('/list')
      }
    })
  }
  change(e) {
    this.setState({
      title: e.target.value
    })
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
    setTimeout(() => {
      this.setState({ iconLoading: false });
    }, 1000);
  };
  render() {
    return (
      <div className="add">
        请输入内容：<Input placeholder="请输入内容" value={this.state.title} onChange={(e) => { this.change(e) }} />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          提交
        </Button>
      </div>
    )
  }
}

export default add;
