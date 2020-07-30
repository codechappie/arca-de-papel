import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {auth} from '../firebase'


//componentes
import Streamming from './Streamming';
import Login from './Login';
import Registro from './Registro';
import NotFound from '../components/NotFound';
import Perfil from './Perfil';
import Home from './Home'
import Ajustes from './Ajustes';
import Curso from './Curso';
import Loading from '../components/Loading';



function App() {
  const [firebaseUser,setFirebaseUser] = React.useState(false);
  React.useEffect(()=>{
    auth.onAuthStateChanged(user=>{
     if(user){
       setFirebaseUser(user)
     }else{
       setFirebaseUser(null)
     }
    })
  },[])
  return firebaseUser!==false ? (
     
      <BrowserRouter>     
        <Switch>        
          <Route path="/streamming" exact component={Streamming} />
          <Route path="/ajustes" exact component={Ajustes}/>
          <Route path="/curso" exact component={Curso}/>
          <Route path="/registro" exact component={Registro}/>             
          <Route path="/perfil" exact component={Perfil}/>            
          <Route path="/home"  component={Home}/>
          <Route path="/" exact component={Login}/>
          
          <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  ):<Loading/>;
}


export default App;
