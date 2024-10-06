import React from "react";
import '../../style/style.css';

export const Subscribe = () => {
    return (
        <>
            <div className="subscribe">
                <div className="subscribe__img">
                    <img src="/img/rectangle_9_copy_2196.png" alt="/" />
                </div>
                <div className="subscribe__left">
                    <div className="subscribe__left__icon">
                        <img src="/img/ellipse_3_2206.png" alt="/" />
                    </div>
                    <div className="subscribe__left_text">
                        <p className="subscribe__text_Vestibulum">
                            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        </p>
                        <p className="bin__burha">
                            Bin Burhan
                        </p>
                        <p className="Dhaka">
                            Dhaka, Bd
                        </p>
                        <div className="rectangle__group">
                            <p className="rectangle__22"></p>
                            <p className="rectangle__23"></p>
                            <p className="rectangle__22"></p>
                        </div>
                    </div>
                </div>
                <div className="subscribe__right">
                    <div className="subscribe__right__text">
                        <p className="subscribe__right__sub">
                            Subscribe
                        </p>
                        <p className="sub__right__for__our">
                            FOR OUR NEWLETTER AND PROMOTION
                        </p>
                        <div>
                            <form action="/" className="sub__email">
                                <input type="text" className="sub__email_inp" placeholder="Enter Your Email" />
                                    <button className="sub__email_but">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}