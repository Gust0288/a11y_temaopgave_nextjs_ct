import React from 'react'


export default function ImpactIcon(props) {

    function CheckImpact(props, impact){
        if(props === impact){
            return (<div impact="minor" className='border-2 border-slate-700 rounded-full'>
                <p>severity {props}</p>
            </div>)
        } else{
            return null;
        }
    }
    // function CheckImpact(props){
    //     if(props === "minor"){
    //         return <div>Minor</div>
    //     } else if (props === "moderate"){
    //         return <div>Moderate</div>
    //     } else if (props === "serious"){
    //         return <div>Serious</div>
    //     } else if (props === "critical"){
    //         return <div>Critical</div>
    //     }
    // }

  return (
    <div>
        <CheckImpact impact="minor"/>
        <CheckImpact impact="moderate"/>
        <CheckImpact impact="serious"/>
        <CheckImpact impact="critical"/>
    </div>
  )
}


//minor, moderate, serious, critical
