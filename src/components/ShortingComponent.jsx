import React from "react"
import {compose} from "redux";
import { connect } from 'react-redux';
import {SendingUrlAC} from "../Redux/AddressReducer";

class ShortingComponent extends React.Component {

    componentDidMount() {
        let url = "https://ru.reactjs.org/docs/getting-started.html"
        this.props.SendingUrlAC(url)
    }

    render() {
        return (
            <div>
                <div>
                    hi
                </div>
                <div>
                    {this.props.short_link}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        short_link: state.AddressShortening.short_link
    }
}


export default compose(connect(mapStateToProps, {SendingUrlAC}))
(ShortingComponent)