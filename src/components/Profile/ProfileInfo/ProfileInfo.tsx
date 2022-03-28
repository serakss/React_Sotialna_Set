import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
type ProfileInfoType={
    profile:any
}


export const ProfileInfo = (props:ProfileInfoType) => {
  if(!props.profile){
      return  <Preloader/>
  }

    return <div>
        <div>
            <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile}/>
            ava + description
        </div>
    </div>
}