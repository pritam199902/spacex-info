import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client'
import { SyncLoader } from "react-spinners"
import { Link, useRouteMatch } from "react-router-dom"

const GET_LAUNCH = gql`
    query GetLaunch ($flight_number : Int!){
        launch(flight_number: $flight_number){
            flight_number
            mission_name
            launch_date_local
            launch_success
            rocket{
              rocket_id
              rocket_name
              rocket_type
            }
        }
    }
`;

function Launch() {
    const { params } = useRouteMatch()
    const { flight_number } = params

    const { loading, error, data, refetch } = useQuery(GET_LAUNCH, { variables: { flight_number: parseInt(flight_number) } })

    const processData = () => {
        if (loading) {
            return (
                <div className="row m-0 mt-5">
                    <div className="col m-auto text-center">
                        <SyncLoader className="text-center m-0 " color={"#faf"} />
                    </div>
                </div>
            )
        } else if (error) {
            return (
                <div className="row m-0">
                    <div className="col-lg-7 col-md-8 col-sm-10 m-auto text-center mt-2">
                        <h6 className="text-warning"> Error while loading data!
                            <button className="btn btn-danger py-1 ml-3" onClick={() => { refetch() }}>Reload</button>
                        </h6>
                    </div>
                </div>)
        }
        else if (data) {
            // console.log(data);

            const { mission_name, launch_date_local, launch_success, rocket } = data.launch
            const { rocket_id, rocket_name, rocket_type } = rocket


            return (
                <Fragment>

                    <div className="row m-0 my-3">
                        <div className="col-lg-7 col-md-8 col-sm-10 m-auto">
                            <h5>Launch Details</h5>
                            <div className="card">
                                <div className="card-body">
                                    {/* <div> */}

                                    <h5 className={"text-secondary"}>Mission : <span className={launch_success ? "text-success" : "text-danger"} > {mission_name} </span></h5>
                                    <h5 style={styles.txt} className={"text-secondary mt-4"}>Date : <span className={"text-info"} > {launch_date_local} </span></h5>

                                    <h5 style={styles.txt} className={"text-secondary"}>Status : <span className={launch_success ? "text-success" : "text-danger px-3 "} > {launch_success ? "Success" : "Fail"} </span></h5>

                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row m-0 my-3">
                        <div className="col-lg-7 col-md-8 col-sm-10 m-auto mt-">
                            <h5>Rocket Details</h5>
                            <div className="card">
                                <div className="card-body">
                                    {/* <div> */}

                                    <h5 style={styles.txt} className={"text-secondary"}>Rocket ID : <span className={"text-info"} > {rocket_id} </span></h5>
                                    <h5 style={styles.txt} className={"text-secondary"}>Rocket Name : <span className={"text-info"} > {rocket_name} </span></h5>
                                    <h5 style={styles.txt} className={"text-secondary"}>Rocket Type : <span className={"text-info"} > {rocket_type} </span></h5>

                                    {/* </div> */}
                                </div>
                            </div>

                            <Link to="/" className="btn btn-secondary mt-3">back</Link>

                        </div>
                    </div >
                </Fragment>
            )
        }
    }

    return (
        <div>
            <h5 className="text-center">Launch Information</h5>

            {/* <h4 className="text-center"> Launch details </h4> */}
            {
                processData()
            }
        </div>
    )
}


const styles = {
    txt: {
        fontSize: "20px"
    }
}


export default Launch
