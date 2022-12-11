import { Modal } from './style';
import Image from 'next/image';

type Props = { onClose: () => void; handleIsEdit: (value: boolean) => void; onDelete: () => void };

const MoreModal: React.FC<Props> = ({ onClose, handleIsEdit, onDelete }) => {
    return (
        <div css={Modal}>
            <div className="modal__wrap">
                <div className="modal__box">
                    <div className="modal__more">
                        <button className="back" onClick={onClose}>
                            <Image src="/images/common/header_back.svg" width={'15px'} height={'15px'} alt="취소버튼" />
                            <h3>더보기</h3>
                        </button>
                    </div>

                    <div className="modal__btn">
                        <button
                            className="subBtn"
                            type="button"
                            onClick={() => {
                                handleIsEdit(true);
                                onClose();
                            }}
                        >
                            댓글 수정
                        </button>
                        <button
                            className="subBtn delete"
                            type="button"
                            onClick={() => {
                                onDelete();
                                onClose();
                            }}
                        >
                            댓글 삭제
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreModal;
