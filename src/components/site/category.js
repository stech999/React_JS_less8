import React from "react";
import '../../style/style.css';
import { Link } from "react-router-dom";

export const Category = () => {
    return (
        <>
            <div className="category">
                <div className="category__items-1">
                    <Link to="/catalog">
                        <div className="for__men">
                            <div className="category__img">
                                <img src="/img/rectangle_19_1130.png" alt="/" />
                            </div>
                            <div className="category__text">
                                <div className="category__text__center">
                                    HOT DEAL <span className="text__for__men">FOR MEN</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="category__items-2">
                    <Link to="/catalog">
                        <div className="for__women">
                            <div className="category__img">
                                <img src="/img/rectangle_19_copy_1136.png" alt="/" />
                            </div>
                            <div className="category__text">
                                <div className="category__text__center">
                                    30% offer <span className="text__for__men">women</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="category__items-3">
                    <Link to="/catalog">
                        <div className="for__kids">
                            <div className="category__img">
                                <img src="/img/rectangle_19_copy_2_1137.png" alt="/" />
                            </div>
                            <div className="category__text">
                                <div className="category__text__center">
                                    new arrivals <span className="text__for__men">FOR kids</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="category__items-4">
                    <Link to="/catalog">
                        <div className="for__accesories">
                            <div className="category__img">
                                <img src="/img/rectangle_19_copy_3_1144.png" alt="/" />
                            </div>
                            <div className="category__text">
                                <div className="category__text__center">
                                    LUXIROUS & trendy <span className="text__for__men">ACCESORIES</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}