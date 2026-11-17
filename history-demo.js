// Run after app.js. Restore/open the included demo without replacing user history.
(() => {
function showDemo(){
 if(busy)return;
 if(!window.importMacroScopeDemo()){$('notice').textContent='无法导入：浏览器存储不可用 / Browser storage unavailable';return}
 sessions=JSON.parse(localStorage.getItem('macroscope-v1')||'[]');
 current=sessions.find(s=>s.id===window.MACROSCOPE_DEMO_RECORD.id);
 libraryMode='history';libraryHidden=false;updateLibraryToggle();render();libraryUI();
 $('notice').textContent='已恢复原始回答；完整工具记录未恢复。本例不计入40题成绩。 / Recovered original answer; full tool trace unavailable. Not part of the 40-question benchmark.';
}
const button=document.createElement('button');button.type='button';button.className='library-toggle';button.textContent='历史演示 / Demo history';button.onclick=showDemo;
document.querySelector('.header-right').prepend(button);
const originalRender=render;
render=function(){originalRender();if(current?.id===window.MACROSCOPE_DEMO_RECORD.id){
 const meta=document.querySelector('.records .meta');if(meta)meta.textContent='原始回答恢复记录 · 完整工具日志未恢复 / Recovered answer · Full tool log unavailable';
}};
if(window.MACROSCOPE_DEMO_IMPORTED)showDemo();
})();
