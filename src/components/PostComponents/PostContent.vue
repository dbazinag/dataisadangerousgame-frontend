<template>
	<div :style="shared ? 'padding: 30px' : 'padding:0'">
		<div class="subreddit-info">
			<span class="subreddit-image">
				<img
					src="../../../img/default_subreddit_image.png"
					alt=""
					v-if="
						!loadingSubreddit &&
						post.subreddit != undefined &&
						subreddit.picture == undefined
					"
				/>
				<img
					v-else-if="
						!loadingSubreddit &&
						post.subreddit != undefined &&
						subreddit.picture != undefined
					"
					:src="$baseurl + '/' + subreddit.picture"
					alt=""
				/>
			</span>
			<span class="subreddit-name" v-if="post.subreddit != undefined">
				<span id="subreddit-route" class="disabled-link">
					{{ post.subreddit }} </span
				>.
			</span>
			<span>
				<span v-if="post.kind == 'post'"
					><font-awesome-icon
						icon="fa-solid fa-code-branch"
						class="crosspost-icon"
					/>Crossposted by
				</span>
				<span v-else>Posted by .</span>
				<span
					v-if="post.postedBy != undefined"
					id="post-by-router"
					class="disabled-link"
				>
					{{ post.postedBy }} </span
				>&nbsp;{{ calculateTime }}
			</span>
		</div>

		<div class="post-title">
			<h3>
				{{ post.title }}
				<base-button
					v-if="post.flair != undefined || post.flair != null"
					class="flair"
					:button-text="post.flair.flairName"
					:style="{
						color: post.flair.textColor,
						background: post.flair.backgroundColor,
					}"
				/>
			</h3>
		</div>
		<div v-if="!editing">
			<div
				class="post-text"
				v-html="renderingHTML"
				v-if="post.content != undefined"
				:class="[
					{ blur: blur && !(parsedPreview && parsedPreview.isImage) },
					post.customClass,
				]"
			></div>
			<div v-if="post.link != undefined" class="post-link">
				<a :href="post.link">{{ post.link }}</a>
			</div>
			<div class="post-post" v-if="post.kind == 'post'">
				<post-content
					:post="post.sharedPostDetails"
					:shared="true"
				></post-content>
			</div>
			<div class="images">
				<picture-post
					:images="post.images"
					v-if="post.images.length > 1"
				></picture-post>
				<img
					v-else
					v-for="image in post.images"
					class="post-image"
					:key="image.id"
					:src="this.$baseurl + '/' + image.path"
					alt=""
				/>
			</div>
			<!-- Video removed as per request -->
			<div v-if="shared">
				{{ post.votes }} points .
				<router-link
					:to="
						post.subreddit != undefined
							? {
									name: 'comments',
									params: {
										postName: post.title,
										subredditName: post.subreddit,
										postId: post.id,
									},
							  }
							: {
									name: 'userPostComments',
									params: {
										userName: post.postedBy,
										postName: post.title,
										postId: post.id,
									},
							  }
					"
					>{{ post.comments }} comments</router-link
				>
			</div>
		</div>
	</div>
</template>
<script>
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import PicturePost from '../UserComponents/BaseUserComponents/PostComponents/PicturePost.vue';
export default {
	// beforeMount() {
	// 	if(post.kind=='post') {

	// 	}
	// },
	async beforeMount() {
		//document.querySelector('img.ql-image').style.width = '100%';
		//var element = document.querySelector('img.ql-image');
		// var element = document.querySelector('img');
		// Set style attribute with properties for the selected element
		// element.setAttribute('style', 'width:100%');
		if (this.post.subreddit != undefined) {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('community/getSubreddit', {
				subredditName: this.post.subreddit,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.subreddit = this.$store.getters['community/getSubreddit'];
			this.loadingSubreddit = false;
		}
		let responseData = null;
		try {
			responseData = await this.$store.dispatch('user/getUserTempData', {
				baseurl: this.$baseurl,
				userName: this.post.postedBy,
			});
		} catch (error) {
			this.error = error.message || 'Something went wrong';
		}
		if (responseData != null) this.getUserData = responseData;
	},
	data() {
		return {
			subreddit: {},
			showCard: false,
			showPCard: false,
			getUserData: {},
			loadingSubreddit: true,
		};
	},
	name: 'PostContent',
	components: {
		PicturePost,
	},
	props: {
		//@vuese
		//post object that will get displayed in this post component
		post: {
			type: Object,
			required: false,
			default: () => ({}),
		},
		blur: {
			required: false,
			type: Boolean,
		},
		shared: {
			required: false,
			type: Boolean,
		},
		editing: {
			required: false,
			type: Boolean,
			default: false,
		},
	},
	computed: {
		parsedPreview() {
			if (
				this.post.content &&
				typeof this.post.content === 'string' &&
				this.blur
			) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(this.post.content, 'text/html');
				// Find first image OR iframe (Plotly)
				const firstMedia = doc.querySelector('img, iframe');
				if (firstMedia) {
					// Return the media HTML. Treat as "isImage" to avoid blur/truncation.
					return { isImage: true, html: firstMedia.outerHTML };
				}
				// On feed: No picture/chart -> text preview
				const text = doc.body.textContent || '';
				return {
					isImage: false,
					html: text.slice(0, 200) + (text.length > 200 ? '...' : ''),
				};
			}
			return null;
		},
		renderingHTML() {
			if (this.parsedPreview) {
				return this.parsedPreview.html;
			}

			if (this.post.content && typeof this.post.content === 'string') {
				// Detail view: Full HTML
				return this.post.content;
			}

			var QuillDeltaToHtmlConverter =
				require('quill-delta-to-html').QuillDeltaToHtmlConverter;

			var deltaOps =
				this.post.content && this.post.content.ops
					? this.blur
						? this.post.content.ops.slice(
								0,
								this.post.content.ops.length / 2 + 1
						  )
						: this.post.content.ops
					: [];

			var cfg = {};

			var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

			var html = converter.convert();
			return html;
		},
		calculateTime() {
			var currentDate = new Date();
			var returnValue = '';
			// Handle both postedAt and createdAt field names
			var postTime = this.post.postedAt || this.post.createdAt;
			if (!postTime) {
				return 'Recently';
			}
			var myTime = new Date(postTime);
			// Check for invalid date
			if (isNaN(myTime.getTime())) {
				return 'Recently';
			}
			var diffMs = currentDate - myTime;
			var diffMins = Math.floor(diffMs / 60000);
			var diffHours = Math.floor(diffMs / 3600000);
			var diffDays = Math.floor(diffMs / 86400000);
			var diffMonths = Math.floor(diffDays / 30);

			if (diffMonths > 0) {
				returnValue =
					diffMonths + (diffMonths === 1 ? ' month ago' : ' months ago');
			} else if (diffDays > 0) {
				returnValue = diffDays + (diffDays === 1 ? ' day ago' : ' days ago');
			} else if (diffHours > 0) {
				returnValue =
					diffHours + (diffHours === 1 ? ' hour ago' : ' hours ago');
			} else if (diffMins > 0) {
				returnValue =
					diffMins + (diffMins === 1 ? ' minute ago' : ' minutes ago');
			} else {
				returnValue = 'Just now';
			}
			return returnValue;
		},
	},
	methods: {
		showCardM() {
			this.showCard = true;
		},
		hideCardM() {
			this.showCard = false;
		},
		showPCardM() {
			this.showPCard = true;
		},
		hidePCardM() {
			this.showPCard = false;
		},
		click() {
			// //console.log(this.subreddit);
		},
	},
};
</script>
<style scoped>
.images {
	overflow: hidden;
}
.post-text {
	width: 100%;
	overflow: hidden; /* Hide scrollbars caused by the wider iframe element before scaling */
	height: 100%;
	/* word-break: break-all; */
	word-break: normal;
	overflow-wrap: break-word;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: black;
}
.post-text ::v-deep img {
	max-width: 100%;
	height: auto;
	display: block;
}
p img .ql-image {
	width: 100%;
}
.post-text ::v-deep iframe {
	width: 200%; /* Double the rendering width to fit wide charts */
	transform: scale(0.5); /* Shrink by half to fit container */
	transform-origin: 0 0;
	height: 650px; /* Reduced to match specific Plotly height of ~550px + buffer */
	border: none;
	margin-bottom: -325px; /* Pull up next element by half the height */
}

.post-text.zoomed-out-charts ::v-deep iframe {
	width: 300%;
	transform: scale(0.333);
	margin-bottom: -567px; /* 850 - (850 * 0.333) approx 567 */
	height: 850px;
}

.post-text.first-post-charts ::v-deep iframe {
	width: 200%;
	transform: scale(0.5);
	transform-origin: 0 0;
	height: 750px; /* Slightly taller than default 650px for cluster map */
	border: none;
	margin-bottom: -375px; /* Pull up next element by half the height */
}

.subreddit-info .subreddit-image {
	padding-right: 5px;
}
.subreddit-name {
	position: relative;
}
.subreddit-info .subreddit-name a {
	font-weight: 700;
	color: black;
}

.subreddit-info .subreddit-name a:hover {
	text-decoration: underline;
}

.subreddit-info span:nth-of-type(3),
.subreddit-info #post-by-router {
	color: var(--color-grey-dark-2);
}

.subreddit-info #post-by-router:hover {
	text-decoration: underline;
}
.crosspost-icon {
	transform: rotate(90deg);
	margin: 0 5px;
}
.post-post {
	border: 1px solid var(--color-grey-light-8);
	border-radius: 5px;
}
.post-image {
	width: 100%;
	height: auto;
}
/* Video styles removed or overridden to be hidden just in case */
video {
	display: none;
}
.post-link {
	font-size: 12px;
}
.post-link:hover {
	font-size: 12px;
	text-decoration: underline;
}
div:last-of-type a {
	color: var(--color-grey-dark-2);
}
div:last-of-type a:hover {
	text-decoration: underline;
}
img.ql-image {
	width: 5px;
}
.flair {
	min-height: 10px;
	min-width: 30px;
	font-size: 9px;
	width: max-content;
	height: max-content;
	padding: 2px;
	background-color: white;
}
.sub-card {
	top: 10px;
	position: absolute;
	width: 200px;
	z-index: 5;
	border: 1px solid black;
}
.pro-card {
	top: 10px;
	position: absolute;
	width: 200px;
	z-index: 5;
	border: 1px solid black;
}
#post-by-router {
	position: relative;
}
.disabled-link {
	cursor: default;
	color: var(--color-grey-dark-2);
}
#subreddit-route.disabled-link {
	font-weight: 700;
	color: black;
}
</style>
