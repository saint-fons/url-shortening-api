import React from "react"
import s from "./../App.module.css"
import working from "./../img/illustration-working.svg"

const MenuComponent = () => {
    return (
        <div>
            <div className={s.MenuContainer}>
                <div className={s.MenuLeftContainer}>
                    <div className={s.MenuLeftButton}>
                        Features
                    </div>
                    <div className={s.MenuLeftButton}>
                        Pricing
                    </div>
                    <div className={s.MenuLeftButton}>
                        Resources
                    </div>
                </div>

                <div className={s.MenuRightContainer}>
                    <div className={s.MenuRightButton}>
                        Login
                    </div>

                    <div className={s.MenuRightButton}>
                        Sign Up
                    </div>
                </div>
            </div>


            <div className={s.ShorterContainer}>
                <div className={s.MoreThanSorter}>
                    <div className={s.ShorterSpan}>More than just shorter links</div>
                    Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                    <div className={s.GetStartedBtn}>
                        Get Started
                    </div>
                </div>
                <div className={s.MenuRightImg}>
                    <img className={s.WorkingShorterImg} src={working} alt={"working"}/>
                </div>

            </div>
        </div>
    )
}

export default MenuComponent