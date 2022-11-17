import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Checkbox, DatePicker, Radio, Form } from 'antd';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import * as API from 'services';

import Button from 'components/Button';
import Input from 'components/Input';

import { SignUpFormWrap, SignUpFormHeader, SignUpForm, FormItem, InputStyle } from './style';

interface IFormInput {
    username: string;
    password: string;
    passwordCheck: string;
    nickname: string;
    email: string;
    birth: string;
    sex: 'male' | 'famail';
}

export default function SignUp() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control
    } = useForm<IFormInput>({
        defaultValues: {
            sex: 'male'
        }
    });

    const password = useRef<any>(null);
    password.current = watch('password');

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
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

            <form css={SignUpForm} onSubmit={handleSubmit(onSubmit)}>
                <div css={FormItem}>
                    <Input placeholder="아이디를 입력해주세요." {...register('username', { required: true, maxLength: 20 })} />
                    <Button buttonStyle="base" type={'submit'}>
                        중복확인
                    </Button>
                    {errors.username && <p>이미 사용중인 아이디입니다.</p>}
                </div>
                <div css={FormItem}>
                    <Input
                        placeholder="비밀번호 6글자 이상(영문, 숫자, 특수문자중 2 포함)"
                        type={'password'}
                        {...register('password', { required: true, minLength: 6 })}
                    />
                    {errors.password && errors.password.type === 'required' && <p> 필수 입력입니다.</p>}
                    {errors.password && errors.password.type === 'minLength' && <p> 비밀번호 6글자 이상(영문, 숫자, 특수문자중 2 포함)</p>}
                </div>
                <div css={FormItem}>
                    <Input
                        placeholder="비밀번호 확인"
                        type={'password'}
                        {...register('passwordCheck', {
                            required: true,
                            validate: (value) => value === password.current
                        })}
                    />
                    {errors.passwordCheck && errors.passwordCheck.type === 'validate' && <p>입력하신 비밀번호가 다릅니다.</p>}
                </div>
                <div css={FormItem}>
                    <Input placeholder="닉네임을 입력해주세요." {...register('nickname')} />
                    <Button buttonStyle="base" type={'submit'}>
                        중복확인
                    </Button>
                </div>
                <div css={FormItem}>
                    <Input placeholder="이메일을 입력해주세요." {...register('email')} />
                    <Button buttonStyle="base" type={'submit'}>
                        중복확인
                    </Button>
                </div>
                <div css={FormItem}>
                    <Controller
                        control={control}
                        name="birth"
                        render={({ field: { onChange } }) => (
                            <DatePicker
                                css={InputStyle}
                                placeholder="생년월일을 입력하세요."
                                onChange={(value, dateString) => {
                                    onChange(dateString);
                                }}
                                format={'YYMMDD'}
                            />
                        )}
                    />
                </div>
                <div css={FormItem}>
                    <Controller
                        control={control}
                        name="sex"
                        render={({ field: { onChange } }) => (
                            <Radio.Group
                                onChange={(value) => {
                                    onChange(value);
                                }}
                            >
                                <Radio value={'famail'}>여성</Radio>
                                <Radio value={'male'}>남성</Radio>
                            </Radio.Group>
                        )}
                    />
                </div>
                <Button buttonStyle="base" type={'submit'} style={{ width: '100%' }}>
                    확인
                </Button>
            </form>
        </div>
    );
}
