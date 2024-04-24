import React from 'react'


export default function ImpactIcon(props) {
    function CheckImpact(props, impact){
        if(props == impact){
            return (<div impact="minor" className='border-2 border-slate-700 rounded-full'>
                {impact}
            </div>)
        } else{
            return null;
        }
    }

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
