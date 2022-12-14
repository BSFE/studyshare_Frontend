import { useState } from 'react';
import { css } from '@emotion/react';
import { useQueryClient } from 'react-query';
import { Carousel, Modal } from 'antd';

import FeedBoxHead from '../BoxHead';
import CommentHead from '../CommentHead';
import FeedDesc from '../Desc';
import FeedBoxInput from '../BoxInput';
import { IBoardItem } from 'services';
import * as API from 'services';

interface IProps {
    board: IBoardItem;
}
// 하나의 피드 게시글
const FeedContent: React.FC<IProps> = (props) => {
    const { board } = props;
    const [isEdit, setIsEdit] = useState(false);
    const queryClient = useQueryClient();

    const onDelete = async () => {
        try {
            const res = await API.deleteBoard({ id: board.boardId });

            if (res) {
                Modal.success({
                    title: `게시글이 삭제되었습니다.`
                });
                queryClient.invalidateQueries('boards');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleIsEdit = (value: boolean) => {
        setIsEdit(value);
    };

    return (
        <article css={Feed}>
            <FeedBoxHead nickname="apeach" handleIsEdit={handleIsEdit} onDelete={onDelete} />

            <Carousel>
                <div>
                    <img src={board.imgurl} alt="" style={{ width: '100%' }} />
                </div>
            </Carousel>

            <CommentHead like={1000} time={50} text={board.content} isEdit={isEdit} handleIsEdit={handleIsEdit} />
            <FeedDesc />

            <FeedBoxInput />
        </article>
    );
};

export default FeedContent;

const Feed = css`
    padding: 0.6em 1.5625em;
    margin-top: 3em;
`;
