import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";
import Marquee from "./components/Marquee.js";
import Sass from "./components/Sass.js";

function App() {
  return (
    <div id="body" class="overflow-hidden">
      <Navbar />
      <div className="mb-5"></div>
      <Marquee />
      <div className="mb-5"></div>
      <div className="flex flex-row items-center mx-auto justify-center p-8">
        <h1
          id="label"
          class=" text-sky-300 h-1/2 origin-center -rotate-90 relative  -left-8 text-4xl z-50 drop-shadow-2xl hover:animate-pulse "
        >
          FORM
        </h1>
        <div className="relative right-16 z-40">
          <Form />
        </div>
      </div>

      <div className="mb-5"></div>
      <Sass />
      <div className="mb-5"></div>
      <Footer />
    </div>
  );
}

export default App;
