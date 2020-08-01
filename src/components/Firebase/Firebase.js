import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyD2t-XcwxMDcHvI9mS0JaF_OV1hMPPhzXw",
    authDomain: "dimsui-8.firebaseapp.com",
    databaseURL: "https://dimsui-8.firebaseio.com",
    projectId: "dimsui-8",
    storageBucket: "dimsui-8.appspot.com",
    messagingSenderId: "1033515466503",
    appId: "1:1033515466503:web:1b5aaa4e5f671668b84fa2",
    measurementId: "G-G5G48YXVK4"
  };
firebase.initializeApp(config);
const db = firebase.firestore();

const firebaseMethods = {
  deleteUser (userId) {
    db.collection('users').doc(userId).delete()
  },

  setUser({             
    name,
    lastName,
    email, 
    phone, 
    direction,
    education,
    start,
    age,
    math,
    address,
    skype,
    university,
    userId}) {
    let member = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      direction: direction.value,
      education: education.value,
      start: start.value,
      age: age.value,
      math: math.value,
      skype: skype.value,
      address: address.value,
      university: university.value,
      userId
    };
    db.collection('users').doc(`${userId}`).set(member);

  },

  setTask({
    name,
    description,
    deadline,
    start,
    taskId
    }) {
    let task = {
      name: name.value,
      description: description.value,
      start: start.value,
      deadline: deadline.value,
      taskId
    }
    db.collection('tasks').doc(`${taskId}`).set(task);
  },

  getUsers() {
    return db.collection("users").get()
    .then((users) => {
        const members = users.docs.map((user) => {
          const { name, lastName, direction, education, age, phone, start, email, userId, address, math, skype, university } = user.data();
          return {
            name,
            lastName,
            direction,
            education,
            age,
            phone,
            start,
            email,
            math,
            skype,
            address,
            university,
            userId
          };
        });
        return members;
      })
      
  },

  getTasks() {
    return db.collection("tasks").get()
    .then((tasks) => {
          const tasksList = tasks.docs.map((task) => {
            const { name, start, deadline } = task.data();
            return {
              name,
              start,
              deadline,
            };
          });
          return tasksList;
        })
        
  },

  deleteTask(taskId) {
    db.collection('tasks').doc(taskId).delete()
  },

}


export {db, firebaseMethods};

