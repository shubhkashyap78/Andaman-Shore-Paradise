import os, sys
sys.stdout.reconfigure(encoding='utf-8')

replacements = [
    ('Triploom Tour & Travels', 'Andaman Shore Paradise'),
    ('Triploom Tour and Travels', 'Andaman Shore Paradise'),
    ('Triloom Tour & Travels', 'Andaman Shore Paradise'),
    ('triploom2026@gmail.com', 'andamanshoreparadise@gmail.com'),
    ('triploom.travels', 'andamanshoreparadise'),
]

html_files = [f for f in os.listdir('.') if f.endswith('.html') and os.path.isfile(f)]
total = 0
for fname in html_files:
    content = open(fname, 'r', encoding='utf-8').read()
    new_content = content
    for old, new in replacements:
        new_content = new_content.replace(old, new)
    if new_content != content:
        open(fname, 'w', encoding='utf-8').write(new_content)
        total += 1
        print('Updated:', fname)
print('Done. Total files updated:', total)
