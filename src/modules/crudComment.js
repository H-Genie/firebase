import { dbService } from './firebase';

export const setComment = (e) => {
    e.preventDefault();

    const checkEmpty =
        e.target[0].value === "" ||
        e.target[1].value === "" ||
        e.target[2].value === "";

    if (checkEmpty) {
        alert("모든 정보를 다 입력해주세요");
        return;
    }

    const id = Date.now();
    const commentObj = {
        id: id,
        comment: e.target[0].value,
        nickname: e.target[1].value,
        password: e.target[2].value,
        date: new Date().toLocaleDateString()
    }
    dbService.doc(`cyland/${id}`).set(commentObj);

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
}

export const updateComment = (id, password, comment) => {
    const checkedPwd = prompt("비밀번호를 입력해주세요");
    if (checkedPwd === password) {
        const updatedComment = prompt("메시지를 수정해주세요", comment);
        if (updatedComment) dbService.doc(`cyland/${id}`).update({ comment: updatedComment });
    } else if (checkedPwd === null) {
        return;
    } else {
        alert("비밀번호를 확인해주세요");
    }
}

export const deleteComment = (id, password) => {
    const checkedPwd = prompt("비밀번호를 입력해주세요");
    if (checkedPwd === password) {
        const ok = window.confirm("메시지를 삭제할까요?");
        if (ok) dbService.doc(`cyland/${id}`).delete();
    } else if (checkedPwd === null) {
        return;
    } else {
        alert("비밀번호를 확인해주세요");
    }
}