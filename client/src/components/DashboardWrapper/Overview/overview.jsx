import React from "react";
import { OverviewContainer, Title, InnerOverview } from './overviewStyle'

export function Overview( {
    user, userData,
} ) {

    return (
        <>
            <OverviewContainer>
                <Title>Overview</Title>
                <InnerOverview></InnerOverview>
            </OverviewContainer>
        </>
    );
}