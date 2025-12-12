import { mockPosts, mockComments } from '../../../mockData.js';

export default {
	/**
	 * Action sends Post request to save endlpoint.
	 * @action save
	 * @param {Object} contains An object parameter has baseurl, post/comment id and type.
	 * @returns {void}
	 * Action sends Post request to unsave endlpoint.
	 * @action unsave
	 * @param {Object} contains An object parameter has baseurl, post/comment id and type.
	 * @returns {void}
	 * Action sends Post request to vote endlpoint.
	 * @action vote
	 * @param {Object} contains An object parameter has baseurl, post/comment id, type and direction with indicate whether it is up/dow vote .
	 * @returns {void}
	 */
	async save(context, payload) {
		console.log('Mock save', payload);
		await new Promise((resolve) => setTimeout(resolve, 200));
		context.commit('setAction', { success: true });
	},
	async unsave(context, payload) {
		console.log('Mock unsave', payload);
		await new Promise((resolve) => setTimeout(resolve, 200));
		context.commit('setAction', { success: true });
	},
	async vote(_, payload) {
		console.log('Mock vote', payload);
		const { id, type, direction } = payload;

		if (type === 'post') {
			const post = mockPosts.children.find(
				(p) => p.data._id === id || p.data.id === id
			);
			if (post) {
				// Simple logic: just add direction to votes for visual effect if re-fetched
				// Real logic is complex (removing previous vote etc), but for demo this is fine
				post.data.votes += direction;
				post.data.vote = direction;
			}
		} else if (type === 'comment') {
			// Search in all comments
			for (const postId in mockComments) {
				const comments = mockComments[postId];
				const comment = comments.find((c) => c._id === id);
				if (comment) {
					comment.votes += direction;
					comment.vote = direction;
					break;
				}
			}
		}
	},
	async mention(_, payload) {
		console.log('Mock mention', payload);
	},
	async commentedUsers(context, payload) {
		console.log('Mock commentedUsers', payload);
		context.commit('setCommentedUsers', []);
	},
	async followPost(context, payload) {
		console.log('Mock followPost', payload);
		context.commit('setAction', { success: true });
	},
	async followComment(context, payload) {
		console.log('Mock followComment', payload);
		context.commit('setAction', { success: true });
	},
	async unfollowComment(context, payload) {
		console.log('Mock unfollowComment', payload);
		context.commit('setAction', { success: true });
	},
	async hide(context, payload) {
		console.log('Mock hide', payload);
		context.commit('setAction', { success: true });
	},
	async unhide(context, payload) {
		console.log('Mock unhide', payload);
		context.commit('setAction', { success: true });
	},
	async editPost(context, payload) {
		console.log('Mock editPost', payload);
	},
};
