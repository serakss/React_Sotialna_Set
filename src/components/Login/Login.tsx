import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {login} from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import {required} from '../../utils/validators/validators'
import {Input} from '../common/Preloader/FormsControls/FormsControls'
import s from "./Login.module.css"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type mapStateToPropsType = {
    isAuth: boolean

}

type mapDispatchToPropsType ={
    login:(email: string, password: string, rememberMe: boolean)=>void
}

type login1Type = mapDispatchToPropsType & mapStateToPropsType

const Login1 = (props:login1Type) => {
    const onSubmit = (formData: FormDataType) => {
       props.login(formData.login,formData.password,formData.rememberMe)
        // console.log(formData)
    }
 if (props.isAuth){
     return <Redirect to={"/profile"}/>
 }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
        </div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const MapStateToProps =(state:AppStateType):mapStateToPropsType=>({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm<any>({form: "login"})(LoginForm)

export const Login = connect(MapStateToProps, {login})(Login1)