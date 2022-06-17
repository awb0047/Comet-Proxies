import React from "react";

export function DashboardComponent( {
    user, userData,
} ) {
    console.log(userData);
    console.log(user);
    return (
        <div>
            <h1>Hello {user.discordTag}</h1>
            <h1>Discord ID: {user.discordId}</h1>
        </div>
    );
}