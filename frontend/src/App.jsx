import HeaderComponent from './Components/HeaderComponent';
import ContentComponent from './Components/ContentComponent';
import FooterComponent from './Components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <div>
      <RecoilRoot>
      <BrowserRouter>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />  
      </BrowserRouter> 
      </RecoilRoot>
    </div>
  )
}

export default App
