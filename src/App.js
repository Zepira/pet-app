/* src/App.js */
import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Container from '@material-ui/core/Container';

import ToDo from './Components/ToDo/ToDo';
import AddPet from './Components/AddPet/AddPet';
import Home from './Components/Home/Home';
import SideNav from './Components/SideNav/SideNav';

const App = () => {

  return (
    <div >
      <SideNav>
      <Container style={styles.container}>
      <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">To Do</Link>
            </li>
            <li>
              <Link to="/addpet">Add Pet</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/home" component={Home} /> 
          <Route path="/todo" component={ToDo} />
          <Route path="/addpet" component={AddPet} />   
          <Route path="/" component={Home} /> 
        </Switch>
      </Router>
      </Container>
      </SideNav>
      
    </div>
  )
}

const styles = {
  container: { paddingTop: '64px'},
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App)