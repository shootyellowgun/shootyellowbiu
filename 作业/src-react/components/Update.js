import React from 'react';
import './state.css'
import { Input } from 'antd';
import { Button } from 'antd';
import './update.css'
const { TextArea } = Input;
class update extends React.Component {
  constructor() {
    super()
    this.state = {
      num: '',
      title: '',
      loading: false,
      iconLoading: false,
    }
  }
  componentDidMount() {
    this.setState({
      num: this.props.match.params.id
    })
    this.$axios('http://127.0.0.1:3001/mylist').then(res => {
      var obj = res.data.find(item => {
        return item.id == this.state.num
      })
      this.setState({
        title: obj.title
      })
    })
  }
  change(e) {
    this.setState({
      title: e.target.value
    })
  }
  enterLoading = () => {
    this.fn();
  };
  fn() {
    this.$axios.put('http://127.0.0.1:3001/mylist/' + this.state.num, {
      title: this.state.title
    }).then(res => {
      if (res.status == '200') {
        this.props.history.push('/list')
      } else {

        this.props.go(0)
      }
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
      <div className="update">
        请输入内容：<Input placeholder="请输入内容" value={this.state.title} onChange={(e) => { this.change(e) }} />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          提交
        </Button>
      </div>
    )
  }
}

export default update;
