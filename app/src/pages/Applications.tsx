import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

function Applications() {
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

    return (
        <div className="background">
            <div className="header-background-container">
                <div className="header-wrapper">
                    <header className="center-container-header">
                        <li className="link-text">
                            <Link to="/">home</Link>
                        </li>
                        <li className="link-text">
                            <Link to="/applications">applications</Link>
                        </li>
                        <h1 className="header-text">applications</h1>
                        <li className="link-text">
                            <Link to="/opportunities">opportunities</Link>
                        </li>
                        <li className="link-text">
                            <Link to="/aboutus">about us</Link>
                        </li>
                    </header>
                </div>
                
                <div className="grid-container">
                    <p className="link-text" style={{fontSize: '2rem'} }>
                        Personal information
                        <p className="link-text" style={{fontSize: '1.9rem'}}>
                            First name
                        </p>
                        <p className="link-text" style={{fontSize: '1.9rem'}}>
                            Last name
                        </p> 
                        <p className="link-text" style={{fontSize: '1.9rem'}}>
                            Email
                        </p> 
                        <p className="link-text" style={{fontSize: '1.9rem'}}>
                            Phone number
                        </p> 
                        <p className="link-text" style={{fontSize: '1.9rem'}}>
                            Address(optional)
                        </p> 
                    </p>
                </div>
            </div>
            
            <div className="grid-container">
                <h1 className="link-text" style={{fontSize: '1.5rem'}}>
                    Resume*
                </h1> 
                <input type="file" name="file" onChange={changeHandler} />
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Applications;
