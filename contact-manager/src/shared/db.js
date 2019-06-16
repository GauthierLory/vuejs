import Firebase from 'firebase/app';
import 'firebase/firestore';
import fsConfig from './config';

const config = fsConfig;

const App = Firebase.initializeApp(config);
const Firestore = App.firestore();

export default{
    create(contact){
        return Firestore.collection('contacts').add(contact);
    },
    read(){
        return Firestore.collection('contacts').get()
    },
}