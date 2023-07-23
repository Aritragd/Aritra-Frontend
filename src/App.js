import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /><div className="white-padding-bottom"></div></section>
      <section id="about"><About /><div className="white-padding-bottom"></div></section>
      <section id="blogs"><Blogs /><div className="white-padding-bottom"></div></section>
      <section id="projects"><Projects /><div className="white-padding-bottom"></div></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;