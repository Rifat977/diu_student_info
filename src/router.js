import HomePage from "./components/HomePage"
import Student from "./components/StudentPage"
import Cgpa from "./components/CgpaPage"
// import Detail from "./components/CgpaDetail"
import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {
        name: "HomePage",
        component: HomePage,
        path: "/",
    },
    {
        name: "Student",
        component: Student,
        path: "/student-info/:studentId"
    },
    {
        name: "Cgpa",
        component: Cgpa,
        path: "/cgpa/:studentId",
    } 
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
