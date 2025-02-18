import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router";




function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();


    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        GET.post("{{hospitaltoken}}", {
            login: login,
            password: password,

            header,
        })
        .then(() => {
            history("/read");
          });
    };
    return (
        <>
        <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>

      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
    )
}

export default Create