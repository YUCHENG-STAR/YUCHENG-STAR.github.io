const snow = Array.from({ length: 58 }, (_, i) => ({
  left: `${(i * 43) % 100}%`, size: `${3 + (i % 5)}px`,
  delay: `${(i % 13) * -0.8}s`, duration: `${10 + (i % 8)}s`,
}));

const nav = [['⌂', '首页', '#top'], ['●', '关于', '#about'], ['◆', '标签', '#tags'], ['▦', '分类', '#categories'], ['⌕', '搜索', '#search']];

function Snow() {
  return <div className="snow" aria-hidden="true">{snow.map((s, i) => <i key={i} style={{ left: s.left, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration }} />)}</div>;
}

function Sidebar() {
  return <aside className="next-sidebar">
    <section className="side-card brand-panel">
      <a href="#top" className="next-brand">YUCHENG-STAR</a>
      <span>星光落在代码上</span>
    </section>
    <section className="side-card menu-panel">
      <nav aria-label="博客导航">{nav.map(([icon, label, href]) => <a key={label} href={href}><b>{icon}</b>{label}</a>)}</nav>
    </section>
    <section className="side-card profile-panel" id="about">
      <img src="https://avatars.githubusercontent.com/u/232412182?v=4" alt="YUCHENG-STAR" />
      <strong>YUCHENG-STAR</strong><p>记录 AI、RAG 与工程实践</p>
      <div className="site-stats"><a href="#articles"><b>1</b><span>日志</span></a><a href="#categories"><b>3</b><span>分类</span></a><a href="#tags"><b>5</b><span>标签</span></a></div>
      <a className="github-link" href="https://github.com/YUCHENG-STAR" target="_blank" rel="noreferrer">● GitHub</a>
    </section>
    <section className="side-card side-note"><b>站点概览</b><p>欢迎来到我的数字花园。<br />保持好奇，慢慢生长。</p></section>
  </aside>;
}

export default function Home() {
  return <main className="next-page" id="top"><Snow />
    <div className="next-grid">
      <div className="posts-column" id="articles">
        <article className="post-paper featured-post">
          <header><h1>从问题出发：理解检索增强生成的完整链路</h1><div className="post-meta"><span>▣ 发表于 2026-08-25</span><i /> <span>▤ 更新于 2026-08-25</span><i /> <span>▱ 分类于 <a href="#categories">RAG · 学习记录</a></span></div></header>
          <div className="post-copy">
            <blockquote><p><strong>version：</strong> v1.0 「2026.08.25」 第一版</p><p><strong>author：</strong> YUCHENG-STAR</p><p><strong>摘要：</strong> 从数据准备、文本分块、向量检索到答案生成，建立一张清晰的 RAG 系统地图。</p><p><strong>简介：</strong> 把 RAG 看作完整工程系统，而不是向量数据库与大模型的简单拼接。</p></blockquote>
            <p>检索增强生成的核心，是先为问题找到可靠证据，再让模型围绕证据组织答案。本文会从一条端到端的数据链路开始，梳理每个环节的任务与边界。</p>
            <a className="read-more" href="/posts/rag-basics/">阅读全文 »</a>
          </div><footer><span>✦</span></footer>
        </article>

        <article className="post-paper" id="projects">
          <header><h2>All-in-RAG：从理论到实践的 RAG 全栈指南</h2><div className="post-meta"><span>▣ 发表于 2026-08-25</span><i /> <span>▱ 分类于 项目</span></div></header>
          <div className="post-copy"><blockquote><p><strong>项目：</strong> All-in-RAG</p><p><strong>方向：</strong> 检索增强生成 · 大模型应用开发</p></blockquote><p>面向大模型应用开发者的系统化学习项目，覆盖数据处理、索引构建、混合检索、多模态、评估与工程实践。</p><a className="read-more" href="https://github.com/YUCHENG-STAR/all-in-rag" target="_blank" rel="noreferrer">查看项目 »</a></div><footer><span>✦</span></footer>
        </article>

        <section className="post-paper taxonomy" id="tags"><h2>标签</h2><div><span>RAG</span><span>LLM</span><span>Python</span><span>检索</span><span>学习记录</span></div></section>
        <section className="post-paper taxonomy" id="categories"><h2>分类</h2><div><span>AI 工程</span><span>项目实践</span><span>技术随笔</span></div></section>
        <footer className="site-footer">© 2026 YUCHENG-STAR · Theme inspired by NexT.Pisces</footer>
      </div>
      <Sidebar />
    </div>
  </main>;
}

