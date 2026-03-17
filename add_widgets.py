import os, sys
sys.stdout.reconfigure(encoding='utf-8')

floating_widgets = """
<!-- Floating WhatsApp + ChatBox -->
<style>
.floating-widgets {
    position: fixed;
    bottom: 30px;
    right: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    z-index: 9999;
}
.float-whatsapp {
    width: 55px;
    height: 55px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(37,211,102,0.5);
    text-decoration: none;
    transition: transform 0.3s;
}
.float-whatsapp:hover { transform: scale(1.1); }
.float-whatsapp i { color: #fff; font-size: 26px; }

.float-chat-btn {
    width: 55px;
    height: 55px;
    background: #7c007c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(124,0,124,0.4);
    cursor: pointer;
    transition: transform 0.3s;
}
.float-chat-btn:hover { transform: scale(1.1); }
.float-chat-btn i { color: #fff; font-size: 24px; }

.chatbox {
    display: none;
    width: 300px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    overflow: hidden;
    animation: fadeUp 0.3s ease;
}
.chatbox.open { display: block; }
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}
.chatbox-header {
    background: #7c007c;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.chatbox-header img {
    width: 40px; height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
}
.chatbox-header .info strong { color: #fff; font-size: 14px; display: block; }
.chatbox-header .info span { color: #e0b3e0; font-size: 12px; }
.chatbox-header .close-chat {
    margin-left: auto;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    background: none;
    border: none;
    line-height: 1;
}
.chatbox-body {
    padding: 16px;
    background: #f5f5f5;
    min-height: 80px;
}
.chatbox-body .chat-bubble {
    background: #fff;
    border-radius: 0 12px 12px 12px;
    padding: 10px 14px;
    font-size: 13px;
    color: #333;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    max-width: 90%;
}
.chatbox-footer {
    padding: 12px 16px;
    background: #fff;
    display: flex;
    gap: 8px;
}
.chatbox-footer input {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 8px 14px;
    font-size: 13px;
    outline: none;
}
.chatbox-footer button {
    background: #25D366;
    border: none;
    border-radius: 50%;
    width: 36px; height: 36px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

<div class="floating-widgets">
    <!-- ChatBox -->
    <div class="chatbox" id="chatbox">
        <div class="chatbox-header">
            <img src="images/logo.png" alt="Logo">
            <div class="info">
                <strong>Andaman Shore Paradise</strong>
                <span>&#128994; Online - Reply instantly</span>
            </div>
            <button class="close-chat" onclick="toggleChat()">&#10005;</button>
        </div>
        <div class="chatbox-body">
            <div class="chat-bubble">
                Hi there! &#128075; Planning a trip to Andaman? We're here to help. Send us a message!
            </div>
        </div>
        <div class="chatbox-footer">
            <input type="text" id="chatInput" placeholder="Type a message..." onkeydown="sendToWhatsApp(event)">
            <button onclick="sendToWhatsApp()">&#10148;</button>
        </div>
    </div>

    <!-- WhatsApp Button -->
    <a class="float-whatsapp" href="https://wa.me/919332446268" target="_blank" title="Chat on WhatsApp">
        <i class="fa fa-whatsapp"></i>
    </a>

    <!-- Chat Toggle Button -->
    <div class="float-chat-btn" onclick="toggleChat()" title="Chat with us">
        <i class="fa fa-comments"></i>
    </div>
</div>

<script>
function toggleChat() {
    var box = document.getElementById('chatbox');
    box.classList.toggle('open');
}
function sendToWhatsApp(e) {
    if (e && e.type === 'keydown' && e.key !== 'Enter') return;
    var msg = document.getElementById('chatInput').value.trim();
    if (!msg) msg = 'Hello! I want to know more about Andaman tour packages.';
    window.open('https://wa.me/919332446268?text=' + encodeURIComponent(msg), '_blank');
    document.getElementById('chatInput').value = '';
}
</script>
<!-- End Floating Widgets -->
"""

html_files = [f for f in os.listdir('.') if f.endswith('.html') and os.path.isfile(f)]
total = 0
for fname in html_files:
    content = open(fname, 'r', encoding='utf-8').read()
    if '</body>' in content and 'floating-widgets' not in content:
        new_content = content.replace('</body>', floating_widgets + '\n</body>')
        open(fname, 'w', encoding='utf-8').write(new_content)
        total += 1
        print('Updated:', fname)
print('Done. Total:', total)
