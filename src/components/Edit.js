import React from 'react'
import '../style/Partner.css'

import DelPartnerButton from './DelPartnerButton'
import EditPartnerButton from './EditPartnerButton'

const Partner = props => {
    let isLoaded = false;

    if (props.chosen.name !== undefined) isLoaded = true


    if (isLoaded) {
        const { handleEditPartner, handleDelPartner } = props
        const { name, industry, id } = props.chosen
        const { street, number, postcode, city, country } = props.chosen.address
        const { phone, email } = props.chosen.contact

        return (
            <>
                <div className='partner'>
                    <div className='info'>
                        <p>Firma: <span style={{ fontWeight: 'bold' }}>{name}</span></p>
                        <p>Branża: {industry}</p>
                        <div className="address">
                            <p>Adres:</p>
                            <p>{street} {number}</p>
                            <p>{postcode} {city}</p>
                            <p>{country}</p>
                        </div>
                        <div className="contact">
                            <p>Kontakt:</p>
                            <p>Tel.: {phone}</p>
                            <p>E-mail: {email}</p>
                        </div>
                    </div>
                    <div className='current'></div>
                    <div className='history'></div>
                </div>
                <DelPartnerButton
                    id={id}
                    handleDelPartner={handleDelPartner}
                />
                <EditPartnerButton
                    handleEditPartner={handleEditPartner}
                />
            </>
        )

    } else return (
        <p>Wybierz kontrahenta</p>
    )
}

export default Partner