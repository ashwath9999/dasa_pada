import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";

function List({ padaCollectionRef,songs,setsongs }) {

  const [s_pada, sets_pada] = useState([]);
  const [search_pada, setSearch_pada] = useState('');

  const selected_pada = (s) => {
    var index = songs.findIndex((songs) => songs.id === s);
    sets_pada(songs[index]);
  };

  useEffect(() => {
    populate_data_from_firebase();
  }, []);

  const populate_data_from_firebase = async () => {
    const data = await getDocs(padaCollectionRef);
    setsongs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const search_padas = (s)=>{
    if(s!==''){
     // console.log('in function  '+ s);
     setsongs(songs.filter(e=>e.title.toLowerCase().startsWith(s)));
    }else{
      populate_data_from_firebase();
    //  console.log('nothing to search');
    }
  }

  return (
    <div className="container-fluid my-3">
      <div className="row flex-md-nowrap">
        <div className="col-12 col-sm-3 col-md-4 mx-1 bd-sidebar">
            <input
              className="form-control me-2 mx-1"
              placeholder="Search by name"
              onChange={(e)=>search_padas(e.target.value)}
            />

          <div
            className="container bg-light my-2 mx-1 overflow-y-scroll border border-dark-subtle"
            style={{ height: "420px" }}
          >
            <nav className="nav flex-column">
              {songs &&
                songs.map((element) => {
                  return (
                    <div
                      className="list-group text-center my-2"
                      key={element.id}
                    >
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          selected_pada(element.id);
                        }}
                      >
                        {element.title}
                      </button>
                    </div>
                  );
                })}
            </nav>
          </div>
        </div>
        <div
          className="col mx-3 bg-light overflow-y-scroll border border-primary-subtle"
          style={{ height: "480px" }}
        >
          <div className="card-body text-center ">
            <h2 className="card-title my-5">{s_pada.title}</h2>
            <p className="card-text my-5">{s_pada.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default List;
