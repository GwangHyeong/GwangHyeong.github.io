// 화면 그리기 — 보통은 고칠 필요 없습니다. 내용은 data.js에서 수정하세요.
(function () {
  const S = SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  // 프로필
  $("avatar").textContent = (S.name || "?").slice(-2);
  $("name").textContent = S.name;
  $("nameEn").textContent = S.nameEn || "";
  if (!S.nameEn) $("nameEn").remove();
  $("role").textContent = S.role;
  $("org").textContent = S.org;
  $("tagline").textContent = S.tagline;
  $("foot-name").textContent = S.nameEn || S.name;
  $("year").textContent = new Date().getFullYear();

  const L = S.links || {};
  const linkItems = [
    L.email && `<a href="mailto:${esc(L.email)}">Email</a>`,
    L.github && `<a href="${esc(L.github)}" target="_blank" rel="noopener">GitHub</a>`,
    L.scholar && `<a href="${esc(L.scholar)}" target="_blank" rel="noopener">Scholar</a>`,
    L.cv && `<a href="${esc(L.cv)}" target="_blank" rel="noopener">CV</a>`,
  ].filter(Boolean);
  $("links").innerHTML = linkItems.join("");

  // About
  $("about-body").innerHTML = (S.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
  $("interests").innerHTML = (S.interests || []).map((t) => `<li>${esc(t)}</li>`).join("");

  // Publications
  $("pub-list").innerHTML = (S.publications || [])
    .map(
      (p) => `
      <li>
        <span class="pub-year">${esc(p.year)}</span>
        <div>
          <p class="pub-title">${
            p.link
              ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.title)}</a>`
              : esc(p.title)
          }</p>
          <p class="muted">${esc(p.authors).replace(/(Gwanghyeong Lee|이광형)/g, "<strong class=\"me\">$1</strong>")}</p>
          <p class="pub-venue">${esc(p.venue)}${
            p.type ? ` <span class="badge">${esc(p.type)}</span>` : ""
          }</p>
        </div>
      </li>`
    )
    .join("");

  // Timeline 공통
  const timeline = (items) =>
    (items || [])
      .map(
        (e) => `
      <li>
        <span class="t-period">${esc(e.period || e.year)}</span>
        <div>
          <p class="t-title">${esc(e.title)}${e.badge ? ` <span class="badge ${e.badge.includes("주관") ? "lead" : ""}">${esc(e.badge)}</span>` : ""}</p>
          ${e.org ? `<p class="t-org">${esc(e.org)}</p>` : ""}
          ${e.desc ? `<p class="t-desc">${esc(e.desc)}</p>` : ""}
        </div>
      </li>`
      )
      .join("");

  $("project-list").innerHTML = timeline(
    (S.projects || []).map((p) => {
      // 짧은 역할(주관·참여 등)은 배지로, 긴 설명은 본문으로
      const short = p.role && p.role.length <= 6;
      return { ...p, badge: short ? p.role : "", desc: short ? "" : p.role };
    })
  );
  $("exp-list").innerHTML = timeline(S.experience);
  $("edu-list").innerHTML = timeline(S.education);
  $("award-list").innerHTML = timeline(S.awards);

  // 섹션 제목 옆에 항목 수 표시
  [["projects", S.projects], ["publications", S.publications]].forEach(([id, arr]) => {
    const h = document.querySelector(`#${id} h2`);
    if (h && arr && arr.length) h.insertAdjacentHTML("beforeend", ` <span class="count">${arr.length}</span>`);
  });

  // 스크롤 위치에 따라 목차 강조
  const tocLinks = [...document.querySelectorAll(".toc a")];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          tocLinks.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll("main section").forEach((s) => io.observe(s));
})();
