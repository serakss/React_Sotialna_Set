import React, {ReactNode} from "react";
import {NavLink} from "react-router-dom";
import s from "./Heder.module.css";
import {headerPropsType} from "./HederContainer";



export const Header = (props: headerPropsType) => {

    return (
        <header className={s.header}>
            <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/FBD1/production/_115656446_eye1.jpg"/>

            <div className={s.loginBlock}>
                {props.isAuth? props.login :<NavLink to={"/login"}>Login</NavLink>}
            </div>

        </header>
    )
}