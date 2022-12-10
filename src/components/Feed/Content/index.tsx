import { css } from '@emotion/react';
import FeedBoxHead from '../BoxHead';
import CommentHead from '../CommentHead';
import FeedDesc from '../Desc';
import FeedBoxInput from '../BoxInput';
import { Carousel } from 'antd';
import { IBoardItem } from 'services';
interface IProps {
    board: IBoardItem;
}
// 하나의 피드 게시글
const FeedContent: React.FC<IProps> = (props) => {
    const { board } = props;
    return (
        <article css={Feed}>
            <FeedBoxHead nickname="apeach" />

            <Carousel>
                <div>
                    <img src={board.imgurl} alt="" style={{ width: '100%' }} />
                </div>
            </Carousel>

            <CommentHead like={1000} time={50} text={board.content} />
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
