import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '理解检索增强生成的完整链路 · YUCHENG-STAR',
  description: '从数据准备、文本分块、检索到答案生成，理解 RAG 系统的完整链路。',
  openGraph: { title: '理解检索增强生成的完整链路', description: '从数据准备、文本分块、检索到答案生成，理解 RAG 系统的完整链路。', images: [] },
  twitter: { card: 'summary', title: '理解检索增强生成的完整链路', description: '从数据准备、文本分块、检索到答案生成，理解 RAG 系统的完整链路。', images: [] },
};

const articleToc = [
  ['为什么需要 RAG', 'why'], ['一条完整的数据链路', 'pipeline'],
  ['检索并不只是向量搜索', 'retrieval'], ['生成阶段的边界', 'generation'], ['下一步', 'next'],
];

export default function RagBasicsPost() {
  return (
    <main className="site-shell article-shell">
      <div className="aurora aurora-one" aria-hidden="true" /><div className="aurora aurora-two" aria-hidden="true" />
      <header className="topbar"><a className="brand" href="/" aria-label="返回首页">YS<span>.</span></a><nav aria-label="主导航"><a href="/">首页</a><a href="/#projects">项目</a><a href="https://github.com/YUCHENG-STAR" target="_blank" rel="noreferrer">GitHub ↗</a></nav></header>
      <div className="article-layout">
        <article className="glass post-card">
          <a className="back-link" href="/">← 返回数字花园</a>
          <header className="post-header"><div className="eyebrow">RAG · 学习笔记</div><h1>从问题出发：理解检索增强生成的完整链路</h1><p>把 RAG 看作一个端到端的工程系统，而不是“向量数据库 + 大模型”的简单拼接。</p><div className="post-meta"><span>发布于 2026.08.25</span><span>预计阅读 8 分钟</span><span>YUCHENG-STAR</span></div></header>
          <div className="post-body">
            <div className="post-intro"><strong>摘要</strong><p>这篇文章从用户问题开始，依次经过数据准备、召回、重排、上下文构建与答案生成，建立一张可以用于设计和排查 RAG 系统的路线图。</p></div>
            <section id="why"><span className="chapter">01</span><h2>为什么需要 RAG</h2><p>大模型擅长组织语言和概括信息，但它并不会天然知道我们的私有文档，也无法保证内部知识始终新鲜。RAG 的作用，是在模型回答前先找到与问题相关的外部证据，再让模型围绕这些证据组织答案。</p><blockquote>好的 RAG 系统首先要解决“找对资料”，其次才是“把答案写好”。</blockquote></section>
            <section id="pipeline"><span className="chapter">02</span><h2>一条完整的数据链路</h2><p>离线阶段负责把原始资料转成可检索的知识单元；在线阶段则把用户问题转成一次可验证的检索与生成过程。</p><div className="pipeline" aria-label="RAG 数据链路"><span>文档加载</span><i>→</i><span>清洗与分块</span><i>→</i><span>向量化</span><i>→</i><span>索引</span><i>→</i><span>召回</span><i>→</i><span>生成</span></div><h3>分块决定了检索的最小语义单元</h3><p>块太大，噪声会进入上下文；块太小，完整概念又可能被切断。实际项目中，应根据标题结构、段落语义和目标问题共同设计分块策略，而不是固定按字符数切割。</p></section>
            <section id="retrieval"><span className="chapter">03</span><h2>检索并不只是向量搜索</h2><p>向量召回擅长处理语义相近的问题，但对精确型号、专有名词和数字不一定可靠。成熟的系统通常会组合关键词检索、向量检索、元数据过滤以及重排序。</p><pre><code>{`results = hybrid_search(\n    query=user_question,\n    vector_weight=0.65,\n    keyword_weight=0.35,\n    filters={"status": "published"}\n)`}</code></pre><p>评估检索效果时，不要只观察最终回答。先独立判断前几个候选文档是否包含答案证据，这会让问题定位简单很多。</p></section>
            <section id="generation"><span className="chapter">04</span><h2>生成阶段的边界</h2><p>模型收到的上下文应当紧凑、来源清楚，并明确要求在证据不足时拒绝猜测。对于参数、医疗、法律或财务类信息，还应设置更严格的证据门槛。</p><ul><li>保留资料来源和章节位置</li><li>限制模型只能依据给定上下文作答</li><li>上下文不足时明确说明“无法确认”</li><li>记录检索结果，方便回溯错误</li></ul></section>
            <section id="next"><span className="chapter">05</span><h2>下一步</h2><p>可以从一个小型文档集开始，先完成可观察、可评估的最小闭环，再逐步增加混合检索、重排序、多模态和查询重写。完整的学习路线与实践代码已经整理在 All-in-RAG 项目中。</p><a className="post-cta" href="https://github.com/YUCHENG-STAR/all-in-rag" target="_blank" rel="noreferrer"><span>继续阅读</span><strong>前往 All-in-RAG 项目 ↗</strong></a></section>
          </div>
        </article>
        <aside className="post-sidebar"><section className="glass article-toc"><div><span>文章目录</span><small>CONTENTS</small></div>{articleToc.map(([label,id],index)=><a key={id} href={`#${id}`}><b>{String(index+1).padStart(2,'0')}</b>{label}</a>)}</section><section className="glass author-card"><img src="https://avatars.githubusercontent.com/u/232412182?v=4" alt="" /><div><strong>YUCHENG-STAR</strong><span>持续记录，保持好奇。</span></div></section></aside>
      </div>
    </main>
  );
}

