import { createRoot } from 'react-dom/client'
import MainLayout from './layout/MainLayout'
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import { myStore } from './store/index.js'

createRoot(document.getElementById('root')).render(
  <>
  <Provider store={myStore}>
    <MainLayout/>

  </Provider>
  </>
)
