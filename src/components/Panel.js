import React from 'react'
import '../style/Panel.css'

import AddPartnerButton from './AddPartnerButton'
import AddPartnerPanel from './AddPartnerPanel'
import PartnerSearch from './PartnerSearch'

const Panel = props => {
    const { indexes, searched, addPanelActive, handleOpenAddPanel, handleCloseAddPanel, handleShowPartner, handleAddNewPartner, handlePartnerSearch } = props

    const partnersList = indexes.map(index => <button
        key={index.id}
        className='partnerButton'
        onClick={() => handleShowPartner(index.id)}
    >{index.name}</button>)

    const serachedList = searched.map(item => <button
        key={item.id}
        className='partnerButton'
        onClick={() => handleShowPartner(item.id)}
    >{item.name}</button>)

    const searchResult = <>
        <p>Wyniki wyszukiwania:</p>
        <ul className='searchedList'>
            {serachedList}
        </ul>
    </>

    return (
        <>
            <PartnerSearch
                handlePartnerSearch={handlePartnerSearch}
            />
            {serachedList.length > 0 ? searchResult : null}
            <ul className='partnersList'>
                {partnersList}
            </ul>
            <AddPartnerButton
                handleOpenAddPanel={handleOpenAddPanel}
            />
            {addPanelActive ? <AddPartnerPanel
                handleCloseAddPanel={handleCloseAddPanel}
                handleAddNewPartner={handleAddNewPartner}
            /> : null}
        </>
    )
}

export default Panel