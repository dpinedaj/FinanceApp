import React from 'react';
import {Switch, Route } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import SpendingsFullTable from "../../src/components/Spendings/SpendingsFullTable";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={NavBar} />
            <Route path="/register" component={SpendingsFullTable} />
        </Switch>
    );
}