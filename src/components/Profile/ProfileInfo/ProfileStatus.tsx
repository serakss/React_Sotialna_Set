import {useState} from "react"


type profileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatus = (props: profileStatusType) => {

    let [editeMode, setEditeMode] = useState(true);
    let [status, setStatus] = useState(props.status)


    const activateEditMode = () => {
        setEditeMode(!editeMode)
        props.updateStatus(status)
    }

    const onStatusChange =(e:any)=>{
     setStatus(e.currentTarget.value)
    }
    /*if(status !== props.status){
        setStatus(props.status)
    }*/


    return <div>
        {editeMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
            </div>}
        {!editeMode && <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={activateEditMode} value={status}/>
        </div>}
    </div>
}


