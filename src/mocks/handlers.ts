// src/mocks/handlers.js
import { rest } from 'msw';
export const handlers = [
    // Handles a POST /login request
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
    })
];
