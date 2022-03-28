import React from 'react';
import './App.module.css';
import {Header} from "./components/Heder/Heder";
import {Navbar} from "./components/Navbar/Navbar";
import s from "./App.module.css"
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";

import { StoreType} from "./redux/redux-store";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileConnect} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Heder/HederContainer";

type appType = {
    store: StoreType
    //dispatch: (action: ActionType) => void
}

const App: React.FC<appType> = (props) => {
    return (

            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    {/*<Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>*/}
                    <Route path="/dialogs" render={() => <Dialogs
                        store={props.store}
                        state={props.store.getState()}
                        dispatch={props.store.dispatch}
                    />}/>
                    <Route path="/profile/:userId?" render={() => <ProfileConnect/>}/>
                    <Route path="/users" render={() =><UsersContainer/>}/>
                    {/* <Route path="/news" />
                <Route path="/music" />
                <Route path="/settings" />*/}
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}

                </div>
            </div>
    );
}


export default App;
