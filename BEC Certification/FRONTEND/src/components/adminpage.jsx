import  { useState } from 'react';
import '../assets/adminpage.css';
// import NavBar from './NavBar';
function AdminPage() {
    const [courses, setCourses] = useState([
        { id: 1, title: "Introduction to React", description: "Learn the basics of React.js framework." },
        { id: 2, title: "Node.js Development", description: "Master backend development with Node.js." },
        { id: 3, title: "Full-Stack Web Development", description: "Learn both frontend and backend development." }
    ]);

    const [newCourse, setNewCourse] = useState({ title: "", description: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addCourse = () => {
        const id = courses.length + 1;
        setCourses([...courses, { ...newCourse, id }]);
        setNewCourse({ title: "", description: "" });
    };

    const deleteCourse = (id) => {
        setCourses(courses.filter(course => course.id !== id));
    };

    return (
        <div className="admin-container">
            {/* <NavBar/> */}
            <h1>Admin Dashboard</h1>
            <h2>Add New Course</h2>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={newCourse.title}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={newCourse.description}
                onChange={handleChange}
            />
            <button onClick={addCourse}>Add Course</button>

            <h2>Courses</h2>
            <ul>
                {courses.map(course => (
                    <ci key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <button onClick={() => deleteCourse(course.id)}>Delete</button>
                        {/* Edit functionality can be added here */}
                    </ci>
                ))}
            </ul>
        </div>
    );
}

export default AdminPage;