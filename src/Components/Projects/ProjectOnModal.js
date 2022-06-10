import React from 'react';
import { Link } from 'react-router-dom';
import './projectOnModal.css';

const ProjectOnModal = ({ showigDetailsProject, setShowigDetailsProject }) => {
    return (
        <>
            <input type="checkbox" id="ModalDeatilsShowingTigger" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-area relative bg-slate-300" >
                   
                    {/* modal closed button */}
                    <div class="modal-action absolute right-0 bottom-0 p-4">
                        <label for="ModalDeatilsShowingTigger" class="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectOnModal;