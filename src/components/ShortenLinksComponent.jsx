import React from "react"
import s from "../App.module.css"

const ShortenLinksComponent = (props) => {
    return (<div className={s.ShortenLinksContainer}>
            <div>
                Your link: {props.links.original_link}
            </div>

            <div>
                Shorten Link: {props.links.short_link}
            </div>
        </div>
    )
}

export default ShortenLinksComponent