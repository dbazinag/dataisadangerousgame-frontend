import { mockComments } from '../../../mockData.js';

export default {
	/**
 * Action for following a post 
 * @action followPost
 * @param {Object} contains An object parameter has baseurl and post id .
 * @returns {void}
  * Action for adding a comment 
 * @action comment
 * @param {Object} contains An object parameter has baseurl, parent id, parent type, level, subredditName, havesubreddit .
 * @returns {void}
 
 */
	async comment(context, payload) {
		console.log('Mocking add comment', payload);
		await new Promise((resolve) => setTimeout(resolve, 500));
		// Return a mock ID
		context.commit('setCommentID', 'mock-comment-id-' + Date.now());
	},
	async editUserText(context, payload) {
		const newComment = {
			content: payload.content,
			id: payload.id,
		};
		//console.log(newComment);
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/edit-user-text', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(newComment),
		});

		const responseData = await response.json();
		//console.log(responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
	async fetchPostComments(context, payload) {
		console.log('Fetching mock comments for', payload.id);
		await new Promise((resolve) => setTimeout(resolve, 500));

		const comments = mockComments[payload.id] || [];
		// Wrap in expected structure if needed, or just return array
		// Based on original code: context.commit('setListOfComments', responseData);
		// responseData seems to be the list directly or an object containing it.
		// Let's assume it's the list or object as in mockData.

		// If the component expects { children: [...] } or just [...]
		// Looking at mockData, I defined it as an array.
		// Let's check what mutations do.

		context.commit('setListOfComments', { children: comments });
	},
	async fetchPostReplies(context) {
		console.log('Fetching mock replies');
		await new Promise((resolve) => setTimeout(resolve, 500));
		context.commit('setListOfReplies', { children: [] });
	},
	async deleteComment(context, payload) {
		const comment = {
			id: payload.id,
			type: payload.type,
		};
		//console.log(comment);
		const baseurl = payload.baseurl;
		const response = await fetch(baseurl + '/delete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
			body: JSON.stringify(comment),
		});

		const responseData = await response.json();
		//console.log(responseData);
		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to send request.'
			);
			throw error;
		}
	},
};
