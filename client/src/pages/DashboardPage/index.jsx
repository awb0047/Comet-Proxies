import React from "react";
import { DashboardComponent } from "../../components";
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
            return getUserData();
        }).then( ( { data } ) => {
            //console.log(data);
            setUserData( data )
            setLoading(false);
        }).catch( ( err ) => {
            window.location.href = '/'
            setLoading(false);
        } );
    }, [])

    return !loading && (
        <div>
            <h1>Dashboard Page</h1>
            <DashboardComponent user={ user } userData={ userData }/>
        </div>
    );
}