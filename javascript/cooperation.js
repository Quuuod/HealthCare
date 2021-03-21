var firebaseConfig = {
    apiKey: "AIzaSyAyLQIOH87qckH1OP3NtgEuM2AOxP3bHZg",
    authDomain: "diplom-260ee.firebaseapp.com",
    databaseURL: "https://diplom-260ee-default-rtdb.firebaseio.com",
    projectId: "diplom-260ee",
    storageBucket: "diplom-260ee.appspot.com",
    messagingSenderId: "785650444044",
    appId: "1:785650444044:web:d8796e73e54014f1650b29",
    measurementId: "G-HJ2JL4D5NE"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById('submit').onclick = function () {

    const Name = document.getElementById('username').value;
    const Surname = document.getElementById('usersurname').value;
    const Email = document.getElementById('usermail').value;


    firebase.database().ref('Рассылка новостей/' + Email).set({
        Имя: Name,
        Фамилия: Surname,
        Email: Email
    });
}