import './modal.css'

import { FiX } from 'react-icons/fi'

import Piquerez from '../../assets/piquerez.jpg'

export default function Modal({closeModal}) {
    return (
        <div className='modal'>
            <div className='modal-container'>
                <button className='close' onClick={closeModal}>
                    <FiX/>
                </button>
                <img src={Piquerez} alt='Piquerez'/>
            </div>
        </div>
    )
}