"""
Standardise nav-links on every HTML page.
Adds Prepper Guide + Censorship to all pages that are missing them.
Preserves nav-active on the correct page.
"""
import os, re

DIR = 'C:/usr/lomaxd/Radar_Project/Website'

# Skip backups and the Google verification file
SKIP = {'prepper_bak.html', 'compare_features_bak.html',
        'survelliance_bak.html', 'google5a263ae81263599e.html'}

# Canonical nav order  (href, display label)
NAV_ITEMS = [
    ('index.html',           'Home'),
    ('scenarios.html',       'Scenarios'),
    ('emergency.html',       'Emergency'),
    ('prepper.html',         'Prepper Guide'),
    ('censorship.html',      'Censorship'),
    ('matrix.html',          'Matrix'),
    ('privacy-policy.html',  'Privacy Policy'),
    ('release-notes.html',   'Releases'),
    ('premium.html',         'Premium'),
    ('ios-limitations.html', 'iOS'),
    ('whatsapp.html',        'WhatsApp'),
    ('telegram.html',        'Telegram'),
    ('signal.html',          'Signal'),
    ('surveillance.html',    'Surveillance'),
]

UL_RE = re.compile(r'(<ul class="nav-links">)(.*?)(</ul>)', re.DOTALL)

results = {'ok': [], 'skip': [], 'no_nav': []}

for fname in sorted(os.listdir(DIR)):
    if not fname.endswith('.html'):
        continue
    if fname in SKIP:
        results['skip'].append(fname)
        continue

    fpath = os.path.join(DIR, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    m = UL_RE.search(content)
    if not m:
        results['no_nav'].append(fname)
        continue

    # Detect indentation from the whitespace before the <ul> on its line
    pre = content[:m.start()]
    indent_m = re.search(r'\n([ \t]+)$', pre)
    ul_indent = indent_m.group(1) if indent_m else '    '
    li_indent = ul_indent + '  '

    # Build li items, nav-active on the page that matches this file
    items = []
    for href, label in NAV_ITEMS:
        if fname == href:
            items.append(f'{li_indent}<li><a href="{href}" class="nav-active">{label}</a></li>')
        else:
            items.append(f'{li_indent}<li><a href="{href}">{label}</a></li>')

    new_ul = (m.group(1)
              + '\n'
              + '\n'.join(items)
              + '\n' + ul_indent
              + m.group(3))

    new_content = content[:m.start()] + new_ul + content[m.end():]

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    results['ok'].append(fname)

print(f"\nUpdated ({len(results['ok'])}): {', '.join(results['ok'])}")
print(f"  Skipped ({len(results['skip'])}): {', '.join(results['skip'])}")
print(f"  No nav  ({len(results['no_nav'])}): {', '.join(results['no_nav'])}")
