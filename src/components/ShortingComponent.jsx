import React from "react"
import {compose} from "redux";
import {connect} from 'react-redux';
import {SendingUrlAC} from "../Redux/AddressReducer";
import EnterDataForm from "./Forms/EnterDataForm";
import ShortenLinksComponent from "./ShortenLinksComponent";

function ShortingComponent(props) {
    return (
        <div>
            <div>
                <EnterDataForm
                    SendingUrlAC={props.SendingUrlAC}
                />
                <ShortenLinksComponent
                    links={props.links}
                />
            </div>

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        links: state.AddressShortening.links
    }
}


export default compose(connect(mapStateToProps, {SendingUrlAC}))
(ShortingComponent)