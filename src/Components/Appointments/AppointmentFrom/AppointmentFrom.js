import React from 'react';
import Modal from 'react-modal';
import './AppointmentFrom.css'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const AppointmentFrom = ({ modalIsOpen, closeModal, booking, date }) => {
    const handleSubmit = e => console.log(e);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div> {booking.name} on {date.toDateString()}</div>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <input type="email" name="email" class="form-control border-0" placeholder="your email" />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="subject" class="form-control border-0" placeholder="subject" />
                    </div>
                    <div class="mb-3">
                        <textarea type="text" name="message" class="form-control border-0" rows="4">your message </textarea>
                    </div>
                    <div class="mb-3 text-center">
                        <input type="submit" className="form-control border-0 btn btn-info" value="Send" />
                    </div>

                </form>
            </Modal>
        </div>


    );
};

export default AppointmentFrom;