import os, sys
sys.stdout.reconfigure(encoding='utf-8')

files = [f for f in os.listdir('.') if f.endswith('.html') and os.path.isfile(f)]
total = 0

for fname in files:
    content = open(fname, 'r', encoding='utf-8').read()
    new_content = content

    # index.html has shorelogo.png, others have logo.png
    # Replace header logo (both variants) with circle style
    new_content = new_content.replace(
        'src="images/shorelogo.png" alt="" title="TripGo">',
        'src="images/shorelogo.png" alt="" title="TripGo" style="height:65px;width:65px;object-fit:cover;border-radius:50%;border:2px solid #7c007c;">'
    )
    new_content = new_content.replace(
        'src="images/logo.png" alt="" title="TripGo">',
        'src="images/shorelogo.png" alt="" title="TripGo" style="height:65px;width:65px;object-fit:cover;border-radius:50%;border:2px solid #7c007c;">'
    )
    # mobile menu logo
    new_content = new_content.replace(
        'src="images/logo.png" alt="" title="">',
        'src="images/shorelogo.png" alt="" title="" style="height:55px;width:55px;object-fit:cover;border-radius:50%;">'
    )
    # chatbox logo
    new_content = new_content.replace(
        '<img src="images/logo.png" alt="Logo">',
        '<img src="images/shorelogo.png" alt="Logo" style="height:40px;width:40px;object-fit:cover;border-radius:50%;">'
    )

    if new_content != content:
        open(fname, 'w', encoding='utf-8').write(new_content)
        total += 1
        print('Updated:', fname)

print('Done. Total:', total)
