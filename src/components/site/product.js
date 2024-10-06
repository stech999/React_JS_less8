import React from "react";
import { TopMenu } from "./topMenu";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

function ProductPage() {
    return (
        <>
            <TopMenu />
            <div className="box-content">
                <div class="banner">
                    <img src="/img/layer_42_2490.png" alt="" />
                </div>
                <div class="product__desription">
                    <div class="product__desc__content">
                        <div class="collection">
                            WOMEN COLLECTION
                        </div>
                        <div class="product__rectangle">
                        </div>
                        <div class="moschino">
                            Moschino Cheap And Chic
                        </div>
                        <div class="product_text">
                            Compellingly actualize fully researched processes before proactive outsourcing. Progressively
                            syndicate
                            collaborative
                            architectures before cutting-edge services. Completely visualize parallel core competencies rather
                            than
                            exceptional
                            portals.
                        </div>
                        <div class="material">
                            <p className="material_color">MATERIAL: <span >COTTON</span></p>
                            <p className="material_color">DESIGNER: <span >BINBURHAN</span></p>
                        </div>
                        <div class="product__price">
                            $561
                        </div>
                        <div class="product__price__line"></div>
                        <div class="choose">
                            <p>CHOOSE COLOR</p>
                            <p>CHOOSE SIZE</p>
                            <p>QUANTITY</p>
                        </div>
                        <div class="choose__choise">
                            <details>
                                <summary>
                                    Choose color
                                </summary>
                                <div class="choose__cl">
                                    <div class="choose__color">
                                        <p class="choose__red"></p>
                                        <p class="">Red</p>
                                    </div>
                                    <div class="choose__color">
                                        <p class="choose__blue"></p>
                                        <p class="">Blue</p>
                                    </div>
                                    <div class="choose__color">
                                        <p class="choose__purple"></p>
                                        <p class="">Purple</p>
                                    </div>
                                </div>
                            </details>
                            <details>
                                <summary>Размеры</summary>
                                <div class="choose__size">
                                    <div class="choose__lett">
                                        <p>XL</p>
                                        <p>L</p>
                                        <p>M</p>
                                    </div>
                                    <div class="choose__s">
                                        <p>50-52</p>
                                        <p>48-50</p>
                                        <p>46-48</p>
                                    </div>
                                </div>
                            </details>
                            <span class="choose__choise__count">2</span>
                        </div>

                        <Link to="/">
                            <div class="product__cart">
                                <img src="./img/forma_1_copy_2587.png" alt="" />
                                Add to Cart
                            </div>
                        </Link>
                    </div>

                </div>
                <div class="content__title">
                    you may like also
                </div>
                <div class="content__bot">
                    <Link to="/">
                        <div class="product2">
                            <div class="product__img2">
                                <img src="./img/layer_44_2781.png" alt="" />
                            </div>
                            <div class="product__text">
                                <div class="description">
                                    BLAZE LEGGINGS
                                </div>
                                <div class="price">
                                    $52.00
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div class="product2">
                            <div class="product__img2">
                                <img src="./img/layer_45_2782.png" alt="" />
                            </div>
                            <div class="product__text">
                                <div class="description">
                                    ALEXA SWEATER
                                </div>
                                <div class="price">
                                    $52.00
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div class="product2">
                            <div class="product__img2">
                                <img src="./img/layer_46_2783.png" alt="" />
                            </div>
                            <div class="product__text">
                                <div class="description">
                                    AGNES TOP
                                </div>
                                <div class="price">
                                    $52.00
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div class="product2">
                            <div class="product__img2">
                                <img src="./img/rectangle_5_copy_2772.png" alt="" />
                            </div>
                            <div class="product__text">
                                <div class="description">
                                    SYLVA SWEATER
                                </div>
                                <div class="price">
                                    $52.00
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductPage;