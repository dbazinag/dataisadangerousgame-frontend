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
					<p>We matched cluster id with theme manually by looking at subreddits in the different clusters. It is a bit subjective since there is a lot of subs that are unclassifiable (and there are globally pornographic subs in every cluster) and also because the clusters aren't perfect at all. First the embeddings were made by using a 'who posts where' method, so if one user posts in two different subs their embeddings will be close (in direction). Thus, the embeddings are not totally grouped by theme but by community of users; if many users post in r/cooking and in r/donaldtrump actively they may be clustered together because seen similar by the algorithm. These clusters must be taken cautiously especially the big ones since they regroup a lot of unclassifiable subreddits.</p>
					<br>
					<iframe src="${baseUrl}/plotly/cluster_distribution.html" title="Cluster Distribution" scrolling="no"></iframe>
					<br>
					<p>It is interesting that the clusters are not evenly distributed at all but it was to be expected. Our politics cluster contains about 2 thousand subreddits making it ~ 4 % of the dataset. The biggest one 'NSFW' is about 26 % and the smallest 'Celebrities' about 1 %.</p>
					<br>
					<h3>Upon close inspection of the map, the answer is: both.</h3>
					<p>Some clusters jump out immediately while others are messier, with overlaps and a lot of outliers. But the political cluster stands out which is what we’re looking for!</p>
					<p>So the map isn’t a clean taxonomy of Reddit, it's more like a map of shared communities, and it works best when you keep that in mind. Now let’s see how those clusters behave with each other by studying their hyperlinks!</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 3500,
				commentCount: 0,
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
				customClass: 'first-post-charts',
			},
		},
		{
			data: {
				_id: 'post1_2_2_hyperlinks_analysis',
				title:
					"Which Reddit clusters link the most to others? Turns out it's not who you'd expect",
				content: `
				<p>After establishing our cluster structure, we wanted to understand how these communities actually interact with one another. To do this, we analyzed hyperlink patterns between subreddit clusters across the entire dataset.</p>
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
				<iframe src="${baseUrl}/plotly/Overall_source_activity.html" title="Outgoing hyperlinks by cluster" scrolling="no"></iframe>
				<br>
				<p>Three clusters clearly dominate the outgoing link activity: Humor/Memes, Politics, and Adult Life & Technology. These communities are by far the most active in sharing hyperlinks to other parts of Reddit.</p>
				<br>

				<h3>Target Activity: Who Gets Linked To?</h3>
				<p>Similarly, when we examine which clusters receive the most incoming hyperlinks, a nearly identical pattern emerges:</p>
				<br>
				<iframe src="${baseUrl}/plotly/Overall_target_activity.html" title="Incoming hyperlinks by cluster" scrolling="no"></iframe>
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
				<p>This pattern sets the stage for deeper questions: <em>Does this linking behavior correlate with linguistic style? Do communities that link frequently to Politics adopt similar communication patterns?</em> We'll explore these questions in the following posts.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1872,
				commentCount: 14,
				createdAt: '2025-12-19T10:15:00Z',
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
                    <p>In this part of our analysis, we wanted to see where <strong>r/Politics</strong> stands within the broader Reddit network in terms of linguistic features. To do this, we calculated five distinct scores based on LIWC categories to describe the writing style of a post:</p>
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
				_id: 'post2_2_3_cluster_results',
				title: 'Discussion: Who talks like Politics?',
				content: `
				<p>The results align with our intuition but offer some noticeable surprises.</p>
				<br>
				<p>The <strong>Politics</strong> cluster performs exactly as you might expect: it is significantly more emotional, more argumentative, and more social, while being less structured than other communities.</p>
				<br>
				<p>What is surprising, however, is that the <strong>Humor/Memes</strong> and <strong>Niche Interests</strong> clusters aren’t far behind. While their specific topics differ, their stylistic “vibe”—emotional, social, and less loose in structure—is remarkably similar to political discourse.</p>
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

				<p><strong>Conclusion:</strong> Only these two correlations provided strong, interpretable signals. For political analysis, the link between emotion and social language is critical: emotional rhetoric on Reddit is rarely abstract—it is almost always tied to references to people, groups, and social context.</p>
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
				_id: 'post1_3_1_1_genderGap',
				title:
					"The Great Reddit Gender Gap: When Politics Gets Loud, Who's Talking?",
				content: `
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
				<p>When we normalize the data to account for population differences—examining comments per person rather than total comment volume—the picture changes considerably. The massive gap we saw in absolute numbers largely disappears.</p>
				<br>
				<p>On average, both male and female users post around 0.2-0.3 comments per person per week, with remarkably similar patterns throughtime period. While our statistical tests still indicate that men comment slightly more per person (p < 0.000001), the practical difference is quite small.</p>
				<br>

				<h3>The November 2016 Spike: A Shared Reaction</h3>
				<p>Looking at the timeline, one moment stands out dramatically: November 2016. Both total comment counts and per-person metrics show a sharp surge around the US presidential election.</p>
				<br>
				<p>In absolute numbers, male comments nearly doubled to around 150,000 in a single week—a spike that looks massive and dominates the visual landscape of the graph. However, when we examine the per-person data, the story becomes more nuanced.</p>
				<br>
				<p>Both genders show comparable increases in individual activity, hitting around 0.45-0.55 comments per person. The election energized everyone roughly equally—the male spike just looks more dramatic in absolute numbers because there are so many more men in these communities to begin with.</p>
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
				createdAt: '2025-12-19T11:30:00Z',
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
				<p>The combination of these findings paints a clear picture of how political discourse functions on Reddit. The voting system doesn't just reflect opinion—it actively shapes whose voices get heard and what kinds of content rise to the top. In political subreddits, that system appears to favor male voices and controversial takes.</p>
			`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 2287,
				commentCount: 16,
				createdAt: '2025-12-19T12:00:00Z',
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
				createdAt: '2025-12-19T12:30:00Z',
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
				<p>These patterns complement our gender analysis. Just as we found that certain communication styles (longer, more frequent, more controversial) are rewarded on political Reddit, we now see that certain political communities embody those same high-engagement, high-controversy patterns more than others.</p>
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
				_id: 'post1_3_3_time_series_major_events',
				title:
					'The 2016 election barely shows up in the plots… until you test for spikes',
				content: `
				<p>After analyzing hyperlinks over time, we looked at how LIWC-style scores evolve from 2014 to 2017.</p>
				<p>The raw time series don’t say much on their own—too many random peaks. So we ran a robust z-score spike test to flag months where language actually deviates from normal behavior.</p>
				<p>We did this both for all clusters and for posts replying to Politics, focusing on political, emotional, and social language. Full plots and details below.</p>
				<br>

				<h3>Political Score Over Time (By Cluster)</h3>
				<iframe src="${baseUrl}/plotly/political_score_time_series.html" title="Political score over time by cluster" scrolling="no"></iframe>
				<br>

				<p>We first visualized how the <strong>political_score</strong> evolves over time for each cluster from January 2014 to April 2017. At first glance, the plot does not suggest any obvious impact of the 2016 elections: there is no clear spike in LIWC features from September to November 2016 compared to the rest of the three-year period. Spikes do occur, but they are present in clusters throughout the entire time period, making it difficult to determine whether any particular event drove a change.</p>
				<br>

				<h3>Posts Toward Politics</h3>
				<p>We also plotted posts directed towards <strong>r/Politics</strong>, looking at three scores over time: Political score, Emotionality score, and Social score.</p>
				<br>

				<h4>Political Score (Toward Politics)</h4>
				<iframe src="${baseUrl}/plotly/political_score_twpol.html" title="Political score over time for posts toward Politics" scrolling="no"></iframe>
				<br>

				<h4>Emotionality Score (Toward Politics)</h4>
				<iframe src="${baseUrl}/plotly/emotion_score_time_series.html" title="Emotionality score over time for posts toward Politics" scrolling="no"></iframe>
				<br>

				<h4>Social Score (Toward Politics)</h4>
				<iframe src="${baseUrl}/plotly/social_score_time_series.html" title="Social score over time for posts toward Politics" scrolling="no"></iframe>
				<br>

				<p>As with the overall plots, visual inspection alone does not allow us to draw clear conclusions about specific events.</p>
				<br>

				<h3>Statistical Spike Detection</h3>
				<p>To rigorously identify temporal spikes, we applied a <strong>robust z-score test</strong>. This test standardizes the monthly values relative to the median and <em>median absolute deviation</em>, making it less sensitive to outliers and long-term trends than a standard z-score. It allows us to detect months where a score deviates significantly from typical behavior.</p>
				<br>
				<p>Applying this method to the <strong>political_score across clusters</strong>, we identified a significant spike in <strong>November 2016</strong> with a z-score of 3.12. This spike coincides with the 2016 U.S. election and is also associated with a sharp increase in the number of hyperlinks posted by the Politics cluster. Together, these observations suggest that the election affected Reddit users’ engagement and style across clusters, influencing both the content discussed by the Politics cluster and other clusters’ interactions with political subjects.</p>
				<br>
				<p>For <strong>posts directed towards Politics</strong>, the same robust z-score test revealed spikes in <strong>April 2017</strong> for both political_score and emotionality_score. Although this month does not correspond to major events in the Trump presidency, it indicates a period of heightened reaction toward political discussions.</p>
				<br>
				<p>Additionally, examining the Politics cluster specifically, the <strong>social_score</strong> spiked in <strong>September 2016</strong>, which could reflect subtle effects of the election period even if not visually obvious in the raw time series.</p>
				<br>

				<h3>Conclusion</h3>
				<p>Once you look at the spike results, things get clearer.</p>
				<p>There’s a strong political-style spike in November 2016, right during the election, and it lines up with a big jump in hyperlinks from the Politics cluster.</p>
				<p>For posts replying to Politics, the biggest spikes in political and emotional language happen later, around April 2017, suggesting delayed or sustained reactions. And inside the Politics cluster itself, social language spikes in September 2016, right before the election.</p>
				<p>So the election doesn’t jump out visually, but statistically, it does show up in how Reddit talks over time.</p>
				`,
				kind: 'hybrid',
				subreddit: 'DataScience',
				author: 'liwc_lab_notes',
				votes: 1780,
				commentCount: 6,
				customClass: 'zoomed-out-charts',
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
									'Exactly. This is one of the key findings—cluster size and cluster influence are not the same thing. Politics has disproportionate visibility and connectivity in the network despite being relatively small.\n',
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
									'We focused specifically on hyperlinks between Reddit posts and subreddits—internal Reddit links. This allows us to map the cross-referencing behavior between different parts of the platform.\n',
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
