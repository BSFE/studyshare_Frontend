import { useEffect, useState } from 'react';
import Header from '../../components/Common/Header';
import FooterNav from '../../components/Common/FooterNav';
import { FeedWrap } from './style';
import WriteButton from '../../components/Feed/WriteButton';
import FeedContent from '../../components/Feed/Content';
import HelloGoal from '../../components/Feed/Hello/Goal';
import * as API from 'services';
import { useQuery } from 'react-query';

const Feed = () => {
    const [dataList, setDataList] = useState<string>('');
    const { data: boards, isLoading, error } = useQuery(['boards'], async () => await API.getBoard());

    useEffect(() => {
        console.log({ boards });
    }, [boards]);

    useEffect(() => {
        console.log({ isLoading });
    }, [isLoading]);

    return (
        <>
            <Header />
            <main css={FeedWrap}>
                <HelloGoal user="이현주" />
                {boards && boards.map((board) => <FeedContent key={board.boardId} board={board} />)}
                <WriteButton />
            </main>
            <FooterNav />
        </>
    );
};

export default Feed;
