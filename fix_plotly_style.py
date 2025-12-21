
path = 'public/plotly/cluster_map.html'
try:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    target = 'style="height:800px; width:1200px;"'
    replacement = 'style="height:100%; width:100%;"'

    if target in content:
        new_content = content.replace(target, replacement)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Replaced successfully')
    else:
        print(f'Target not found in {path}')
        # Debug: print snippet where it should be
        idx = content.find('plotly-graph-div')
        if idx != -1:
            print(f'Found plotly-graph-div at {idx}. Snippet:')
            print(content[idx:idx+100])

except Exception as e:
    print(f'Error: {e}')
