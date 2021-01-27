function detectVue() {
  const all = document.querySelectorAll('*')
  let el
  for (let i = 0; i < all.length; i++) {
    if (all[i].__vue__) {
      el = all[i]
      return true;
    }
  }
  return false;
}

if (!!window.React && !!window.React.version) console.log('React: ' + window.React.version);
if (!!window.angular && !!window.angular.version.full) console.log('Angular: ' + window.angular.version.full);
if (detectVue()) console.log('Vue');

if (!!window.Modernizr) console.log("Modernizr: " + window.Modernizr._version);
if (!!window.moment) console.log("Moment: " + window.moment.version);

if (!!window.$ && !!window.$.fn && !!window.$.fn.jquery) console.log('jQuery: ' + window.$.fn.jquery);
