import { useEffect, useState } from 'react';
import Header from '../../components/Common/Header';
import FooterNav from '../../components/Common/FooterNav';
import { FeedWrap } from './style';
import WriteButton from '../../components/Feed/WriteButton';
import FeedContent from '../../components/Feed/Content';
import HelloGoal from '../../components/Feed/Hello/Goal';
import * as API from 'services';

const Feed = () => {
    const [dataList, setDataList] = useState<string>('');

    return (
        <>
            <Header />
            <main css={FeedWrap}>
                <HelloGoal user="이현주" />
                <FeedContent />
                <FeedContent />
                <WriteButton />
            </main>
            <FooterNav />
        </>
    );
};

export default Feed;
