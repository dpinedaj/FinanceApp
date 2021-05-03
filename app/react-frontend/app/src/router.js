import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./modules/Layout/Layout";
import Spendings from "./pages/Spendings";
import Incomes from "./pages/Incomes";
import Investments from "./pages/Investments";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import Results from "./pages/Results";

function Router() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/spendings" component={Spendings}/>
                        <Route path="/incomes" component={Incomes}/>
                        <Route path="/investments" component={Investments}/>
                        <Route path="/results" component={Results}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Router;
