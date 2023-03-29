import React, { Component } from "react";
import { Link } from "react-router-dom";
import shadow from "../components/Shadow";
import HoverButton from "../components/HoverButton";
import AboutUs from "./AboutUs";

//const ShadowHoverButton = shadow(HoverButton);

/*function ShadedButton() {

    const addChangeListener = () => {
        console.log("add change listener!")
    }
    const removeChangeListener = () => {
        console.log("remove change listener!")
    }

    return class extends Component {
        constructor(props: any) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(WrappedComponent, props)
            };
        }

        componentDidMount() {
            addChangeListener.bind(this.handleChange);
        }
        componentWillUnmount() {
            removeChangeListener.bind(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(WrappedComponent, this.props)
            })
        }

        render() {
            return <Component data={this.state} {...this.props} />;
        }
    }
}*/

function Landing() {
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
                        <h1 className="header-text">neura studios</h1>
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
                
                <div className="image-grid">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
