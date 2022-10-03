import "./styles.css";
import CardList from "./components/CardList";

export default function App() {
  return (
    <div className="App">
      <header>
        <img height="80px" src="logo.jpeg" alt="logo" className="logo" />
      </header>
      <CardList />
    </div>
  );
}
