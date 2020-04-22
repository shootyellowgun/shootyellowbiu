import React from 'react';
import './state.css'

class Details extends React.Component {
  constructor() {
    super()
    this.state = {
      num: '',
      obj: {}
    }
  }
  componentDidMount() {
    this.setState({
      num: this.props.match.params.id
    })
    this.$axios('http://127.0.0.1:3001/mylist').then(res => {
      this.setState({
        obj: res.data.find(item => {
          return item.id == this.state.num
        })
      })
    })
  }
  render() {
    return (
      <div className="details">
        {this.state.obj.title}
      </div>
    )
  }
}

export default Details;
