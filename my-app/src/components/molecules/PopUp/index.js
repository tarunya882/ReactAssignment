import React from 'react';
import PopupData from '../../atoms/PopUpData/index';
import PopUp from '../../atoms/Popup/index';

const PopUpMolecule=(props)=>{
    return(
        <div style={{backgroundColor:"white", zIndex:10,transform: 'translate(50%, -120px)'}}>
            <PopupData items={props.items} onServingsChange={props.onServingsChange} open={props.open} id={props.id}/>
        </div>
    )
}
 export default PopUpMolecule;