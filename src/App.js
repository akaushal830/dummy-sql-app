import './App.css';
import { useState } from 'react';
import DataComponent from './DataComponent';

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const val = e.target.value;
    setError("")
    setQuery(val);
  }

  const querySubmitHandler = async () => {
    try {
      if (!query || query.length == 0) {
        setError("Enter query to show data");
        return;
      }
      let url;
      switch (query.toLowerCase()) {
        case ("select * from posts"): {
          url = "https://jsonplaceholder.typicode.com/posts";
          break;
        }
        default: {
          url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
          break;
        }
      }
      const response = await fetch(url);
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err);
    }
  }

  const resetHandler = () => {
    setResult(null);
    setError("");
    setQuery("");
  }

  return (
    <div className="App">
      <div className='query-card'>
        <input className="input-field" type="text" onChange={handleInputChange} value={query} placeholder='Enter SQL query' autoFocus />
        {error && <span className='error'>{error}</span>}
        <button className="btn-field" onClick={querySubmitHandler}>Get results</button>
        {result && <button className="btn-field" onClick={resetHandler}>Reset</button>}
      </div>

      {(result) && <div>
        {result && <DataComponent data={result} />}
      </div>}
    </div>
  );
}

export default App;
