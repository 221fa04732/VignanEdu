import HeaderComponent from './Components/HeaderComponent';
import ContentComponent from './Components/ContentComponent';
import FooterComponent from './Components/FooterComponent';
import ChatBotComponent from './Components/ChatBotComponent';
import ScrollTopComponent from './Components/ScrollTopComponent';
import MobileMenuComponent from "./Components/MobileMenuComponent"
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <div>
      <RecoilRoot>
      <BrowserRouter>
        <HeaderComponent />
        <MobileMenuComponent />
        <ScrollTopComponent />
        <ChatBotComponent />
        <ContentComponent />
        <FooterComponent />  
      </BrowserRouter> 
      </RecoilRoot>
    </div>
  )
}

export default App
