import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Input from './components/Input'
import Sidebar from './components/Sidebar'
import Mode from "./DarkMode/Mode"
import ThemeProvider from './components/ThemeContext';

function App() {

  return (
    <>
    <ThemeProvider>
      <Mode />
      <Input />
      <Sidebar />
    </ThemeProvider>
    </>
  )
}

export default App
