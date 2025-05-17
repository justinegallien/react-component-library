import "./App.scss";
import Carousel from "./Carousel";
import Footer from "./footer";
import Header from "./Header";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <h1>Photo Gallery</h1>

        <Carousel />
        <Footer />
      </main>
    </>
  );
}

export default App;
