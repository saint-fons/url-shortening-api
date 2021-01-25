import React from "react"
import s from "./../App.module.css"

const FooterComponent = () => {
    return (
        <div>
            <div className={s.FooterContainer}>
                <div className={s.StatisticsContainer}>
                    <div className={s.AdvancedStatistics}>
                        Advanced Statistics
                    </div>
                    <div>
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </div>
                </div>
            </div>
            <div className={s.InfoContainer}>
                <div className={s.InfoRecognitionContainer}>
                    <div className={s.InfoTitle}>
                        Brander Recognition
                    </div>
                    Boost your brand recognition with each click. Generic links don’t
                    mean a thing. Branded links help instil confidence in your content.
                </div>
                <div className={s.InfoRecordsContainer}>
                    <div className={s.InfoTitle}>
                        Detailed Records
                    </div>
                    Gain insights into who is clicking your links. Knowing when and where
                    people engage with your content helps inform better decisions.
                </div>

                <div className={s.InfoCustomizableContainer}>
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

                </div>
                <div className={s.FooterMenu}>
                    <div className={s.FooterFeatures}>
                        <div>
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
                        <div>
                            Resources
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
                    </div>
                    <div className={s.FooterCompany}>
                        <div>
                            Features
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

                </div>
            </div>
        </div>
    )
}

export default FooterComponent
















