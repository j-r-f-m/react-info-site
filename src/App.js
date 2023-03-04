import "./App.css";
import Header from "./Header";

function Footer() {
  return (
    <footer>
      <small>© 20xx Jonas development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
