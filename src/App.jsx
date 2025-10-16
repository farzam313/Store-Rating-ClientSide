import "./App.css";

function App() {
  return (
    <div>
      <p
        style={{
          color: "black",
          border: "2px solid red",
          textAlign: "center",
          margin: "20px",
          padding: "10px",
          fontSize: "24px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "lightblue",
        }}
      >
        Hello React...!
      </p>

      <p className="border-4 border-green-500 bg-yellow-200 text-center font-mono my-12 mx-20 p-4 text-2xl">
        Hello React with TailwindCSS...!
      </p>
    </div>
  );
}

export default App;
