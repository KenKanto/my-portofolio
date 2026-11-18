// ==========================================================
// Kanto — Portfolio
// ==========================================================

// 1. Fade-in on scroll (elements with class "reveal")
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 },
    );

    items.forEach((el, i) => {
        el.style.transitionDelay = (i % 4) * 90 + "ms"; // small stagger
        io.observe(el);
    });
} else {
    // Fallback for very old browsers: just show everything
    items.forEach((el) => el.classList.add("is-visible"));
}

// 2. Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// 3. Language switch (EN default, ID added)
// ponytail: two languages, flat dict, no i18n lib. Add a lib only past ~5 locales.
const I18N = {
    en: {
        "nav.about": "About",
        "nav.values": "Values",
        "nav.contact": "Contact",
        "nav.talk": "Let's talk",
        "hero.title": 'Hi, <em>I\'m</em> Kanto',
        "hero.labelLeft":
            "Computer science<br />student &amp; aspiring<br />software engineer",
        "hero.labelRight":
            "Builder of<br />clean &amp; thoughtful<br />web projects",
        "hero.labelStat": "Always<br />shipping<br />side projects",
        "hero.cta": "Work with me",
        "about.script": "Hey, I'm Kanto",
        "about.title": "Student, builder,<br />and <em>lifelong</em> learner",
        "about.lead":
            "I remember the moment I wrote my first line of code and it actually ran. I have been chasing that feeling ever since.",
        "about.p1":
            "I'm a computer science student who wants to become a master programmer. Not someone who just knows the syntax, but someone who truly understands how things work under the hood.",
        "about.p2":
            "I enjoy turning ideas into real, working software, one commit at a time. Every project is practice, every bug is a lesson.",
        "about.caption": "currently: debugging ☕",
        "about.learning": "Always<br /><em>learning</em>",
        "about.tools": "Tools I work with",
        "marquee": "My Values",
        "values.c1.title": "Curiosity",
        "values.c1.text":
            'I never stop asking "why does this work?" Understanding the fundamentals matters more to me than copying a quick fix. Real mastery starts with real questions.',
        "values.c2.title": "Craftsmanship",
        "values.c2.text":
            "Clean, readable, maintainable code is a form of respect for whoever reads it next, including future me. I care about the details nobody notices until they are missing.",
        "values.c3.title": "Consistency",
        "values.c3.text":
            "Mastery is not built in one all-night coding sprint. It is built by showing up every day, writing a little code, and getting a little better each time.",
        "values.c4.title": "Growth Mindset",
        "values.c4.text":
            "Bugs, failed builds, and confusing errors are part of the process. I treat every mistake as feedback, and I'm always ready to learn, adapt, and try again.",
        "contact.script": "Say hello",
        "contact.title": "Let's build<br /><em>something</em>",
        "contact.text":
            "Have a project, an internship opportunity, or just want to talk about code? My inbox is always open.",
        "contact.email": "Email me",
        "footer.credit": "Designed &amp; coded by me",
    },
    id: {
        "nav.about": "Tentang",
        "nav.values": "Nilai",
        "nav.contact": "Kontak",
        "nav.talk": "Ngobrol yuk",
        "hero.title": 'Hai, <em>saya</em> Kanto',
        "hero.labelLeft":
            "Mahasiswa<br />ilmu komputer &amp;<br />calon software engineer",
        "hero.labelRight":
            "Pembuat<br />proyek web yang<br />rapi &amp; bermakna",
        "hero.labelStat": "Selalu<br />merilis<br />proyek sampingan",
        "hero.cta": "Ajak saya kerja",
        "about.script": "Hai, saya Kanto",
        "about.title": "Mahasiswa, pembuat,<br />dan <em>pembelajar</em> seumur hidup",
        "about.lead":
            "Saya ingat momen saat menulis baris kode pertama dan kode itu benar-benar berjalan. Sejak itu saya terus mengejar rasa yang sama.",
        "about.p1":
            "Saya mahasiswa ilmu komputer yang ingin menjadi programmer kelas master. Bukan yang sekadar hafal sintaks, tapi yang benar-benar paham cara kerja di balik layar.",
        "about.p2":
            "Saya suka mengubah ide menjadi perangkat lunak yang benar-benar berjalan, satu commit setiap kali. Setiap proyek adalah latihan, setiap bug adalah pelajaran.",
        "about.caption": "sekarang: memperbaiki bug ☕",
        "about.learning": "Terus<br /><em>belajar</em>",
        "about.tools": "Alat yang saya pakai",
        "marquee": "Nilai Saya",
        "values.c1.title": "Rasa Ingin Tahu",
        "values.c1.text":
            'Saya tak pernah berhenti bertanya "kenapa ini bisa jalan?" Memahami dasar jauh lebih penting bagi saya daripada menyalin solusi cepat. Penguasaan sejati dimulai dari pertanyaan yang sejati.',
        "values.c2.title": "Kualitas Kerja",
        "values.c2.text":
            "Kode yang bersih, mudah dibaca, dan mudah dirawat adalah bentuk hormat kepada siapa pun yang membacanya nanti, termasuk saya di masa depan. Saya peduli pada detail yang tak disadari sampai hilang.",
        "values.c3.title": "Konsistensi",
        "values.c3.text":
            "Penguasaan tidak dibangun dalam satu malam begadang. Ia dibangun dengan hadir setiap hari, menulis sedikit kode, dan menjadi sedikit lebih baik setiap kali.",
        "values.c4.title": "Pola Pikir Bertumbuh",
        "values.c4.text":
            "Bug, build gagal, dan error yang membingungkan adalah bagian dari proses. Setiap kesalahan saya anggap umpan balik, dan saya selalu siap belajar, beradaptasi, dan mencoba lagi.",
        "contact.script": "Sapa saya",
        "contact.title": "Mari bangun<br /><em>sesuatu</em>",
        "contact.text":
            "Punya proyek, tawaran magang, atau sekadar ingin ngobrol soal kode? Kotak masuk saya selalu terbuka.",
        "contact.email": "Kirim email",
        "footer.credit": "Dirancang &amp; dikodekan sendiri",
    },
};

const langBtn = document.getElementById("langBtn");

function setLang(lang) {
    const dict = I18N[lang];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = dict[el.dataset.i18n] ?? el.textContent;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        el.innerHTML = dict[el.dataset.i18nHtml] ?? el.innerHTML;
    });
    document.documentElement.lang = lang;
    langBtn.textContent = lang === "en" ? "ID" : "EN";
    langBtn.setAttribute("aria-label", lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English");
    try {
        localStorage.setItem("lang", lang);
    } catch {}
}

langBtn.addEventListener("click", () => {
    setLang(document.documentElement.lang === "id" ? "en" : "id");
});

let saved = null;
try {
    saved = localStorage.getItem("lang");
} catch {}
if (saved === "id") setLang("id");
