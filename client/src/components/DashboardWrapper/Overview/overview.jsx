import React from "react";
import { OverviewContainer, Title, InnerOverview, InnerTitle } from './overviewStyle'

export function Overview( {
    user, userData,
} ) {

    return (
        <>
            <OverviewContainer>
                <Title>Overview</Title>
                <InnerOverview>
                    <InnerTitle>Upcoming Renewals</InnerTitle>
                </InnerOverview>
            </OverviewContainer>
        </>
    );
}