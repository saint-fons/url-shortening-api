import {ShorteningAPI} from "../API/ShorteningAPI"


const SET_URL = "SET_URL"


let initialState = {
    short_link: ""
}

const AddressReducer = (state = initialState, action) => {
    let stateCopy

    switch (action.type) {
        case SET_URL: {
            stateCopy = {...state}
            stateCopy.short_link = action.data
            return stateCopy
        }
        default:
            return state
    }
}

export const SetUrlAC = (url) =>({
    type: SET_URL, data: url
})

export const SendingUrlAC = (url) => {
    return (dispatch) => {
        ShorteningAPI.GetUrl(url)
            .then(data => {
                let url = data.data.result.short_link
                dispatch(SetUrlAC(url))
            })
    }
}

export default AddressReducer