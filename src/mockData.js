const baseUrl =
	process.env.NODE_ENV === 'production' ? '/dataisadangerousgame-frontend' : '';

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
				_id: 'post1_2_2_5writing_scores',
				title:
					'How We Built 5 LIWC “Writing Style” Scores (And a Political Similarity Score)',
				content: `
                    <p>We ran a LIWC-style analysis over our dataset and started with <strong>86 LIWC features</strong>.</p>
                    <br>
                    <p><strong>Normalization:</strong> each feature was z-scored across the dataset, then we took the <strong>absolute value</strong>. The goal is to measure <em>strength</em> of a signal rather than direction, and make comparisons easier because higher always means “more of that property”.</p>
                    <br>
                    <div style="padding: 15px; background: whitesmoke; border-radius: 5px;">
                      <p>From those 86 features, we grouped them into <strong>5 objective category scores</strong> by averaging the abs(z) values of related LIWC properties:</p>
                      <ul>
                        <li><strong>text_complexity_score</strong>: structure + complexity (structural properties)</li>
                        <li><strong>emotionality_score</strong>: sentiment + emotion intensity</li>
                        <li><strong>argumentative_score</strong>: cognitive + argumentative markers</li>
                        <li><strong>temporal_and_numbers_score</strong>: past/present/future + quantities/numbers</li>
                        <li><strong>social_score</strong>: social + societal language</li>
                      </ul>
                    </div>
                    <br>
                    <p>We also created a <strong>political_score</strong> by summing a set of LIWC properties pulled across the 5 categories. This score is subjective by design: we constructed it so the <strong>Politics cluster</strong> should have the highest median political_score, to act as a reference “political writing” style.</p>
                    <br>
                    <p><strong>Important caveat:</strong> political_score does <em>not</em> mean “how much a cluster talks about politics”. It’s closer to “how similar their writing style and correlated LIWC signals are to the Politics cluster”.</p>
                    <br>
                    <p>Next: we compare clusters using non-parametric tests (<strong>Kruskal-Wallis</strong>) and post-hoc pairwise comparisons (<strong>Dunn’s test</strong>) to see what differences are robust.</p>
                  `,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1516,
				commentCount: 12,
				createdAt: '2025-12-19T10:00:00Z',
				images: [], // No images for preview fallback, text preview will be used
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
				_id: 'post2_2_2_cluster_results',
				title:
					'Cluster Results: Who ‘Sounds Political’? (All Clusters + Toward-Politics Subset)',
				content: `
				<p><em>Part 2 of our LIWC analysis series.</em> In this post, we compare how clusters distribute across the five objective writing-style scores and the political_score. We then repeat the analysis on a restricted subset of posts that explicitly go <em>toward Politics</em> as the target.</p>
				<br>

				<p>The goal is not to measure topic frequency, but to understand <strong>how clusters differ in writing style</strong>, and which clusters use language that is most similar to the Politics cluster in LIWC signal space.</p>
				<br>

				<h3>All clusters</h3>
				<br>
				<iframe src="${baseUrl}/plotly/boxplots_polscore_from_cluster.html" title="Boxplots: LIWC scores across clusters"></iframe>
				<br>

				<p>The figure above shows the distribution of scores by cluster. We first focus on <strong>political_score</strong>, since it was constructed as a reference measure of similarity to political writing.</p>
				<br>

				<p><strong>Political score.</strong> The Politics cluster has the highest median political_score (approximately <strong>0.64</strong>). This is expected, because political_score was explicitly designed so that political writing would be maximized relative to other clusters. Interpretation of this score is relative: clusters with medians farther from zero exhibit writing styles more similar to political discourse.</p>
				<br>

				<p>Two clusters follow closely behind Politics: <strong>Humor/Memes</strong> and <strong>Niche Interests</strong>. This does <em>not</em> imply that these clusters are the most political by topic. Rather, it suggests that their posts <strong>resemble political writing in style</strong> when evaluated using LIWC features.</p>
				<br>

				<p>Inspecting the other score distributions helps explain this similarity. Politics, Humor/Memes, and Niche Interests consistently show:</p>
				<ul>
					<li>low <strong>text_complexity_score</strong>,</li>
					<li>higher <strong>emotionality_score</strong>,</li>
					<li>higher <strong>argumentative_score</strong>, and</li>
					<li>higher <strong>social_score</strong>.</li>
				</ul>

				<p>Together, these characteristics describe a shared style that is emotionally expressive, socially oriented, and argumentative, with relatively low structural complexity.</p>
				<br>

				<p>For <strong>temporal_and_numbers_score</strong>, medians are similar across clusters and distributions overlap substantially, making this score less informative for distinguishing cluster styles.</p>
				<br>

				<h3>Other median patterns</h3>
				<ul>
					<li><strong>Politics</strong> has the highest emotionality, argumentative, and social medians.</li>
					<li><strong>Adult Life & Technology</strong> has the highest text_complexity and the lowest argumentative median, indicating a more structured, informational style.</li>
					<li><strong>NSFW</strong> has the lowest emotionality.</li>
				</ul>
				<br>

				<p>Outliers further reinforce these patterns. Politics shows some of the largest emotionality outliers, while Adult Life & Technology shows large outliers and high medians in text complexity.</p>
				<br>

				<h3>Statistical validation</h3>
				<p>Because score distributions are non-normal, we apply <strong>Kruskal–Wallis tests</strong> to detect cluster-level differences. All scores yield significant p-values, indicating systematic differences between clusters.</p>
				<br>

				<p>Using <strong>Dunn’s post-hoc test</strong>, the most consistent and statistically significant separation across multiple scores is between <strong>Adult Life & Technology</strong> and <strong>Politics</strong>. This suggests that these clusters differ strongly in writing style, even when discussing similar themes.</p>
				<br>

				<h3>Toward-Politics subset</h3>
				<br>
				<iframe src="${baseUrl}/plotly/boxplots_polscore_toward_politics.html" title="Boxplots: toward Politics subset"></iframe>
				<br>

				<p>This restricted analysis focuses only on posts that go <strong>toward Politics</strong> as the target. While <strong>Celebrities</strong> can show a high median political_score here, the cluster contains <strong>too few posts</strong> for that value to be stable.</p>
				<br>

				<p>Despite this limitation, the strongest recurring difference remains <strong>Adult Life & Technology vs Politics</strong>, reinforcing the robustness of the stylistic distinction.</p>
				<br>

				<p><em>Next:</em> in Part 3, we analyze how these writing-style scores relate to one another using correlation analysis across the full dataset.</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2034,
				commentCount: 18,
				createdAt: '2025-12-19T10:30:00Z',
				images: [],
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
				_id: 'post3_2_2_correlations',
				title: 'Correlations Between LIWC Writing-Style Scores',
				content: `
				<p><em>Part 3 of our LIWC analysis series.</em> This post examines how the writing-style scores relate to one another across the full dataset. Importantly, this analysis focuses on <strong>static relationships</strong> between scores and does <em>not</em> consider changes over time.</p>
				<br>

				<h3>Correlation heatmap</h3>
				<p>We compute pairwise correlations between scores using the <strong>Pearson correlation coefficient</strong>.</p>
				<br>

				<img src="${baseUrl}/images/heatmapcorrelation.png" alt="Correlation heatmap of LIWC score categories" />
				<br>

				<p><strong>Interpretation note:</strong> correlations involving political_score are not interpreted, since political_score was constructed using features drawn from the other categories. As a result, correlation is partly built in by design.</p>
				<br>

				<p>Among the <strong>five objective scores</strong>, several correlations are statistically significant. However, when considering both effect size and interpretability, two relationships stand out:</p>
				<ul>
					<li><strong>argumentative_score</strong> and <strong>temporal_and_numbers_score</strong>,</li>
					<li><strong>emotionality_score</strong> and <strong>social_score</strong>.</li>
				</ul>
				<br>

				<p>The distributions below illustrate these positive relationships.</p>
				<br>

				<img src="${baseUrl}/images/argumentative_score_vs_temporal_and_numbers_score_distribution.png" alt="Argumentative vs temporal_and_numbers distribution" />
				<br>

				<img src="${baseUrl}/images/emotionality_score_vs_social_score_distribution.png" alt="Emotionality vs social distribution" />
				<br>

				<p>These correlations suggest that certain writing-style traits tend to co-occur. For example, emotionally expressive posts also tend to use more social language, and argumentative posts often reference time and quantities.</p>
				<br>

				<p><em>Next:</em> building on these static relationships, the following section studies how writing styles evolve <strong>over time</strong> in response to major events.</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataViz',
				author: 'liwc_lab_notes',
				votes: 2199,
				commentCount: 20,
				createdAt: '2025-12-19T11:15:00Z',
				images: [], // Images are in content HTML, not here
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
				_id: 'post1_3_3_time_series_major_events',
				title:
					'LIWC Over Time: Did the 2016 US Election Change How Subreddits “Sound” Political?',
				content: `
				<p><em>Part 4 of our LIWC analysis series.</em> In this post, we move from static comparisons to a temporal perspective. We analyze how LIWC-based writing-style scores evolve over time, with a focus on whether major political events—specifically the 2016 US election—correspond to detectable changes in language use across clusters.</p>
				<br>

				<h3>Political score over time (all clusters)</h3>
				<br>
				<iframe src="${baseUrl}/plotly/political_score_twpol.html" title="Political score over time by cluster"></iframe>
				<br>

				<p>This plot shows how the <strong>political_score</strong> evolves from January 2014 to April 2017 for each cluster. At first glance, the time series does not show a clear or sustained spike during the 2016 election period (September–November 2016). Instead, fluctuations appear throughout the entire time span, with spikes occurring in multiple clusters at different points in time.</p>
				<br>

				<p>Based on visual inspection alone, it would be difficult to confidently attribute any specific change to the 2016 election. Importantly, however, the presence of frequent spikes also prevents us from concluding that there is <em>no</em> time-based effect.</p>
				<br>

				<p>To move beyond visual intuition, we apply a <strong>robust z-score spike test</strong> to the monthly political_score values.</p>
				<br>

				<p>This test identifies a statistically significant spike in <strong>November 2016</strong>, with a robust z-score of <strong>3.12</strong>. This month corresponds to the US presidential election and coincides with a sharp change in the number of hyperlinks originating from the Politics cluster.</p>
				<br>

				<p>Taken together, these results suggest that the 2016 election had an observable impact on how subreddits interacted with political content. The effect is not visible as a dramatic or persistent shift in writing style, but rather as a <strong>short-lived, statistically detectable deviation</strong> that aligns with increased political cross-linking.</p>
				<br>

				<h3>Posts toward Politics: political and emotional responses</h3>
				<br>
				<iframe src="${baseUrl}/plotly/political_score_twpol.html" title="Political score over time for posts toward Politics"></iframe>
				<br>

				<iframe src="${baseUrl}/plotly/emotion_score_time_series.html" title="Emotionality score over time for posts toward Politics"></iframe>
				<br>

				<iframe src="${baseUrl}/plotly/social_score_time_series.html" title="Social score over time for posts toward Politics"></iframe>
				<br>

				<p>We then restrict the analysis to <strong>posts that go toward Politics</strong> and examine how political_score, emotionality_score, and social_score evolve over time. As with the previous plot, visual inspection alone does not reveal a clear election-driven pattern.</p>
				<br>

				<p>Applying the same robust z-score spike test to these time series identifies a significant spike in <strong>April 2017</strong> for both political_score and emotionality_score. This month does not correspond to a major event in Donald Trump’s presidency.</p>
				<br>

				<p>Rather than indicating a single historical trigger, this result suggests a <strong>delayed or cumulative reaction</strong> in how subreddits respond to political content. It highlights that temporal effects may manifest through community dynamics rather than immediate responses to headline events.</p>
				<br>

				<p>Looking more closely at the <strong>Politics cluster</strong> itself, the <strong>social_score</strong> shows a spike in <strong>September 2016</strong>. While this spike is not visually dramatic, it occurs shortly before the election and suggests increased socially oriented language within political discourse during the campaign period.</p>
				<br>

				<p><strong>Takeaway:</strong> Time-based effects are subtle and cannot be inferred reliably from visual inspection alone. However, robust statistical testing reveals short-lived but meaningful deviations that align with major political events and shifts in cross-cluster interaction patterns.</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1780,
				commentCount: 6,
				customClass: 'zoomed-out-charts',
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
				vote: 0,
				sharedPostDetails: null,
			},
		},
	],
	after: null,
};

export const mockComments = {
	post1_2_2_5writing_scores: [
		{
			commentId: 'c_lm1_001',
			commentedBy: 'statsNewbie',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why take absolute value after z-scoring? Doesn’t that lose direction?\n',
					},
				],
			},
			votes: 36,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_lm1_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Here we are not interested in whether a LIWC feature is above or below average, but in how strongly it appears. Taking the absolute value lets us treat the score as an intensity measure and makes visual comparison across clusters much clearer.\n',
							},
						],
					},
					votes: 41,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
		{
			commentId: 'c_lm1_002',
			commentedBy: 'politicsReader',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Isn’t political_score subjective? How do you justify using it?\n',
					},
				],
			},
			votes: 24,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_lm1_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Yes, it is subjective by design. The goal was to construct a reference score where the Politics cluster has the highest median. We then interpret the score as similarity in writing style and associated LIWC signals, not as a measure of how often a cluster talks about politics.\n',
							},
						],
					},
					votes: 37,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
	],

	post2_2_2_cluster_results: [
		{
			commentId: 'c_lcr2_001',
			commentedBy: 'clusterWatcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Humor/Memes and Niche Interests being close to Politics is surprising. Does that mean they talk about politics a lot?\n',
					},
				],
			},
			votes: 52,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_lcr2_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Not necessarily. This score captures similarity in writing style and LIWC properties, not topic frequency. These clusters tend to use similar emotional, argumentative, and social language as the Politics cluster, even if they are not primarily discussing political topics.\n',
							},
						],
					},
					votes: 48,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
		{
			commentId: 'c_lcr2_002',
			commentedBy: 'testPolice',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [{ insert: 'Why Kruskal-Wallis instead of ANOVA?\n' }],
			},
			votes: 33,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_lcr2_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'The LIWC-derived scores do not follow a normal distribution, so ANOVA assumptions are violated. Kruskal-Wallis is the appropriate non-parametric alternative for comparing medians across multiple clusters.\n',
							},
						],
					},
					votes: 39,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
		{
			commentId: 'c_lcr2_003',
			commentedBy: 'sampleSizeCop',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why specifically call out Celebrities in the toward-Politics subset?\n',
					},
				],
			},
			votes: 19,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_lcr2_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Because the Celebrities cluster has very few posts going toward Politics. While its median political_score can appear high, the sample size is too small for that value to be stable or meaningful.\n',
							},
						],
					},
					votes: 26,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
	],

	post3_2_2_correlations: [
		{
			commentId: 'c_lct3_001',
			commentedBy: 'correlationIsNot',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why ignore political_score correlations with the other scores?\n',
					},
				],
			},
			votes: 29,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_lct3_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Because political_score was constructed using features from the other score categories. Correlation there is partly built-in by design, so it is not an independent or interpretable relationship.\n',
							},
						],
					},
					votes: 34,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
		{
			commentId: 'c_lct3_002',
			commentedBy: 'dataCurious',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why focus on argumentative vs temporal and emotionality vs social specifically?\n',
					},
				],
			},
			votes: 21,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_lct3_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'While several score pairs are statistically correlated, these two pairs stand out both in terms of effect size and interpretability. They also align well with how political and social discourse is expressed on Reddit.\n',
							},
						],
					},
					votes: 28,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
	],
	post1_3_3_time_series_major_events: [
		{
			commentId: 'c_401',
			commentedBy: 'stats_reader',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Interesting that the election doesn’t show a huge visible spike. Does that mean it had no effect?\n',
					},
				],
			},
			votes: 61,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_401_1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Not necessarily. The time series are noisy, so visual inspection alone isn’t reliable. That’s why we use the robust z-score spike test, which detects a statistically significant deviation in November 2016 aligned with the election.\n',
							},
						],
					},
					votes: 44,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
		{
			commentId: 'c_402',
			commentedBy: 'electionwatcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why does April 2017 spike if there was no major political event then?\n',
					},
				],
			},
			votes: 38,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_402_1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'This suggests delayed or cumulative effects rather than immediate reactions. Community responses to political content can evolve over time as discourse stabilizes or polarizes, even without a single triggering event.\n',
							},
						],
					},
					votes: 29,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
		{
			commentId: 'c_403',
			commentedBy: 'methodology_nerd',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert: 'Why use a robust z-score instead of a standard z-score?\n',
					},
				],
			},
			votes: 47,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_403_1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'The distributions are non-normal and contain outliers. Robust z-scores reduce sensitivity to extreme values and give more reliable spike detection in noisy time series.\n',
							},
						],
					},
					votes: 41,
					vote: 0,
					saved: false,
					followed: false,
					children: [],
					numberofChildren: 0,
					level: 2,
				},
			],
			numberofChildren: 1,
			level: 1,
		},
	],
};
