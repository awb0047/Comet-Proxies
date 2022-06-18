import React from "react";
import "../../utils/styles/dashstyle.css"
import { SideBar, MainBody } from "../../components";
import { getUserDetails, getUserData } from '../../utils/api'

export function DashboardPage( {
    history, 
} ) {

    const [ user, setUser] = React.useState( null );
    const [ loading, setLoading] = React.useState(true);
    const [ userData, setUserData] = React.useState( [] );

    React.useEffect( () => {
        getUserDetails()
        .then( ( {data} ) => {
            //console.log(data);
            setUser(data);
            setLoading(false);
            return getUserData();
        }).then( ( { data } ) => {
            //console.log(data);
            setUserData( data )
        }).catch( ( err ) => {
            window.location.href = '/'
            setLoading(false);
        } );
    }, [])

    return !loading && (
        <div className="main-container">
            {/* <NavBar user={ user } userData={ userData }/> */}
            <SideBar user={ user } userData={ userData }/>
            <MainBody user={ user } userData={ userData }/>
        </div>
    );
}