import React from 'react';
import MissionKey from "./MissionKey"
import { gql, useQuery } from '@apollo/client'
import { SyncLoader } from "react-spinners"
import { Link } from "react-router-dom"

// import Moment from "react-moment";

const GET_LAUNCHS = gql`
  query GetLaunchs {
    launchs{
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
      }
  }
`;



const Launchs = () => {

    const { loading, error, data, refetch } = useQuery(GET_LAUNCHS)

    return (
        <div>
            <h5 className="text-center">Launchs</h5>


            {/* {console.log(data)} */}
            {
                loading &&
                <div className="row m-0 mt-5">
                    <div className="col m-auto text-center">
                        <SyncLoader className="text-center m-0 " color={"#faf"} />
                    </div>
                </div>
            }
            {
                error &&
                <div className="row m-0">
                    <div className="col-lg-7 col-md-8 col-sm-10 m-auto text-center mt-2">
                        <h6 className="text-warning"> Error while loading data!
                            <button className="btn btn-danger py-1 ml-3" onClick={() => { refetch() }}>Reload</button>
                        </h6>
                    </div>
                </div>
            }

            {
                data &&
                <MissionKey />
            }
            {
                data &&
                (data.launchs.map((dt, i) => {
                    return (
                        <div key={i} className="row m-0 mt-2">
                            <div className="col-lg-7 col-md-8 col-sm-10 m-auto">
                                <div className="card">
                                    <div className="card-body px-4 py-2">
                                        <div>
                                            <h5>Mission : <span className={dt.launch_success ? "text-success" : "text-danger"} > {dt.mission_name} </span></h5>
                                            <p className="mb-0" >Date : {dt.launch_date_local}
                                                <Link to={`/launch/${dt.flight_number}`} className="btn btn-secondary float-right py-0 m-auto" >info</Link>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }))

            }
        </div >
    )
}


export default Launchs