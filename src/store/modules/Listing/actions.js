import { mockPosts } from '../../../mockData.js';

export default {
	/**
	 * Action sends fetch posts request according to sort type (top,hot,new,best).
	 * @action fetchPosts
	 * @param {Object} contains An object parameter has baseurl and title(sort type).
	 * @returns {void}
	 * Action sends fetch post details request to /post-details end point.
	 * @action postDetails
	 * @param {Object} contains An object parameter has baseurl and title(sort type).
	 * @returns {void}
	 * Action sends delete comment request.
	 * @action deleteComment
	 * @param {Object} contains An object parameter has baseurl and comment id.
	 * @returns {void}
	 */
	async fetchPosts(context) {
		console.log('Fetching mock posts');
		// Simulate network delay
		await new Promise((resolve) => setTimeout(resolve, 500));
		context.commit('setPosts', mockPosts);
	},
	async postDetails(context, payload) {
		const id = payload.id;
		console.log('Fetching mock post details for', id);
		await new Promise((resolve) => setTimeout(resolve, 500));

		const post = mockPosts.children.find(
			(child) => child.data._id === id || child.data.id === id
		);

		if (post) {
			context.commit('setPostDetails', post.data);
		} else {
			console.error('Post not found in mock data');
			// Fallback or error handling
		}
	},
	async deleteComment(_, payload) {
		const del = {
			id: payload.id,
			type: 'comment',
		};
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/delete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(del),
		});

		const responseData = await response.json();
		if (response.status == 400) {
			const error = new Error(responseData.error || 'The request was invalid');
			throw error;
		} else if (response.status == 401) {
			const error = new Error(
				responseData.error || 'Unauthorized to delete this thing'
			);
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Thing not found');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
};
