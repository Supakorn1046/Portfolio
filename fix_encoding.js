const fs = require('fs');

const path = 'c:\\Web_project\\index.html';
let html = fs.readFileSync(path, 'utf8');

const correctChatHTML = `    <div id="ai-chat-window" class="hidden">
        <div class="ai-chat-header">
            <div class="ai-logo">SJ</div>
            <div class="ai-header-info">
                <h4>ถามเกี่ยวกับ SUPAKORN</h4>
                <p><span class="status-dot-ai"></span> ผู้ช่วย AI &bull; ตอบทันที</p>
            </div>
            <div class="ai-header-actions">
                <button class="ai-action-btn" onclick="resetAIChat()" title="เริ่มแชทใหม่ (Reset)">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                </button>
                <button class="ai-action-btn" onclick="toggleAIChat()" title="ปิด (Close)" style="font-size: 24px; line-height: 1;">?</button>
            </div>
        </div>
        <div class="ai-chat-body" id="ai-chat-messages">
            <div class="ai-message ai-system">
                <p style="margin:0">สวัสดีครับ ?? ผมคือผู้ช่วย AI ของ Supakorn ถามอะไรก็ได้เกี่ยวกับทักษะ ประสบการณ์ หรือผลงานของเขา</p>
            </div>
            <div class="ai-suggested-questions">
                <button onclick="sendAIQuestion('Supakorn ทำอะไร?')">Supakorn ทำอะไร?</button>
                <button onclick="sendAIQuestion('เขาถนัดเทคโนโลยีอะไร?')">เขาถนัดเทคโนโลยีอะไร?</button>
                <button onclick="sendAIQuestion('เล่าผลงานของเขาหน่อย')">เล่าผลงานของเขาหน่อย</button>
                <button onclick="sendAIQuestion('ติดต่อเขาได้อย่างไร?')">ติดต่อเขาได้อย่างไร?</button>
            </div>
        </div>
        <div class="ai-chat-input-area">
            <form onsubmit="handleAIChatSubmit(event)">
                <input type="text" id="ai-chat-input" placeholder="พิมพ์ข้อความ..." autocomplete="off">
                <button type="submit" class="ai-send-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </form>
            <div class="ai-chat-footer">
                ใช้ Gemini AI ในการตอบคำถาม
            </div>
        </div>
    </div>`;

html = html.replace(/<div id="ai-chat-window" class="hidden">[\s\S]*?<script src="js\/script\.js">/m, correctChatHTML + '\n\n    <script src="js/script.js">');

fs.writeFileSync(path, html, 'utf8');
console.log('Fixed index.html AI Chat block');
