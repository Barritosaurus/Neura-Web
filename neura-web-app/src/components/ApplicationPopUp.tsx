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
		console.log("First name:", firstName);
		console.log("Last name:", lastName);
		console.log("Email:", email);
		console.log("Phone number:", phoneNumber);
		console.log("Address:", address);
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

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };
	
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");

	const handleFirstNameChange = (inputValue: string) => {
    setFirstName(inputValue);
  };

	const handleLastNameChange = (inputValue: string) => {
    setLastName(inputValue);
  };

	const handleEmaiChange = (inputValue: string) => {
    setEmail(inputValue);
  };

	const handlePhoneNumber = (inputValue: string) => {
    setPhoneNumber(inputValue);
  };

	const handleAddress = (inputValue: string) => {
    setAddress(inputValue);
  };


  return (
  	<div className="bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-4">
    	<button onClick={handleButtonClick}>Apply</button>
      {showPopup && (
      	<div className="popup-overlay">
          <div className="popup-content">					
						<div className="grid-container">
              <p className="display-text" style={{fontSize: '3vh'}}>
								Application information
									<p style={{fontSize: '2vh'}}>
										First name
											<div className="input-field"><InputField maskType={0b1110} onInputChange={handleFirstNameChange}/></div>
									</p>
									<p style={{fontSize: '2vh'}}>
										Last name
											<div className="input-field"><InputField maskType={0b1110} onInputChange={handleLastNameChange}/></div>
									</p> 
									<p style={{fontSize: '2vh'}}>
										Email
											<div className="input-field"><InputField maskType={0b1111} onInputChange={handleEmaiChange}/></div>
									</p> 
									<p style={{fontSize: '2vh'}}>
										Phone number
											<div className="input-field"><InputField maskType={0b0111} onInputChange={handlePhoneNumber}/></div>
									</p> 
									<p style={{fontSize: '2vh'}}>
										Address(optional)
											<div className="input-field"><InputField maskType={0b1111} onInputChange={handleAddress}/></div>
											<br></br>
									</p> 
								</p>
              </div>
						<div className="grid-container">
              <h1 className="link-text" style={{fontSize: '2vh'}}>
                Resume*
              </h1> 
							<input type="file" name="file" onChange={changeHandler} />
							<div>
								<br></br>
									<button
										style={{
										borderRadius: "25px",
										padding: "1vw 1.5vh",
										border: "none",
										cursor: "pointer",
										background: "green",
										color: "white",
										}}
										onClick={handleSubmission}>Submit
									</button>
							</div>
						</div>
					<button
						style={{
						float: "right",
						borderRadius: "25px",
						padding: "1vw 2vh",
						border: "none",
						cursor: "pointer",
						background: "red",
						color: "white",
						}} 
						onClick={handlePopupClose}>
						Close
					</button>
				</div>
			</div>
			)}
		</div>
  );
};



export default MyComponent;

