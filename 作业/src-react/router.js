import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import List from './components/List'
import Details from './components/Details'
import Add from './components/Add'
import Update from './components/Update'
import Head from './components/Head'
import State from './components/State'

class BasicRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Head></Head>
                <Switch>
                    <Route path="/list" component={List}></Route>
                    <Route path="/details/:id" component={Details}></Route>
                    <Route path="/add" component={Add}></Route>
                    <Route path="/update/:id" component={Update}></Route>
                    <Route path="/state" component={State}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default BasicRoute;
