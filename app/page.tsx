const stars = Array.from({ length: 42 }, (_, index) => ({
  left: `${(index * 37) % 97}%`, top: `${(index * 53) % 91}%`,
  delay: `${(index % 9) * 0.35}s`, size: `${2 + (index % 3)}px`,
}));

const toc = [['01', '关于我'], ['02', '最近文章'], ['03', '精选项目']];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="stars" aria-hidden="true">
        {stars.map((star, index) => <i key={index} style={{ left: star.left, top: star.top, animationDelay: star.delay, width: star.size, height: star.size }} />)}
      </div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回首页">YS<span>.</span></a>
        <nav aria-label="主导航">
          <a href="#articles">文章</a><a href="#projects">项目</a>
          <a href="https://github.com/YUCHENG-STAR" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <div className="layout" id="top">
        <section className="content-column">
          <article className="glass hero-card" id="about">
            <div className="eyebrow">HELLO · WORLD</div>
            <div className="hero-grid">
              <div>
                <h1>你好，我是 <span>YUCHENG-STAR</span></h1>
                <p className="lead">欢迎来到我的数字花园。这里记录 AI、RAG、工程实践，以及那些值得反复思考的技术问题。</p>
                <div className="hero-actions">
                  <a className="primary-button" href="#articles">开始阅读</a>
                  <a className="text-button" href="https://github.com/YUCHENG-STAR" target="_blank" rel="noreferrer">查看 GitHub <span>↗</span></a>
                </div>
              </div>
              <div className="avatar-wrap">
                <div className="avatar-glow" />
                <img src="https://avatars.githubusercontent.com/u/232412182?v=4" alt="YUCHENG-STAR 的 GitHub 头像" />
                <span className="online-dot" title="持续学习中" />
              </div>
            </div>
            <div className="hero-stats" aria-label="博客概览">
              <div><strong>01</strong><span>公开项目</span></div><div><strong>AI</strong><span>专注方向</span></div><div><strong>∞</strong><span>保持好奇</span></div>
            </div>
          </article>

          <section className="section" id="articles">
            <div className="section-heading"><div><span className="eyebrow">RECENT NOTES</span><h2>最近文章</h2></div><span>01 / 文章</span></div>
            <a className="glass article-card" href="/posts/rag-basics">
              <div className="article-number">01</div>
              <div className="article-copy">
                <div className="article-meta"><span>2026.08.25</span><span>RAG · 学习笔记</span><span>8 MIN</span></div>
                <h3>从问题出发：理解检索增强生成的完整链路</h3>
                <p>从数据准备、文本分块、向量检索到答案生成，建立一张清晰的 RAG 系统地图。</p>
                <div className="tags"><span># RAG</span><span># LLM</span><span># Python</span></div>
              </div><div className="arrow">↗</div>
            </a>
          </section>

          <section className="section" id="projects">
            <div className="section-heading"><div><span className="eyebrow">SELECTED WORK</span><h2>精选项目</h2></div><a href="https://github.com/YUCHENG-STAR?tab=repositories" target="_blank" rel="noreferrer">全部项目 ↗</a></div>
            <a className="glass project-card" href="https://github.com/YUCHENG-STAR/all-in-rag" target="_blank" rel="noreferrer">
              <div className="project-icon">R</div><div><span className="project-kicker">OPEN SOURCE · FEATURED</span><h3>All-in-RAG</h3>
              <p>面向大模型应用开发者的 RAG 技术全栈指南，从理论到实践构建完整的检索增强生成体系。</p><div className="project-stack"><span>Python</span><span>RAG</span><span>LLM</span></div></div><span className="project-link">GitHub ↗</span>
            </a>
          </section>

          <footer><span>© 2026 YUCHENG-STAR</span><span>Built with curiosity &amp; stardust.</span></footer>
        </section>

        <aside className="sidebar">
          <section className="glass profile-card">
            <div className="sidebar-cover"><span>YUCHENG</span><small>STAR</small></div>
            <div className="sidebar-profile"><img src="https://avatars.githubusercontent.com/u/232412182?v=4" alt="" /><div><strong>YUCHENG-STAR</strong><span>AI · Engineering · Notes</span></div></div>
            <nav className="side-nav" aria-label="侧边导航"><a href="#top"><span>⌂</span>首页</a><a href="#about"><span>◎</span>关于</a><a href="#articles"><span>◇</span>文章</a><a href="#projects"><span>⌘</span>项目</a></nav>
          </section>
          <section className="glass toc-card">
            <div className="toc-header"><span>站点目录</span><small>CONTENTS</small></div>
            {toc.map(([number, label], index) => <a key={number} href={['#about', '#articles', '#projects'][index]}><span>{number}</span>{label}</a>)}
            <div className="toc-line" />
          </section>
          <p className="sidebar-note">夜空很大，慢慢写。<br />Keep building, keep wondering.</p>
        </aside>
      </div>
    </main>
  );
}

