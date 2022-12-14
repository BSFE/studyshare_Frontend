import axios from 'utils/axios';
import { IDataResponse, ICommentItem } from './index';

export interface IBoardItem {
    boardId: number; // 게시글 번호
    imgurl: string; // 사진주소
    content: string; //게시글 내용
    likeMarkCnt: number; // 좋아요 숫자
    commentCnt: number; //댓글 숫자
    use_yn: boolean; // true(삭제여부) -> 삭제된건 아마 리턴 안됨
    updatedAt: string; // 수정일(수정안된게시글이면 생성일)
    commentList: ICommentItem[]; // ['게시글 댓글 리스트']
}

export const getBoard = async () => {
    try {
        const resData = await axios
            .get<IDataResponse<IBoardItem[]>>('/api/v1/board')
            .then(({ status, data }) => (status === 200 || status === 201 ? data : false));

        if (resData) {
            return resData.data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

export const postBoard = async (request: { content: string }) => {
    const { content } = request;

    try {
        const resData = await axios
            .post<any>('/api/v1/board', {
                content
            })
            .then(({ status, data }) => (status === 200 || status === 201 ? data : false));
        if (resData) {
            return resData.data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

export const putBoard = async (request: { id: number; content: string }) => {
    const { id, content } = request;

    try {
        const resData = await axios
            .put<any>('/api/v1/board', {
                id,
                content
            })
            .then(({ status, data }) => (status === 200 || status === 201 ? data : false));
        if (resData) {
            return resData.data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

export const deleteBoard = async (request: { id: number }) => {
    const { id } = request;
    try {
        const resData = await axios
            .delete<IDataResponse<IBoardItem[]>>(`/api/v1/board/${id}`)
            .then(({ status, data }) => (status === 200 || status === 201 ? data : false));

        if (resData) {
            return resData.data;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};
