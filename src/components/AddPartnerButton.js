import React from 'react'
import '../style/AddPartnerButton.css'

const AddPartnerButton = props => (
    <div className='addNewPartner'>
        <button
            className='newPartner'
            onClick={props.handleOpenAddPanel}
        ><i className="fas fa-user-plus"></i></button>
    </div>
)

export default AddPartnerButton
