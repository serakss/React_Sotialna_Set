import React, {Component} from 'react';
import './App.module.css';
import {Header} from "./components/Heder/Heder";
import {Navbar} from "./components/Navbar/Navbar";
import s from "./App.module.css"
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, RouteComponentProps, withRouter} from "react-router-dom";

import {AppStateType, StoreType} from "./redux/redux-store";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileConnect} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Heder/HederContainer";
import {Login} from './components/Login/Login';
import {DialigsContainer} from './components/Dialogs/DialigsContainer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setUsersDataThunk} from './redux/auth-reducer';
import {initialize} from './redux/app-reducer';
import { Preloader } from './components/common/Preloader/Preloader';

/*const App: React.FC<appType> = (props) => {
    return (

            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    {/!*<Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>*!/}
                    <Route path="/dialogs" render={() => <DialigsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileConnect/>}/>
                    <Route path="/users" render={() =><UsersContainer/>}/>
                    <Route path="/login" render={()=><Login/>}/>
                    {/!* <Route path="/news" />
                <Route path="/music" />
                <Route path="/settings" />*!/}
                    {/!*<Profile/>*!/}
                    {/!*<Dialogs/>*!/}

                </div>
            </div>
    );
}*/
type mapStateToPropsType = {
    initialized:boolean
}

type  mapDispatchToPropsType = {
    initialize: () => void
}
type appType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<any> & appType

class App extends Component<any> {
    componentDidMount() {

        this.props.initialize()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>

        }

        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    {/*<Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>*/}
                    <Route path="/dialogs" render={() => <DialigsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileConnect/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    {/* <Route path="/news" />
                <Route path="/music" />
                <Route path="/settings" />*/}
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}

                </div>
            </div>
        );
    }
}

const MapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initializad
})

/*export default compose(withRouter, connect(null,{setUsersDataThunk}))(App)*/
export default connect(MapStateToProps, {initialize})(App)

