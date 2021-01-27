import React from "react"
import s from "./../App.module.css"
import working from "./../img/illustration-working.svg"
import logo from "./../img/logo.svg"

const MenuComponent = () => {
    return (
        <div>
            <div className={s.MenuContainer}>
                <div className={s.MenuLeftContainer}>
                    <div className={s.MenuLeftButton}>
                        <a className={s.MenuLinks} href={""}> <img src={logo} alt={"logo"} /> </a>
                    </div>
                    <div className={s.MenuLeftButton}>
                        <a className={s.MenuLinks} href={""}>Features</a>
                    </div>
                    <div className={s.MenuLeftButton}>
                        <a className={s.MenuLinks} href={""}>Pricing</a>
                    </div>
                    <div className={s.MenuLeftButton}>
                        <a className={s.MenuLinks} href={""}>Resources</a>
                    </div>
                </div>

                <div className={s.MenuRightContainer}>
                    <div className={s.MenuRightButton}>
                        <a className={s.MenuLinks} href={""}>Login</a>
                    </div>

                    <div className={s.MenuRightButton}>
                        <a className={s.MenuLinks} href={""}>Sign Up</a>
                    </div>
                </div>
            </div>


            <div className={s.ShorterContainer}>
                <div className={s.MoreThanSorter}>
                    <div className={s.ShorterSpan}>More than just shorter links</div>
                    <div className={s.BuildYourBrand}>
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </div>
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