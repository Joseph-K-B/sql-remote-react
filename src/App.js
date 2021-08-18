import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import ChordDetail from './chordDetail.js'
import ChordList from './chordList.js';
import Create from './create.js';


class App extends Component {
  state = {};
  render() {
    return (
       <>Hello world
         <BrowserRouter>
           <Header />
           <Switch>
            <Route exact path='/' component = {ChordList}></Route>
             <Route path='/chord/:id' component = {ChordDetail}></Route>
             <Route path='/create' component = {Create}></Route>
           </Switch>
         </BrowserRouter>
       </>
    );
  }
}
export default App;
