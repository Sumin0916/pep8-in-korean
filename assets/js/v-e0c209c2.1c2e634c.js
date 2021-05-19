(self.webpackChunkpep8_in_korean=self.webpackChunkpep8_in_korean||[]).push([[605],{5108:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="후행-쉼표를-사용할-경우"><a class="header-anchor" href="#후행-쉼표를-사용할-경우">#</a> 후행 쉼표를 사용할 경우</h1><p>일반적으로 후행 쉼표<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>는 선택사항이나, 한 개의 요소만을 갖고 있는 튜플을 만들 때는 필수사항이다. (그리고 Python 2 의 print 문에서는 의미를 갖는다(semantic)). 다음과 같은 상황에서 명확히 하기 위해 (논리적으로는 중복이지만) 괄호로 둘러싸는 것을 권장한다.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예</span>\n\nFILES <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;setup.cfg&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 잘못된 예</span>\n\nFILES <span class="token operator">=</span> <span class="token string">&#39;setup.cfg&#39;</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>후행 쉼표가 중복인 경우, 버전 관리 시스템을 사용 시 값, 아규먼트, 가져오기(import)한 아이템들의 리스트가 시간이 지남에 따라 확장될 가능성이 있을 때 유용하다. 각 값을 (또는 위에 언급된 것들 등) 이 각 줄에 배치하고, 항상 후행 쉼표를 추가한 다음 줄에 괄호로 닫는 패턴을 사용하자. 그러나 닫는 구분 문자와 후행 쉼표가 같은 줄에 있는 것은 합리적이지 못하다. (단, 위의 단일형 튜플들의 경우는 제외)</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예</span>\n\nFILES <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;setup.cfg&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;tox.ini&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\ninitialize<span class="token punctuation">(</span>FILES<span class="token punctuation">,</span>\n           error<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>\n           <span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 잘못된 예</span>\n\nFILES <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;setup.cfg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tox.ini&#39;</span><span class="token punctuation">,</span><span class="token punctuation">]</span>\ninitialize<span class="token punctuation">(</span>FILES<span class="token punctuation">,</span> error<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>마지막(Trailing) 쉼표 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',9),p={render:function(n,s){return e}}},2885:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-e0c209c2",path:"/doc/when-to-use-trailing-commas.html",title:"후행 쉼표를 사용할 경우",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[],filePathRelative:"doc/when-to-use-trailing-commas.md",git:{updatedTime:1621433141e3}}}}]);