import './App.css'
import Template from './Components/Template'
import { Provider } from 'react-redux';
import store from './redux/store'; 
function App() {

  return (
    <Provider store={store}>
      <Template/>
    </Provider>
  )
}

export default App
