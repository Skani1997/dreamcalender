import React from 'react'
import '../css/Requestmodal.css';
import { Button, Icon, Modal } from 'semantic-ui-react'



const Requestmodal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button className="btn_request ui large button">신청하러가기 <Icon name='chevron right' /></button>}
    >
      <Modal.Header className="modal-title">드림캘린더 상담 요청하기</Modal.Header>
      <Modal.Content>
          <p>
            이부분이 상담요청하는 부분입니다
          </p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} className="request-btn">
          신청하기 <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Requestmodal;