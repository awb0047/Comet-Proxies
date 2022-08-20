import React, { useState } from "react";
import "../../utils/styles/dashstyle.css"
import { SideBar, MainBody, PurchasePopUp } from "../../components";
import { getUserDetails, getUserData, getUserPlans } from '../../utils/api'

export function DashboardPage( {
    history, 
} ) {

    const [ user, setUser] = React.useState( null );
    const [ loading, setLoading] = React.useState(true);
    const [ userData, setUserData] = React.useState( [] );
    const [ plans, setPlans] = React.useState( [] );

    React.useEffect( () => {
        console.log('initting');
        getUserDetails()
        .then( ( {data} ) => {
            console.log('data found');
            setUser(data);
            return getUserData(data.proxyUser);
        }).then( ( { data } ) => {
            console.log('userData found');
            setUserData( data )
            return getUserPlans(data.user);
        }).then( ( { data } ) => {
            console.log('plans found');
            setPlans( data )
            setLoading(false);
        }).catch( ( err ) => {
            console.log(err);
            window.location.href = '/'
            setLoading(false);
        } );
    }, [])

    const [buttonPopup, setButtonPopup] = useState(false)

    return !loading && (
        <div className="main-container">
            <SideBar user={ user } userData={ userData } plans={ plans } setButtonPopup={setButtonPopup} />
            <MainBody user={ user } userData={ userData } plans={ plans }/>
            <PurchasePopUp buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} user={ user } userData={ userData } plans={ plans } />
        </div>
    );
}