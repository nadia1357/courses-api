import axios from 'axios';

const URL_LOGIN = 'http://localhost:4000/login';
const URL_REGISTER = 'http://localhost:4000/register';

const URL_COURSES = 'http://localhost:4000/courses';
const URL_COURSES_ALL = 'http://localhost:4000/courses/all';
const URL_COURSES_FILTER = 'http://localhost:4000/courses/filter';
const URL_COURSES_ADD = 'http://localhost:4000/courses/add';

const URL_AUTHORS = 'http://localhost:4000/authors';
const URL_AUTHORS_ADD = 'http://localhost:4000/authors/add';

export const registerUser = async (user) => {
	return await axios
		.post(URL_LOGIN, JSON.stringify(user), {
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
		.post(URL_REGISTER, JSON.stringify(user), {
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

export const getCourses = async () => {
	return await axios
		.get(URL_COURSES_ALL)
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const getCourseById = async (id) => {
	const URL = URL_COURSES + '/' + { id };
	return await axios
		.get(URL)
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
			headers: { 'Content-Type': 'application/json' },
			withCredentials: false,
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

export const editCourse = async (id, course) => {
	const URL = URL_COURSES + '/' + { id };
	return await axios
		.put(URL, JSON.stringify(course), {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: false,
		})
		.then((response) => {
			console.log(response);
			return 'Course edited';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};

export const deleteCourse = async (id) => {
	const URL = URL_COURSES + '/' + { id };
	return await axios
		.delete(URL)
		.then((response) => {
			console.log(response);
			return 'Course deleted';
		})
		.catch((error) => {
			console.log(error);
			return undefined;
		});
};
