// src/mocks/handlers.js
import { rest } from 'msw';
import { ISignUpForm } from 'services';

export const handlers = [
    // Handles a POST login request
    rest.post('/api/v1/login', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                username: 'test',
                accessToken: {
                    token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MSIsImlkIjoxOSwidXNlcm5hbWUiOiJ0ZXN0MSIsImlhdCI6MTY2OTczMjI2OCwiZXhwIjoxNjY5NzM1ODY4fQ.jBp-BQgJH1Ymv4gSjorp8A63pDS9ctJ6_gGVa6BNhdY',
                    refreshToken:
                        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MSIsImlkIjoxOSwidXNlcm5hbWUiOiJ0ZXN0MSIsImlhdCI6MTY2OTczMjI2OCwiZXhwIjoxNjc3NTA4MjY4fQ.8SLxmts-g39I8CaquwV4Jy5Sr7EsF_pqD3zW5iHm4Lc'
                }
            })
        );
    }),
    // Handles a POST signUp request
    rest.post('/api/v1/signup', (req, res, ctx) => {
        if (req.body) {
            const { username, email, birth, sex } = req.body as ISignUpForm;
            return res(
                ctx.status(200),
                ctx.json({
                    name: username,
                    email: email,
                    birth: birth,
                    sex: sex
                })
            );
        } else {
            return res(ctx.status(500));
        }
    }),
    // Handles a Get mypage request
    rest.get('/api/v1/mypage', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                name: '세균맨',
                birth: '2002-02-02',
                following: 2,
                follower: 3,
                intro: '하이루~'
            })
        );
    }),
    // Handles a POST board request
    rest.post('/api/v1/board', (req, res, ctx) => {
        if (req.body) {
            return res(
                ctx.status(200),
                ctx.json({
                    memberId: 1,
                    content: 'mangu'
                })
            );
        } else {
            return res(ctx.status(500));
        }
    }),
    // Handles a Get board request
    rest.get('/api/v1/board', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                boardId: 1,
                imgurl: '사진주소',
                content: '게시글 내용',
                likeMarkCnt: '좋아요 숫자',
                commentCnt: '댓글 숫자',
                use_yn: 'true(삭제여부) -> 삭제된건 아마 리턴 안됨',
                updatedAt: '수정일(수정안된게시글이면 생성일)',
                commentList: ['게시글 댓글 리스트']
            })
        );
    }),
    // Handles a PUT board request
    rest.put('/api/v1/board', (req, res, ctx) => {
        if (req.body) {
            return res(
                ctx.status(200),
                ctx.json({
                    memberId: 1,
                    content: 'mangu'
                })
            );
        } else {
            return res(ctx.status(500));
        }
    }),
    // Handles a Get board request
    rest.delete('/api/v1/board', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                msg: '성공'
            })
        );
    })
];
