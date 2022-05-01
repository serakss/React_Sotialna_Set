import {Field, reduxForm, InjectedFormProps} from 'redux-form'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"} component={"input"}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={"input"}/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<any>({form: "login"})(LoginForm)
