// Standalone transport: explicitly replay recorded results, or connect to an optional backend.
(() => {
  const nativeFetch=window.fetch.bind(window),base=(window.MACROSCOPE_API_BASE||'').replace(/\/$/,'');
  const cache=new Map();
  const load=path=>{if(!cache.has(path))cache.set(path,nativeFetch(new URL(path,document.baseURI)).then(r=>{if(!r.ok)throw Error('Archive unavailable');return r.json()}));return cache.get(path)};
  const response=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json'}});
  const norm=s=>String(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  window.fetch=async(input,options={})=>{
    if(typeof input!=='string'||!input.startsWith('/api/'))return nativeFetch(input,options);
    if(base)return nativeFetch(base+input,options);
    if(input==='/api/info')return response(await load('data/info.json'));
    if(input==='/api/health')return response({service:'MacroScope archive',ready:true});
    if(input==='/api/translate')return response({detail:'静态展示版保留原回答语言。自动翻译需要配置实时后端。 / Recorded answers retain their original language. Translation requires a live backend.'},503);
    if(input==='/api/query'||input==='/api/retrieve'){
      const p=JSON.parse(options.body||'{}'),info=await load('data/info.json');
      const q=info.examples.find(q=>[q.question,q.question_zh,q.title].some(x=>norm(x)===norm(p.question)));
      if(!q)return response({detail:'这是已记录实验展示版，请从40题题库选择题目。任意提问需要配置后端。 / Recorded experiment mode: select a library question. Free-form questions require a live backend.'},422);
      if(['B','D'].includes(p.group)&&Number(p.k)!==5)return response({detail:'完整回答实验仅归档 k=5。其他 k 的检索召回率请查看实验结果页。 / Recorded full answers use k=5. Other k values are retrieval-only sweeps; see Results.'},422);
      const version=p.method==='bge-m3'?'v2_bge_m3':'v2',rows=await load(`data/${version}/${p.group}.json`),r=rows.find(r=>r.question_id===q.id);
      if(!r)return response({detail:'No recorded answer for this setting.'},404);
      const reused=version==='v2_bge_m3'&&['A','C'].includes(p.group);
      const label=`**已记录实验 / RECORDED EXPERIMENT · ${version} · ${p.group} · ${q.id}${reused?' · reused control':''}**\n\n此内容为原始归档回答，非实时生成；回答语言选择不改变原记录。 / Archived answer, not a live response; the answer-language selector does not change the original record.\n\n`;
      return response({status:r.status,answer:input==='/api/query'?label+(r.answer||''):label+'仅展示该次实验记录的检索证据。 / Evidence from the recorded run.',evidence:r.evidence||[],tools:input==='/api/query'?(r.tool_calls||[]):[],elapsed:r.elapsed_seconds,answer_language:'original',search_question:r.question});
    }
    return response({detail:'Live backend required'},503);
  };
  const banner=document.createElement('div');banner.className='deployment-banner';banner.textContent=base?'实时后端 / Live backend: '+base:'已记录实验展示版 · 无需后台 · 点击右上角“实验结果”浏览全部测试 / Recorded experiments · No backend required';
  document.querySelector('.main').prepend(banner);
  // The app refreshes connection labels; keep static replay clearly distinguished.
  setInterval(()=>{if(!base){const el=document.getElementById('status');if(el)el.textContent=document.documentElement.lang==='en'?'Recorded experiment mode':'已记录实验模式'}},500);
})();
