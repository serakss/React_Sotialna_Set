import {useState} from "react"


type profileStatusType = {
    status: string
}


export const ProfileStatus = (props: profileStatusType) => {

    let [editeMode, setEditeMode] = useState(true)

    const activateEditMode = ()=> setEditeMode(!editeMode)


    return <div>
        {editeMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>}
        {!editeMode && <div>
            <input autoFocus={true} onBlur={activateEditMode} value={props.status}/>
        </div>}
    </div>
}


