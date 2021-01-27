import React from "react"
import s from "./../App.module.css"
import logo from "./../img/logo.svg"
import BrandLogo from "./../img/icon-brand-recognition.svg"
import DetailedRecords from "./../img/icon-detailed-records.svg"
import FullyCustomizable from "./../img/icon-fully-customizable.svg"
import facebook from "./../img/facebook-square-brands.svg"
import twitter from "./../img/twitter-brands.svg"
import pinterest from "./../img/pinterest-brands.svg"
import instagram from "./../img/instagram-brands.svg"

const FooterComponent = () => {
    return (
        <div>
            <div className={s.FooterContainer}>
                <div className={s.StatisticsContainer}>
                    <div className={s.AdvancedStatistics}>
                        Advanced Statistics
                    </div>
                    <div className={s.TrackYourLinks}>
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </div>
                </div>
            </div>
            <div className={s.InfoContainer}>
                <div className={s.InfoRecognitionContainer}>
                    <img src={BrandLogo} alt={"BrandLogo"}/>
                    <div className={s.InfoTitle}>
                        Brander Recognition
                    </div>
                    Boost your brand recognition with each click. Generic links don’t
                    mean a thing. Branded links help instil confidence in your content.
                </div>
                <div className={s.InfoRecordsContainer}>
                    <img src={DetailedRecords} alt={"DetailedRecords"}/>
                    <div className={s.InfoTitle}>
                        Detailed Records
                    </div>
                    Gain insights into who is clicking your links. Knowing when and where
                    people engage with your content helps inform better decisions.
                </div>

                <div className={s.InfoCustomizableContainer}>
                    <img src={FullyCustomizable} alt={"FullyCustomizable"}/>
                    <div className={s.InfoTitle}>
                        Fully Customizable
                    </div>
                    Improve brand awareness and content discoverability through customizable
                    links, supercharging audience engagement.
                </div>
            </div>
            <div className={s.YourLinksToday}>
                <div className={s.BoostYourLinks}>
                    Boost your links today
                </div>
                <div className={s.FooterGetStarted}>
                    Get Started
                </div>
            </div>
            <div className={s.FooterMenuContainer}>
                <div className={s.FooterShortly}>
                    <img className={s.FooterShortlyLogo} src={logo} alt={"logo"}/>
                </div>
                <div className={s.FooterMenu}>
                    <div className={s.FooterFeatures}>
                        <div className={s.FooterLinksHeader}>
                            Features
                        </div>
                        <div>
                            Link Shortening
                        </div>
                        <div>
                            Branded Links
                        </div>
                        <div>
                            Analitics
                        </div>
                    </div>
                    <div className={s.FooterResources}>
                        <div className={s.FooterLinksHeader}>
                            Resources
                        </div>
                        <div>
                            Blog
                        </div>
                        <div>
                            Development
                        </div>
                        <div>
                            Support
                        </div>
                    </div>
                    <div className={s.FooterCompany}>
                        <div className={s.FooterLinksHeader}>
                            Company
                        </div>
                        <div>
                            About
                        </div>
                        <div>
                            Our team
                        </div>
                        <div>
                            Careers
                        </div>
                        Contact
                    </div>
                </div>
                <div className={s.SocialNetworks}>
                    <a href={""}>
                        <img className={s.Social} src={facebook} alt={"facebook"} />
                    </a>

                    <a href={""}>
                        <img className={s.Social} src={twitter} alt={"twitter"} />
                    </a>

                    <a href={""}>
                        <img className={s.Social} src={pinterest} alt={"pinterest"} />
                    </a>

                    <a href={""}>
                        <img className={s.Social} src={instagram} alt={"instagram"} />
                    </a>


                </div>
            </div>
        </div>
    )
}

export default FooterComponent
















