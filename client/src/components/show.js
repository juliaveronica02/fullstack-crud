import React, { useState, useEffect } from 'react';
import Data from '../services/index';

export default function DataList(props) {
    const [data, setData] = useState([])

    useEffect(()=> {
        Data.getAllData()
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, [])

    const showData = data.map((item, index) => (
        <div key={index} className="col pt-4 mt-5 mb-2">
          {/* <div className="col-md-4"> */}
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">{item.username}</h5>
              <p className="card-text">{item.email}</p>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        </div>
        /* </div> */
      ));
      return (
        <div style={{marginTop:"8rem", padding: 180, paddingTop: 0}}>
            <h2 className="text-center">Data List</h2>
             <div className = "row">
                <button className="btn btn-primary"> Add Data</button>
             </div>
          <div className="container">
            <div className="row">{showData}</div>
          </div>
        </div>
      );
    };