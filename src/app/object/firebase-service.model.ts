import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc } from "firebase/firestore";

export class FirebaseService{
    
    ngOnInit(){
        const firebaseConfig = {
            apiKey: "AIzaSyBKD5wO-FW-MuPqz8E8ZZEaaAbkNEyOPQE",
            authDomain: "herois-microscopicos.firebaseapp.com",
            databaseURL: "https://herois-microscopicos-default-rtdb.firebaseio.com",
            projectId: "herois-microscopicos",
            storageBucket: "herois-microscopicos.appspot.com",
            messagingSenderId: "672838883794",
            appId: "1:672838883794:web:8a8da882e14bdda929900b",
            measurementId: "G-DPRY9QE5E0"
        };
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        app.firestore
    }
    async obterPerguntas(){
        const docRef = doc(db, "cities", "SF");
        const docSnap = await getDoc(docRef);   
    }
}