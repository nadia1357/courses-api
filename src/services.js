import axios from 'axios';

const URL_LOGIN = 'http://localhost:4000/login';
const URL_REGISTER = 'http://localhost:4000/register';

const URL_COURSES = 'http://localhost:4000/courses';
const URL_COURSES_ALL = 'http://localhost:4000/courses/all';
const URL_COURSES_ADD = 'http://localhost:4000/courses/add';

const URL_AUTHORS = 'http://localhost:4000/authors';
const URL_AUTHORS_ALL = 'http://localhost:4000/authors/all';
const URL_AUTHORS_ADD = 'http://localhost:4000/authors/add';

const token = localStorage.getItem('token');

export const registerUser = async (user) => {
	return await axios
		.post(URL_REGISTER, JSON.stringify(user), {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: false,
		})
		.then((response) => {
			console.log(response);
			return 'Registration done';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const loginUser = async (user) => {
	return await axios
		.post(URL_LOGIN, JSON.stringify(user), {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: false,
		})
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const getAllCourses = async () => {
	return await axios
		.get(URL_COURSES_ALL, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			let coursesFromServer = response.data.result;
			console.log(coursesFromServer);
			return coursesFromServer;
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const getCourseById = async (id) => {
	const URL = URL_COURSES + '/' + { id };
	return await axios
		.get(URL, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const addCourse = async (course) => {
	return await axios
		.post(URL_COURSES_ADD, JSON.stringify(course), {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return 'Course added';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const updateCourse = async (id, course) => {
	const URL = URL_COURSES + '/' + { id };
	return await axios
		.put(URL, JSON.stringify(course), {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return 'Course updated';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const deleteCourse = async (id) => {
	const URL = URL_COURSES + '/' + { id };
	return await axios
		.delete(URL, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return 'Course deleted';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const getAllAuthors = async () => {
	return await axios
		.get(URL_AUTHORS_ALL, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return response.data.result;
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const getAuthorById = async (id) => {
	const URL = URL_AUTHORS + '/' + { id };
	return await axios
		.get(URL, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const addAuthor = async (author) => {
	return await axios
		.post(URL_AUTHORS_ADD, JSON.stringify(author), {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return 'Author added';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const updateAuthor = async (id, author) => {
	const URL = URL_AUTHORS + '/' + { id };
	return await axios
		.put(URL, JSON.stringify(author), {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return 'Author updated';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const deleteAuthor = async (id) => {
	const URL = URL_AUTHORS + '/' + { id };
	return await axios
		.delete(URL, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log(response);
			return 'Authro deleted';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};
