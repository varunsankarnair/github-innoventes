import react, { useEffect, useState } from 'react';
import Header from './headerComponent/headerComponent';
import axios from 'axios';

const Planet = () => {
  const [searchdata, setSearchData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch('https://swapi.dev/api/planets/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((data) => {
        setSearchData(data.results);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  const handleSearch = (e) => {
    console.log('searchdata', searchdata);
    let searchvalue = e;
    let newArray = [];
    searchdata &&
      searchdata.map((item) => {
        if (item.name.includes(e)) {
          console.log('true');
          newArray.push(item);
        } else {
          console.log('false');
        }
      });
    setResult(newArray);
  };

  return (
    <>
      <Header />
      <div>
        <div>Search for planets </div>
        <div>
          <input
            id="search"
            type="text"
            placeholder="a"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        {/*
         * Replace the section below with the results of the search
         */}
        <section>
          <header>
            <div className="col">Name</div>
            <div className="col">Population</div>
          </header>
          {result &&
            result.map((item, index) => {
              return (
                <div>
                  <div className="col">{item.name}</div>
                  <div title={item.population} className="col">
                    {'\u{1F468}\u{1F468}\u{1F468}\u{1F468}\u{1F468}'}
                  </div>
                </div>
              );
            })}
        </section>
        <br />
        <div className="error">No planet matching search term</div>
      </div>
    </>
  );
};

export default Planet;
