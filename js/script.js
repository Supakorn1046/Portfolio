// --- Language Translation Logic ---
const translations = {
    th: {
        nav_proj: "ผลงาน",
        nav_about: "เกี่ยวกับฉัน",
        nav_exp: "ประสบการณ์",
        nav_edu: "การศึกษา",
        nav_achieve: "ใบรับรอง",
        nav_contact: "ติดต่อ",

        hero_title: "SUPAKOR<span class='animate-letter'>N</span><br>JEAMSAP",
        hero_subtitle: "นักพัฒนา FULL STACK",

        about_title: "เกี่ยวกับฉัน",
        about_text: "ผมเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา จะจบการศึกษาในปี 2026 มีความสนใจด้าน Software Engineering และ UX/UI Design มุ่งมั่นพัฒนาซอฟต์แวร์ที่ใช้งานง่ายและมีประสิทธิภาพ",
        skills_soft_title: "SOFT SKILLS (ทักษะด้านอารมณ์และสังคม)",
        skills_hard_title: "HARD SKILLS (ทักษะความเชี่ยวชาญ)",
        skill_soft_1: "การแก้ปัญหา (PROBLEM SOLVING)",
        skill_soft_2: "เรียนรู้สิ่งใหม่ได้เร็ว (Fast Learner)",
        skill_soft_3: "การทำงานเป็นทีม (Team Collaboration)",

        exp_headline: "ประสบการณ์",
        exp_company: "@ บริษัท ยู แอนด์ เอิร์ธ (ไทยแลนด์) จำกัด",
        exp_desc: "ออกแบบ UX/UI สำหรับเว็บไซต์อีคอมเมิร์ซจำหน่ายสายคล้องคอ (Lanyard) เพื่อขยายตลาดสู่ระดับสากล โดยต่อยอดจากแพลตฟอร์มเดิมของไทยและญี่ปุ่น เน้นพัฒนาประสบการณ์ผู้ใช้งานให้ลื่นไหล ทันสมัย และตอบโจทย์กลุ่มลูกค้าในต่างประเทศ",

        edu_headline: "ประวัติการศึกษา",
        edu_deg: "ปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์",
        edu_uni: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
        edu_desc: "<strong>เกรดเฉลี่ยสะสม (GPAX):</strong> 3.01<br><strong>รายวิชาที่เกี่ยวข้อง:</strong> Web Application Development, Software Engineering",
        cert_btn_text: "ดูใบรับรอง (CERTIFICATE)",

        proj_headline: "ผลงานที่โดดเด่น",
        proj_sub: "รวมโปรเจกต์และผลงานการพัฒนาเว็บไซต์ที่ผ่านมาของผม",
        proj_1_title: "DMSKU Document Approval Workflow System",
        proj_1_desc: "ออกแบบ UX/UI และพัฒนา Frontend ด้วย Svelte 5 สำหรับระบบจัดการและติดตามเอกสาร (Form Builder & Tracking) สร้างระบบจัดการสิทธิ์ผู้ใช้งาน (Permission Management) และพัฒนาระบบจัดรูปแบบหน้ากระดาษ A4 บนเว็บเพื่อรองรับการพิมพ์ที่แม่นยำ",
        proj_2_title: "Lanyard E-Commerce Platform for the USA Market",
        proj_2_desc: "วิจัยเว็บไซต์คู่แข่งและออกแบบ UX/UI ผ่าน Figma เพื่อตอบโจทย์ตลาดอเมริกา พัฒนาหน้าเว็บ Responsive ด้วย HTML, CSS, Bootstrap 5 และ JavaScript นำโค้ดขึ้นใช้งานจริงผ่าน Vercel",
        proj_3_title: "Manga E-Commerce Platform",
        proj_3_desc: "พัฒนาระบบอีคอมเมิร์ซเต็มรูปแบบด้วย MERN Stack (MongoDB, Express, React, Node.js) ครอบคลุมระบบตระกร้าสินค้า การสั่งซื้อ และระบบจัดการหลังบ้าน (Admin Dashboard) สำหรับจัดการข้อมูลผู้ใช้และสินค้า",
        proj_4_title: "2D Game Development Project",
        proj_4_desc: "พัฒนาเกม 2D แนวต่อสู้กับบอส (Boss Fight) ด้วย Unity โดยแบ่งการต่อสู้เป็น 2 เวฟ ประยุกต์ใช้ C# ในการพัฒนาระบบกลไกการต่อสู้ (Combat Mechanics) การจัดการแอนิเมชัน และสร้างระบบบันทึกเวลา (Time Tracking) เพื่อเก็บสถิติการเล่น",
        proj_5_title: "CompaxTech - Software Development Agency",
        proj_5_desc: "วิจัยและออกแบบ UX/UI ให้กับเว็บไซต์ CompaxTech ซึ่งเป็นเอเจนซีรับพัฒนาซอฟต์แวร์และเว็บไซต์ โดยมุ่งเน้นการออกแบบที่ทันสมัย ใช้งานง่าย และสามารถนำเสนอความเชี่ยวชาญรวมถึงบริการของบริษัทได้อย่างมืออาชีพ",
        btn_view_site: "ดูเว็บไซต์ →",
        btn_view_imgs: "ดูรูปภาพ",
        btn_download_game: "ดาวน์โหลดเกม (2d.rar) ↓",
        btn_view_proto: "ดูต้นแบบ (Figma)",

        achieve_headline: "ใบรับรองและกิจกรรม",
        achieve_1: "ดูใบรับรอง",
        achieve_2: "กิจกรรม: CODE BATTLE",

        contact_label: "// ติดต่อ",
        contact_title: "พร้อมลุยโปรเจกต์ถัดไป",
        contact_desc: "ผมกำลังมองหาความท้าทายใหม่ๆ ทั้งในรูปแบบงานประจำ งานฟรีแลนซ์ และโปรเจกต์ที่น่าตื่นเต้น หากคุณมีไอเดียเจ๋งๆ ทักมาคุยกันได้เลยครับ",
        info_loc_label: "ที่อยู่",
        info_loc_val: "กรุงเทพมหานคร TH",
        info_status_label: "สถานะการรับงาน",
        info_status_val: "เปิดรับงานเต็มเวลา ฝึกงาน และฟรีแลนซ์",
        info_time_label: "เวลาตอบกลับ",
        info_time_val: "โดยปกติภายใน 24 ชั่วโมง",
        footer_built: "สร้างด้วย <span class='heart'>♥</span> - กรุงเทพฯ",

        cta_title: "บอกฉันสิว่าขั้นตอนต่อไปคืออะไร",
        cta_desc: "ตารางงานของผมพร้อมสำหรับโปรเจกต์ที่ดีที่สุดเสมอ บอกสเตจต่อไปของคุณมาได้เลย",
        cta_btn: "→ ติดต่อพูดคุย ←",
        back_top: "กลับสู่ด้านบน"
    },
    en: {
        nav_proj: "WORKS",
        nav_about: "ABOUT",
        nav_exp: "EXPERIENCE",
        nav_edu: "EDUCATION",
        nav_achieve: "CERTIFICATES",
        nav_contact: "CONTACT",

        hero_title: "SUPAKOR<span class='animate-letter'>N</span><br>JEAMSAP",
        hero_subtitle: "FULL STACK DEVELOPER",

        about_title: "ABOUT ME",
        about_text: "I am a Computer Engineering student at Kasetsart University, Sriracha Campus, graduating in 2026. I am passionate about Software Engineering and UX/UI Design, striving to build efficient and user-friendly software.",
        skills_soft_title: "SOFT SKILLS",
        skills_hard_title: "HARD SKILLS",
        skill_soft_1: "PROBLEM SOLVING",
        skill_soft_2: "Fast Learner",
        skill_soft_3: "Team Collaboration",

        exp_headline: "EXPERIENCE",
        exp_company: "@ YOU&Earth (Thailand) Co., Ltd.",
        exp_desc: "Designed UX/UI for a lanyard e-commerce website to expand into the international market, building upon existing Thai and Japanese platforms. Focused on developing a smooth, modern user experience that meets the needs of international customers.",

        edu_headline: "EDUCATION",
        edu_deg: "Bachelor of Engineering in Computer and Information Engineering",
        edu_uni: "Kasetsart University, Sriracha Campus",
        edu_desc: "<strong>GPAX:</strong> 3.01<br><strong>Relevant Courses:</strong> Web Application Development, Software Engineering",
        cert_btn_text: "VIEW CERTIFICATE",

        proj_headline: "FEATURED PROJECTS",
        proj_sub: "A collection of my recent projects and web development work.",
        proj_1_title: "DMSKU Document Approval Workflow System",
        proj_1_desc: "Designed UX/UI and developed the Frontend using Svelte 5 for a document management and tracking system (Form Builder & Tracking). Implemented user permission management and developed a web-based A4 paper formatting system to support precise printing.",
        proj_2_title: "Lanyard E-Commerce Platform for the USA Market",
        proj_2_desc: "Researched competitor websites and designed UX/UI via Figma tailored for the US market. Developed responsive web pages using HTML, CSS, Bootstrap 5, and JavaScript. Deployed the application to production using Vercel.",
        proj_3_title: "Manga E-Commerce Platform",
        proj_3_desc: "Developed a full-stack e-commerce system using the MERN Stack (MongoDB, Express, React, Node.js). Features include a shopping cart, checkout process, and an Admin Dashboard for managing users and products.",
        proj_4_title: "2D Game Development Project",
        proj_4_desc: "Developed a 2D Boss Fight game using Unity with 2 battle waves. Applied C# to implement combat mechanics, animation management, and a time tracking system to record player statistics.",
        proj_5_title: "CompaxTech - Software Development Agency",
        proj_5_desc: "Conducted UX/UI research and designed a professional website for CompaxTech, a software and web development agency. Focused on creating a modern, user-centric interface that effectively showcases the agency's technical expertise and services.",
        btn_view_site: "VISIT SITE →",
        btn_view_imgs: "VIEW IMAGES",
        btn_download_game: "DOWNLOAD GAME (2d.rar) ↓",
        btn_view_proto: "VIEW PROTOTYPE (Figma)",

        achieve_headline: "CERTIFICATES & ACTIVITIES",
        achieve_1: "VIEW CERTIFICATE",
        achieve_2: "ACTIVITY: CODE BATTLE",

        contact_label: "// CONTACT",
        contact_title: "READY TO BUILD",
        contact_desc: "I'm actively seeking new challenges—full-time roles, freelance gigs, or exciting collaborations. If you have a bold idea, let's talk.",
        info_loc_label: "LOCATION",
        info_loc_val: "BANGKOK, TH",
        info_status_label: "WORK STATUS",
        info_status_val: "OPEN TO FULL-TIME, INTERNSHIP & FREELANCE",
        info_time_label: "RESPONSE TIME",
        info_time_val: "TYPICALLY WITHIN 24 HOURS",
        footer_built: "BUILT WITH <span class='heart'>♥</span> - BANGKOK",

        cta_title: "TELL ME THE NEXT STAGE",
        cta_desc: "MY CALENDAR IS BOOKED FOR THE BEST PROJECTS. TELL ME THE NEXT STAGE.",
        cta_btn: "→ BOOK A SHOT ←",
        back_top: "BACK TO TOP"
    }
};

let currentLang = localStorage.getItem('site_lang') || 'th';

window.toggleLanguage = function () {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    localStorage.setItem('site_lang', currentLang);
    updateLanguageDisplay();
};

function updateLanguageDisplay() {
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.textContent = currentLang === 'th' ? 'EN' : 'TH';
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguageDisplay();
});

// Image Viewer Logic
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
let currentImageList = [];
let currentImageIndex = 0;

window.openImageViewer = function (imageList, startIndex = 0, event = null) {
    if (!imageViewer || !viewerImage || !imageList || imageList.length === 0) return;

    currentImageList = imageList;
    currentImageIndex = startIndex;
    
    let targetImg = null;
    if (event && event.currentTarget) {
        targetImg = event.currentTarget.querySelector('img');
        if (!targetImg && event.currentTarget.tagName === 'IMG') {
            targetImg = event.currentTarget;
        }
    }

    const openModal = () => {
        updateModalView();
        imageViewer.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (targetImg) targetImg.style.viewTransitionName = '';
        if (viewerImage) viewerImage.style.viewTransitionName = '';
    };

    if (document.startViewTransition && targetImg) {
        targetImg.style.viewTransitionName = 'project-image-transition';
        viewerImage.style.viewTransitionName = 'project-image-transition';
        document.startViewTransition(() => openModal());
    } else {
        openModal();
    }
};

window.closeImageViewer = function (e) {
    if (e && (e.target.id === 'viewerImage' || e.target.classList.contains('nav-btn'))) {
        return;
    }
    if (!imageViewer) return;

    const closeModal = () => {
        imageViewer.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (document.startViewTransition) {
        const currentSrc = currentImageList[currentImageIndex];
        const targetImg = document.querySelector(`img[src$="${currentSrc.split('/').pop()}"]:not(#viewerImage)`);
        
        if (targetImg) targetImg.style.viewTransitionName = 'project-image-transition';
        if (viewerImage) viewerImage.style.viewTransitionName = 'project-image-transition';
        
        const transition = document.startViewTransition(() => closeModal());
        
        transition.finished.then(() => {
            if (targetImg) targetImg.style.viewTransitionName = '';
            if (viewerImage) viewerImage.style.viewTransitionName = '';
        });
    } else {
        closeModal();
    }
};

window.nextImage = function (e) {
    if (e) e.stopPropagation();
    if (currentImageList.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentImageList.length;
        if (document.startViewTransition) {
            document.startViewTransition(() => updateModalView());
        } else {
            updateModalView();
        }
    }
};

window.prevImage = function (e) {
    if (e) e.stopPropagation();
    if (currentImageList.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentImageList.length) % currentImageList.length;
        if (document.startViewTransition) {
            document.startViewTransition(() => updateModalView());
        } else {
            updateModalView();
        }
    }
};

function updateModalView() {
    if (viewerImage && currentImageList.length > 0) {
        viewerImage.src = currentImageList[currentImageIndex];
    }
}

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        scrollObserver.observe(el);
    });
});

// AI Chat System Logic

// Conversation history
let chatHistory = [
    {
        role: "user",
        parts: [{ text: "System Prompt: คุณคือผู้ช่วย AI ของ ศุภกร เจียมทรัพย์ (Supakorn Jeamsap) นักศึกษาปี 4 วิศวกรรมคอมพิวเตอร์ที่ ม.เกษตร ศรีราชา และเป็นนักพัฒนา Full Stack ที่มีความสนใจใน Software Engineering และ UX/UI Design เขามีทักษะ (Hard Skills) ได้แก่ C, C++, Python, JavaScript, HTML, CSS, MongoDB, MySQL, React, Vite, Git/GitHub, Postman, และ Figma ผลงานเด่นๆ คือ DMSKU Document Approval Workflow System, Lanyard E-Commerce Platform for the USA Market, Manga E-Commerce Platform และ 2D Game Development Project สามารถติดต่อเขาได้ที่อีเมล supakorn.jeam@gmail.com, โทร 0925682555 ตอบคำถามเป็นภาษาไทย สุภาพ และสั้นกระชับเสมอ หากมีคำถามทั่วไปก็ตอบได้ตามปกติ" }]
    },
    {
        role: "model",
        parts: [{ text: "รับทราบครับ ผมจะทำหน้าที่เป็นผู้ช่วย AI ของคุณศุภกร และพร้อมตอบคำถามทุกอย่างครับ" }]
    }
];

function toggleAIChat() {
    const window = document.getElementById('ai-chat-window');
    window.classList.toggle('hidden');
}

function resetAIChat() {
    chatHistory = [
        {
            role: "user",
            parts: [{ text: "System Prompt: คุณคือผู้ช่วย AI ของ ศุภกร เจียมทรัพย์ (Supakorn Jeamsap) นักศึกษาปี 4 วิศวกรรมคอมพิวเตอร์ที่ ม.เกษตร ศรีราชา และเป็นนักพัฒนา Full Stack ที่มีความสนใจใน Software Engineering และ UX/UI Design เขามีทักษะ (Hard Skills) ได้แก่ C, C++, Python, JavaScript, HTML, CSS, MongoDB, MySQL, React, Vite, Git/GitHub, Postman, และ Figma ผลงานเด่นๆ คือ DMSKU Document Approval Workflow System, Lanyard E-Commerce Platform for the USA Market, Manga E-Commerce Platform และ 2D Game Development Project สามารถติดต่อเขาได้ที่อีเมล supakorn.jeam@gmail.com, โทร 0925682555 ตอบคำถามเป็นภาษาไทย สุภาพ และสั้นกระชับเสมอ หากมีคำถามทั่วไปก็ตอบได้ตามปกติ" }]
        },
        {
            role: "model",
            parts: [{ text: "รับทราบครับ ผมจะทำหน้าที่เป็นผู้ช่วย AI ของคุณศุภกร และพร้อมตอบคำถามทุกอย่างครับ" }]
        }
    ];
    
    const chatBody = document.getElementById('ai-chat-messages');
    chatBody.innerHTML = `
        <div class="ai-message ai-system">
            <p style="margin:0">สวัสดีครับ 👋 ผมคือผู้ช่วย AI ของคุณศุภกร ถามอะไรก็ได้เกี่ยวกับทักษะ ประสบการณ์ หรือผลงานของเขา</p>
        </div>
        <div class="ai-suggested-questions">
            <button onclick="sendAIQuestion('ศุภกรทำอะไรบ้าง?')">ศุภกรทำอะไรบ้าง?</button>
            <button onclick="sendAIQuestion('เขาถนัดเทคโนโลยีอะไร?')">เขาถนัดเทคโนโลยีอะไร?</button>
            <button onclick="sendAIQuestion('เล่าผลงานของเขาหน่อย')">เล่าผลงานของเขาหน่อย</button>
            <button onclick="sendAIQuestion('ติดต่อเขาได้อย่างไร?')">ติดต่อเขาได้อย่างไร?</button>
        </div>
    `;
    chatBody.scrollTop = 0;
}

function sendAIQuestion(question) {
    appendUserMessage(question);
    document.querySelector('.ai-suggested-questions').style.display = 'none';
    processAIResponse(question);
}

function handleAIChatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('ai-chat-input');
    const question = input.value.trim();
    if (!question) return;

    appendUserMessage(question);
    input.value = '';
    document.querySelector('.ai-suggested-questions').style.display = 'none';
    processAIResponse(question);
}

function appendUserMessage(text) {
    const chatBody = document.getElementById('ai-chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'ai-message ai-user';
    msgDiv.innerHTML = `<p style="margin:0">${text}</p>`;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

async function processAIResponse(question) {
    const chatBody = document.getElementById('ai-chat-messages');

    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message ai-system';
    typingDiv.innerHTML = `<p style="margin:0">กำลังคิด...</p>`;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;



    try {
        // Add user question to history
        chatHistory.push({
            role: "user",
            parts: [{ text: question }]
        });

        const response = await fetch(`/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: chatHistory
            })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        chatBody.removeChild(typingDiv);
        const answerText = data.candidates[0].content.parts[0].text;

        // Add model answer to history
        chatHistory.push({
            role: "model",
            parts: [{ text: answerText }]
        });

        const msgDiv = document.createElement('div');
        msgDiv.className = 'ai-message ai-system';
        // Parse markdown bold if any (**text** -> <strong>text</strong>)
        let formattedText = answerText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedText = formattedText.replace(/\n/g, '<br>');
        msgDiv.innerHTML = `<p style="margin:0">${formattedText}</p>`;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

    } catch (error) {
        if (chatBody.contains(typingDiv)) {
            chatBody.removeChild(typingDiv);
        }
        const msgDiv = document.createElement('div');
        msgDiv.className = 'ai-message ai-system';
        msgDiv.innerHTML = `<p style="margin:0; color: red;">ขออภัย เกิดข้อผิดพลาด: ${error.message}</p>`;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

let isScrolling = false;
window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.style.display = "flex";
            } else {
                scrollToTopBtn.style.display = "none";
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
