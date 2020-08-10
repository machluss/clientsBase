import React from 'react'
import '../style/Partner.css'

import DelPartnerButton from './DelPartnerButton'
import EditPartnerButton from './EditPartnerButton'
import EditPartnerPanel from './EditPartnerPanel'
import CurrentTask from './CurrentTask'

const Partner = props => {
    let isLoaded = false;

    if (props.chosen.name !== undefined) isLoaded = true

    if (isLoaded) {
        const { handleOpenEditPartner, handleDelPartner, editPanelActive, handleEditPartner, handleCloseEditPanel } = props
        const { name, industry, id, current, history } = props.chosen
        const { street, number, postcode, city, country } = props.chosen.address
        const { phone, email } = props.chosen.contact

        let currentPanel = ''
        if (current !== undefined) {
            currentPanel = <div className='currents'>
                <p>Aktualne zlecenia:</p>
                {current.map(task => <CurrentTask
                    key={task.id}
                    task={task}
                />)}
            </div>
        }

        let historyPanel = ''
        if (history !== undefined) {
            historyPanel = <div className='currents'>
                <p>Archiwalne zlecenia:</p>
                {history.map(task => <CurrentTask
                    key={task.id}
                    task={task}
                />)}
            </div>
        }

        return (
            <>
                <div className='partner'>
                    <div className="partnerTitle">
                        <p>Firma: <span style={{ fontWeight: 'bold' }}>{name}</span></p>
                        <p>Branża: {industry}</p>
                    </div>
                    <div className='info'>
                        <div className="address">
                            <p>Adres:</p>
                            <p>{street} {number}</p>
                            <p>{postcode} {city}</p>
                            <p>{country}</p>
                        </div>
                        <div className="contact">
                            <p>Kontakt:</p>
                            <p><i className="fas fa-phone"></i> {phone}</p>
                            <p><i className="fas fa-envelope-open"></i> {email}</p>
                        </div>
                    </div>
                    <div className='current'>
                        {current !== undefined ? currentPanel : <p className='noCurrent'>Brak aktualnych zleceń</p>}
                    </div>
                    <div className='history'>
                        {history !== undefined ? historyPanel : <p className='noCurrent'>Brak archiwalnych zleceń</p>}
                    </div>
                </div>
                <DelPartnerButton
                    id={id}
                    handleDelPartner={handleDelPartner}
                />
                <EditPartnerButton
                    handleEditPartner={handleOpenEditPartner}
                />
                {editPanelActive ? <EditPartnerPanel
                    handleEditPartner={handleEditPartner}
                    handleCloseAddPanel={handleCloseEditPanel}
                    chosen={props.chosen}
                /> : null}
            </>
        )

    } else return (
        null
    )
}

export default Partner