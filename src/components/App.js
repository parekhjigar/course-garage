import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './landing/Home';
import Insights from './Insights';
import About from './About';
import HeaderNavContainer from './landing/HeaderNavContainer';
import PageNotFound from './common/PageNotFound';

import CourseListContainer from './course/CourseListContainer';
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer';


const App = () => {
    return (
        <div >
            <Router>
                <div>
                    <HeaderNavContainer />
                    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/courses" component={CourseListContainer} />
                        <Route exact path="/course" component={AddOrEditCourseContainer} />
                        <Route path="/course/:id" component={AddOrEditCourseContainer} />
                        <Route path="/insights" component={Insights} />
                        <Route path="/about" component={About} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;