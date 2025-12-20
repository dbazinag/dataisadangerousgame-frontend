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
				_id: 'liwc_method_001',
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
				_id: 'liwc_cluster_results_002',
				title:
					'Cluster Results: Who ‘Sounds Political’? (All Clusters + Toward-Politics Subset)',
				content: `
				<p>This post presents the main results of our LIWC-based analysis. We examine how the <strong>five objective writing-style scores</strong> and the <strong>political_score</strong> are distributed across clusters, and then repeat the analysis on a restricted subset of posts that explicitly go <em>toward Politics</em> as the target.</p>
				<br>

				<p>The goal here is not to measure topic frequency, but to understand <strong>how clusters differ in writing style</strong>, and which clusters use language that is most similar to the Politics cluster in LIWC signal space.</p>
				<br>

				<h3>All clusters</h3>
				<br>
				<iframe src="${baseUrl}/plotly/boxplots_polscore_from_cluster.html" title="Boxplots: LIWC scores across clusters"></iframe>
				<br>
				<p>The figure above shows the distribution of scores by cluster. We first focus on <strong>political_score</strong>, since it was constructed as a reference measure of similarity to political writing.</p>
				<br>

				<p><strong>Political score.</strong> The Politics cluster has the highest median political_score (approximately <strong>0.64</strong>). This result is expected, because political_score was explicitly designed so that political writing would be maximized relative to other clusters. Importantly, this score should be interpreted <em>relatively</em>: the farther a cluster’s median is from zero, the more similar its writing style is to that of the Politics cluster.</p>
				<br>

				<p>Two clusters follow closely behind Politics: <strong>Humor/Memes</strong> and <strong>Niche Interests</strong>. This does <em>not</em> mean that these clusters are the most political by topic. Rather, it suggests that their posts <strong>look similar in writing style</strong> to political posts when measured using LIWC features.</p>
				<br>

				<p>Inspecting the other score distributions helps explain where this similarity comes from. Politics, Humor/Memes, and Niche Interests all tend to show:</p>
				<ul>
					<li>low <strong>text_complexity_score</strong>,</li>
					<li>higher <strong>emotionality_score</strong>,</li>
					<li>higher <strong>argumentative_score</strong>, and</li>
					<li>higher <strong>social_score</strong>.</li>
				</ul>
				<p>Together, these characteristics describe a shared writing style that is emotionally expressive, socially oriented, and argumentative, with relatively low structural complexity.</p>
				<br>

				<p>For <strong>temporal_and_numbers_score</strong>, the medians across clusters are very similar, and the minimum and maximum values overlap substantially. As a result, this score is less informative for distinguishing clusters in this context.</p>
				<br>

				<h3>Other median patterns</h3>
				<p>Beyond political_score, several consistent patterns emerge when comparing medians across clusters:</p>
				<ul>
					<li><strong>Politics</strong> has the highest medians for emotionality, argumentative, and social scores.</li>
					<li><strong>Adult Life & Technology</strong> has the <strong>highest text_complexity_score</strong> and the <strong>lowest argumentative_score</strong>, indicating a more structured and informational writing style.</li>
					<li><strong>NSFW</strong> has the lowest emotionality_score, suggesting comparatively lower emotional expression.</li>
				</ul>
				<br>

				<p>Outliers also provide insight. Politics shows some of the <strong>largest emotionality outliers</strong>, meaning political posts can reach the highest observed levels of emotional intensity. In contrast, Adult Life & Technology shows large outliers and a high median for text complexity, which is consistent with longer and more structured discussions.</p>
				<br>

				<h3>Statistical validation</h3>
				<p>To determine whether these visual differences are statistically meaningful, we apply a <strong>Kruskal–Wallis test</strong> for each score. Because the score distributions are not normal, a non-parametric test is required.</p>
				<br>

				<p>For all five objective scores and political_score, the Kruskal–Wallis test yields <strong>significant p-values</strong>, indicating that at least some clusters differ systematically. We then apply <strong>Dunn’s post-hoc test</strong> to identify the most different pairs.</p>
				<br>

				<p>Across multiple scores, the most consistent and statistically significant separation is between <strong>Adult Life & Technology</strong> and <strong>Politics</strong>. This suggests that, even when clusters may discuss overlapping themes, they do so using <strong>fundamentally different writing styles</strong>.</p>
				<br>

				<h3>Toward-Politics subset</h3>
				<br>
				<iframe src="${baseUrl}/plotly/boxplots_polscore_toward_politics.html" title="Boxplots: toward Politics subset"></iframe>
				<br>
				<p>We repeat the analysis on a restricted subset of posts that explicitly go <strong>toward Politics</strong> as the target. This allows us to test whether the same stylistic differences persist when focusing only on politically directed interactions.</p>
				<br>

				<p>In this subset, <strong>Celebrities</strong> can show a high median political_score. However, this result should be interpreted with caution: the Celebrities cluster contains <strong>too few posts going toward Politics</strong> for the median to be stable or meaningful.</p>
				<br>

				<p>Despite this limitation, the overall pattern remains remarkably consistent. Even on this restricted subset, the <strong>strongest recurring difference</strong> remains between <strong>Adult Life & Technology</strong> and <strong>Politics</strong>, reinforcing the robustness of this stylistic distinction.</p>
				<br>

				<p><strong>Takeaway:</strong> These results show that clusters differ not only in what they talk about, but in <em>how they communicate</em>. Clusters that appear “close” to Politics in political_score are best understood as stylistically similar, rather than topically political.</p>
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
				_id: 'liwc_corr_trends_003',
				title:
					'Correlations + Time Trends: Which Traits Move Together, and When?',
				content: `
                    <p>After cluster comparisons, we checked (1) which scores move together and (2) whether the scores drift over time.</p>
                    <br>
                    <h3>Correlation Heatmap</h3>
                    <p>We computed a correlation matrix using the <strong>Pearson correlation coefficient</strong>.</p>
                    <br>
                    <img src="${baseUrl}/images/heatmapcorrelation.png" alt="Correlation heatmap of LIWC score categories" />
                    <br>
                    <p><strong>Interpretation note:</strong> political_score correlations with other scores are not treated as meaningful because political_score was constructed from features spanning the other categories (so some correlation is “baked in”).</p>
                    <br>
                    <p>For the <strong>5 objective scores</strong>, many correlations are statistically significant. Two relationships stand out:</p>
                    <ul>
                      <li><strong>argumentative_score</strong> vs <strong>temporal_and_numbers_score</strong> (positive correlation)</li>
                      <li><strong>emotionality_score</strong> vs <strong>social_score</strong> (positive correlation)</li>
                    </ul>
                    <br>
                    <p>Distributions for those pairs:</p>
                    <br>
                    <img src="${baseUrl}/images/argumentative_score_vs_temporal_and_numbers_score_distribution.png" alt="Argumentative vs temporal_and_numbers distribution" />
                    <br>
                    <img src="${baseUrl}/images/emotionality_score_vs_social_score_distribution.png" alt="Emotionality vs social distribution" />
                    <br>
                    <p>If multiple scores shift around the same period, it supports the idea that big moments correspond to measurable changes in communication style.</p>
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
				_id: 'post_hybrid_1',
				title: 'My Travels: A Photo Journal (Rich Content)',
				content: `
					<p>Here is a start to my journey. I went to the mountains first.</p>
					<br>
					<img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" alt="Mountains"/>
					<br>
					<p>The view was amazing. The air was crisp and the hike was challenging but rewarding. Then decided to head to the coast.</p>
					<br>
					<img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Beach"/>
					<br>
					<p>It was sunny and warm by the ocean.</p>
				`,
				kind: 'hybrid',
				subreddit: 'Travel',
				author: 'ADA',
				votes: 120,
				commentCount: 5,
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
				vote: 1,
				sharedPostDetails: null,
			},
		},
	],
	after: null,
};

export const mockComments = {
	liwc_method_001: [
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

	liwc_cluster_results_002: [
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

	liwc_corr_trends_003: [
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
};
