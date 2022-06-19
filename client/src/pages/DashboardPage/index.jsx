import React from "react";
import "../../utils/styles/dashstyle.css"
import { SideBar, MainBody } from "../../components";
import { getUserDetails, getUserData, getUserPlans } from '../../utils/api'

export function DashboardPage( {
    history, 
} ) {

    const [ user, setUser] = React.useState( null );
    const [ loading, setLoading] = React.useState(true);
    const [ userData, setUserData] = React.useState( [] );
    const [ plans, setPlans] = React.useState( [] );

    React.useEffect( () => {
        getUserDetails()
        .then( ( {data} ) => {
            //console.log(data);
            setUser(data);
            return getUserData();
        }).then( ( { data } ) => {
            //console.log(data);
            setUserData( data )
            return getUserPlans();
        }).then( ( { data } ) => {
            setPlans( data )
            setLoading(false);
        }).catch( ( err ) => {
            window.location.href = '/'
            setLoading(false);
        } );
    }, [])

    return !loading && (
        <div className="main-container">
            {/* <NavBar user={ user } userData={ userData }/> */}
            <SideBar user={ user } userData={ userData } plans={ plans } />
            <MainBody user={ user } userData={ userData }/>
        </div>
    );
}