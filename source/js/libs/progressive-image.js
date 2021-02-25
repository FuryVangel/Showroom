'use strict';

const EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize']

const Util = {
  throttle(action, delay) {
    let timeout = null
    let lastRun = 0
    return function() {
      if (timeout) {
        return
      }
      const elapsed = Date.now() - lastRun
      const context = this
      const args = arguments
      const runCallback = function() {
        lastRun = Date.now()
        timeout = false
        action.apply(context, args)
      }
      if (elapsed >= delay) {
        runCallback()
      } else {
        timeout = setTimeout(runCallback, delay)
      }
    }
  },
  on(el, ev, fn) {
    el.addEventListener(ev, fn)
  },
  off(el, ev, fn) {
    el.removeEventListener(ev, fn)
  },
}

const events = (el, bind) => {
  if(bind){
    EVENTS.forEach(evt => {
      Util.on(el, evt, lazy)
    })
  }else {
    EVENTS.forEach(evt => {
      Util.off(el, evt, lazy)
    })
  }
}

let windowHasBindEvents = false

const lazy = Util.throttle(()=>{
  checkImage()
}, 300)

checkImage()


function checkImage() {
  if(!windowHasBindEvents){
    windowHasBindEvents = true
    events(window, true)
  }

  const lazys = document.querySelectorAll('img.lazy')
  const l = lazys.length
  if(l>0){
    for (let i = 0; i < l; i++) {
      const rect = lazys[i].getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0) {
        loadImage(lazys[i]);
      }
    }
  }else {
    windowHasBindEvents = false
    events(window, false)
  }
}

function loadImage(item) {
  const img = new Image()
  if (item.dataset) {
    item.dataset.srcset && (img.srcset = item.dataset.srcset)
    item.dataset.sizes && (img.sizes = item.dataset.sizes)
  }
  img.src = item.dataset.src;
  img.className = 'origin';
  img.onload = _ => {
    item.classList.remove('lazy')
    mountImage(item, img)
  }
}

function mountImage(preview, img) {
  const parent = preview.parentNode
  parent.appendChild(img).addEventListener('animationend', function(e) {
    preview.classList.remove('origin')
    e.target.alt = preview.alt || '';
    preview.classList.add('hide')
    // parent.removeChild(preview);
    // e.target.classList.remove('origin');
  });
}
