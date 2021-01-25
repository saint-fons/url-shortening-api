import React from "react"
import {compose} from "redux";
import {connect} from 'react-redux';
import {SendingUrlAC} from "../Redux/AddressReducer";
import EnterDataForm from "./Forms/EnterDataForm";

function ShortingComponent(props) {
    return (
        <div>
            <div>
                <EnterDataForm
                    SendingUrlAC={props.SendingUrlAC}
                />
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        short_link: state.AddressShortening.short_link
    }
}


export default compose(connect(mapStateToProps, {SendingUrlAC}))
(ShortingComponent)