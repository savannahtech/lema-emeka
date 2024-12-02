const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const DEFAULT_PAGE_LIMIT = process.env.REACT_APP_DEFAULT_PAGE_LIMIT || 10;

export const fetchUsers = async (page) => {
    const response = await fetch(`${API_BASE_URL}/users?page=${page}&limit=10`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
};

export const fetchUserDetails = async (id) => {
    const response = await fetch(`${API_BASE_URL}/user/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user details');
    return response.json();
};

export const deletePost = async (id) => {
    const response = await fetch(`${API_BASE_URL}/post/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete the post');
    return response.json();
};