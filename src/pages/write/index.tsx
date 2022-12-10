import { useRouter } from 'next/router';
import Header from '../../components/Common/Header';
import FooterNav from '../../components/Common/FooterNav';
import Button from 'components/Button';
import { WriteWrap, TextAdd } from './style';
import * as API from 'services';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IWriteForm {
    content: string;
}
// 글쓰기 페이지
const Write = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control
    } = useForm<IWriteForm>();

    const onSubmit: SubmitHandler<IWriteForm> = async (data) => {
        try {
            const res = await API.postBoard(data);
            if (res) {
                router.push('/feed');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Header />
            <main css={WriteWrap}>
                <section css={TextAdd}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>feed text</h3>
                        <textarea placeholder="내용을 입력해 주세요." {...register('content', { required: true })} />
                        <Button type={'submit'} buttonStyle="base" style={{ width: '100%', margin: '1rem 0 0 0' }}>
                            보내기
                        </Button>
                    </form>
                </section>
            </main>
            <FooterNav />
        </>
    );
};
export default Write;
