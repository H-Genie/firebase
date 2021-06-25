import { setComment } from '../modules/crudComment';

const SetComment = () => {
    return (
        <>
            <form onSubmit={setComment}>
                <input
                    type="text"
                    maxLength="25"
                    placeholder="일촌과 나누고 싶은 이야기를 남겨보세요~! (최대 25자)"
                    style={{ width: "340px" }}
                />
                <input
                    type="text"
                    maxLength="16"
                    placeholder="일촌명 (최대 16자)"
                />
                <input
                    type="password"
                    minLength="4"
                    maxLength="12"
                    autoComplete="off"
                    placeholder="비밀번호 (4~12자)"
                />
                <input type="submit" value="작성" />
            </form>
        </>
    )
}

export default SetComment;