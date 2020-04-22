import React from 'react';
import './state.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './list.css'
import { Pagination } from 'antd';
class list extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            all: '',
            page: 1,
            myarr: []
        }
    }
    componentDidMount() {
        this.$axios.get('http://127.0.0.1:3001/mylist').then(res => {
            this.setState({
                arr: res.data,
                all: res.data.length,
            })
            console.log(this.state.arr)
            this.fn(1)
            console.log(this.state.myarr)

        })
    }
    fn(page) {
        var a = this.state.arr
        var x = a.filter((item, index) => {
            return index >= page*10-10 && index < page*10
        })
        this.setState({
            myarr: x
        })
    }
    del(i) {
        this.$axios.delete('http://127.0.0.1:3001/mylist/' + i).then(res => {
            if (res.status == '200') {
                this.props.history.go(0)
            }
        })
    }
    change(page) {
        this.fn(page)
        this.setState({
            page: page
        })
    }
    render() {
        return (
            <div className="list">
                <ul>
                    {
                        this.state.myarr.map(item => {
                            return (
                                <li key={item.id}>
                                    <div>
                                        <Link to={"/details/" + item.id}>
                                            {item.title}
                                        </Link>
                                    </div>
                                    <Button type="primary" className="one">
                                        <Link to={"/update/" + item.id}>修改</Link>
                                    </Button>
                                    <Button type="primary" danger className="two" onClick={() => { this.del(item.id) }}>删除</Button>
                                </li>
                            )
                        })
                    }
                </ul>
                <Pagination defaultCurrent={1} current={this.state.page} total={this.state.all} onChange={(page) => { this.change(page) }} />
            </div>
        )
    }
}

export default list;
