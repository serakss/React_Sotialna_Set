import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";


type ProfileInfoType={
    profile:any
    status:string
    updateStatus:(status:string)=>void
}


export const ProfileInfo = (props:ProfileInfoType) => {

    return <div>
       {/* <div>
            <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg"/>
        </div>*/}
        <div className={s.descriptionBlock}>
         {/*   <img src={props.profile}/>*/}
            {!props.profile? <Preloader/> : <img src={props.profile}/>}
           <ProfileStatus status = {props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}