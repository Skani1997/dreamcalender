import React from 'react'
import '../css/Surveymodal.css';
import { Button, Icon, Modal } from 'semantic-ui-react'

const TermModal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    // 개인정보 모달
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<p className="termmodal">개인정보 수집동의 [전문보기]</p>}
    >
      <Modal.Header className="modal-title">개인정보 수집동의</Modal.Header>
      <Modal.Content>
          <p>
            여기에 약관 전문이 표시됩니다.
          </p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} className="request-btn">
          확인 <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default TermModal;