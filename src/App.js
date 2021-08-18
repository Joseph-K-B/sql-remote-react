import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import ChordDetail from './chordDetail.js'
import ChordList from './chordList.js';
import Create from './create.js'

// const authentication = authenticationQuery();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));
// app.use('/authentification', authenticationQuery);

// const Routes = createRoutes();

// app.use('api', checkAuthentication);
// app.use(guaranteeAuthentification);



class App extends Component {
  state = {};
  render() {
    return (
      <>
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
