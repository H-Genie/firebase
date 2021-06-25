import { useState, useEffect } from 'react';
import { dbService } from './firebase';

export const useFirestore = () => {
    const [comments, setCommets] = useState([]);

    useEffect(() => {
        dbService.collection("cyland").orderBy("id", "desc").onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data()
            }));
            setCommets(data);
        });
    }, []);

    return comments;
}