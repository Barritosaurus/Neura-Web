import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import "../css/application-pop-up.css"

const MyComponent: React.FC = () => {

	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const [selectedFile, setSelectedFile]: [Blob, Function] = useState(new Blob());
	//const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event: any) => {
		setSelectedFile(event.target.files[0]);
		//setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		formData.append("File", selectedFile);
	};

  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setShowPopup(true);
		setModalOpen(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
		setModalOpen(false);
    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-4">
      <button onClick={handleButtonClick}>Apply</button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">					
						<div className="grid-container">
              <p className="display-text" style={{fontSize: '2rem', marginTop: '0em'}}>
								Application information
									<p style={{fontSize: '1.7rem'}}>
										First name
											<div className="input-field"><InputField maskType={0b1110}/></div>
									</p>
									<p style={{fontSize: '1.7rem'}}>
										Last name
											<div className="input-field"><InputField maskType={0b1110}/></div>
									</p> 
									<p style={{fontSize: '1.7rem'}}>
										Email
											<div className="input-field"><InputField maskType={0b1111}/></div>
									</p> 
									<p style={{fontSize: '1.7rem'}}>
										Phone number
											<div className="input-field"><InputField maskType={0b0111}/></div>
									</p> 
									<p style={{fontSize: '1.7rem'}}>
										Address(optional)
											<div className="input-field"><InputField maskType={0b1111}/></div>
											<br></br>
									</p> 
								</p>
                </div>
								<div className="grid-container">
                  <h1 className="link-text" style={{fontSize: '1.5rem'}}>
                    Resume*
                  </h1> 
                  <input type="file" name="file" onChange={changeHandler} />
                    <div>
										<br></br>
                      <button
											style={{
											borderRadius: "25px",
											padding: "15px 15px",
											border: "none",
											cursor: "pointer",
											background: "green",
											color: "white",
											}}
											onClick={handleSubmission}>Submit</button>
                    </div>
                </div>
            <button
						style={{
						float: "right",
						borderRadius: "25px",
						padding: "15px 15px",
						border: "none",
						cursor: "pointer",
						background: "red",
						color: "white",
						}} 
						onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};



export default MyComponent;

