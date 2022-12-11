import { css } from '@emotion/react';

export const LikeHead = css`
    cursor: pointer;
    margin-top: 0.6em;
    margin-bottom: 0.5625em;
    display: flex;
    justify-content: space-between;
    .left {
        display: flex;
        align-items: center;
        font-size: 1.2em;
        button {
            margin-right: 1em;
        }
    }
    .right {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span {
        color: #c4c4c4;
        font-size: 1.2em;
    }
`;

export const TextHead = css`
    margin: 1em 0;
`;

// 피드 게시글
export const Text = css`
    width: 100%;
    margin-top: 7px;
    text-align: left;
    align-items: center;
    display: flex;
    .text-width {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        line-height: 1.4;
        font-size: 1.2em;
    }
    span {
        font-size: 1.2em;
        font-weight: 400;
        letter-spacing: -0.02em;
        color: #000000;
        display: inline-block;
    }
    button {
        color: #999999;
        cursor: pointer;
        margin-left: 0;
        font-size: 1.2em;
    }
`;

export const InputWrap = css`
    position: relative;
    width: 100%;
`;

// 게시글 수정 입력창
export const Input = css`
    width: 100%;
    border: 1px solid #c5c5c5;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    &::placeholder {
        color: #c5c5c5;
    }
`;

// 게시글 수정 게시버튼
export const Button = css`
    position: absolute;
    right: 11px;
    top: 11px;
    color: #2656ff;
    gap: 1rem;
`;
