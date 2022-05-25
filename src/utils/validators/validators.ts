import React from "react"

export const required =(value: string)=>{
    if (value) return undefined;
    return "Field is required"
}

export const maxLength30 = (value: string)=>{
    if (value.length > 30) return "Max length is 30";
    return undefined;
}

export const maxLengthCreator =(maxLenhth:number)=>(value: string)=>{
    if(value.length > maxLenhth) return `Max length is ${maxLenhth} symbols`;
    return undefined;
}