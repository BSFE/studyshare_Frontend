import axios from 'utils/axios';
import { IDataResponse } from './index';

export interface ICommentItem {
    commentId: number;
    boardId: number; // 게시글 번호
    content: string; // 게시글 내용
    comments: ICommentItem[]; // 답글
    likeMarkCnt: number; // 좋아요 숫자
}

export const postComment = async (request: { boardId: number; comment: string }) => {
    const { boardId, comment } = request;

    try {
        const resData = await axios
            .post<any>(`/api/v1/board/${boardId}/comment`, {
                comment
            })
            .then(({ status, data }) => (status === 200 || status === 201 ? data : false));
        console.log('aaaaa', resData);
        if (resData) {
            return resData.data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};
