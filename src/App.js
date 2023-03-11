import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [news, setNews]=useState([]);
  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=81d6be0bd8d84dce8a9e111136a14eb7")
    .then((res)=>{
      console.log(res.data.articles);
      setNews(res.data.articles);
    })

  },[])


  return (
    <>
      <div className="container">
        <div className="row text-center">
          {
            news.map((val)=>{
              return (
                <div className="col my-3">
                  <div className="card" style={{width: "18rem"}}>
                  <img src={val.urlToImage} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">{val.description}</p>
                    <a href={val.url} class="btn btn-primary">Read More</a>
                  </div>
                  </div>

                </div>
              )
            })
          }

        </div>
      </div>
     
    </>
  );
}

export default App;
