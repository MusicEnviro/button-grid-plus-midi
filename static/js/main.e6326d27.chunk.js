(this["webpackJsonpbutton-grid-plus-midi"]=this["webpackJsonpbutton-grid-plus-midi"]||[]).push([[0],{15:function(t,n,e){t.exports=e(51)},20:function(t,n,e){},51:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(10),o=e.n(i),c=e(1),u=e(2),l=e(3),s=e(4),p=(e(20),e(11)),d=e(5),h=e.n(d),v=e(12),f=e(13),m=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).piano=void 0,t}return Object(u.a)(e,[{key:"init",value:function(){var t=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.instrument(new AudioContext,"acoustic_grand_piano");case 2:this.piano=t.sent,console.log("piano loaded"),this.emit("ready");case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"playNote",value:function(t){this.piano.play(t)}}]),e}(e(14).EventEmitter),y=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).midiSounds=void 0,t.player=new m,t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.player.init()}},{key:"handleButton",value:function(t,n){var e=4*(3-t)+n;this.player.playNote(e+36)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,"hotloads"),r.a.createElement("div",{id:"main"},r.a.createElement(p.ButtonGrid,{onButtonDown:function(n,e){return t.handleButton(n,e)}})))}}]),e}(r.a.Component);o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e6326d27.chunk.js.map