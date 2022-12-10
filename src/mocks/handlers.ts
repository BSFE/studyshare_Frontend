// src/mocks/handlers.js
import { rest } from 'msw';
import { IBoardItem, ISignUpForm } from 'services';

const mockUserObj = [];

const mockBoardObj: IBoardItem[] = [
    {
        boardId: 1,
        imgurl: 'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        content: '이것은 테스트용 mock data 입니다.',
        likeMarkCnt: 3,
        commentCnt: 0,
        use_yn: false,
        updatedAt: '2022-12-10',
        commentList: ['게시글 댓글 리스트']
    }
];

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
                data: mockBoardObj
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
