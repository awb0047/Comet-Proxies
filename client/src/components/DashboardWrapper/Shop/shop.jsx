import React from "react";
import { ShopContainer, Title, InnerShop, InnerTitle } from './shopStyle'

export function Shop( {
    user, userData,
} ) {

    return (
        <>
            <ShopContainer>
                <Title>Shop</Title>
                <InnerShop>
                    <InnerTitle>Recommended Plans</InnerTitle>
                </InnerShop>
            </ShopContainer>
        </>
    );
}