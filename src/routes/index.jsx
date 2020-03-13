import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Ciencias from '../components/pages/Ciencias';
import Tecnologia from '../components/pages/Tecnologia';
import Geral from '../components/pages/Geral';
import Busca from '../components/pages/Busca';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Geral} />
        <Route exact path="/ciencias" component={Ciencias} />
        <Route exact path="/tecnologia" component={Tecnologia} />
        <Route exact path="/geral" component={Geral} />
        <Route exact path="/busca/:termo" component={Busca} />
    </Switch>
)

export default Routes;