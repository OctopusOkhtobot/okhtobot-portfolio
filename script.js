const projects = [
  {
    name: "زيتون — Olive Agent",
    desc: "تطبيق ويب لإدارة وتصميم البيوت البلاستيكية، مع أدوات لرسم مخطط البيت وتحديد الأبواب والأقواس ومناطق شتلات الزيتون.",
    github: "https://github.com/OctopusOkhtobot/Zetton",
    netlify: "https://olive-agent.netlify.app/",
    image: "screenshots/olive-agent.png"
  },
  {
    name: "زراعي — تشخيص أمراض النبات",
    desc: "تطبيق تشخيص أمراض النبات والتعرف عليها، يساعد المزارعين على تحديد المشاكل الزراعية بسرعة.",
    github: "https://github.com/OctopusOkhtobot/zera2a",
    netlify: "https://octopusokhtobot.github.io/zera2a/",
    image: "screenshots/zera2a.png"
  },
  {
    name: "عيادة الأسنان الذكية",
    desc: "تطبيق عيادة أسنان مبسط لإدارة المواعيد والخدمات الطبية للأسنان.",
    github: "https://github.com/OctopusOkhtobot/sann",
    netlify: "https://octopusokhtobot.github.io/sann/",
    image: "screenshots/sann.png"
  },
  {
    name: "معاهد الشؤون الاجتماعية — درعا",
    desc: "منصة إلكترونية لمعاهد الشؤون الاجتماعية في درعا، لتسهيل الخدمات والإجراءات.",
    github: "https://github.com/OctopusOkhtobot/sijil-amileen-daraa",
    netlify: "https://madarsalshooon.netlify.app/",
    image: "screenshots/madarsalshooon.png"
  },
  {
    name: "لعبة بستان الزيتون",
    desc: "ازرع زيتون وأنواع مختلفة واكسب نقاط. لعبة ممتعة مستوحاة من الزراعة السورية.",
    github: "https://github.com/OctopusOkhtobot/game-of-OLIVE-",
    netlify: "https://octopusokhtobot.github.io/game-of-OLIVE-/",
    image: "screenshots/olive-game.png"
  },
  {
    name: "مدرب التجويد",
    desc: "تطبيق تعليمي لتعلم قواعد التجويد بطريقة تفاعلية ومرئية.",
    github: "https://github.com/OctopusOkhtobot/Tjweed",
    netlify: null,
    image: "screenshots/tjweed.png"
  },
  {
    name: "عيادة الأسنان (نسخة أخرى)",
    desc: "نسخة محسنة من تطبيق عيادة الأسنان مع واجهة عربية كاملة.",
    github: "https://github.com/OctopusOkhtobot/sann",
    netlify: "https://dentistarabi.netlify.app/",
    image: "screenshots/dentistarabi.png"
  }
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = projects.map(p => `
    <article class="card">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200/1a2332/6b8e23?text=${encodeURIComponent(p.name)}'">
      <div class="card-content">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="card-links">
          ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ''}
          ${p.netlify ? `<a href="${p.netlify}" target="_blank">الموقع المباشر</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);