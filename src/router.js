import { createRouter, createWebHashHistory } from 'vue-router';

import MainPage from './pages/users/MainPage.vue';
import UserPage from './pages/users/UserPage.vue';
import SubmitPage from './pages/submit/SubmitPage.vue';
import SubredditPage from './pages/subreddits/SubredditPage.vue';
import TopCommunitiesPage from './pages/subreddits/TopCommunitiesPage.vue';

import TheOverview from './pages/users/PagesComponents/TheOverview.vue';
import AwardsGiven from './pages/users/PagesComponents/AwardsGive.vue';
import AwardsReceived from './pages/users/PagesComponents/AwardsRecieved.vue';
import TheComments from './pages/users/PagesComponents/TheComments.vue';
import TheDownvoted from './pages/users/PagesComponents/TheDownvoted.vue';
import TheUpvoted from './pages/users/PagesComponents/TheUpvoted.vue';
import TheHidden from './pages/users/PagesComponents/TheHidden.vue';
import TheHistory from './pages/users/PagesComponents/TheHistory.vue';
import ThePosts from './pages/users/PagesComponents/ThePosts.vue';
import TheSaved from './pages/users/PagesComponents/TheSaved.vue';

import NotFound from './pages/NotFound.vue';
import InternalServer from './pages/InternalServer.vue';

import PostComments from './components/PostComponents/PostComments.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', redirect: '/main' },
		{
			path: '/main',
			alias: '/main/:title/',
			component: MainPage,
			children: [
				{
					name: 'comments',
					path: '/r/:subredditName/comments/:postId/:postName',
					component: PostComments,
				},
				{
					name: 'userPostComments',
					path: '/user/:userName/comments/:postId/:postName',
					component: PostComments,
				},
			],
		},
		{
			path: '/user/:userName',
			name: 'user',
			component: UserPage,
			children: [
				{ path: '/user/:userName/', component: TheOverview },
				{ path: '/user/:userName/submitted', component: ThePosts },
				{ path: '/user/:userName/comments', component: TheComments },
				{ path: '/user/:userName/history', component: TheHistory },
				{ path: '/user/:userName/saved', component: TheSaved },
				{ path: '/user/:userName/hidden', component: TheHidden },
				{ path: '/user/:userName/upvoted', component: TheUpvoted },
				{ path: '/user/:userName/downvoted', component: TheDownvoted },
				{ path: '/user/:userName/gilded', component: AwardsReceived },
				{ path: '/user/:userName/gilded/given', component: AwardsGiven },
				{
					path: '/user/:userName/comments/:postId/:postTitle',
					component: PostComments,
				},
			],
			props: true,
		},
		{
			path: '/r/:subredditName',
			alias: '/r/:subredditName/:title',
			name: 'subreddit',
			component: SubredditPage,
			props: true,
		},
		{ path: '/submit', name: 'submit', component: SubmitPage, props: true },
		{
			path: '/subreddits/leaderboard',
			name: 'leaderboard',
			component: TopCommunitiesPage,
			children: [
				{
					path: '/subreddits/leaderboard/:category',
					name: 'leaderboard-category',
					component: TopCommunitiesPage,
				},
				{
					path: '/subreddits/leaderboard/',
					component: TopCommunitiesPage,
				},
			],
		},
		{ path: '/internal-server-error', component: InternalServer },
		{ path: '/:notFound(.*)', component: NotFound },
	],
});

export default router;
