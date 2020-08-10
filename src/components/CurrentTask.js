import React from 'react'

const CurrentTask = props => {
    const { id, items, status } = props.task

    let itemStatus = ''

    switch (status) {
        case 'waiting':
            itemStatus = "Zlecenie oczekuje na realizację"
            break

        case 'executing':
            itemStatus = "Zlecenie w trakcie realizacji"
            break

        case 'sent':
            itemStatus = "Zlecenie wyłane"
            break

        default:
            itemStatus = "Status zlecenia nieznany"
            break
    }

    return (
        <div className='currentTask'>
            <p className='number'>Numer zlecenia: <span>{id}</span></p>
            <p>{items.item} - <span>{items.amount}</span> szt.</p>
            <p>Status zlecenia: {itemStatus}</p>
        </div>
    )
}

export default CurrentTask