#!/usr/bin/env python3
"""
Reorganize posts in mockData.js into a 4-act narrative structure.
"""

import re
import sys

def main():
    # Read the original file
    with open('src/mockData.js', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find where children array starts and ends
    children_start = None
    children_end = None
    
    for i, line in enumerate(lines):
        if 'children: [' in line:
            children_start = i + 1
        if children_start and '\t],\n' == line and 'after: null' in lines[i+1]:
            children_end = i
            break
    
    if children_start is None or children_end is None:
        print("Error: Could not find children array bounds")
        sys.exit(1)
    
    print(f"Children array: lines {children_start} to {children_end}")
    
    # Extract posts by finding each post object
    posts = {}
    current_post = []
    current_id = None
    brace_depth = 0
    in_post = False
    
    for i in range(children_start, children_end):
        line = lines[i]
        
        # Track brace depth
        brace_depth += line.count('{') - line.count('}')
        
        # Check if this is the start of a new post
        if '\t\t{' in line and not in_post:
            in_post = True
            current_post = [line]
            brace_depth = 1
        elif in_post:
            current_post.append(line)
            
            # Extract post ID if found
            if '_id:' in line and current_id is None:
                match = re.search(r"_id: '([^']+)'", line)
                if match:
                    current_id = match.group(1)
            
            # Check if post is complete
            if brace_depth == 0:
                if current_id:
                    # Remove the trailing comma and newline from last line if present
                    post_text = ''.join(current_post)
                    posts[current_id] = post_text
                    print(f"Extracted post: {current_id} ({len(current_post)} lines)")
                
                # Reset for next post
                current_post = []
                current_id = None
                in_post = False
    
    print(f"\nTotal posts extracted: {len(posts)}")
    
    # Define new order with timestamps
    new_order = [
        ('post0_2_1_intro_structure', '2025-12-18T09:00:00Z'),
        ('post1_2_2_hyperlinks_analysis', '2025-12-18T11:00:00Z'),
        ('post1_2_3_5writing_scores', '2025-12-18T13:00:00Z'),
        ('post2_2_3_cluster_results', '2025-12-18T15:00:00Z'),
        ('post3_2_3_correlations', '2025-12-18T17:00:00Z'),
        ('post1_1_1_politicalClustering', '2025-12-18T19:00:00Z'),
        ('post2_1_1_echoChambers', '2025-12-18T21:00:00Z'),
        ('post3_1_1_liwcAnger', '2025-12-18T23:00:00Z'),
        ('post4_1_1_negativityConcentration', '2025-12-19T01:00:00Z'),
        ('post5_1_1_negativityByIdeology', '2025-12-19T03:00:00Z'),
        ('post1_3_1_1_genderGap', '2025-12-19T05:00:00Z'),
        ('post1_3_1_2_stirringpot', '2025-12-19T07:00:00Z'),
        ('post1_3_1_3_genderScore', '2025-12-19T09:00:00Z'),
        ('post1_3_1_4_wordCount', '2025-12-19T11:00:00Z'),
        ('post1_3_1_5_electionActivity', '2025-12-19T13:00:00Z'),
        ('post1_3_2_timeEvolution', '2025-12-19T15:00:00Z'),
        ('post2_3_2_negativeLinks', '2025-12-19T17:00:00Z'),
        ('post3_3_2_politicsZoom', '2025-12-19T19:00:00Z'),
        ('post1_3_3_time_series_major_events', '2025-12-19T21:00:00Z'),
    ]
    
    # Build new children array
    new_children_lines = []
    for post_id, new_timestamp in new_order:
        if post_id in posts:
            post_text = posts[post_id]
            # Update timestamp
            post_text = re.sub(r"createdAt: '[^']+", f"createdAt: '{new_timestamp}", post_text)
            new_children_lines.append(post_text)
            print(f"Reordered: {post_id} -> {new_timestamp}")
        else:
            print(f"WARNING: Post {post_id} not found!")
    
    # Reconstruct the file
    new_lines = lines[:children_start] + new_children_lines + lines[children_end:]
    
    # Write back
    with open('src/mockData.js', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print(f"\n✓ Successfully reorganized {len(new_children_lines)} posts!")
    print("✓ Updated all timestamps sequentially")
    print("✓ mockData.js has been updated")

if __name__ == '__main__':
    main()
