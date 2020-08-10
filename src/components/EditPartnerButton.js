import React from 'react'
import '../style/EditPartnerButton.css'

const EditPartnerButton = props => {
    const { handleEditPartner } = props

    return (
        <div className='editPartner'>
            <button
                className='editButton'
                onClick={handleEditPartner}
            ><i className="fas fa-user-edit"></i></button>
        </div>
    )
}

export default EditPartnerButton