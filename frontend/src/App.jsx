import HeaderComponent from './Components/HeaderComponent';
import ContentComponent from './Components/ContentComponent';
import FooterComponent from './Components/FooterComponent';
import ChatBotComponent from './Components/ChatBotComponent';
import ScrollTopComponent from './Components/ScrollTopComponent';
import MobileMenuComponent from "./Components/MobileMenuComponent"
import LoginPageComponent from './Components/LoginPageComponent';
import SignupPageComponent from './Components/SignupPageComponent';
import ProfileDropdownComponent from './Components/ProfileDropdownComponent';
import NotificationDropdownComponent from './Components/NotificationDropdownComponent';
import ChatbotDropComponent from './Components/ChatbotDropComponent';
import HireFacultyPage from './Components/HireFacultyPage';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';



function App() {

  return (
    <div>
      <RecoilRoot>
      <BrowserRouter>
        <LoginPageComponent />
        <SignupPageComponent />
        <HireFacultyPage />
        <HeaderComponent />
        < ChatbotDropComponent />
        <NotificationDropdownComponent />
        <ProfileDropdownComponent />
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
