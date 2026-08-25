import type { Metadata } from 'next';

export const metadata: Metadata = { title: '理解 RAG 的完整链路 · YUCHENG-STAR', description: '从数据准备、检索到答案生成，理解 RAG 系统的完整链路。', openGraph: { images: [] }, twitter: { images: [] } };

const snow = Array.from({ length: 48 }, (_, i) => ({ left: `${(i * 47) % 100}%`, size: `${3 + (i % 5)}px`, delay: `${(i % 11) * -1}s`, duration: `${11 + (i % 7)}s` }));
const toc = [['1', '为什么需要 RAG', 'why'], ['2', '完整的数据链路', 'pipeline'], ['2.1', '分块策略', 'chunking'], ['3', '检索不只是向量搜索', 'retrieval'], ['4', '生成阶段的边界', 'generation'], ['5', '下一步', 'next']];

export default function Article() {
  return <main className="next-page"><div className="snow" aria-hidden="true">{snow.map((s,i)=><i key={i} style={{left:s.left,width:s.size,height:s.size,animationDelay:s.delay,animationDuration:s.duration}} />)}</div>
    <div className="next-grid article-grid">
      <article className="post-paper article-paper">
        <header><a className="back-home" href="/">← 返回首页</a><h1>从问题出发：理解检索增强生成的完整链路</h1><div className="post-meta"><span>▣ 发表于 2026-08-25</span><i/><span>▤ 更新于 2026-08-25</span><i/><span>▱ 分类于 RAG · 学习记录</span></div></header>
        <div className="post-copy article-copy">
          <blockquote><p><strong>version：</strong> v1.0 「2026.08.25」 第一版</p><p><strong>author：</strong> YUCHENG-STAR</p><p><strong>摘要：</strong> 从问题开始，经过数据准备、召回、重排、上下文构建与答案生成，建立一张可以用于设计和排查 RAG 系统的路线图。</p></blockquote>
          <h2 id="why">1 为什么需要 RAG</h2><p>大模型擅长组织语言和概括信息，但它不会天然知道我们的私有文档，也无法保证内部知识始终新鲜。RAG 在模型回答前先找到相关外部证据，再让模型围绕这些证据组织答案。</p><div className="callout">💡 好的 RAG 系统首先解决“找对资料”，其次才是“把答案写好”。</div>
          <h2 id="pipeline">2 完整的数据链路</h2><p>离线阶段负责把原始资料转成可检索的知识单元；在线阶段则把用户问题转成一次可验证的检索与生成过程。</p><div className="flow"><span>文档加载</span><b>→</b><span>清洗分块</span><b>→</b><span>向量化</span><b>→</b><span>索引</span><b>→</b><span>召回</span><b>→</b><span>生成</span></div>
          <h3 id="chunking">2.1 分块策略</h3><p>块太大，噪声会进入上下文；块太小，完整概念又可能被切断。实际项目中，应根据标题结构、段落语义和目标问题共同设计分块策略。</p>
          <h2 id="retrieval">3 检索不只是向量搜索</h2><p>向量召回擅长语义相近的问题，但对精确型号、专有名词和数字不一定可靠。成熟系统通常会组合关键词检索、向量检索、元数据过滤与重排序。</p><pre><code>{`results = hybrid_search(\n  query=user_question,\n  vector_weight=0.65,\n  keyword_weight=0.35\n)`}</code></pre>
          <h2 id="generation">4 生成阶段的边界</h2><p>模型收到的上下文应当紧凑、来源清楚，并明确要求在证据不足时拒绝猜测。</p><ul><li>保留资料来源和章节位置</li><li>限制模型只能依据给定上下文作答</li><li>上下文不足时明确说明“无法确认”</li><li>记录检索结果，方便回溯错误</li></ul>
          <h2 id="next">5 下一步</h2><p>从一个小型文档集开始，先完成可观察、可评估的最小闭环，再逐步增加混合检索、重排序、多模态和查询重写。</p><a className="project-button" href="https://github.com/YUCHENG-STAR/all-in-rag" target="_blank" rel="noreferrer">前往 All-in-RAG 项目 »</a>
        </div><footer><span>✦ END ✦</span></footer>
      </article>
      <aside className="next-sidebar article-side"><section className="side-card brand-panel"><a href="/" className="next-brand">YUCHENG-STAR</a><span>星光落在代码上</span></section><section className="side-card menu-panel"><nav><a href="/"><b>⌂</b>首页</a><a href="/#about"><b>●</b>关于</a><a href="/#tags"><b>◆</b>标签</a><a href="/#categories"><b>▦</b>分类</a></nav></section><section className="side-card toc-panel"><header><b>文章目录</b><span>站点概览</span></header>{toc.map(([n,label,id])=><a key={id} href={`#${id}`}><b>{n}</b>{label}</a>)}</section></aside>
    </div>
  </main>;
}

