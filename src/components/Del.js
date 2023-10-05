import { useState,useEffect } from "react";
import { doc,deleteDoc,getDocs } from "firebase/firestore";

export default function Del({ padaCollectionRef,db,showalert }) {
  const [show, setShow] = useState(false);
  const [mypass, setMypass] = useState();
  const [songs, setSongs] = useState([]);

  const handleSubmit = () => {
    if (mypass === "ashu") {
      showalert("success", "success");
      setShow(true);
    } else {
      showalert("Wrong password", "warning");
      setShow(false);
    }
  };


  useEffect(() => {
    populate_data_from_firebase();
  }, []);

  const populate_data_from_firebase = async () => {
    const data = await getDocs(padaCollectionRef);
    setSongs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  const delete_song = async (id)=>{
    const padaDoc = doc(db,"padas",id);
    await deleteDoc(padaDoc);
    populate_data_from_firebase();
  }

  return (
    <div className="container-fluid text-center my-5">
      {!show && (
        <div>
          <input
          type="password"
            className="form-control border-primary-subtle text-center"
            placeholder="Enter password"
            onChange={(e) => setMypass(e.target.value)}
          />
          <button
            className="btn btn-sm btn-success my-3"
            onClick={() => handleSubmit()}
          >
            Go
          </button>
        </div>
      )}
      {show && (
        <div>
          {songs &&
            songs.map((element) => {
              return (
                <ul className="list-group text-center my-2" key={element.id}>
                  <div className="row">
                    <div className="col">
                      <li className="bg-light border my-2"><h5>{element.title}</h5></li>
                    </div>
                    <div className="col-4 text-start">
                      <button
                        className="btn btn-sm btn-danger border mx-1 my-2"
                        onClick={() => {
                          delete_song(element.id);
                        }}
                      >DEL</button>
                    </div>
                  </div>
                </ul>
              );
            })}
        </div>
      )}
    </div>
  );
}
