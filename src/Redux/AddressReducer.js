import {ShorteningAPI} from "../API/ShorteningAPI"


const SET_URL = "SET_URL"


let initialState = {
    links: {
        code: "",
        full_share_link: "",
        full_short_link: "",
        full_short_link2: "",
        full_short_link3: "",
        original_link: "",
        share_link: "",
        short_link: "",
        short_link2: "",
        short_link3: ""
    },
    temp: ""
}

const AddressReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_URL:
            return {
            ...state,
                links: action.data
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
                let url = data.data.result
                dispatch(SetUrlAC(url))
            })
    }
}

export default AddressReducer