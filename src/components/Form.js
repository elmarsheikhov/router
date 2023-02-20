import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [file, setFile] = useState("");
  console.log(name, surname, file);
  // const add = (data) => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json)
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  // add({
  //   name,
  //   surname,
  //   file,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ADD");
    const data = {
      name,
      file,
      surname,
    };
    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("file", file);
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control bg-primary mt-2 w-25">
          <labe className="text-white">Name</labe>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="mt-1 text-white">Surname</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSurname(e.target.value)}
          />
          <label className="mt-1 text-white">File</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files)}
          />
          <button
            className="btn btn-warning mt-2 w-100"
            type="submit"
            // onClick={add}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
