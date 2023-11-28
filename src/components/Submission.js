import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { APIHOST } from "../env";


function Submission({ data, submission, onHide }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [authState, setAuthState] = useContext(AuthContext);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      // Here, you can implement your logic for file submission, such as sending it to a server.

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("userid", authState.userData.id);
      formData.append("assid", data.id);

      try {
        const res = await axios.post(APIHOST + "/api/submissions", formData, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        })
        console.log(res)
        window.alert("File Submitted Successfully");

      // Reset the selected file after submission if needed.
      setSelectedFile(null);
      } catch (error) {
        window.alert(error);
      }
    } else {
      window.alert("File Not Submitted");
    }
  };

  const handleClick = () => {
    handleSubmit();
    onHide();
  };

  return (
    <div>
      {submission && (
        <div>
          <h1>{data.description}</h1>
          <h2>File Submission</h2>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <label align="center">
              Select File:
              <input type="file" onChange={handleFileChange} />
            </label>
            <br />
            <br />
            <button
              className="btn-edit"
              align="center"
              type="submit"
              onClick={handleClick}
            >
              Submit
            </button>
            <br/><br/><br/><br/>
            <button
              className="btn-edit"
              align="center"
              onClick={() => onHide(null)}
            >
              Back
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Submission;
