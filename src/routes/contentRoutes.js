import React from 'react'

import DiaryForm from '../components/DiaryForm';
import DiaryList from '../components/DiaryList';
import { Switch, Route } from 'react-router-dom';

export default () => (
     <Switch>
        <Route exact path="/" component={DiaryList } />
        <Route  path="/create" component={DiaryForm} />
        <Route  path="/view" component={DiaryForm} />
        <Route  path="/diaries" component={DiaryList} />
    </Switch>
)


