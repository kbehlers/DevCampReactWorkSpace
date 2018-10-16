import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Rules from './rules';
import Discussion from './discussion';
import Workflow from './workflow';

export default function () {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Discussion}/>
                <Route exact path="/rules" component={Rules}/>
                <Route exact path="/workflow" component={Workflow} />
            </Switch>
        </div>
    )
}