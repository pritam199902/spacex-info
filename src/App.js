import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { BrowserRouter, Route } from "react-router-dom"
// import 
import Launchs from "./component/Launchs"
import Launch from "./component/Launch"


const client = new ApolloClient({
  uri: "https://secure-garden-37945.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client} >
      <BrowserRouter >
        <div className="row m-0">
          <div className="col">
            <h2 className="text-center">SpaceX</h2>
          </div>
        </div>

        <Route exact path="/" >
          <Launchs />
        </Route>

        <Route exact path="/launch/:flight_number" >
          <Launch />
        </Route>

      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
