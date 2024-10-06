import React from "react";
import { TopMenu } from "./topMenu";
import { MainBanner } from "./TopBanner";
import { Category } from "./category";
import { GetItems } from "./GetItems";
import { AllProductButton } from "./allProductButton";
import { Delivery } from "./delivery";
import { Subscribe } from "./subscribe";
import { AllRight } from "./allRight";


export const MainPage = () => {
    return (
        <>
            <TopMenu />
            <MainBanner />
            <Category />
            <GetItems />
            <AllProductButton />
            <Delivery />
            <Subscribe />
            <AllRight />
        </>
    )
}