
path = 'public/plotly/cluster_distribution.html'
try:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    idx = content.find('class="plotly-graph-div"')
    if idx != -1:
        # look for style attribute in the next 100 chars
        snippet = content[idx:idx+150]
        print(f'Snippet: {snippet}')
        if 'height:100%' in snippet and 'width:100%' in snippet:
             print("Already 100%")
        elif 'height:' in snippet or 'width:' in snippet:
             print("Found hardcoded style")
        else:
             print("No explicit style found in snippet")
    else:
        print('Plotly div not found')
except Exception as e:
    print(f'Error: {e}')
