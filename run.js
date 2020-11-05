var style = document.createElement("style");
            document.head.appendChild(style);
            style.sheet.insertRule(".RnEpo._Yhr4 { display: none ;}", 0);
            style.sheet.insertRule(".vCZ2N { display: none ;}", 0);
            style.sheet.insertRule(" body { overflow: auto !important ;}", 0);


// find newly added links
var obs=new MutationObserver(function(muts){
  for (let mut of muts) {
    for (let n of mut.addedNodes) {
      if (n.classList.contains('Nnq7C')) fixLinks(n);
      }
    }
  });

obs.observe(document.body, {attributes: false, childList: true, subtree: true});

function openLink(ev) {
  this.cloneNode(false).dispatchEvent(new MouseEvent('click',ev));
}

function fixLinks(r) {
  (r || document.body).querySelectorAll(':scope a[href^="/"]').forEach(function(e){
    if (!e.sclk) {
      e.sclk=true;
      e.addEventListener('click',openLink);
      }
    });
  }

// fix links already on page
setTimeout(fixLinks,2000);
// page lazy to load?
setTimeout(fixLinks,10000);
setTimeout(fixLinks,20000);