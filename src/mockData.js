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
				_id: 'post0_0_intro',
				title:
					"Data Is A Dangerous Game: Exploring Reddit's Political Discourse During the 2016 Election",
				content: `
				<h3>The Question That Started It All</h3>
				<p>What happens to online political discourse during one of the most contentious elections in modern history? Does the internet become more polarized, more hostile, more divided? And if so, how can we actually measure that?</p>
				<br>
				<p>This project dives deep into Reddit's political landscape during the 2016 U.S. presidential election, using data science to uncover patterns that aren't visible to the naked eye. We're not just counting posts or tracking keywords, we're mapping communities, analyzing linguistic patterns, examining demographics, and tracing how discourse evolved over three years.</p>
				<br>

				<h3>Our Approach: A Four-Act Story</h3>
				<p>We structured our analysis as a journey with four distinct Acts, each building on the previous one:</p>
				<br>

				<div style="padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white; margin: 10px 0;">
					<h4 style="color: white; margin-top: 0;">Act 1: Setting the Stage</h4>
					<p style="margin-bottom: 0;">Before we can analyze politics, we need to understand Reddit's overall structure. Is it one giant blob, or a collection of distinct communities? We'll map Reddit's clusters, examine hyperlink patterns, and develop linguistic scores to understand who "sounds political."</p>
				</div>

				<div style="padding: 15px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; color: white; margin: 10px 0;">
					<h4 style="color: white; margin-top: 0;">Act 2: Zooming Into Politics</h4>
					<p style="margin-bottom: 0;">Now we dive into political communities specifically. We'll classify subreddits as left, right, or neutral, then investigate echo chambers, cross-ideological hostility, and where negativity concentrates. The findings here challenge common assumptions about online polarization.</p>
				</div>

				<div style="padding: 15px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 8px; color: white; margin: 10px 0;">
					<h4 style="color: white; margin-top: 0;">Act 3: Who's Actually Talking?</h4>
					<p style="margin-bottom: 0;">Structure is important, but who's participating matters just as much. We'll examine gender dynamics in political Reddit, exploring comment patterns, controversiality, upvotes, and how different political camps engaged during election week. The demographic patterns reveal how the platform amplifies certain voices over others.</p>
				</div>

				<div style="padding: 15px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 8px; color: white; margin: 10px 0;">
					<h4 style="color: white; margin-top: 0;">Act 4: Evolution Over Time</h4>
					<p style="margin-bottom: 0;">Finally, we pull back to see the big picture. How did Reddit's political discourse evolve from 2014 to 2017? When did the Politics cluster become the "black mole" of Reddit? And here's the climax: does the 2016 election actually show up in the data, or did Reddit just keep being Reddit?</p>
				</div>
				<br>

				<h3>Our Data & Methods</h3>
				<p>We analyzed Reddit data spanning 2014-2017, combining multiple approaches:</p>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li><strong>Subreddit clustering</strong> based on user posting patterns</li>
						<li><strong>Hyperlink network analysis</strong> to map community interactions</li>
						<li><strong>LIWC (Linguistic Inquiry and Word Count)</strong> for measuring emotional tone, argumentative style, and social language</li>
						<li><strong>Political classification</strong> using hybrid methodology (manual labeling + semantic analysis + zero-shot classification)</li>
						<li><strong>Sentiment analysis</strong> on hyperlinks to track negativity</li>
						<li><strong>Statistical testing</strong> including chi-square, Mann-Whitney U, Kruskal-Wallis, and robust z-score spike detection</li>
					</ul>
				</div>
				<br>

				<h3>What You'll Discover</h3>
				<p>As you scroll through this analysis, you'll find some results that confirm your intuitions and others that completely challenge them. Echo chambers exist, but they're not symmetric. Negativity is concentrated, not universal. The gender gap is about participation, not intensity. And the 2016 election? Well, you'll have to read to the end to see what we found.</p>
				<br>
				<p><strong>Ready to dive in? Let's start by asking: does Reddit even have structure, or is it just chaos?</strong></p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 4250,
				commentCount: 0,
				createdAt: '2025-12-18T07:00:00Z',
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
				_id: 'post0_2_1_intro_structure',
				title:
					'Is Reddit just one big mess, or does it actually have structure?',
				content: `
					<p>Before doing any analysis, we had to answer a basic question: <strong>Is Reddit basically one giant blob of subreddits, or a map of distinct communities?</strong></p>
					<br>
					<p>We clustered subreddits based on who posts where, not on topic labels. The result is an interactive map where distance means shared users.</p>
					<p>It’s not perfect, but it gives a concrete way to see whether Reddit has real structure or not. The map is linked below.</p>
					<br>
					<iframe src="${baseUrl}/plotly/cluster_map.html" title="Cluster Map" class="cluster-map-frame" scrolling="no"></iframe>
					<br>
					<p>A lot of our analysis depends on our ability to correctly cluster all the subreddits in categories. After testing a lot of different clustering methods and hyperparameters here is our final map.</p>
					<br>
					<p>The map is not perfect but we distinguish visually some clusters, the best ones are Celebrities, Lifestyle, Politics, Gaming and Adult Life and Technology. The others are a bit mixed and don't separate well, avoiding outliers. We also see that the NSFW cluster is almost all at bottom left even though it is formed by multiple clusters.</p>
					<br>
					<p>We matched cluster the ID with theme manually by looking at subreddits in the different clusters. It is a bit subjective since there is a lot of subs that are unclassifiable (and there are globally pornographic subs in every cluster) and also because the clusters aren't perfect at all. First the embeddings were made by using a 'who posts where' method, so if one user posts in two different subs their embeddings will be close (in direction). Thus, the embeddings are not totally grouped by theme but by community of users; if many users post in r/cooking and in r/donaldtrump actively they may be clustered together because seen similar by the algorithm. These clusters must be taken cautiously especially the big ones since they regroup a lot of unclassifiable subreddits.</p>
					<br>
					<iframe src="${baseUrl}/plotly/cluster_distribution.html" title="Cluster Distribution" scrolling="no"></iframe>
					<br>
					<p>It is interesting that the clusters are not evenly distributed at all but it was to be expected. Our politics cluster contains about 2 thousand subreddits making it ~ 4 % of the dataset. The biggest one 'NSFW' is about 26 % and the smallest 'Celebrities' about 1 %.</p>
					<br>
					<h3>Upon close inspection of the map, the answer to the question "Is Reddit basically one giant blob of subreddits, or a map of distinct communities?" is: Its both.</h3>
					<p>Some clusters jump out immediately while others are messier, with overlaps and a lot of outliers. But the political cluster stands out which is what we’re looking for!</p>
					<p>So the map isn’t a clean taxonomy of Reddit, it's more like a map of shared communities, and it works best when you keep that in mind. Now let’s see how those clusters behave with each other by studying their hyperlinks!</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 3500,
				commentCount: 0,
				createdAt: '2025-12-18T09:00:00Z',
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
				customClass: 'first-post-charts',
			},
		},
		{
			data: {
				_id: 'post1_2_2_hyperlinks_analysis',
				title:
					"Which Reddit clusters link the most to others? Turns out it's not who you'd expect",
				content: `
				<p><strong>Now that we've established Reddit has structure</strong>, the next question is: how do these communities actually interact? Do they talk to each other, or do they mostly keep to themselves?</p>
				<br>
				<p>To answer this, we analyzed hyperlink patterns between subreddit clusters across the entire dataset.</p>
				<br>
				<p>The core question: <strong>Who links out the most, and who gets linked to the most?</strong></p>
				<br>

				<h3>Methodology</h3>
				<p>We aggregated all hyperlinks in our dataset and grouped them by source and target clusters. This allowed us to measure:</p>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li>Outgoing links (Source Activity): The total volume of hyperlinks posted by each cluster</li>
						<li>Incoming links (Target Activity): The total volume of hyperlinks received by each cluster</li>
					</ul>
				</div>
				<br>

				<h3>Source Activity: Who Links Out the Most?</h3>
				<p>The chart below shows the total volume of outgoing hyperlinks from each cluster:</p>
				<br>
				<iframe src="${baseUrl}/plotly/overall_source_activity.html" title="Outgoing hyperlinks by cluster" scrolling="no"></iframe>
				<br>
				<p>Three clusters clearly dominate the outgoing link activity: Humor/Memes, Politics, and Adult Life & Technology. These communities are by far the most active in sharing hyperlinks to other parts of Reddit.</p>
				<br>

				<h3>Target Activity: Who Gets Linked To?</h3>
				<p>Similarly, when we examine which clusters receive the most incoming hyperlinks, a nearly identical pattern emerges:</p>
				<br>
				<iframe src="${baseUrl}/plotly/overall_target_activity.html" title="Incoming hyperlinks by cluster" scrolling="no"></iframe>
				<br>
				<p>Once again, the same three clusters dominate: Humor/Memes, Adult Life & Technology, and Politics.</p>
				<br>

				<h3>What Makes This Surprising?</h3>
				<p>Here's the key insight: these are not the largest clusters by subreddit count. In fact, none of these three are even in the top 5 largest clusters. Yet they are overwhelmingly the most active when it comes to linking behavior and cross-cluster references.</p>
				<br>
				<p>This reveals something fundamental about Reddit's network structure: size doesn't equal influence. While some clusters may contain more subreddits, it's the linking behavior that determines centrality and visibility within the broader Reddit ecosystem.</p>
				<br>
				<h3>The Central Position of Politics</h3>
				<p>Of particular interest to our analysis is the Politics cluster. Despite representing only approximately 4% of all subreddits in our dataset, it occupies a remarkably central position in Reddit's hyperlink network.</p>
				<br>
				<p>Politics ranks consistently high in both outgoing and incoming link activity. This dual prominence suggests that:</p>
				<div style="padding: 15px; background: whitesmoke; border-radius: 5px;">
					<ul>
						<li>Political communities actively reference and engage with other parts of Reddit</li>
						<li>Other communities frequently link back to political discussions</li>
						<li>Political content serves as a nexus point for cross-community discourse</li>
					</ul>
				</div>
				<br>

				<h3>Key Takeaways</h3>
				<p>The clusters with the highest linking activity are not necessarily the largest ones. Instead, certain communities, particularly Politics, Humor/Memes, and Adult Life & Technology, punch far above their weight in terms of network connectivity and cross-cluster interaction.</p>
				<br>
				<p>This pattern sets the stage for deeper questions: <em>Does linking behavior correlate with linguistic style? Do communities that link frequently to Politics adopt similar communication patterns?</em> Let's find out.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1872,
				commentCount: 14,
				createdAt: '2025-12-18T11:00:00Z',
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
				_id: 'post1_2_3_5writing_scores',
				title: 'Cluster result: Who sounds political?',
				content: `
                    <p><strong>We just saw that Politics is central in Reddit's hyperlink network.</strong> But does this centrality show up in how people actually write? To answer that, we wanted to see where <strong>r/Politics</strong> stands linguistically compared to other clusters.</p>
                    <br>
                    <p>We calculated five distinct scores based on LIWC categories to describe the writing style of a post:</p>
                    <br>
                    <div style="padding: 15px; background: whitesmoke; border-radius: 5px;">
                      <ul>
                        <li><strong>Emotionality</strong>: Measures the intensity of sentiment and emotional language.</li>
                        <li><strong>Argumentative</strong>: Captures cognitive processes and markers of debate or argumentation.</li>
                        <li><strong>Social</strong>: Tracks references to family, friends, and social groups.</li>
                        <li><strong>Temporal & Numbers</strong>: Looks at references to time (past/future) and quantitative language.</li>
                        <li><strong>Text Complexity</strong>: Evaluates sentence structure and vocabulary sophistication.</li>
                      </ul>
                    </div>
                    <br>
                    <p>We also constructed a composite <strong>“Political-Style” score</strong>. This doesn't measure how <em>political</em> the topic itself is, but rather how much the writing style resembles the typical patterns found in r/Politics posts.</p>
                    <br>
                    
                    <h3>Overall Cluster Comparison</h3>
                    <p>The interactive plot below compares the distribution of these scores across all identified subreddit clusters. You can see how the "Politics" cluster (on the far right) generally scores higher in argumentative and social language compared to others.</p>
                    <br>
                    <iframe src="${baseUrl}/plotly/boxplots_polscore_from_cluster.html" title="Boxplots: LIWC scores across clusters" scrolling="no"></iframe>
                    <br>

                    <h3>Focus: Posts “Toward Politics”</h3>
                    <p>Next, we narrowed our focus to only those posts that are directly <strong>replying to or referencing r/Politics</strong>. This helps us see if the writing style of other communities changes when they engage directly with political content.</p>
                    <br>
                    <iframe src="${baseUrl}/plotly/boxplots_polscore_toward_politics.html" title="Boxplots: toward Politics subset" scrolling="no"></iframe>
                    <br>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1516,
				commentCount: 12,
				createdAt: '2025-12-18T13:00:00Z',
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
				_id: 'post2_2_3_cluster_results',
				title: 'Discussion: Who talks like Politics?',
				content: `
				<p><strong>Now that we have these writing style scores</strong>, what do they actually tell us about who talks like Politics?</p>
				<br>
				<p>The results align with our intuition but offer some noticeable surprises.</p>
				<br>
				<p>The <strong>Politics</strong> cluster performs exactly as you might expect: it is significantly more emotional, more argumentative, and more social, while being less structured than other communities.</p>
				<br>
				<p>What is surprising, however, is that the <strong>Humor/Memes</strong> and <strong>Niche Interests</strong> clusters aren’t far behind. While their specific topics differ, their stylistic “vibe”, emotional, social, and loose in structure, is remarkably similar to political discourse.</p>
				<br>
				<p>In contrast, the <strong>Adult Life & Technology</strong> cluster sits at the opposite end of the spectrum: highly structured, less emotional, and less argumentative. Statistically, this represents the strongest stylistic gap we found, obtaining even when we look only at posts replying to Politics.</p>
				<br>
				<p><strong>Takeaway:</strong> The distinction isn’t just about <em>who</em> is discussing politics, but rather <em>who communicates like</em> a political poster.</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2034,
				commentCount: 18,
				createdAt: '2025-12-18T15:00:00Z',
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
				_id: 'post3_2_3_correlations',
				title: 'Correlations: And how do those features react to each other?',
				content: `
				<p>In this section, we examined how the different LIWC-based writing style scores correlate with one another across the entire dataset.</p>
				<br>

				<h3>Correlation Heatmap</h3>
				<p>The heatmap below provides a visual overview of these relationships. <em>Note: We ignore the "Political-Style" score here, as it is naturally correlated with the others by design. Our interest lies in how the distinct writing features interact with each other.</em></p>
				<br>
				<img src="${baseUrl}/images/heatmapcorrelation.png" alt="Correlation heatmap of LIWC score categories" />
				<br>

				<p>We computed Pearson correlation coefficients and p-values for the five main scores. While many feature pairs show statistically significant correlations (e.g., text complexity with emotionality), most of these relationships are weak or not visually distinct in the data. However, <strong>two specific correlations</strong> stood out as particularly strong and meaningful:</p>
                <div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
                    <ul>
                        <li><strong>Argumentative Score vs. Temporal & Numbers Score</strong></li>
                        <li><strong>Emotionality Score vs. Social Score</strong></li>
                    </ul>
                </div>
				<br>
                <p>Both pairs show a positive correlation. The relationship between <strong>Emotionality</strong> and <strong>Social</strong> scores is especially notable because r/Politics posts score highest in both. This suggests that on Reddit, higher emotional expression typically accompanies references to social groups, people, and societal context.</p>
                <br>
                <p>The distributions below illustrate these two key relationships:</p>

				<img src="${baseUrl}/images/argumentative_score_vs_temporal_and_numbers_score_distribution.png" alt="Argumentative vs temporal_and_numbers distribution" />
				<br>
                <p><em>(Above: Posts that are more argumentative tend to use more specific numbers and time-based references.)</em></p>
                <br>

				<img src="${baseUrl}/images/emotionality_score_vs_social_score_distribution.png" alt="Emotionality vs social distribution" />
				<br>
                <p><em>(Above: Highly emotional posts are almost inherently more social, referencing people and groups frequently.)</em></p>
                <br>

				<p><strong>Conclusion:</strong> Only these two correlations provided strong, interpretable signals. For political analysis, the link between emotion and social language is critical: emotional rhetoric on Reddit is rarely abstract, it is almost always tied to references to people, groups, and social context. With these linguistic tools in hand, we're now ready to zoom in specifically on political communities.</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataViz',
				author: 'liwc_lab_notes',
				votes: 2199,
				commentCount: 20,
				createdAt: '2025-12-18T17:00:00Z',
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
				_id: 'post1_1_1_politicalClustering',
				title:
					"Mapping Reddit's Political Landscape: Who's Left, Right, and Neutral?",
				content: `
				<p><strong>We now know Politics is central to Reddit's network and has a distinct linguistic style.</strong> But to really understand political discourse on Reddit, we need to go deeper. Not all political subreddits are the same, some are left-leaning, some right-leaning, and some neutral. Let's map out this landscape.</p>
				<br>
				<h3>Starting Point: The Political Map</h3>
				<p>We start by mapping the political landscape of Reddit at the subreddit level. Using a large collection of subreddit embeddings, we first identify communities that are explicitly political and where they fall on the left-right spectrum.</p>
				<br>
				<p>This allows us to move beyond predefined labels and instead capture how subreddits relate to each other based on the language and topics they use.</p>
				<br>

				<h3>Hybrid Methodology: Combining Multiple Approaches</h3>
				<p>Rather than relying on just one method, we combined several approaches. Some subreddits are obviously tied to specific political movements, which makes them easy to classify. For less clear cases, we looked at the semantic cues from their names and short zero-shot language classification.</p>
				<br>
				<p>This hybrid approach helps reduce bias from any single method and produces stable, interpretable clusters.</p>
				<br>

				<h3>The Result: A Clean Three-Way Split</h3>
				<p>The result? A split into Left, Right, and Neutral political subreddits. We visualized these clusters to make sure they actually separate cleanly, and this breakdown became the foundation for analysis in political subreddits level.</p>
				<br>
				<p>Specifically, we looked at how these communities interact, how negativity spreads across different political ideologies, and whether echo chambers exist on both sides of the spectrum.</p>
				<br>

				<h3>What This Enables</h3>
				<p>With this political clustering in place, we can now ask much more targeted questions: Do left-leaning communities behave differently than right-leaning ones? Where does negativity concentrate? And most importantly, does political discourse on Reddit actually cross ideological lines, or does everyone just talk to people who already agree with them?</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2341,
				commentCount: 16,
				createdAt: '2025-12-18T19:00:00Z',
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
				_id: 'post2_1_1_echoChambers',
				title: 'Are Political Communities Echo Chambers?',
				content: `
				<h3>The Core Question</h3>
				<p>Main question: do political subreddits mostly talk to communities that already agree with them?</p>
				<br>
				<p>This is one of the most important questions we can ask about political discourse online. If political communities only engage with those who share their ideology, then Reddit becomes a collection of isolated bubbles rather than a space for genuine political discussion.</p>
				<br>

				<h3>Measurement and Methodology</h3>
				<p>We tracked political interactions through hyperlinks, when one subreddit references another in a post. We focused specifically on political-to-political links, where both the source and target subreddits have clear ideological labels.</p>
				<br>
				<p>For each link, we marked whether it was "same-side" (both subreddits share the same ideology) or "cross-side" (they don't). Then we calculated what percentage of each group's interactions stayed within their own camp.</p>
				<br>
				<p>To see if these patterns actually differed across ideological groups, we set up a chi-square test of independence, which is appropriate for categorical count data and does not assume any distributional form. We visualized this with heatmaps and a contingency table showing who talks to whom.</p>
				<br>

				<h3>The Striking Results</h3>
				<p>The results were striking (χ² = 4732.8, p < 0.001). There's a clear, statistically significant relationship between a subreddit's ideology and who it interacts with.</p>
				<br>
				<img src="${baseUrl}/images/echo.jpeg" alt="Echo chamber table showing same-side interaction rates" style="max-width: 100%; height: auto;">
				<br>
				<p>Left-leaning subreddits show strong echo-chamber behavior, over 83% of their political interactions happen with other left-leaning communities. Right-leaning and neutral subreddits, on the other hand, engage much more frequently across ideological lines, with only about 12.5% and 11% same-side interactions respectively.</p>
				<br>
				<iframe src="${baseUrl}/plotly/political_clusters_interaction.html" title="Political cluster interaction heatmap" scrolling="no"></iframe>
				<br>

				<h3>Interpretation: Echo Chambers Aren't Symmetric</h3>
				<p>This tells us that echo chambers aren't the same on both sides of the political spectrum. While everyone does some cross-ideological engagement, left-leaning communities are far more inward-looking.</p>
				<br>
				<p>This asymmetry has important implications for how political discourse operates on Reddit. It suggests that the structure of online political discussion isn't just about polarization in general, but about specific patterns of engagement that vary by ideology.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2847,
				commentCount: 18,
				createdAt: '2025-12-18T21:00:00Z',
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
				_id: 'post3_1_1_liwcAnger',
				title: 'LIWC Anger Analysis: Does Crossing Sides Make People Angrier?',
				content: `
				<h3>The Hostility Hypothesis</h3>
				<p>To see if talking across ideological lines leads to more hostility, we analyzed the actual language people use in these interactions. Do people get angrier when they engage with the other side, or is anger evenly distributed regardless of who you're talking to?</p>
				<br>

				<h3>Measurement and Methodology</h3>
				<p>We used LIWC (Linguistic Inquiry and Word Count), a tool that measures emotional tone by counting words associated with:</p>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li>LIWC_Anger</li>
						<li>LIWC_Negemo (negative emotion)</li>
						<li>LIWC_Anx (anxiety)</li>
					</ul>
				</div>
				<br>
				<p>Because LIWC scores are highly skewed, zero-inflated, and non-normally distributed, we compare affective intensity between same-side and cross-side political interactions using Wilcoxon rank-sum (Mann-Whitney U) tests. This non-parametric test is robust to unequal sample sizes and distributional irregularities.</p>
				<br>
				<p>Missing LIWC values (NaNs), which arise when no words from a given category appear in a post, are excluded on a per-test basis rather than being treated as zeros, to avoid artificially suppressing affective differences.</p>
				<br>
				<p>We visualized the results with boxplots to see how the distributions compared, looking at medians, spread, and overlap.</p>
				<br>

				<h3>Surprising Results: No Difference</h3>
				<iframe src="${baseUrl}/plotly/anger_anx_negemo_political_sides.html" title="LIWC anger, anxiety, and negative emotion comparison" scrolling="no"></iframe>
				<br>
				<p>Surprisingly, there's basically no difference in anger between same-side and cross-ideological conversations (U = 4.40 × 10⁸, p = 0.61). The distributions of anger, anxiety, and negative emotion look almost identical, with nearly the same medians.</p>
				<br>

				<h3>Interpretation: Polarization Isn't About Hostility</h3>
				<p>This suggests that political polarization on Reddit isn't really about people getting angrier when they argue with the other side. Instead, the divide shows up more in who people choose to engage with rather than in explosive, hostile language when they do cross paths.</p>
				<br>
				<p>Think about it this way: when left-leaning and right-leaning communities do interact (which doesn't happen often), they're not necessarily more antagonistic than when talking to their own side. The problem isn't that cross-ideological discourse is toxic,it's that it barely happens at all.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2198,
				commentCount: 15,
				createdAt: '2025-12-18T23:00:00Z',
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
				_id: 'post4_1_1_negativityConcentration',
				title:
					'Concentration of Negativity: A Few Subreddits Drive Most Hostility',
				content: `
				<h3>Measuring Negativity in Political Interactions</h3>
				<p>We tagged each hyperlink as either positive or negative based on its sentiment. To understand how negativity spreads across political subreddits, we calculated several measures:</p>
				<br>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li><strong>Negativity rate</strong>: what percentage of a subreddit's outgoing links are labeled as negative</li>
						<li><strong>Weighted negativity</strong>: accounts for both hostility and activity volume</li>
						<li><strong>Bayesian-smoothed negativity</strong>: incorporates a global prior to stabilize estimates for low-activity subreddits</li>
					</ul>
				</div>
				<br>
				<p>The weighted negativity formula accounts for both how negative a community is and how active it is:</p>
				<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">weighted_negativity = negativity_rate × log(1 + total_links)</pre>
				<br>
				<p>Negativity concentration is assessed by ranking subreddits by their number of negative outgoing links and computing cumulative shares of total negativity. This descriptive, inequality-based approach is well suited for identifying structural concentration without relying on parametric assumptions.</p>
				<br>

				<h3>The Concentration Finding: 91.6% from Top 10%</h3>
				<p>Negative political interactions are incredibly concentrated. Just the top 10% of political subreddits are responsible for 91.60% of all negative interactions.</p>
				<br>
				<img src="${baseUrl}/images/top_ranked_poli_subs.jpeg" alt="Top ranked political subreddits by negativity" style="max-width: 100%; height: auto;">
				<br>

				<h3>It's a Communication Style</h3>
				<p>What's really important here is that this pattern holds even after we account for how active different subreddits are. This means negativity isn't just happening because some communities are bigger or busier. Instead, being antagonistic seems to be a *deliberate communication style* chosen by a small number of communities.</p>
				<br>
				<p>In other words, most political subreddits aren't consistently hostile, the negative discourse is driven disproportionately by a few highly antagonistic actors.</p>
				<br>

				<h3>Implication: Targeting Matters</h3>
				<p>This concentration has important practical implications. If you wanted to reduce political hostility on Reddit, you wouldn't need to change the behavior of all political communities. You'd need to focus on a relatively small number of highly negative subreddits that are driving the bulk of antagonistic discourse.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2563,
				commentCount: 17,
				createdAt: '2025-12-19T01:00:00Z',
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
				_id: 'post5_1_1_negativityByIdeology',
				title: 'Does Negativity Differ by Political Side?',
				content: `
				<h3>The Question: Is Negativity Evenly Distributed?</h3>
				<p>We wanted to know if left-leaning, right-leaning, and neutral communities differ in how negative they are *after controlling for how active they are*. This goes beyond just counting negative links, it asks whether negativity is a structural characteristic of certain ideological positions.</p>
				<br>

				<h3>Measurement and Methodology</h3>
				<p>For each group and each month, we calculated:</p>
				<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">neg_rate = (negative_PN_links) / (total_PN_links)</pre>
				<p>This controls for differences in overall interaction volume.</p>
				<br>
				<p>We used a Kruskal-Wallis test (a statistical method that works well for skewed data) to see if the groups differ overall. Monthly trends are visualized using time-series line plots of normalized negativity rates by ideological group.</p>
				<br>

				<h3>Results: Ideology Matters</h3>
				<iframe src="${baseUrl}/plotly/normalized_political_negativity_overtime.html" title="Normalized political negativity over time by ideology" scrolling="no"></iframe>
				<br>
				<p>The Kruskal-Wallis test reveals a highly significant difference in negativity across ideological groups (H = 61.47, p < 0.001). Even after accounting for differences in activity levels, negativity is not evenly distributed across the political spectrum.</p>
				<br>
				<p>Follow-up pairwise tests showed that left vs. right and left vs. neutral differ significantly in their negativity rates, while other comparisons don't show meaningful differences.</p>
				<br>

				<h3>Combined Interpretation: Negativity is Structural</h3>
				<p>Combined with what we learned about concentration, this reinforces an important conclusion: political hostility on Reddit is structural, not universal. It's driven by specific ideological groups and communities, not by everyone becoming more aggressive across the board.</p>
				<br>
				<p>The pattern we see is:</p>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li>Most negativity comes from a small number of subreddits</li>
						<li>Left-leaning communities are more insular (echo chambers)</li>
						<li>But when cross-ideological engagement happens, it's not more hostile</li>
						<li>Certain ideological positions show consistently higher negativity rates</li>
					</ul>
				</div>
				<br>

				<h3>The Takeaway</h3>
				<p>Political polarization on Reddit isn't about everyone getting angrier. It's about who talks to whom, which communities choose antagonism as a communication style, and how ideological positioning correlates with different patterns of negativity. The system is stratified, not uniformly hostile. <strong>Now that we understand the structural dynamics of political communities, let's shift perspective: who's actually participating in these conversations?</strong></p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2792,
				commentCount: 19,
				createdAt: '2025-12-19T03:00:00Z',
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
				_id: 'post1_3_1_1_genderGap',
				title:
					"The Great Reddit Gender Gap: When Politics Gets Loud, Who's Talking?",
				content: `
				<p><strong>We've analyzed what political communities do.</strong> Now let's ask: <em>who's actually in them?</em> Understanding the demographics of political Reddit is crucial for interpreting the patterns we've seen.</p>
				<br>
				<h3>A Note on the Data</h3>
				<p>Before we dive in, it's important to understand the limitations and scope of our gender data. In our dataset, only approximately 8.6% of Reddit users had gender information available, broken down as roughly 7.0% male and 1.6% female. The remaining 91.4% did not specify their gender.</p>
				<br>
				<p>Our analysis focuses exclusively on users who provided gender information. We operate under the assumption that men and women are equally likely to provide this information, meaning one group isn't systematically opting out more than the other. While this is a necessary assumption, it's worth keeping in mind when interpreting the results.</p>
				<br>

				<h3>The Initial Picture: A Dramatic Imbalance</h3>
				<p>At first glance, the data tells a striking story: men absolutely dominate the comment sections of political subreddits. Throughout 2016 and into 2017, the blue line representing male commenters towers above the pink line for female commenters, week after week.</p>
				<br>
				<iframe src="${baseUrl}/plotly/comment_volume.html" title="Gender breakdown of comments over time" scrolling="no"></iframe>
				<br>
				<p>On a typical week, male users posted around 62,000 comments, while female users hovered around 11,000, roughly a 6:1 ratio. This gap appears consistently throughout the entire time period, suggesting a massive disparity in engagement.</p>
				<br>

				<h3>Digging Deeper: Population vs. Participation</h3>
				<p>But here's where it gets interesting. The dataset contains about 4.3 times more male users than female users (7.0% vs 1.6%). This raises a critical question: <em>Are men commenting more actively, or are there simply more men in these spaces to begin with?</em></p>
				<br>
				<p>When we normalize the data to account for population differences, examining comments per person rather than total comment volume, the picture changes considerably. The massive gap we saw in absolute numbers largely disappears.</p>
				<br>
				<p>On average, both male and female users post around 0.2-0.3 comments per person per week, with remarkably similar patterns throughtime period. While our statistical tests still indicate that men comment slightly more per person (p < 0.000001), the practical difference is quite small.</p>
				<br>

				<h3>The November 2016 Spike: A Shared Reaction</h3>
				<p>Looking at the timeline, one moment stands out dramatically: November 2016. Both total comment counts and per-person metrics show a sharp surge around the US presidential election.</p>
				<br>
				<p>In absolute numbers, male comments nearly doubled to around 150,000 in a single week, a spike that looks massive and dominates the visual landscape of the graph. However, when we examine the per-person data, the story becomes more nuanced.</p>
				<br>
				<p>Both genders show comparable increases in individual activity, hitting around 0.45-0.55 comments per person. The election energized everyone roughly equally, the male spike just looks more dramatic in absolute numbers because there are so many more men in these communities to begin with.</p>
				<br>

				<h3>Secondary Peaks: Other Political Moments</h3>
				<p>Beyond the election, the timeline reveals other increases in activity. Notably, there's a visible peak around July 2016, which likely corresponds to the Democratic National Convention and the email leak scandal that dominated media coverage during that period.</p>
				<br>
				<p>These secondary peaks further illustrate how political events drive spikes in engagement across the board, affecting both male and female users in similar patterns.</p>
				<br>

				<h3>The Real Story</h3>
				<p>The gender gap in political Reddit isn't really about how much men and women comment when they're present, it's about who shows up in the first place.</p>
				<br>
				<p>The massive imbalance in total comment volume is primarily driven by the sheer difference in the number of active male versus female users, not by wildly different individual commenting behavior. When men and women do participate in political subreddits, they engage at roughly similar rates.</p>
				<br>
				<p>This finding has important implications for understanding online political discourse. The male-dominated nature of political Reddit reflects a demographic imbalance in <em>participation</em>, rather than a difference in <em>engagement intensity</em> once users are already active in these spaces.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2156,
				commentCount: 15,
				createdAt: '2025-12-19T05:00:00Z',
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
				_id: 'post1_3_1_2_stirringpot',
				title:
					"Who's Stirring the Pot? Men Take the Lead in Controversial Comments",
				content: `
				<h3>Introduction</h3>
				<p>While men dominate political Reddit by sheer volume, there's an additional layer to the story: they're also posting more controversial content. This analysis tracks the "controversiality" score of comments, which measures how much a comment divides opinion and sparks debate.</p>
				<br>

				<h3>Overall Patterns: A Consistent Gender Gap</h3>
				<iframe src="${baseUrl}/plotly/comment_controversiality.html" title="Weekly mean controversiality by gender" scrolling="no"></iframe>
				<br>
				<p>Throughout most of 2016 and 2017, the blue line representing male commenters consistently stays above the pink line for female commenters. Men's comments averaged around 0.015 on the controversiality scale, while women's hovered slightly lower at roughly 0.011.</p>
				<br>
				<p>The difference might look subtle on the graph, but our statistical tests confirm it's real and significant. A t-test yielded p = 0.007, and the Wilcoxon rank-sum test (a non-parametric alternative) gave p = 0.031, both indicating that the observed difference is unlikely to be due to random chance.</p>
				<br>

				<h3>The Timeline: Dancing Lines and Political Moments</h3>
				<p>What's particularly fascinating is how the lines dance around each other throughout the time period. The pattern isn't static, it reflects the evolving political climate and specific events.</p>
				<br>
				<p>Early in 2016, both genders were posting relatively controversial content, with dramatic peaks and valleys that suggest the political climate was already heating up. Notice the spike in early 2016 for men, reaching nearly 0.025, as the primary season got underway. This was a period of intense debate about candidates across the political spectrum.</p>
				<br>
				<p>Women had their own notable spike around November 2016, coinciding with the presidential election. During this period, female commenters briefly matched men's controversiality levels, suggesting that the election energized women to engage in more divisive discussions.</p>
				<br>

				<h3>Interpretation: What Does Controversiality Mean?</h3>
				<p>So what does this tell us? Men are not only more numerous in political Reddit discussions but are also more likely to post comments that generate mixed reactions and debate.</p>
				<br>
				<p>Whether this pattern reflects greater confidence in expressing divisive opinions, a tendency toward confrontational rhetoric, or something else entirely is open to interpretation. It could indicate different communication styles, different levels of comfort with online disagreement, or varying approaches to political discourse.</p>
				<br>
				<p>One thing is clear: when it comes to controversial political commentary on Reddit, men are leading the charge. This finding complements our previous analysis showing that men and women engage at similar rates when normalized for population, the difference here isn't about quantity of participation, but about the nature of that participation.</p>
				<br>

				<h3>Key Takeaways</h3>
				<p>Men post comments with higher controversiality scores on average (0.015 vs 0.011), a statistically significant difference. Both genders show temporal variation in controversiality, with peaks corresponding to major political events like the primaries and the election. The gender gap in controversial content represents a qualitative difference in engagement patterns, not just a quantitative one.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1943,
				commentCount: 13,
				createdAt: '2025-12-19T07:00:00Z',
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
				_id: 'post1_3_1_3_genderScore',
				title: "The Upvote Divide: Men's Comments Score Higher",
				content: `
				<h3>Overview: A Persistent Gender Gap in Upvotes</h3>
				<p>Here's where the gender gap gets really interesting: men's political comments consistently earn higher scores (upvotes) than women's. The blue line hovers persistently above the pink throughout the entire period, and our statistical tests confirm this isn't just chance (p = 0.0009 for the t-test, p = 0.031 for the Wilcoxon test).</p>
				<br>
				<iframe src="${baseUrl}/plotly/comment_score.html" title="Weekly mean comment score by gender" scrolling="no"></iframe>
				<br>

				<h3>Temporal Patterns and the Election Spike</h3>
				<p>In early 2016, men's comments averaged around 2.6 points, while women's lingered closer to 1.9. But watch what happens around the November 2016 election: both lines surge upward, with men's comments skyrocketing to 3.5+ points. While both genders saw increased scores during this period, the gap between men and women actually widened during the most politically charged moments.</p>
				<br>

				<h3>What's Driving This Pattern?</h3>
				<p>Several factors could explain why men's comments consistently receive higher scores:</p>
				<br>
				<p>It could be that men's higher comment volume gives them more visibility and momentum within the platform. When users post more frequently, their comments may gain more exposure and accumulate more upvotes over time.</p>
				<br>
				<p>Alternatively, perhaps the predominantly male audience upvotes male perspectives more readily. If political subreddits are overwhelmingly male spaces, the voting patterns may reflect the preferences and biases of that majority demographic.</p>
				<br>
				<p>Combined with our earlier findings (more men within political subreddits), posting slightly more comments and more controversial content,a picture emerges: political Reddit isn't just male-dominated in participation, it's also structured to amplify male voices through its voting system.</p>
				<br>

				<h3>An Interesting Finding: Controversial Comments Actually Get Higher Scores</h3>
				<p>Looking into the relationship between controversiality and comment scores, I found something counterintuitive: there's actually a positive correlation between the two (Pearson r = 0.417, p < 0.001; Spearman rho = 0.792, p < 0.001).</p>
				<br>
				<iframe src="${baseUrl}/plotly/comment_correlation.html" title="Mean score vs mean controversiality per subreddit" scrolling="no"></iframe>
				<br>
				<p>The scatter plot shows some variability, yet the upward trend line is clear and statistically significant. On average, more divisive comments tend to receive higher scores.</p>
				<br>
				<p>This flips the assumption that controversial comments get downvoted and lost. Instead, it looks like controversial views generate engagement, and that engagement translates to net positive scores, even if you're catching some downvotes along the way.</p>
				<br>

				<h3>Connecting the Dots</h3>
				<p>This finding actually connects back to our earlier observation that men post more controversial content and get higher scores. These might not be separate patterns at all. Men are leaning into controversy, and controversy seems to pay off in upvotes on political subreddits.</p>
				<br>
				<p>It raises a pretty important question: what is political Reddit really rewarding? Thoughtful discussion or provocative content that gets reactions? Based on this data, the platform's voting system seems to favor comments that stir the pot, whether that's a good thing or not.</p>
				<br>

				<h3>Implications</h3>
				<p>The combination of these findings paints a clear picture of how political discourse functions on Reddit. The voting system doesn't just reflect opinion, it actively shapes whose voices get heard and what kinds of content rise to the top. In political subreddits, that system appears to favor male voices and controversial takes.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2287,
				commentCount: 16,
				createdAt: '2025-12-19T09:00:00Z',
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
				_id: 'post1_3_1_4_wordCount',
				title: 'Men Write More, Literally: The Word Count Gap',
				content: `
				<h3>Overview: A Significant Length Difference</h3>
				<p>When men comment on political Reddit, they don't just comment more often. They write longer comments too. Throughout 2016-2017, male commenters consistently averaged around 35 words per comment, while women averaged just 21 words.</p>
				<br>
				<iframe src="${baseUrl}/plotly/comment_length.html" title="Weekly mean comment length by gender" scrolling="no"></iframe>
				<br>
				<p>That's 66% longer comments on average, and the statistics back it up strongly (p = 0.0002 for the t-test, p = 0.031 for the Wilcoxon test). This isn't a marginal difference or a statistical artifact. It's a consistent, substantial pattern across the entire time period.</p>
				<br>

				<h3>No Election Effect on Length</h3>
				<p>Interestingly, the November 2016 election doesn't seem to have had an effect on comment lengths. Unlike other metrics we've examined (comment volume, scores, controversiality), there are no significant spikes in mean comment length visible around November 2016.</p>
				<br>
				<p>This suggests that during a politically active time, Redditors did not necessarily increase the length of their messages. They commented more frequently and more controversially, but they didn't write longer individual comments. The brevity or verbosity of political discourse appears to be more stable than its volume or tone.</p>
				<br>

				<h3>Understanding the Pattern</h3>
				<p>The consistent 35-word to 21-word gap raises interesting questions about communication styles on political Reddit. Several factors could contribute:</p>
				<br>
				<p>Men may be more comfortable writing lengthy explanations or arguments in political spaces. This could reflect confidence, familiarity with the norms of political debate, or simply more time spent engaging with political content.</p>
				<br>
				<p>Alternatively, women might prefer more concise communication styles. Brevity doesn't necessarily indicate less thoughtful engagement. It could represent a different approach to political discourse that values efficiency and directness.</p>
				<br>
				<p>It's also possible that the predominantly male environment influences communication norms. If longer comments are more common and more rewarded (recall that men's comments get higher scores), women might adjust their participation style or self-select out of longer-form discussions.</p>
				<br>

				<h3>Connecting All the Findings</h3>
				<p>Combined with our previous findings, a pattern emerges: men are posting more comments, writing longer posts, generating more controversy, and earning higher scores.</p>
				<br>
				<p>Political Reddit isn't just male-dominated. It's a space where male communication styles (more frequent, lengthier, more confrontational) are both more prevalent and more rewarded by the platform's mechanics.</p>
				<br>
				<p>The word count gap is the final piece of the puzzle. It shows that the gender divide isn't only about who participates or how often. It extends to how people participate, with men dominating not just in quantity but in the depth and elaboration of their contributions as measured by word count.</p>
				<br>

				<h3>Implications</h3>
				<p>This finding completes a comprehensive picture of gender dynamics in political Reddit discourse. The platform favors not just male participation but male communication patterns. Longer comments may receive more visibility and engagement, creating a feedback loop that reinforces these gendered patterns.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2015,
				commentCount: 14,
				createdAt: '2025-12-19T11:00:00Z',
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
				_id: 'post1_3_1_5_electionActivity',
				title:
					'Election Activity and Attention: How Trump and Hillary Communities Differed',
				content: `
				<h3>Bridging to Election-Specific Analysis</h3>
				<p>Our previous posts examined gender patterns across the entire 2016-2017 period. We found that men dominate political Reddit not just in numbers, but in comment frequency, length, controversiality, and upvote scores. These patterns paint a comprehensive picture of gendered participation.</p>
				<br>
				<p>Now we shift focus to a specific moment: the 2016 U.S. presidential election itself. Rather than looking at gender, we'll compare how different political camps engaged during this critical period. The question: did Trump-aligned and Hillary-aligned communities participate differently during election week?</p>
				<br>

				<h3>Dataset and Time Windows</h3>
				<p>Our election analysis uses the Politosphere Reddit dataset, which is publicly available on GitHub from the original study. This dataset includes preprocessed political Reddit comments with useful metadata like which subreddit they're from, timestamps, user information, and interaction features (like how controversial a comment was).</p>
				<br>
				<p>We focused on comment data from October and November 2016, the months that fully cover the 2016 U.S. presidential election period.</p>
				<br>
				<p>For our text analysis, we used a slightly wider time window broken into three phases:</p>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li>Pre-election: October 25 to November 7, 2016</li>
						<li>Election week: November 8 to November 14, 2016</li>
						<li>Post-election: November 15 to November 30, 2016</li>
					</ul>
				</div>
				<br>

				<h3>What Were People Actually Talking About?</h3>
				<p>We analyzed which words came up most frequently and created word clouds to visualize the results, both overall and broken down by gender. This is exploratory work, meant to show what themes different groups emphasized rather than prove statistical differences.</p>
				<br>
				<p>The word clouds reveal distinct patterns in how different political camps and genders talked about the election, highlighting differences in what narratives they focused on and how they framed the issues.</p>
				<br>
				<img src="${baseUrl}/images/all_word_cloud.png" alt="Word cloud for all comments during election period" />
				<p><em>Overall word cloud showing the most common terms across all political Reddit during the election period</em></p>
				<br>
				<img src="${baseUrl}/images/female_word_cloud.png" alt="Word cloud for female commenters during election period" />
				<p><em>Word cloud for female commenters, showing their most emphasized terms</em></p>
				<br>
				<img src="${baseUrl}/images/male_word_cloud.png" alt="Word cloud for male commenters during election period" />
				<p><em>Word cloud for male commenters, showing their most emphasized terms</em></p>
				<br>

				<h3>Comparing Trump and Hillary Communities: Activity and Tone</h3>
				<p>For a closer look at Trump-aligned versus Hillary-aligned discourse, we narrowed our focus to a few highly representative subreddits:</p>
				<br>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li>Trump-aligned: r/the_donald</li>
						<li>Hillary-aligned: r/hillaryclinton, r/enoughtrumpspam</li>
					</ul>
				</div>
				<br>
				<iframe src="${baseUrl}/plotly/comments_political_camp.html" title="Comment volume by political camp over time" scrolling="no"></iframe>
				<br>
				<p>Trump-aligned subreddits posted noticeably more during election week compared to Hillary-aligned ones. That said, when we tested this statistically at an aggregate level, the difference didn't quite reach significance, so we're treating it as an observation rather than a definitive finding.</p>
				<br>
				<p>Hillary-aligned communities kept pretty steady participation throughout, while Trump-aligned communities showed a sharp but brief spike right around election day.</p>
				<br>

				<h3>Where the Camps Really Diverged: Controversiality</h3>
				<iframe src="${baseUrl}/plotly/contro_political_camp.html" title="Controversiality by political camp over time" scrolling="no"></iframe>
				<br>
				<p>Where the two camps really diverged was in controversiality. Trump-aligned subreddits had significantly higher controversiality scores during election week compared to Hillary-aligned ones (Mann-Whitney U test, p < 0.001).</p>
				<br>
				<p>This tells us that the increased activity in Trump communities wasn't just more volume. It was more polarized and divisive discourse. Comments from Trump-aligned subreddits generated more mixed reactions, more upvotes and downvotes simultaneously, indicating deeper disagreement and debate.</p>
				<br>

				<h3>Connecting Back to Our Gender Findings</h3>
				<p>Recall our earlier finding that men post more controversial content than women on political Reddit. The Trump-aligned subreddits, which skew heavily male (like most of political Reddit), exhibited this same pattern at a community level during the election.</p>
				<br>
				<p>This suggests that the controversiality we observed in male versus female commenting patterns may also manifest in community-level dynamics, with certain political spaces cultivating more divisive discourse than others.</p>
				<br>

				<h3>Implications</h3>
				<p>The 2016 election period reveals how different political communities respond to high-stakes moments. Trump-aligned subreddits demonstrated a spike-and-controversy pattern: brief surges in activity accompanied by highly polarizing content. Hillary-aligned subreddits maintained steadier, less controversial participation.</p>
				<br>
				<p>These patterns complement our gender analysis. Just as we found that certain communication styles (longer, more frequent, more controversial) are rewarded on political Reddit, we now see that certain political communities embody those same high-engagement, high-controversy patterns more than others. <strong>But how did all of this evolve over time? Let's pull back and look at the bigger picture.</strong></p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2341,
				commentCount: 17,
				createdAt: '2025-12-19T13:00:00Z',
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
				_id: 'post1_3_2_timeEvolution',
				title:
					"Okay, But How Does Reddit's Linking Behavior Actually Change Over Time?",
				content: `
				<p><strong>So far, we've looked at snapshots of Reddit's political landscape.</strong> But these patterns didn't emerge overnight. Let's trace how political discourse on Reddit evolved from 2014 to 2017.</p>
				<br>
				<h3>From Static to Dynamic: Tracking Hyperlink Evolution</h3>
				<p>We know which clusters dominate Reddit in terms of links, but that's a static view. It tells us who's active now, but not how that activity evolved.</p>
				<br>
				<p>Next we looked at how outgoing, incoming, and negative hyperlinks evolve over the years to see if anything really shifts. Does the 2016 election change who links to whom? Do certain clusters become more or less active over time?</p>
				<br>

				<h3>Visualizing Hyperlink Behavior Over Time</h3>
				<p>To this end, we plotted four interesting visualizations:</p>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li>The distribution of hyperlinks outgoing from each cluster</li>
						<li>The distribution of hyperlinks received by each cluster</li>
						<li>The distribution of negative hyperlinks outgoing from each cluster</li>
						<li>The distribution of negative hyperlinks received by each cluster</li>
					</ul>
				</div>
				<br>
				<iframe src="${baseUrl}/plotly/source_activity.html" title="Outgoing hyperlinks from each cluster over time" scrolling="no"></iframe>
				<br>
				<iframe src="${baseUrl}/plotly/target_activity.html" title="Incoming hyperlinks to each cluster over time" scrolling="no"></iframe>
				<br>

				<h3>What We Found: Reddit Just Gets Busier</h3>
				<p>From the first two distributions, the only conclusion that can be made is that subs became more active by the years as the volume of hyperlinks increased consistently for almost each cluster. Some small spikes happen in the top 3 clusters in the amount of hyperlinks they receive, but nothing significant.</p>
				<br>
				<p>As we saw that the top 3 over the three years were Humor/Memes, Adult Life and Technology, and Politics, here we can confirm that it has always been like this and no major changes in the activity of one cluster compared to the others happened.</p>
				<br>

				<h3>Statistical Testing: Every Month Is Different</h3>
				<p>Visually it doesn't look like there are any significant differences between each month compared to the previous one. But if we run the Kruskal-Wallis test on overall subreddits, we get almost a lot of significant differences between each month.</p>
				<br>
				<p>We ran a Kruskal-Wallis test because our data is not normalized and we want to see if any pair of months stand out in differences.</p>
				<br>
				<p>Visually, nothing jumps out, but stats show almost every month is different from the other. Probably just Reddit getting busier over time, not a clear election effect.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1847,
				commentCount: 12,
				createdAt: '2025-12-19T15:00:00Z',
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
				_id: 'post2_3_2_negativeLinks',
				title: "Where Does Reddit's Negativity Come From?",
				content: `
				<h3>Shifting Focus to Negative Hyperlinks</h3>
				<p>Now if we look at the negative hyperlinks only, it becomes a little more interesting. While overall hyperlink activity shows steady growth, negativity reveals something more specific about Reddit's political culture.</p>
				<br>
				<iframe src="${baseUrl}/plotly/neg_source_activity.html" title="Negative outgoing hyperlinks from each cluster over time" scrolling="no"></iframe>
				<br>
				<iframe src="${baseUrl}/plotly/neg_target_activity.html" title="Negative incoming hyperlinks to each cluster over time" scrolling="no"></iframe>
				<br>

				<h3>Politics Becomes the Source of Negativity</h3>
				<p>We can see that from January 2016, the Politics cluster became the one with the most negative outgoing hyperlinks, even though it's one of the smallest clusters. This change is an interesting observation for the role politics take in Reddit's negativity and how politics interaction evolved.</p>
				<br>
				<p>However, it doesn't highlight any particular link to major events. The shift appears gradual rather than sudden, suggesting a longer-term cultural change in how political subreddits engage with the rest of Reddit.</p>
				<br>

				<h3>Who Receives the Most Negativity?</h3>
				<p>While being the cluster sending the most negativity, the political cluster is only the top 2 cluster receiving it, with the cluster Humor/Memes being top 1.</p>
				<br>
				<p>This makes sense when you think about it: humor and meme subreddits often engage with political content in satirical or critical ways, attracting negative links from various communities.</p>
				<br>

				<h3>No Clear Event-Driven Patterns</h3>
				<p>As before, over time no drastic change in the amount of negativity could show the reaction to real-world events, but these observations set the place of each cluster in Reddit's sphere, with politics being the black mole of it!</p>
				<br>
				<p>The Politics cluster's rise to negativity dominance appears to be a gradual transformation rather than a response to specific political moments. Reddit's political discourse became more negative over 2016, but not in sudden spikes corresponding to events.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2104,
				commentCount: 15,
				createdAt: '2025-12-19T17:00:00Z',
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
				_id: 'post3_3_2_politicsZoom',
				title: 'What Happens If We Zoom In Only on the Politics Cluster?',
				content: `
				<h3>Focusing on Political Interactions</h3>
				<p>If we focus on the Politics cluster, we can plot the following two graphs: the amount of hyperlinks incoming to politics from each cluster, and the amount of hyperlinks outgoing from politics, with each cluster showing the amount they receive from it. We can also choose if we consider the positive hyperlinks or negative.</p>
				<br>
				<iframe src="${baseUrl}/plotly/politic_activity.html" title="Hyperlink activity to and from the Politics cluster" scrolling="no"></iframe>
				<br>

				<h3>Drastic Growth, But No Clear Election Signal</h3>
				<p>And the same conclusion is made as before: the Politics cluster grew drastically in those 3 years, with a major shift in the amount of hyperlinks at the start of 2016, but nothing that shows a particular link to the elections.</p>
				<br>
				<p>These plots also show us how the hyperlinks are reciprocal, if you compare both graphs the amount for each cluster is of the same scale, for positive or negative links, showing the reciprocity of clusters between each other.</p>
				<br>

				<h3>Statistical Testing: Dunn's Test Results</h3>
				<p>And let's run Dunn's test to see what is the top 5 of pairs of month being significantly different. The result shows the following: the most meaningful pairs bring early 2014 and end of 2016/start of 2017 (which is the end of our dataset) as the main difference in the amount of hyperlinks for the political cluster.</p>
				<br>
				<p>This could show a link to the elections, but as we observed the data, this probably only shows how Reddit's amount of hyperlinks grew regularly over the years. If we wanted to draw any conclusions about the elections and Trump's institution, we would need the dataset to expand after the time that interests us, to see if the amount of hyperlinks reduced afterwards.</p>
				<br>

				<h3>Summary: Growth, Not Events</h3>
				<p>So not much changes except everything gets louder as you could expect from Reddit's growth, but around 2016, Politics really takes the lead in negative linking, which honestly feels on brand. But how about if we focus only on the political clusters, could we see any link to the elections if we zoom in?</p>
				<br>
				<p>The answer seems to be: not really. The data shows consistent growth and shifting proportions of activity, but not the kind of event-driven spikes you'd expect if major political moments were directly driving behavior. Reddit's political sphere was evolving, but more as a long-term cultural shift than as responses to specific news cycles.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1923,
				commentCount: 14,
				createdAt: '2025-12-19T19:00:00Z',
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
				_id: 'post1_3_3_time_series_major_events',
				title:
					'The 2016 election barely shows up in the plots… until you test for spikes',
				content: `
				<p><strong>We've seen that hyperlink volume grew steadily, but nothing dramatic jumped out.</strong> However, we haven't yet looked at whether the <em>language</em> people used changed over time. This is where things get interesting.</p>
				<br>
				<h3>From Hyperlinks to Linguistic Features</h3>
				<p>After analyzing hyperlinks over time, we looked at how LIWC-style scores evolve from 2014 to 2017.</p>
				<br>
				<p>The raw time series don't say much on their own, too many random peaks. So we ran a robust z-score spike test to flag months where language actually deviates from normal behavior.</p>
				<br>
				<p>We did this both for all clusters and for posts replying to Politics, focusing on political, emotional, and social language. Full plots and details below.</p>
				<br>

				<h3>Visual Analysis: No Obvious Election Impact</h3>
				<p>From the study of hyperlinks overtime, we concluded there was only a significant growth of Reddit's activity and that Politics became the black mole of Reddit overtime, but no particular link to the elections. Can we see more if we focus on linguistics features?</p>
				<br>

				<h4>Political Score Over Time (By Cluster)</h4>
				<iframe src="${baseUrl}/plotly/political_score_time_series.html" title="Political score over time by cluster" scrolling="no"></iframe>
				<br>

				<p>We first visualized how the <strong>political_score</strong> evolves over time for each cluster from January 2014 to April 2017. At first glance, the plot does not suggest any obvious impact of the 2016 elections: there is no clear spike in LIWC features from September to November 2016 compared to the rest of the three-year period. Spikes do occur, but they are present in clusters throughout the entire time period, making it difficult to determine whether any particular event drove a change.</p>
				<br>

				<h4>Posts Directed Towards Politics</h4>
				<p>We also plotted posts directed towards Politics, looking at three scores over time:</p>
				<br>

				<h5>Political Score (Toward Politics)</h5>
				<iframe src="${baseUrl}/plotly/political_score_twpol.html" title="Political score over time for posts toward Politics" scrolling="no"></iframe>
				<br>

				<h5>Emotionality Score (Toward Politics)</h5>
				<iframe src="${baseUrl}/plotly/emotion_score_time_series.html" title="Emotionality score over time for posts toward Politics" scrolling="no"></iframe>
				<br>

				<h5>Social Score (Toward Politics)</h5>
				<iframe src="${baseUrl}/plotly/social_score_time_series.html" title="Social score over time for posts toward Politics" scrolling="no"></iframe>
				<br>

				<p>As with the overall plots, visual inspection alone does not allow us to draw clear conclusions about specific events. So, to our naked eyes, we can't say anything about the evolution of linguistic features over time. Let's take a look at the statistics to help!</p>
				<br>

				<h3>Statistical Spike Detection: Running the Tests</h3>
				<p>So nothing shows for us, but let's run some tests. We have to be careful because our data is not normalized. So to rigorously identify temporal spikes, we applied a <strong>robust z-score test</strong>. This test standardizes the monthly values relative to the median and <em>median absolute deviation</em>, which makes it less sensitive to outliers and long-term trends than a standard z-score. This test will allow us to detect months where a score deviates significantly from typical behavior!</p>
				<br>

				<h4>November 2016: The Strongest Signal</h4>
				<p>First, we applied this method to the <strong>political_score across clusters</strong> and we identified a significant spike in <strong>November 2016</strong> with a z-score of 3.12. This spike coincides with the 2016 U.S. election time and is also associated with a sharp increase in the number of hyperlinks posted by the Politics cluster. Together, these observations suggest that the election affected Reddit users' engagement and style across clusters, influencing both the content discussed by the Politics cluster and other clusters' interactions with political subjects.</p>
				<br>

				<h4>April 2017: Delayed Reactions</h4>
				<p>For posts directed towards Politics, the same robust z-score test revealed spikes in <strong>April 2017</strong> for both political_score and emotionality_score. Although this month does not correspond to major events in the Trump presidency, it indicates a period of heightened reaction toward political discussions.</p>
				<br>

				<h4>September 2016: Social Language Pre-Election</h4>
				<p>Additionally, examining the Politics cluster specifically, the <strong>social_score</strong> spiked in <strong>September 2016</strong>, which could reflect subtle effects of the election period even if not visually obvious in the raw time series. But let's keep in mind that the number of hyperlinks also increased particularly around this time, which could affect our linguistic score.</p>
				<br>

				<h3>What the Spikes Tell Us</h3>
				<p>Once you look at the spike results, things get clearer.</p>
				<br>
				<p>There's a strong political-style spike in November 2016, right during the election, and it lines up with a big jump in hyperlinks from the Politics cluster.</p>
				<br>
				<p>For posts replying to Politics, the biggest spikes in political and emotional language happen later, around April 2017, suggesting delayed or sustained reactions. And inside the Politics cluster itself, social language spikes in September 2016, right before the election.</p>
				<br>
				<p>So the election doesn't jump out visually, but statistically, it does show up in how Reddit talks over time.</p>
				<br>

				<h3>The Big Picture: Reddit Gets More Reactive</h3>
				<p>So what does this mean? Well, we don't have any robust observations that tells us that the elections significantly changed the emotionality of posts or that the amount of reactions to the politics cluster drastically spiked, but we can still see an overall increase in reddit's reactivity on real-world news! In fact, it got more reactive over the years, in the amount of reactions but also in the linguistics of the posts!</p>
				<br>
				<p><strong>The Full Picture:</strong> From structure to content to demographics to evolution over time, we've painted a comprehensive portrait of Reddit's political discourse during a historic moment. The 2016 election may not have created dramatic spikes in every metric, but it revealed the underlying patterns that define how political communities interact, who participates, and how language shapes, and is shaped by, political engagement online.</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1780,
				commentCount: 6,
				customClass: 'zoomed-out-charts',
				createdAt: '2025-12-19T21:00:00Z',
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
				_id: 'post999_conclusion',
				title:
					"The Full Picture: What We Learned About Reddit's Political Discourse",
				content: `
				<h3>Looking Back: A Journey Through Reddit's Political Landscape</h3>
				<p>We started with a simple question: what does political discourse on Reddit actually look like during a historic election? After analyzing three years of data across 19 interconnected investigations, we now have answers, some expected, many surprising.</p>
				<br>
				<p>Let's pull together everything we discovered into a coherent picture of how political Reddit actually works.</p>
				<br>

				<h3>The Structural Reality: Echo Chambers Aren't Symmetric</h3>
				<p>One of our most striking findings completely challenges the "both sides" narrative about echo chambers. <strong>Left-leaning communities are dramatically more insular than right-leaning ones</strong>, with 83% of left political interactions staying within the same ideological camp compared to just 12.5% for the right.</p>
				<br>
				<p>This asymmetry matters. It means that polarization on Reddit isn't about everyone retreating to their corners equally. It's a structural feature that varies significantly by ideology. The network itself is lopsided.</p>
				<br>

				<h3>The Hostility Paradox: It's Not What You Think</h3>
				<p>Here's where things get counterintuitive. Despite the echo chamber effect, when left and right communities <em>do</em> interact, they're not significantly more hostile than when talking to their own side. The LIWC anger analysis showed essentially no difference in emotional tone across ideological boundaries.</p>
				<br>
				<p><strong>The problem isn't that cross-ideological discourse is toxic, it's that it barely happens at all.</strong> Polarization on Reddit is about avoidance, not aggression.</p>
				<br>
				<p>But when negativity does occur, it's incredibly concentrated. Just 10% of political subreddits drive 91.6% of all negative interactions. Hostility isn't a universal feature, it's a deliberate communication style chosen by a small number of highly antagonistic communities.</p>
				<br>

				<h3>The Demographic Story: Who Shows Up vs. How They Engage</h3>
				<p>Men dominate political Reddit, but the story is more nuanced than raw numbers suggest. When we normalized for population differences, we found that men and women engage at roughly similar <em>rates</em>. The gap is in <strong>participation</strong> (who shows up), not <strong>intensity</strong> (how much they engage when present).</p>
				<br>
				<p>However, men do engage <em>differently</em>:</p>
				<div style="padding: 10px; border-left: 4px solid #3f9ade; background-color: #f9f9f9;">
					<ul>
						<li>They post more controversial content (0.015 vs 0.011 controversiality score)</li>
						<li>Their comments receive higher upvotes (2.6 vs 1.9 average score)</li>
						<li>They write 66% longer comments (35 words vs 21 words)</li>
						<li>And here's the kicker: controversial comments actually get <em>higher</em> scores, not lower</li>
					</ul>
				</div>
				<br>
				<p>This reveals something fundamental: <strong>political Reddit doesn't just reflect male dominance in numbers, it actively rewards male communication styles.</strong> The platform's voting mechanics create a feedback loop that amplifies certain voices.</p>
				<br>

				<h3>The Linguistic Signature: Who Sounds Political?</h3>
				<p>Politics has a distinct linguistic fingerprint on Reddit: high emotionality, high social reference, highly argumentative, but loosely structured. What surprised us was discovering that <strong>Humor/Memes and Niche Interests clusters share remarkably similar communication patterns</strong> to Politics, despite discussing completely different topics.</p>
				<br>
				<p>In contrast, Adult Life & Technology sits at the opposite end: structured, analytical, less emotional. The biggest linguistic gap on Reddit isn't between political ideologies, it's between emotional/social discourse and technical/structured discourse.</p>
				<br>
				<p>We also discovered that emotional language and social language are deeply intertwined. On Reddit, <strong>emotional rhetoric is rarely abstract, it almost always involves references to people, groups, and social context.</strong></p>
				<br>

				<h3>The Evolution: Did the Election Matter?</h3>
				<p>This was our climactic question, and the answer is beautifully nuanced. Visually, the 2016 election doesn't create obvious spikes in most metrics. Reddit's overall activity grew steadily from 2014-2017, with Politics gradually becoming more central and more negative over time.</p>
				<br>
				<p>But when we applied robust z-score spike detection to linguistic features, <strong>November 2016 showed a statistically significant spike in political-style language</strong> (z-score = 3.12). The election didn't transform Reddit overnight, but it did create measurable shifts in how people communicated.</p>
				<br>
				<p>More broadly, Reddit became increasingly reactive to real-world events over the study period, both in volume and in linguistic patterns. The platform was evolving into a more event-responsive ecosystem.</p>
				<br>

				<h3>The Network Effect: Size ≠ Influence</h3>
				<p>Politics represents only ~4% of Reddit's subreddits, yet it punches far above its weight in hyperlink activity. This taught us an important lesson: <strong>cluster size and cluster influence are not the same thing.</strong></p>
				<br>
				<p>The same three clusters, Politics, Humor/Memes, and Adult Life & Technology, dominated both outgoing and incoming hyperlinks, despite not being the largest clusters. Network centrality, not population size, determines visibility and influence on Reddit.</p>
				<br>

				<h3>Bringing It All Together</h3>
				<p>So what's the actual picture of political Reddit during the 2016 election?</p>
				<br>
				<p><strong>It's a stratified ecosystem, not a uniformly toxic one.</strong> Echo chambers exist but are asymmetric. Negativity is real but concentrated. Gender gaps exist in participation and in how the platform rewards different communication styles. Polarization is about network structure and avoidance, not about everyone becoming more hostile.</p>
				<br>
				<p>The 2016 election didn't create these patterns, it revealed them. Reddit's political discourse was already structured around echo chambers, negativity concentration, and demographic imbalances. The election provided a high-stakes moment that made these underlying dynamics visible in the data.</p>
				<br>
				<p><strong>Most importantly, we learned that online political discourse doesn't work the way we assume.</strong> It's not symmetric. It's not universally hostile. It's not just about ideology. It's structured by network effects, amplified by platform mechanics, shaped by who participates and how they communicate, and evolving over time in response to real-world events.</p>
				<br>

				<h3>Final Thought: Data Is Indeed A Dangerous Game</h3>
				<p>Our title, "Data Is A Dangerous Game", takes on new meaning after this analysis. The danger isn't in the data itself, but in the assumptions we bring to it. If we'd assumed both sides were equally insular, we'd have missed the 83% vs 12.5% asymmetry. If we'd assumed controversy correlates with downvotes, we'd have missed that it actually predicts <em>higher</em> scores. If we'd only looked at raw gender numbers, we'd have missed the qualitative differences in how men and women participate.</p>
				<br>
				<p>Good data analysis requires constantly questioning your intuitions, testing assumptions rigorously, and being willing to be surprised by what you find. That's what makes it dangerous, and what makes it valuable.</p>
				<br>
				<p><strong>Thank you for joining us on this journey through Reddit's political landscape. We hope you found it as surprising and enlightening as we did.</strong></p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 5180,
				commentCount: 0,
				createdAt: '2025-12-19T23:00:00Z',
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
	post0_2_1_intro_structure: [],
	post1_2_3_5writing_scores: [
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

	post1_1_1_politicalClustering: [
		{
			commentId: 'c_polcluster_001',
			commentedBy: 'methodology_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why use a hybrid approach instead of just one classification method? Seems unnecessarily complex.',
					},
				],
			},
			votes: 82,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_polcluster_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Each method has biases. Manual labeling can be subjective, semantic analysis can miss context, and zero-shot classification can make mistakes on edge cases. By combining methods and requiring agreement, we reduce the chance that any single bias dominates our results.',
							},
						],
					},
					votes: 97,
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
			commentId: 'c_polcluster_002',
			commentedBy: 'spectrum_skeptic',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Left-right spectrum seems reductive. What about libertarian vs authoritarian, or other political dimensions?',
					},
				],
			},
			votes: 124,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_polcluster_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"You're right that political ideology is multidimensional. The left-right spectrum is a simplification, but it's one that maps reasonably well onto how Reddit political communities self-identify and interact. More complex models exist, but for this analysis, the three-way split provides enough granularity to detect meaningful patterns.",
							},
						],
					},
					votes: 138,
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
			commentId: 'c_polcluster_003',
			commentedBy: 'validation_required',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'How do you know your clustering is accurate? What validation did you do?',
					},
				],
			},
			votes: 91,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_polcluster_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'We manually verified a random sample of subreddits in each cluster to check if the labels made sense. We also looked at well-known political subreddits to see if they ended up where expected. The clusters visually separate well, meaning subreddits in the same cluster are similar and different clusters are distinct.',
							},
						],
					},
					votes: 104,
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

	post2_1_1_echoChambers: [
		{
			commentId: 'c_echo_001',
			commentedBy: 'asymmetry_shocked',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'83% same-side for left vs 12.5% for right is massive. How is this not the headline of the entire study?',
					},
				],
			},
			votes: 156,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_echo_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"It is one of the most striking findings! It shows that echo chambers aren't symmetric across the political spectrum. Left-leaning communities are far more insular. This has important implications for how political discourse operates differently depending on ideological position.",
							},
						],
					},
					votes: 178,
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
			commentId: 'c_echo_002',
			commentedBy: 'chi_square_guy',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Chi-square test with p < 0.001 is impressive, but what about effect size? Statistical significance is not the same as practical significance.',
					},
				],
			},
			votes: 103,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_echo_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Good point. The chi-square value of 4732.8 is extremely large, indicating a very strong association. But you're right that the percentage differences (83% vs 12.5% vs 11%) speak more clearly to the magnitude of the effect. The statistical test confirms it's real; the percentages show it's massive.",
							},
						],
					},
					votes: 119,
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
			commentId: 'c_echo_003',
			commentedBy: 'causality_question',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Could this just be because there are more left-leaning subreddits, so they have more options to link within their group?',
					},
				],
			},
			votes: 87,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_echo_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"That's a reasonable hypothesis, but we're measuring percentages, not raw counts. Even if left has more subreddits, that doesn't explain why 83% of their links stay in-group while right only has 12.5%. The pattern suggests behavioral differences, not just structural ones.",
							},
						],
					},
					votes: 102,
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
			commentId: 'c_echo_004',
			commentedBy: 'heatmap_reader',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The heatmap shows left-to-left is by far the darkest square. Really drives home the asymmetry visually.',
					},
				],
			},
			votes: 134,
			vote: 0,
			saved: false,
			followed: false,
			children: [],
			numberofChildren: 0,
			level: 1,
		},
	],

	post3_1_1_liwcAnger: [
		{
			commentId: 'c_anger_001',
			commentedBy: 'surprised_commenter',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"Wait, so people AREN'T angrier when arguing with the other side? That's counterintuitive. I would have bet money on the opposite.",
					},
				],
			},
			votes: 167,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_anger_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Right? It surprised us too. The data shows that when left and right do interact, the language isn't more hostile than within-group discussions. The problem isn't that cross-ideological discourse is toxic, it's that it barely happens at all. The polarization is in the network structure, not the emotional content.",
							},
						],
					},
					votes: 189,
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
			commentId: 'c_anger_002',
			commentedBy: 'wilcoxon_curious',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert: 'Why Mann-Whitney U test instead of a t-test?',
					},
				],
			},
			votes: 76,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_anger_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'LIWC scores are heavily skewed and zero-inflated. They violate the normality assumption required for t-tests. Mann-Whitney U (Wilcoxon rank-sum) is non-parametric and makes no distributional assumptions, making it more appropriate for this kind of data.',
							},
						],
					},
					votes: 91,
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
			commentId: 'c_anger_003',
			commentedBy: 'nan_handler',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"You exclude NaN values instead of treating them as zeros. Doesn't that bias the results toward higher scores?",
					},
				],
			},
			votes: 82,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_anger_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'The opposite actually. NaNs occur when a post contains zero words from an emotional category. Treating those as zeros would artificially suppress differences. Excluding them means we only compare posts that actually contain emotional language, giving a clearer signal of affective intensity when it exists.',
							},
						],
					},
					votes: 96,
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
			commentId: 'c_anger_004',
			commentedBy: 'implication_seeker',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"So if crossing sides doesn't make people angrier, what DOES drive polarization on Reddit?",
					},
				],
			},
			votes: 142,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_anger_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'The network structure drives it. Left-leaning communities simply choose not to engage with other ideological groups (83% in-group linking). The problem is avoidance, not hostility. People stay in their bubbles rather than fighting across lines. That may actually be more troubling than if they were just angry.',
							},
						],
					},
					votes: 164,
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

	post4_1_1_negativityConcentration: [
		{
			commentId: 'c_concentration_001',
			commentedBy: 'pareto_principle',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'91.6% of negativity from top 10% of subreddits is insane. Classic power law distribution.',
					},
				],
			},
			votes: 128,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_concentration_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Exactly. It's a highly skewed distribution. This tells us that negativity isn't evenly spread across the political ecosystem, it's concentrated in a small number of highly antagonistic communities that have made hostility central to their communication style.",
							},
						],
					},
					votes: 147,
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
			commentId: 'c_concentration_002',
			commentedBy: 'weighted_formula_guy',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why use log(1 + total_links) in the weighted negativity formula?',
					},
				],
			},
			votes: 73,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_concentration_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'The logarithm prevents a few very active subreddits from completely dominating the metric. It gives credit for volume while keeping it on a comparable scale with the negativity rate. Without it, high-volume subreddits would swamp the measurement even if they were only moderately negative.',
							},
						],
					},
					votes: 86,
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
			commentId: 'c_concentration_003',
			commentedBy: 'policy_thinker',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The implication about targeting specific subreddits for moderation is interesting but probably politically explosive.',
					},
				],
			},
			votes: 151,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_concentration_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"We're just reporting the data. Whether and how to act on it is a normative question outside our scope. But yes, the finding that most negativity comes from a small number of identifiable communities does have obvious policy implications, however controversial they might be.",
							},
						],
					},
					votes: 167,
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
			commentId: 'c_concentration_004',
			commentedBy: 'table_reader',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Looking at the top ranked subs table, a lot of them are obviously antagonistic from their names alone.',
					},
				],
			},
			votes: 112,
			vote: 0,
			saved: false,
			followed: false,
			children: [],
			numberofChildren: 0,
			level: 1,
		},
	],

	post5_1_1_negativityByIdeology: [
		{
			commentId: 'c_ideology_001',
			commentedBy: 'kruskal_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"H = 61.47 is a pretty substantial test statistic. This isn't a subtle effect.",
					},
				],
			},
			votes: 94,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_ideology_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Correct. With p < 0.001, the ideological groups clearly differ in negativity even after controlling for activity levels. The follow-up tests show that left differs significantly from both right and neutral, while right and neutral are more similar to each other.',
							},
						],
					},
					votes: 108,
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
			commentId: 'c_ideology_002',
			commentedBy: 'normalization_question',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'You normalize by total links. Does this account for the fact that some communities just post more?',
					},
				],
			},
			votes: 81,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_ideology_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Yes, that's exactly what normalization does. We're looking at negative_links / total_links, which gives us a rate. This means a small, highly negative community gets the same measurement as a large, highly negative one. We're measuring the proportion of negativity, not the raw volume.",
							},
						],
					},
					votes: 96,
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
			commentId: 'c_ideology_003',
			commentedBy: 'pattern_synthesizer',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"So combining all findings: left is insular + certain ideological positions are more negative + negativity is concentrated + but cross-talk isn't angrier. That's a complex picture.",
					},
				],
			},
			votes: 173,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_ideology_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Perfect summary. Political discourse on Reddit is stratified and structural rather than uniformly toxic. It's not that everyone is getting angrier, it's that specific communities have specific patterns. Some are insular, some are negative, some are both, and the system as a whole is highly unequal.",
							},
						],
					},
					votes: 198,
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
			commentId: 'c_ideology_004',
			commentedBy: 'time_series_viewer',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"The time series plot shows the patterns are pretty stable over time too. This isn't a temporary phenomenon.",
					},
				],
			},
			votes: 116,
			vote: 0,
			saved: false,
			followed: false,
			children: [],
			numberofChildren: 0,
			level: 1,
		},
	],

	post1_2_2_hyperlinks_analysis: [
		{
			commentId: 'c_hyperlinks_001',
			commentedBy: 'network_curious',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Wait, so Politics is only 4% of subreddits but dominates linking? That seems really significant.\n',
					},
				],
			},
			votes: 48,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_hyperlinks_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Exactly. This is one of the key findings, cluster size and cluster influence are not the same thing. Politics has disproportionate visibility and connectivity in the network despite being relatively small.\n',
							},
						],
					},
					votes: 52,
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
			commentId: 'c_hyperlinks_002',
			commentedBy: 'dataSkeptic',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'How do you define a hyperlink here? Is it any URL or only links to other Reddit posts?\n',
					},
				],
			},
			votes: 31,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_hyperlinks_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'We focused specifically on hyperlinks between Reddit posts and subreddits, internal Reddit links. This allows us to map the cross-referencing behavior between different parts of the platform.\n',
							},
						],
					},
					votes: 38,
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
			commentId: 'c_hyperlinks_003',
			commentedBy: 'visualization_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Interesting that Humor/Memes ranks #1 in both incoming and outgoing links. Does that mean memes are the most central content on Reddit?\n',
					},
				],
			},
			votes: 42,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_hyperlinks_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'In terms of raw linking volume, yes. Humor/Memes communities are extremely active at both sharing content outward and being referenced by others. This reflects how meme culture permeates many different communities on Reddit.\n',
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
			commentId: 'c_hyperlinks_004',
			commentedBy: 'reddit_analyst',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"What about NSFW? It's the largest cluster but barely shows up in the linking charts.\n",
					},
				],
			},
			votes: 27,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_hyperlinks_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Great observation. NSFW is indeed the largest cluster by subreddit count (~26%), but it has very low cross-cluster linking activity. This suggests these communities are more self-contained and don't engage as heavily with other parts of Reddit.\n",
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
	],

	post2_2_3_cluster_results: [
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

	post1_3_1_1_genderGap: [
		{
			commentId: 'c_gender_001',
			commentedBy: 'stats_skeptic',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"Only 8.6% of users have gender data? Doesn't that make this analysis pretty unreliable?\n",
					},
				],
			},
			votes: 67,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_gender_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"It's a valid concern. The key assumption is that men and women are equally likely to provide gender information. If that holds true, the 8.6% sample should be representative. However, if one gender systematically opts out more, our results could be skewed. We acknowledge this limitation upfront.\n",
							},
						],
					},
					votes: 59,
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
			commentId: 'c_gender_002',
			commentedBy: 'feminist_redditor',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"This is fascinating. So the gap isn't about women being less interested in politics, it's just that there are fewer women in these spaces overall?\n",
					},
				],
			},
			votes: 84,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_gender_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Exactly. When we normalize for population, the engagement levels are nearly identical. The massive gap in total comment volume is driven by demographics, not behavior. Women who participate in political subreddits are just as active as their male counterparts.\n',
							},
						],
					},
					votes: 91,
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
			commentId: 'c_gender_003',
			commentedBy: 'election_watcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'What do you think gives rise to the secondary peak in July 2016?\n',
					},
				],
			},
			votes: 43,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_gender_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Most likely the Democratic National Convention. Do you remember around that time the emails about the Democratic Party's preferred presidential candidate leaked and dominated the media? That was a major political event that would have driven Reddit engagement.\n",
							},
						],
					},
					votes: 56,
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
			commentId: 'c_gender_004',
			commentedBy: 'methodology_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'How did you calculate the per-person metrics? Is that just total comments divided by total users?\n',
					},
				],
			},
			votes: 38,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_gender_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Yes, exactly. For each week, we divided the total number of comments by the number of active users of that gender. This normalizes for the population difference and lets us compare engagement intensity directly.\n',
							},
						],
					},
					votes: 42,
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
			commentId: 'c_gender_005',
			commentedBy: 'curious_data',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"You mention that men comment 'slightly more' per person with p < 0.000001. How can something be both statistically significant and practically insignificant?\n",
					},
				],
			},
			votes: 72,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_gender_005_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Great question! With large sample sizes, even tiny differences can be statistically significant. The p-value tells us the difference is real and not due to chance. But the effect size, the actual magnitude of the difference, is what matters practically. Here, the difference is so small it's not meaningful in real-world terms.\n",
							},
						],
					},
					votes: 88,
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

	post1_3_1_2_stirringpot: [
		{
			commentId: 'c_controversy_001',
			commentedBy: 'debate_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'This is really interesting! So men are not just more numerous, but also more likely to post divisive comments?',
					},
				],
			},
			votes: 58,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_controversy_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Exactly. The controversiality score measures how much a comment divides opinion. Men average 0.015 while women average 0.011, a statistically significant difference that holds across the entire time period.',
							},
						],
					},
					votes: 63,
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
			commentId: 'c_controversy_002',
			commentedBy: 'stats_careful',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'You mention both a t-test and Wilcoxon test. Why use two different tests?',
					},
				],
			},
			votes: 44,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_controversy_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'The t-test assumes normal distributions, which controversiality scores may not follow perfectly. The Wilcoxon rank-sum test is non-parametric and makes no assumptions about distribution shape. Both tests reaching significance strengthens our confidence in the result.',
							},
						],
					},
					votes: 51,
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
			commentId: 'c_controversy_003',
			commentedBy: 'gender_researcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Is this really about gender or could it be confounded by other factors like age or political affiliation?',
					},
				],
			},
			votes: 72,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_controversy_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Great question. We cannot rule out confounding variables with the current analysis. Age, political leaning, subreddit preferences, and other factors could all play a role. This analysis shows a gender correlation, but determining causation would require controlling for these other variables.',
							},
						],
					},
					votes: 79,
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
			commentId: 'c_controversy_004',
			commentedBy: 'rhetoric_student',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'What exactly does Reddit define as "controversial"? Is it based on upvotes/downvotes?',
					},
				],
			},
			votes: 55,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_controversy_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Yes, Reddit calculates controversiality based on the balance of upvotes and downvotes. A comment with many upvotes AND many downvotes (indicating divided opinion) scores higher than a comment that is mostly upvoted or mostly downvoted.',
							},
						],
					},
					votes: 67,
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
			commentId: 'c_controversy_005',
			commentedBy: 'pattern_watcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The spike for women in November 2016 is fascinating. Does this suggest women engaged more controversially during the election specifically?',
					},
				],
			},
			votes: 49,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_controversy_005_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Yes, during the November 2016 election period, female commenters briefly matched male controversiality levels. This suggests that major political events can temporarily narrow the gender gap in controversial discourse, perhaps because high-stakes moments energize more divisive participation across the board.',
							},
						],
					},
					votes: 58,
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

	post1_3_1_3_genderScore: [
		{
			commentId: 'c_score_001',
			commentedBy: 'upvote_curious',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Wait, so men get more upvotes even when you control for volume? That seems like a pretty big deal.',
					},
				],
			},
			votes: 94,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_score_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Yes, this is per-comment scores, not total. Even accounting for men's higher comment volume, their individual comments average higher scores. This suggests the voting system itself amplifies male voices beyond just the participation gap.",
							},
						],
					},
					votes: 108,
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
			commentId: 'c_score_002',
			commentedBy: 'correlation_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The positive correlation between controversiality and score is fascinating! Does this mean Reddit rewards divisiveness?',
					},
				],
			},
			votes: 87,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_score_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'It certainly suggests that controversial comments generate more engagement, which translates to higher net scores. Whether this is a feature or a bug of the platform depends on your perspective. It could mean debate is valued, or it could mean provocative content gets disproportionate visibility.',
							},
						],
					},
					votes: 102,
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
			commentId: 'c_score_003',
			commentedBy: 'bias_researcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Could this be evidence of algorithmic or community bias favoring male voices?',
					},
				],
			},
			votes: 115,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_score_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"There's no algorithmic bias in Reddit's voting, users directly upvote and downvote. This pattern likely reflects community bias: a predominantly male user base may preferentially upvote comments from men, either consciously or unconsciously. The system amplifies existing demographic biases.",
							},
						],
					},
					votes: 128,
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
			commentId: 'c_score_004',
			commentedBy: 'stats_nitpicker',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'You used both Pearson and Spearman correlation. Why both, and which one should I trust more?',
					},
				],
			},
			votes: 65,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_score_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Pearson measures linear correlation, while Spearman measures monotonic relationships (doesn't assume linearity). Both being significant and in the same direction strengthens the finding. Spearman's higher value (0.792) suggests the relationship is strong even when we don't assume it's perfectly linear.",
							},
						],
					},
					votes: 78,
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
			commentId: 'c_score_005',
			commentedBy: 'platform_critic',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'This is pretty damning for Reddit as a platform for political discourse. What can be done about this?',
					},
				],
			},
			votes: 142,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_score_005_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"That's a normative question beyond the scope of this analysis. But descriptively: the data shows the system rewards controversial content and appears to amplify voices from the demographic majority. Whether that's problematic and what to do about it are important questions for platform designers and community moderators.",
							},
						],
					},
					votes: 156,
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
			commentId: 'c_score_006',
			commentedBy: 'election_analyst',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The November 2016 spike is massive. Did the gap between male and female scores widen or narrow during the election?',
					},
				],
			},
			votes: 71,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_score_006_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'The gap actually widened. Men went from around 2.6 to 3.5+ points, while women increased but remained lower. This suggests that high-stakes political moments amplify existing gender disparities in visibility rather than equalizing them.',
							},
						],
					},
					votes: 89,
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

	post1_3_1_4_wordCount: [
		{
			commentId: 'c_wordcount_001',
			commentedBy: 'length_watcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'66% longer is huge! Does this mean men are more thorough or just more verbose?',
					},
				],
			},
			votes: 82,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_wordcount_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"That's a great question and ultimately a subjective judgment. Word count alone doesn't tell us about quality or depth of thought. Longer comments could be more thorough, or they could be unnecessarily wordy. The data just shows the pattern exists consistently.",
							},
						],
					},
					votes: 95,
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
			commentId: 'c_wordcount_002',
			commentedBy: 'event_analyst',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"It's interesting that the election didn't affect comment length. Why would volume and tone change but not length?",
					},
				],
			},
			votes: 76,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_wordcount_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'This suggests that comment length may be more of a stable personal or cultural trait, while volume and tone respond to external events. During the election, people commented more frequently and more controversially, but they maintained their typical verbosity patterns.',
							},
						],
					},
					votes: 88,
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
			commentId: 'c_wordcount_003',
			commentedBy: 'communication_scholar',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Could this reflect gendered communication norms in society more broadly, not just Reddit?',
					},
				],
			},
			votes: 108,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_wordcount_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Absolutely possible. Research on gendered communication shows different patterns across contexts. However, it's worth considering that Reddit's specific environment (anonymous, male-dominated, debate-focused) might amplify certain tendencies. Disentangling platform effects from broader social patterns would require cross-platform comparison.",
							},
						],
					},
					votes: 121,
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
			commentId: 'c_wordcount_004',
			commentedBy: 'feedback_theorist',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'You mention a feedback loop. So longer comments get more engagement, which encourages more long comments?',
					},
				],
			},
			votes: 69,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_wordcount_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"That's the hypothesis. If longer comments tend to get higher scores (and recall that men's comments do get higher scores on average), then users who write longer comments receive positive reinforcement. This could establish norms where lengthy exposition becomes the expected and rewarded style.",
							},
						],
					},
					votes: 81,
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
			commentId: 'c_wordcount_005',
			commentedBy: 'brevity_advocate',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"The framing seems to assume longer is better. But what if women's more concise style is actually more effective?",
					},
				],
			},
			votes: 134,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_wordcount_005_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"You're right to push back on that assumption. The analysis doesn't make a normative claim about which style is better. The point is that the platform rewards one style over the other (longer comments correlate with higher scores), which creates an uneven playing field regardless of which approach is intellectually superior.",
							},
						],
					},
					votes: 148,
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

	post1_3_1_5_electionActivity: [
		{
			commentId: 'c_election_001',
			commentedBy: 'transition_student',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Nice bridge from gender to political camps! Does this mean the patterns are similar at different levels of analysis?',
					},
				],
			},
			votes: 76,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_election_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Exactly. The controversiality pattern we saw with gender (men posting more divisive content) also appears at the community level, with Trump-aligned subreddits showing higher controversiality. This suggests these patterns aren't just individual differences but reflect broader dynamics in political discourse.",
							},
						],
					},
					votes: 89,
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
			commentId: 'c_election_002',
			commentedBy: 'dataset_curious',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why use the Politosphere dataset for this but not the earlier gender analysis?',
					},
				],
			},
			votes: 52,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_election_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'The Politosphere dataset is specifically focused on the election period with preprocessed political subreddit data, making it ideal for this analysis. The gender analysis used a broader dataset spanning 2016-2017 to capture longer-term patterns beyond just the election.',
							},
						],
					},
					votes: 64,
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
			commentId: 'c_election_003',
			commentedBy: 'wordcloud_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The word clouds are interesting but you say this is exploratory. So we should be careful about over-interpreting them?',
					},
				],
			},
			votes: 68,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_election_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Absolutely correct. Word clouds show what terms appear frequently, but they don't prove statistically significant differences. They're meant to give a visual sense of themes and emphasis, not to make rigorous claims about gendered or partisan language patterns.",
							},
						],
					},
					votes: 81,
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
			commentId: 'c_election_004',
			commentedBy: 'trump_supporter',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"So r/the_donald had higher controversiality. Isn't that just because they had more engagement and debate?",
					},
				],
			},
			votes: 44,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_election_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Controversiality measures the balance of upvotes and downvotes, which indicates divided opinion. High controversiality means comments generated both strong support AND strong opposition. Whether you interpret that as healthy debate or toxic polarization depends on your perspective, but the data shows it was more divisive.',
							},
						],
					},
					votes: 59,
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
			commentId: 'c_election_005',
			commentedBy: 'stats_validator',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"You mention the volume difference was not statistically significant. Why report it if it's not significant?",
					},
				],
			},
			votes: 72,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_election_005_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Good point. Transparency is important. The visual pattern is noticeable, and readers should know we tested it. By reporting the non-significant result, we're being honest that the spike, while visible, doesn't meet statistical thresholds. The controversiality finding is the stronger, more reliable result.",
							},
						],
					},
					votes: 87,
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

	post1_3_2_timeEvolution: [
		{
			commentId: 'c_hyperlinks_001',
			commentedBy: 'time_series_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'So basically Reddit just got busier over time? That seems like the most obvious result ever.',
					},
				],
			},
			votes: 54,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_hyperlinks_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'True, but sometimes the obvious needs confirmation. We were looking for event-driven spikes, particularly around the 2016 election. The growth pattern tells us that whatever changes happened were gradual rather than reactive to specific moments.',
							},
						],
					},
					votes: 68,
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
			commentId: 'c_hyperlinks_002',
			commentedBy: 'kruskal_curious',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why did you use Kruskal-Wallis instead of ANOVA for the monthly comparisons?',
					},
				],
			},
			votes: 72,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_hyperlinks_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Our data is not normally distributed. Kruskal-Wallis is a non-parametric test that makes no assumptions about distribution shape, making it more appropriate for this dataset. ANOVA requires normality assumptions that our hyperlink count data violates.',
							},
						],
					},
					votes: 81,
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
			commentId: 'c_hyperlinks_003',
			commentedBy: 'cluster_watcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The top 3 clusters being consistent over 3 years is actually interesting. Does that mean Reddit is pretty stable in terms of what communities drive linking behavior?',
					},
				],
			},
			votes: 89,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_hyperlinks_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Exactly. Humor/Memes, Adult Life & Technology, and Politics dominated both outgoing and incoming hyperlinks throughout the entire period. This stability suggests that these communities have fundamental roles in how Reddit connects to itself, rather than temporary popularity.',
							},
						],
					},
					votes: 102,
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
			commentId: 'c_hyperlinks_004',
			commentedBy: 'hypothesis_tester',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"You say stats show every month is different but visually nothing stands out. Isn't that just noise being flagged as significant?",
					},
				],
			},
			votes: 95,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_hyperlinks_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Good skepticism. With large datasets, even small differences can be statistically significant. The point is that while months differ statistically, there's no dramatic pattern suggesting event-driven changes. It's steady growth with month-to-month variance, not major shifts.",
							},
						],
					},
					votes: 107,
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

	post2_3_2_negativeLinks: [
		{
			commentId: 'c_negativity_001',
			commentedBy: 'sentiment_researcher',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Politics becoming the source of negativity despite being one of the smallest clusters is wild. What changed in January 2016?',
					},
				],
			},
			votes: 118,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_negativity_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'January 2016 was when the primary season was ramping up. However, the shift appears gradual rather than sudden. It might be less about a specific event and more about the political climate becoming more contentious as the election year progressed.',
							},
						],
					},
					votes: 132,
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
			commentId: 'c_negativity_002',
			commentedBy: 'humor_analyst',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Why does Humor/Memes receive the most negativity? Are meme subreddits just magnets for criticism?',
					},
				],
			},
			votes: 86,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_negativity_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Meme subreddits often engage with controversial topics through satire and parody. When they make fun of political issues, they attract negative links from communities who disagree with the framing. Humor about politics is often divisive.',
							},
						],
					},
					votes: 99,
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
			commentId: 'c_negativity_003',
			commentedBy: 'black_mole_commenter',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'Love the phrase "politics being the black mole of it!" Pretty accurate description of political Reddit.',
					},
				],
			},
			votes: 147,
			vote: 0,
			saved: false,
			followed: false,
			children: [],
			numberofChildren: 0,
			level: 1,
		},
		{
			commentId: 'c_negativity_004',
			commentedBy: 'causality_seeker',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'You keep saying no link to real-world events. But surely the election had SOME effect on negativity?',
					},
				],
			},
			votes: 73,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_negativity_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"The election likely contributed to the overall trend, but we don't see sharp spikes at key moments like debates, conventions, or election day itself. The negativity increase looks more like a gradual cultural shift throughout the election year rather than responses to specific events.",
							},
						],
					},
					votes: 88,
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
			commentId: 'c_negativity_005',
			commentedBy: 'longitudinal_fan',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The gradual transformation angle is interesting. Does this suggest political polarization on Reddit was a slow build rather than event-triggered?',
					},
				],
			},
			votes: 105,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_negativity_005_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'That appears to be the case. Rather than the 2016 election causing sudden changes, it seems to have been part of a longer process of increasing political negativity and polarization in online discourse. The events may have accelerated existing trends rather than creating new patterns.',
							},
						],
					},
					votes: 121,
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

	post3_3_2_politicsZoom: [
		{
			commentId: 'c_polzoom_001',
			commentedBy: 'reciprocity_curious',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'The reciprocity finding is cool. Politics links to other clusters at the same scale those clusters link back to Politics?',
					},
				],
			},
			votes: 77,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_polzoom_001_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									'Yes, for both positive and negative links. This suggests that linking behavior on Reddit is generally symmetric. When Politics engages heavily with a cluster, that cluster engages back at similar levels. This holds true regardless of whether the links are positive or negative.',
							},
						],
					},
					votes: 92,
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
			commentId: 'c_polzoom_002',
			commentedBy: 'dunn_test_guy',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"Why use Dunn's test specifically? What makes it appropriate here?",
					},
				],
			},
			votes: 64,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_polzoom_002_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Dunn's test is a post-hoc test used after Kruskal-Wallis to identify which specific pairs of groups are significantly different. Since we wanted to know which pairs of months showed the strongest differences, Dunn's test lets us make those pairwise comparisons while controlling for multiple testing.",
							},
						],
					},
					votes: 76,
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
			commentId: 'c_polzoom_003',
			commentedBy: 'temporal_analyst',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							"Early 2014 vs end of 2016 being the most different makes sense given Reddit growth. But doesn't that undermine claims about the election?",
					},
				],
			},
			votes: 98,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_polzoom_003_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"That's exactly the point. The biggest differences correspond to the beginning and end of our dataset, which is exactly what you'd expect from steady growth over time. If the election had a unique impact, we'd expect to see unusual patterns specifically around November 2016, which we don't.",
							},
						],
					},
					votes: 112,
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
			commentId: 'c_polzoom_004',
			commentedBy: 'dataset_critic',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'You mention needing data after the election to draw conclusions. Kind of a big limitation, no?',
					},
				],
			},
			votes: 85,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_polzoom_004_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"It is a limitation. Without data extending into 2017-2018, we can't tell if the growth we see continuing through the election was unique or just part of a longer trend. If hyperlinks dropped off after our dataset ends, that would suggest the election had a specific impact. We can only work with available data.",
							},
						],
					},
					votes: 97,
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
			commentId: 'c_polzoom_005',
			commentedBy: 'summary_seeker',
			publishTime: new Date().toISOString(),
			commentBody: {
				ops: [
					{
						insert:
							'So the TL;DR is: Reddit got louder, Politics got more negative, but no clear election fingerprint?',
					},
				],
			},
			votes: 134,
			vote: 0,
			saved: false,
			followed: false,
			children: [
				{
					commentId: 'c_polzoom_005_r1',
					commentedBy: 'liwc_lab_notes',
					publishTime: new Date().toISOString(),
					commentBody: {
						ops: [
							{
								insert:
									"Perfect summary. Reddit's political sphere was evolving throughout 2014-2017, with Politics becoming the negativity hub and overall activity increasing. But the patterns look like long-term cultural shifts rather than reactions to specific political moments, including the 2016 election itself.",
							},
						],
					},
					votes: 156,
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

	post3_2_3_correlations: [
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
