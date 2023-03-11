import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            </div>
            <div className="grid-container">
                <input type="file" name="file" onChange={changeHandler} />
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Applications;
