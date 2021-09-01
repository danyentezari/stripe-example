import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PaymentScreen from './PaymentScreen';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={PaymentScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;