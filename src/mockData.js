export const mockUser = {
	username: 'ADA',
	accessToken: 'mock-token-ada',
	email: 'ada@example.com',
	avatar: 'https://www.redditstatic.com/avatars/avatar_default_02_A5A4A4.png',
	karma: 1000,
	createdAt: '2023-01-01T00:00:00.000Z',
};

export const mockPosts = {
	children: [
		{
			data: {
				_id: 'post1',
				title: 'Analysis of Reddit Data Trends',
				content:
					'<p>This is a deep dive into how data analysis can reveal interesting trends on Reddit. We analyzed millions of posts and comments to find patterns.</p>',
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'ADA',
				votes: 1500,
				commentCount: 42,
				createdAt: new Date().toISOString(),
				images: [],
				video: '',
				link: '',
				nsfw: false,
				spoiler: false,
				flairId: null,
				sendReplies: true,
				saved: false,
				hidden: false,
				vote: 1, // Upvoted by current user
				sharedPostDetails: null,
			},
		},
		{
			data: {
				_id: 'post2',
				title: 'Visualizing Network Graphs',
				content: '',
				kind: 'image',
				subreddit: 'Visualization',
				author: 'ADA',
				votes: 850,
				commentCount: 12,
				createdAt: new Date(Date.now() - 86400000).toISOString(),
				images: ['https://i.imgur.com/ExampleGraph.png'], // Placeholder
				imageCaptions: ['A beautiful network graph'],
				imageLinks: [''],
				video: '',
				link: '',
				nsfw: false,
				spoiler: false,
				flairId: null,
				sendReplies: true,
				saved: false,
				hidden: false,
				vote: 0,
				sharedPostDetails: null,
			},
		},
		{
			data: {
				_id: 'post3',
				title: 'The Danger of Misinterpreting Data',
				content:
					'<p>Correlation does not imply causation. Here are some famous examples of spurious correlations.</p>',
				kind: 'hybrid',
				subreddit: 'Statistics',
				author: 'ADA',
				votes: 2300,
				commentCount: 105,
				createdAt: new Date(Date.now() - 172800000).toISOString(),
				images: [],
				video: '',
				link: '',
				nsfw: false,
				spoiler: false,
				flairId: null,
				sendReplies: true,
				saved: true,
				hidden: false,
				vote: 1,
				sharedPostDetails: null,
			},
		},
	],
	after: null,
};

export const mockComments = {
	post1: [
		{
			commentId: 'c1',
			commentedBy: 'DataNerd123',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'This is a fascinating analysis! Did you consider temporal factors?\n',
					},
				],
			},
			votes: 50,
			vote: 0,
			saved: false,
			followed: false,
			children: [],
			numberofChildren: 0,
			level: 1,
		},
		{
			commentId: 'c2',
			commentedBy: 'VisGuru',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Great work. The visualization in section 3 is particularly clear.\n',
					},
				],
			},
			votes: 30,
			vote: 1,
			saved: false,
			followed: false,
			numberofChildren: 1,
			level: 1,
			children: [
				{
					commentId: 'c3',
					commentedBy: 'ADA',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Agreed, I used a similar technique in my last project.\n',
							},
						],
					},
					votes: 10,
					vote: 1,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
		},
	],
};
