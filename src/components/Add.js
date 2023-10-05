import React from "react";
import { useState } from "react";
import { addDoc } from "firebase/firestore";

export default function Add({ padaCollectionRef , showalert }) {
  const [newsongtitle, setNewsongtitle] = useState("");
  const [newsongdesc, setNewsongdesc] = useState("");

  const save_pada = async () => {
    if (newsongtitle !== "" && newsongdesc !== "") {
      await addDoc(padaCollectionRef, {
        title: newsongtitle,
        description: newsongdesc,
      });
      showalert("SUCCESS","success")
      setNewsongdesc("");
      setNewsongtitle("");
    } else {
      showalert("Please Add Required Fields","warning")
    }
  };

  const clear = () => {
    setNewsongdesc("");
    setNewsongtitle("");
  };
  return (
    <div className="container-fluid my-3">
      <div className="row flex-md-nowrap">
        <div className="col-12 col-sm-3 col-md-2 mx-1 bd-sidebar"></div>

        <div
          className="col-7 bd-sidebar mx-3 bg-light border border-primary-subtle"
          style={{ height: "480px" }}
        >
          <h5 className="my-2 text-center">ADD NEW PADA</h5>

          <div className="mb-3 text-center">
            <label htmlFor="yu" className="form-label">
              Title :{" "}
            </label>
            <input
              type="email"
              onChange={(event) => setNewsongtitle(event.target.value)}
              value={newsongtitle}
              className="form-control  border-primary-subtle"
              id="yu"
            />
          </div>
          <div className="mb-3 text-center">
            <label htmlFor="ty" className="form-label">
              Lyrics :{" "}
            </label>
            <textarea
              className="form-control overflow-y-scroll  border-primary-subtle"
              onChange={(event) => setNewsongdesc(event.target.value)}
              value={newsongdesc}
              id="ty"
              rows="8"
            ></textarea>
            <button
              className=" my-3 mx-3 btn btn-warning btn-sm text-center"
              onClick={() => clear()}
            >
              RESET
            </button>

            <button
              className=" my-3 mx-3 btn btn-success btn-sm text-center"
              onClick={() => save_pada()}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
