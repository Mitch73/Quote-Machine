(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(4),o=n.n(s),a=(n(13),n(5)),r=n(6),d=n(2),u=n(8),b=n(7),h=(n.p,n(14),n(15),n(0));var l=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={quotes:[],idx:0,display:!0},c.getRandomQuote=c.getRandomQuote.bind(Object(d.a)(c)),c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(e){t.setState({quotes:e.quotes})}))}},{key:"getRandomQuote",value:function(){var t;this.setState({idx:(t=this.state.quotes.length,Math.floor(Math.random()*t))})}},{key:"render",value:function(){var t=this.state,e=t.quotes[t.idx];return Object(h.jsxs)("div",{id:"quote-box",class:"p-3 mb-2 bg-success text-white",children:[Object(h.jsx)("div",{id:"text",children:Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("div",{class:"col-xs-8",children:Object(h.jsx)("div",{class:"well",children:e&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{class:"text-white text-center",id:"author",children:['"',e.quote,'"']}),Object(h.jsxs)("p",{id:"aut",class:"text-white text-center",children:["-- ",e.author," --"]})]})})})})}),Object(h.jsxs)("div",{id:"btn",children:[Object(h.jsx)("button",{id:"new-quote",class:"btn text-white bg-dark btn-block",onClick:this.getRandomQuote,children:"New Quote"}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"twitter.com/intent/tweet",id:"tweet",target:"_blank",children:Object(h.jsx)("button",{id:"quote",class:"btn text-white bg-dark btn-block",children:"Twitter"})})})]})]})}}]),n}(i.a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),s(t),o(t)}))};o.a.render(Object(h.jsx)(l,{}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.ec4bd07b.chunk.js.map