import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Spendings from "./pages/Spendings/Spendings";
import Incomes from "./pages/Incomes/Incomes";
import Investments from "./pages/Investments/Investments";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";

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
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Router;
