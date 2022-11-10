import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SignUpFormWrap, SignUpFormHeader, SignUpForm, FormItem, InputStyle } from './style';
import { Checkbox, DatePicker, Radio, Form } from 'antd';
import Axios from '../../utils/axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as API from 'services';

interface IFormInput {
    username: String;
    password: String;
    passwordCheck: String;
    nickname: String;
    email: String;
    birth: Number;
    sex: 'male' | 'famail';
}

export default function SignUp() {
    const router = useRouter();

    const onFinish = async (values: IFormInput) => {
        console.log('Success:', values);
        // Axios.post('/api/v1/signup', {
        //     username: values.username,
        //     password: values.password,
        //     nickname: values.nickname,
        //     email: values.email,
        //     birth: 970707,
        //     sex: values.sex,
        // }).then(response => {
        //     if(response) {
        //         router.push('/start');
        //     }
        // }).catch(error => {console.log({error})});
        try {
            const data = await API.postSignUp(values);
            if (data) {
                router.push('/start');
            }
            throw new Error('회원가입 실패');
        } catch (error) {
            console.log(error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div css={SignUpFormWrap}>
            <div css={SignUpFormHeader}>
                <Link href={'/login'}>
                    <button type="button">
                        <img src="/images/common/header_back.svg" alt="뒤로가기 버튼" />
                    </button>
                </Link>
                <Link href={'/login'}>
                    <button type="button">
                        <img src="/images/common/btn_close.svg" alt="화면닫기 버튼" />
                    </button>
                </Link>
            </div>
            <h2>회원 가입</h2>

            <Form
                css={SignUpForm}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <div css={FormItem}>
                        <Input placeholder="아이디를 입력해주세요." />
                        <Button buttonStyle="base">중복확인</Button>
                    </div>
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type={'password'} placeholder="비밀번호 6글자 이상.(영문, 숫자, 특수문자중 2포함)" />
                </Form.Item>
                <Form.Item name="passwordCheck" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type={'password'} placeholder="비밀번호 확인" />
                </Form.Item>
                <Form.Item name="nickname" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <div css={FormItem}>
                        <Input placeholder="닉네임을 입력해주세요." />
                        <Button buttonStyle="base">중복확인</Button>
                    </div>
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <div css={FormItem}>
                        <Input placeholder="이메일을 입력해주세요." />
                        <Button buttonStyle="base">중복확인</Button>
                    </div>
                </Form.Item>
                {/* <Form.Item name={'birth'}>
                    <DatePicker  />
                </Form.Item> */}
                <Form.Item name={'sex'}>
                    <Radio.Group>
                        <Radio value="famail"> 여성 </Radio>
                        <Radio value="male"> 남성 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button buttonStyle={'base'} type={'submit'} style={{ width: '100%' }}>
                        확인
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
