import React from "react";
import IndexNavbar from "../Navbars/IndexNavbar";
import IndexFooter from "../Footers/IndexFooter";

export default class NoMatch extends React.Component {

    render() {
        return (

            <div>

                <IndexNavbar></IndexNavbar>

                <br/>
                <div role="alert" className="fade alert alert-danger show"><h1>Page not found 404.</h1>
                </div>

                <IndexFooter></IndexFooter>
            </div>
        );
    }
}
