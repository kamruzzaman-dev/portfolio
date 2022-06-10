import React from 'react';

const ProjectOnModal = ({showigDetailsProject, setShowigDetailsProject}) => {
    return (
        <>
            <input type="checkbox" id="ModalDeatilsShowingTigger" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!{showigDetailsProject}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="ModalDeatilsShowingTigger" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectOnModal;