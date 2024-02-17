// import logo from './logo.svg';
// import './App.css';
import './index.css';

function DataComponent(props) {
  const { data } = props;

  let docWidth = document.documentElement.clientWidth;

  return (
    <div className="table-container">
      {
        data.map((item, i) => {
          let keys = Object.keys(item);
          let width = (docWidth - 40) / keys.length;
          return <div key={i} className='row-container'>
            {keys.map((key, j) => {
              return <span style={{ width: `${width}px`, minHeight: "20px" }} className='border' key={j}>{item[key]}</span>
            })}
          </div>
        })
      }
    </div>
  );
}

export default DataComponent;
