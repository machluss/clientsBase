import React from 'react'
import '../style/DelPartnerButton.css'

const DelPartnerButton = props => {
    const { id, handleDelPartner } = props

    return (
        <div className='delPartner'>
            <button
                className='delButton'
                onClick={() => handleDelPartner(id)}
            ><i className="fas fa-user-minus"></i></button>
        </div>
    )
}

export default DelPartnerButton