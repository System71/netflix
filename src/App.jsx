import "./App.css";
import netflixdata from "./assets/netflix-data.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        {netflixdata.map((elt, index) => {
          return <Section key={index} title={elt.category} imgs={elt.images} />;
        })}
      </div>
    </>
  );
}

export default App;
