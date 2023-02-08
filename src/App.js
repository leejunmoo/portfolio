import './App.css';
import Project from './components/Project';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className='wrap'>
      <Main 
        bg="Main.jpg"
        title="Hello My World"
        subTitle="안녕하세요 신입 퍼블리셔 이준무입니다. 반갑습니다👋"
      />
      <About 
        bg="About.jpg"
        title="About"
      />
      <Project 
        bg="Project.jpg"
        title="Project"
      />
      <Footer />
    </div>
  );
}

export default App;
