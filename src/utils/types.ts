// 피드
export interface BoardProps {
    //게시글 번호
    boardId : number,
    // 사진주소
    imgurl: string,
    // 게시글 내용
    content: string,
    // 좋아요 숫자
    likeMarkCnt: number,
    // 댓글 숫자
    commentCnt: number,
    // 삭제여부
    use_yn: boolean,
    // 수정일
    updatedAt: string,
    // 게시글 댓글 리스트
    commentList: []
}

// 마아페이지
export interface MyPage {
    name: string,
    birth: string,
    following: number,
    follower: number,
    intro: string
}

// 댓글
export interface Comment {
    comment: string
}

// 팔로워 & 팔로잉
export interface Follower {
    followMemberId : number,
    followMemberName : string,
    updatedAt: string
    }