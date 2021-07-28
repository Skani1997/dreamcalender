import React from 'react'
import { Link } from "react-router-dom";
import '../css/Surveymodal.css';
import { Button, Icon, Modal } from 'semantic-ui-react'

const Surveymodal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button className="btn_survey ui large button">설문시작</button>}
    >
      <Modal.Header className="modal-title">설문 시작하기</Modal.Header>
      <Modal.Content scrolling>
            <form className="surveymodal-form" id="contact">
                    <div className="surveymodal-input"><label for="survey-pin">핀번호</label><input id="survey-pin" type="text" name="pin"/></div>
                    <div className="surveymodal-input"><label for="survey-call">연락처</label><input id="survey-call" type="text" name="call"/></div>
            </form>
      </Modal.Content>
      <Modal.Actions>
        <Link to="/dreamcalender/surveypage">
          <Button className="survey-btn">
            설문 시작 <Icon name='chevron right' />
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  )
}

export default Surveymodal;