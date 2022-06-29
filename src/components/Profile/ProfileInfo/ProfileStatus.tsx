import {useEffect, useState} from "react"



type profileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatus = (props: profileStatusType) => {

    let [editeMode, setEditeMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])


    const activateEditMode = () => {
        setEditeMode(true)
    }
    const deaactivateEditMode = () => {
        setEditeMode(false)
        props.updateStatus(status)
    }

    const onStatusChange =(e:any)=>{
     setStatus(e.currentTarget.value)
    }
    /*if(status !== props.status){
        setStatus(props.status)
    }*/
console.log("ffffff")

    return <div>
        {!editeMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
            </div>}
        {editeMode && <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deaactivateEditMode} value={status}/>
        </div>}
    </div>
}


