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

    const name = document.getElementById('username').value;
    const surname = document.getElementById('usersurname').value;
    const mail = document.getElementById('usermail').value;
    const number = document.getElementById('usersite').value;
    const date = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    firebase.database().ref('Заявка/' + mail + number).set({
        Имя: name,
        Фамилия: surname,
        Врач: mail,
        Номер_телефона: number,
        Дата: date,
        Сообщение: message
    });
}
