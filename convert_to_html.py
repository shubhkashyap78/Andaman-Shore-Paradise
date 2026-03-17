import os
import re

BASE_DIR = r"d:\JR technology\TriploomTours"

# Read header and footer
with open(os.path.join(BASE_DIR, "include", "header.php"), "r", encoding="utf-8") as f:
    header_content = f.read()

with open(os.path.join(BASE_DIR, "include", "footer.php"), "r", encoding="utf-8") as f:
    footer_content = f.read()

# Replace .php links with .html in header and footer
def replace_php_links(content):
    return re.sub(r'(href=["\'])([^"\']*?)\.php(["\'])', r'\1\2.html\3', content)

header_html = replace_php_links(header_content)
footer_html = replace_php_links(footer_content)

# Common JS block
js_block = """
<script data-cfasync="false" src="js/email-decode.min.js"></script>
<script src="js/jquery.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/appear.js"></script>
<script src="js/parallax.min.js"></script>
<script src="js/tilt.jquery.min.js"></script>
<script src="js/jquery.paroller.min.js"></script>
<script src="js/wow.js"></script>
<script src="js/swiper.min.js"></script>
<script src="js/backtotop.js"></script>
<script src="js/odometer.js"></script>
<script src="js/mixitup.js"></script>
<script src="js/parallax-scroll.js"></script>
<script src="js/gsap.min.js"></script>
<script src="js/SplitText.min.js"></script>
<script src="js/ScrollTrigger.min.js"></script>
<script src="js/ScrollToPlugin.min.js"></script>
<script src="js/ScrollSmoother.min.js"></script>
<script src="js/jquery.marquee.min.js"></script>
<script src="js/magnific-popup.min.js"></script>
<script src="js/nav-tool.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/element-in-view.js"></script>
<script src="js/script.js"></script>
"""

# Formspree form handler JS
contact_form_js = """
<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = this;
    var data = new FormData(form);
    fetch('https://formspree.io/f/xpwzgkqv', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(function(response) {
        if (response.ok) {
            alert('Thank you! Our representative will contact you soon.');
            form.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    }).catch(function() {
        alert('Something went wrong. Please try again.');
    });
});
</script>
"""

package_form_js = """
<script>
document.getElementById('package-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = this;
    var data = new FormData(form);
    fetch('https://formspree.io/f/xpwzgkqv', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(function(response) {
        if (response.ok) {
            alert('Thank you! Our representative will contact you soon.');
            form.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    }).catch(function() {
        alert('Something went wrong. Please try again.');
    });
});
</script>
"""

def convert_php_to_html(php_content, filename):
    # Remove PHP include statements and replace with actual header/footer
    html = php_content
    html = re.sub(r"<\?php\s+include\s+'include/header\.php';\s*\?>", header_html, html)
    html = re.sub(r'<\?php\s+include\s+"include/header\.php";\s*\?>', header_html, html)
    html = re.sub(r"<\?php\s+include\s+'include/footer\.php';\s*\?>", footer_html, html)
    html = re.sub(r'<\?php\s+include\s+"include/footer\.php";\s*\?>', footer_html, html)
    
    # Remove any remaining PHP tags
    html = re.sub(r'<\?php.*?\?>', '', html, flags=re.DOTALL)
    
    # Replace .php links with .html
    html = replace_php_links(html)
    
    # Add form JS for contactus.html
    if filename == 'contactus.php':
        # Add id to contact form if not present
        html = html.replace('<form method="post" action="contactform.html" id="contact-form">', 
                           '<form method="post" action="contactform.html" id="contact-form">')
        html = html.replace('action="contactform.html"', 'action="contactform.html"')
        # Insert JS before </body>
        html = html.replace('</body>', contact_form_js + '\n</body>')
    
    # Add package form JS for pages with package-form
    if 'package-form' in html or 'packageform.html' in html:
        html = html.replace('</body>', package_form_js + '\n</body>')
    
    return html

# Get all PHP files in root directory (not include folder)
php_files = [f for f in os.listdir(BASE_DIR) 
             if f.endswith('.php') and os.path.isfile(os.path.join(BASE_DIR, f))
             and f not in ['contactform.php', 'packageform.php']]

converted = []
skipped = []

for php_file in php_files:
    php_path = os.path.join(BASE_DIR, php_file)
    html_file = php_file.replace('.php', '.html')
    html_path = os.path.join(BASE_DIR, html_file)
    
    try:
        with open(php_path, 'r', encoding='utf-8', errors='ignore') as f:
            php_content = f.read()
        
        html_content = convert_php_to_html(php_content, php_file)
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        converted.append(html_file)
        print(f"OK: {php_file} -> {html_file}")
    except Exception as e:
        skipped.append(php_file)
        print(f"ERROR: {php_file} - {e}")

print(f"\nTotal converted: {len(converted)}")
print(f"Skipped: {len(skipped)}")
if skipped:
    print("Skipped files:", skipped)
