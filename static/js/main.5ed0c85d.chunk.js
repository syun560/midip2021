(this.webpackJsonpmidip2021=this.webpackJsonpmidip2021||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),s=n.n(i),r=(n(23),n(3)),o=n(4),l=n(7),h=n(6),u=(n(24),n(18)),d=n(2),b=n(5),j=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,null,[{key:"noteNumberToNoteName",value:function(e){var t=Math.floor(e/12)-1;return["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][e%12]+t.toString()}},{key:"chordNameToNoteEvents",value:function(e){var t=[0,4,7],n=[0,3,7],c="",a="";"#"==e[1]?(c=e.substr(0,2),a=e.substr(2)):(c=e.substr(0,1),a=e.substr(1));var i=60;i+=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].indexOf(c);var s=[];switch(a){case"":s=t;break;case"m":s=n}var r=[];return s.map((function(e){r.push({note:i+e,vel:100,gateMs:500})})),r}}]),e}(),p=n(0),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={},c.doClick=c.doClick.bind(Object(d.a)(c)),c}return Object(o.a)(n,[{key:"doClick",value:function(){var e=this,t=this.props.chord;j.chordNameToNoteEvents(t).map((function(t){e.props.dispatch({type:"NOTE_ON",data:t})}))}},{key:"render",value:function(){var e,t=(this.props.nowKey-this.props.index+24)%12;return e=1==t||0==t||11==t?{background:"pink",cursor:"pointer"}:2==t||3==t||4==t?{background:"cyan",cursor:"pointer"}:5==t||6==t||7==t?{background:"gray",cursor:"pointer"}:8==t||9==t||10==t?{background:"yellow",cursor:"pointer"}:{background:"gray",cursor:"pointer"},Object(p.jsx)("td",{onClick:this.doClick,style:e,children:this.props.chord})}}]),n}(c.Component),v=Object(b.b)((function(e){return e}))(O),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).circleOfFifthKey=["","","","","7b","6b","5b","4b","3b","bb","b","\u266e","#","##","3#","4#","5#","6#","7#","","","",""],c.circleOfFifthMajor=["G","D","A","E","B","F#","C#","G#","D#","A#","F","C","G","D","A","E","B","F#","C#","G#","D#","A#","F"],c.circleOfFifthMinor=["Em","Bm","F#m","C#m","G#m","D#m","A#m","Fm","Cm","Gm","Dm","Am","Em","Bm","F#m","C#m","G#m","D#m","A#m","Fm","Cm","Gm","Dm"],c.state={nowKey:11},c.doClick=c.doClick.bind(Object(d.a)(c)),c.createStyle=c.createStyle.bind(Object(d.a)(c)),c}return Object(o.a)(n,[{key:"doClick",value:function(e){var t=e.target.getAttribute("data-key");this.setState({nowKey:t})}},{key:"createStyle",value:function(e){return this.state.nowKey==e?{cursor:"pointer",background:"pink"}:{cursor:"pointer"}}},{key:"render",value:function(){var e=this,t=this.circleOfFifthKey.map((function(t,n){return Object(p.jsx)("th",{style:e.createStyle(n),onClick:e.doClick,"data-key":n,children:t},n)})),n=this.circleOfFifthMajor.map((function(t,n){return Object(p.jsx)(v,{index:n,nowKey:e.state.nowKey,chord:t},n)})),c=this.circleOfFifthMinor.map((function(t,n){return Object(p.jsx)(v,{index:n,nowKey:e.state.nowKey,chord:t},n)}));return Object(p.jsx)("table",{className:"table table-bordered",children:Object(p.jsxs)("tbody",{children:[Object(p.jsx)("tr",{children:t}),Object(p.jsx)("tr",{children:n}),Object(p.jsx)("tr",{children:c})]})})}}]),n}(c.Component),g=Object(b.b)((function(e){return e}))(m),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={message:"please wait...",inPorts:[],outPorts:[],selectedOutPortID:"",selectedInPortID:""},navigator.requestMIDIAccess({sysex:!0}).then((function(e){for(var t=e.inputs.values(),n=[],a=t.next();!a.done;a=t.next()){var i=a.value;n.push({name:i.name,ID:i.id}),i.addEventListener("midimessage",c.inputEvent,!1)}n.length&&c.setState({selectedInPortID:n[0].ID}),c.setState({inPorts:n});var s=[];c.outputs=e.outputs;var r,o=Object(u.a)(c.outputs.values());try{for(o.s();!(r=o.n()).done;){var l=r.value;s.push({device:l,name:l.name,ID:l.id})}}catch(h){o.e(h)}finally{o.f()}s.length&&(c.setState({selectedOutPortID:s[0].ID}),c.props.dispatch({type:"REGISTER_OUTPUT",output:c.outputs.get(s[0].ID)})),c.setState({outPorts:s}),console.log("MIDI READY!!!"),c.setState({message:"MIDI READY"})}),(function(e){console.log("MIDI FAILED - "+e)})),c.doClick=c.doClick.bind(Object(d.a)(c)),c.doChange=c.doChange.bind(Object(d.a)(c)),c.inputEvent=c.inputEvent.bind(Object(d.a)(c)),c}return Object(o.a)(n,[{key:"inputEvent",value:function(e){e.target;var t,n=[];e.data.forEach((function(e){n.push(e.toString(16))})),"f8"!=n[0]&&"fe"!=n[0]&&(t=n.join(" "),this.state.outPorts[0].device.send(e.data),console.log(t))}},{key:"doChange",value:function(e){this.setState({selectedOutPortID:e.target.value})}},{key:"doClick",value:function(){var e=this.outputs.get(this.state.selectedOutPortID);e.send([144,60,100]),e.send([128,60,100],window.performance.now()+500),e.send([144,64,100]),e.send([128,64,100],window.performance.now()+500),e.send([144,67,100]),e.send([128,67,100],window.performance.now()+500),this.props.dispatch({type:"REGISTER_OUTPUT",output:e})}},{key:"render",value:function(){var e=0,t=this.state.inPorts.map((function(t){return Object(p.jsxs)("option",{value:t.ID,children:[t.name," (",t.ID,")"]},e++)})),n=this.state.outPorts.map((function(t){return Object(p.jsxs)("option",{value:t.ID,children:[t.name," (",t.ID,")"]},e++)}));return Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)("table",{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Input: "}),Object(p.jsx)("td",{children:Object(p.jsx)("select",{children:t})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Output: "}),Object(p.jsx)("td",{children:Object(p.jsx)("select",{onChange:this.doChange,defaultValue:"-1",children:n})})]})]})})}),Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)(g,{})})]})}}]),n}(c.Component),x=Object(b.b)((function(e){return e}))(f),k=n(8),y={noteEvents:[],output:null,mea:1,channel:0};function C(e){e.sort((function(e,t){return e.mea<t.mea?-1:e.mea>t.mea?1:e.tick<t.tick?-1:e.tick>t.tick?1:e.note<t.note?-1:e.note>t.note?1:0}))}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EVENT":var n=e.noteEvents.slice();return n.push(t.data),C(n),{output:e.output,noteEvents:n,mea:e.mea,channel:e.channel};case"DEL_EVENT":var c=e.noteEvents.filter((function(e){return e.channel!=t.data.channel||e.mea!=t.data.mea||e.tick!=t.data.tick||e.note!=t.data.note}));return{output:e.output,noteEvents:c,mea:e.mea,channel:e.channel};case"DEL_ALL":return{output:e.output,noteEvents:y.noteEvents,mea:e.mea,channel:e.channel};case"REGISTER_OUTPUT":return{output:t.output,noteEvents:e.noteEvents,mea:e.mea,channel:e.channel};case"NOTE_ON":var a=0;a=void 0===t.data.ch?0:t.data.ch,e.output.send([144+a,t.data.note,t.data.vel]),e.output.send([128+a,t.data.note,t.data.vel],window.performance.now()+t.data.gateMs);break;case"ALL_NOTE_OFF":e.output.send([176,123,0]);break;case"MOVE_MEA":var i=t.mea;return i>128&&(i=128),i<1&&(i=1),{output:e.output,noteEvents:e.noteEvents,mea:i,channel:e.channel};case"MOVE_CHANNEL":var s=t.channel;return s>15&&(s=15),s<0&&(s=0),{output:e.output,noteEvents:e.noteEvents,mea:e.mea,channel:s}}return e}Object(k.c)(E);var w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).tdUnselected={width:"50px"},c.tdSelected={width:"50px",background:"cyan"},c.border={borderLeft:"2px solid blue",background:"cyan"},c.state={selected:!1},c.doClick=c.doClick.bind(Object(d.a)(c)),c.doMouseEnter=c.doMouseEnter.bind(Object(d.a)(c)),c}return Object(o.a)(n,[{key:"doMouseEnter",value:function(e){this.props.isSingle&&(!(1&e.buttons)||(console.log("Entered"),this.doClick(e)))}},{key:"doClick",value:function(e){var t=this,n=1*e.target.getAttribute("data-col"),c=1*e.target.getAttribute("data-row");if(this.setState((function(e){return{selected:!e.selected}})),this.state.selected)this.props.dispatch({type:"DEL_EVENT",data:{channel:this.props.channel,mea:this.props.mea,tick:n,note:c}});else{var a={type:"ADD_EVENT",data:{channel:this.props.channel,mea:this.props.mea,tick:n,note:c,gate:120,vel:100}};if(this.props.dispatch(a),this.props.isSingle){var i=this.props.noteEvents.filter((function(e){return e.channel==a.data.channel&&e.mea==a.data.mea&&e.tick==a.data.tick}));i.length>0&&i.map((function(e){t.props.dispatch({type:"DEL_EVENT",data:{channel:t.props.channel,mea:t.props.mea,tick:n,note:e.note}})}))}this.props.isPreview&&(this.props.dispatch({type:"ALL_NOTE_OFF"}),this.props.dispatch({type:"NOTE_ON",data:{channel:this.props.channel,note:c,gateMs:200,vel:100}}))}}},{key:"render",value:function(){var e=this,t=this.props.row,n=this.props.col,c=this.props.noteEvents.find((function(c){return c.channel==e.props.channel&&c.mea==e.props.mea&&c.note==t&&c.tick==n}));return this.state.selected=void 0!==c,Object(p.jsx)("td",{style:this.state.selected?this.tdSelected:this.tdUnselected,onClick:this.doClick,onMouseEnter:this.doMouseEnter,"data-row":t,"data-col":n,children:Object(p.jsx)("div",{style:this.border})})}}]),n}(c.Component),S=Object(b.b)((function(e){return e}))(w),N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).box={height:"500px",overflow:"auto",cursor:"pointer",userSelect:"none"},c.th={width:"100px"},c.state={width:16,height:13,baseNote:72,isSingle:!0,isPreview:!0},c.changeBaseKey=c.changeBaseKey.bind(Object(d.a)(c)),c.changeMea=c.changeMea.bind(Object(d.a)(c)),c.changeSingle=c.changeSingle.bind(Object(d.a)(c)),c.changePreview=c.changePreview.bind(Object(d.a)(c)),c.rollStyle=c.rollStyle.bind(Object(d.a)(c)),c.ref=a.a.createRef(),c}return Object(o.a)(n,[{key:"changeBaseKey",value:function(e){this.setState({baseNote:e.target.value})}},{key:"changeMea",value:function(e){this.props.dispatch({type:"MOVE_MEA",mea:e.target.value})}},{key:"changeSingle",value:function(e){this.setState({isSingle:e.target.checked})}},{key:"changePreview",value:function(e){this.setState({isPreview:e.target.checked})}},{key:"componentDidMount",value:function(){this.ref.current.scrollIntoView({block:"center"})}},{key:"rollStyle",value:function(e){var t=(e-this.state.baseNote+120)%12;return 0==t?{background:"mistyrose"}:[1,0,1,0,1,1,0,1,0,1,0,1][t]?{background:"white"}:{background:"whitesmoke"}}},{key:"render",value:function(){for(var e=this,t=[],n=127;n>=0;n--)t.push(n);for(var c=[],a=1;a<=16;a++)c.push(a);var i=t.map((function(t,n){var a=127-n;return Object(p.jsxs)("tr",{style:e.rollStyle(a),children:[Object(p.jsx)("th",{style:e.th,ref:a==e.state.baseNote?e.ref:"",children:j.noteNumberToNoteName(a)}),c.map((function(t,n){return Object(p.jsx)(S,{row:a,col:n,isSingle:e.state.isSingle,isPreview:e.state.isPreview},t)}))]},t)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:this.box,children:Object(p.jsx)("table",{className:"table table-bordered table-sm",children:Object(p.jsx)("tbody",{children:i})})}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{children:"Key: "}),Object(p.jsx)("input",{type:"number",value:this.state.baseNote,min:"12",max:"127",onChange:this.changeBaseKey}),"(",j.noteNumberToNoteName(this.state.baseNote),")",Object(p.jsx)("label",{children:"Mea: "}),Object(p.jsx)("input",{type:"number",value:this.props.mea,min:"1",max:"127",onChange:this.changeMea}),Object(p.jsx)("label",{children:"Single: "}),Object(p.jsx)("input",{type:"checkbox",id:"single",onChange:this.changeSingle,checked:this.state.isSingle}),Object(p.jsx)("label",{children:"Preview: "}),Object(p.jsx)("input",{type:"checkbox",id:"single",onChange:this.changePreview,checked:this.state.isPreview})]})]})}}]),n}(c.Component),P=Object(b.b)((function(e){return e}))(N),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).box={height:"500px",overflow:"auto"},c.state={},c.doClick=c.doClick.bind(Object(d.a)(c)),c}return Object(o.a)(n,[{key:"doClick",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.noteEvents.filter((function(t){return t.channel==e.props.channel})).map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.mea}),Object(p.jsx)("td",{children:e.tick}),Object(p.jsx)("td",{children:j.noteNumberToNoteName(e.note)}),Object(p.jsx)("td",{children:e.gate}),Object(p.jsx)("td",{children:e.vel})]},t)}));return Object(p.jsx)("div",{style:this.box,children:Object(p.jsxs)("table",{className:"table table-sm",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Mea"}),Object(p.jsx)("th",{children:"Tick"}),Object(p.jsx)("th",{children:"Event"}),Object(p.jsx)("th",{children:"Gate"}),Object(p.jsx)("th",{children:"Vel/Value"})]})}),Object(p.jsx)("tbody",{children:t})]})})}}]),n}(c.Component),D=Object(b.b)((function(e){return e}))(T),M=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{})}}]),n}(c.Component),I=Object(b.b)((function(e){return e}))(M),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).th={width:"100px"},c.td={width:"50px"},c.tdNow={width:"50px",background:"yellow"},c.maxTick=16,c.state={bpm:60,nowTick:0,isPlaying:!1,isLoop:!0,isSolo:!1},c.PlayToggle=c.PlayToggle.bind(Object(d.a)(c)),c.Proceed=c.Proceed.bind(Object(d.a)(c)),c.ChangeBPM=c.ChangeBPM.bind(Object(d.a)(c)),c.ChangeLoop=c.ChangeLoop.bind(Object(d.a)(c)),c.ChangeSolo=c.ChangeSolo.bind(Object(d.a)(c)),c.ChangeTick=c.ChangeTick.bind(Object(d.a)(c)),c}return Object(o.a)(n,[{key:"PlayToggle",value:function(){this.state.isPlaying?(this.setState({isPlaying:!1}),clearTimeout(this.timer)):(this.setState({isPlaying:!0}),this.Play(),this.timer=setTimeout(this.Proceed,24e4/this.state.bpm/this.maxTick))}},{key:"Play",value:function(){var e=this,t=this.props.noteEvents.filter((function(t){return e.state.isSolo?t.channel==e.props.channel&&t.mea==e.props.mea&&t.tick==e.state.nowTick:t.mea==e.props.mea&&t.tick==e.state.nowTick}));t.length>0&&t.map((function(t){e.props.dispatch({type:"NOTE_ON",data:{note:t.note,gateMs:24e4/e.state.bpm*(t.gate/1920)-1,vel:t.vel}})}))}},{key:"Proceed",value:function(){var e=this.state.nowTick+1;e==this.maxTick&&(e%=this.maxTick,this.state.isLoop||this.props.dispatch({type:"MOVE_MEA",mea:1*this.props.mea+1})),this.setState({nowTick:e}),this.Play();var t=24e4/this.state.bpm/this.maxTick;e!=this.maxTick-1||this.state.isLoop||(t-=80),this.timer=setTimeout(this.Proceed,t)}},{key:"ChangeBPM",value:function(e){this.setState({bpm:e.target.value})}},{key:"ChangeLoop",value:function(e){this.setState({isLoop:e.target.checked})}},{key:"ChangeSolo",value:function(e){this.setState({isSolo:e.target.checked})}},{key:"ChangeTick",value:function(e){this.setState({nowTick:1*e.target.getAttribute("data-tick")})}},{key:"render",value:function(){for(var e=[],t=0;t<this.maxTick;t++)e.push(Object(p.jsx)("td",{"data-tick":t,onClick:this.ChangeTick,style:this.state.nowTick==t?this.tdNow:this.td},t));return Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("input",{type:"number",value:this.state.bpm,min:"0",max:"300",onChange:this.ChangeBPM}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:this.PlayToggle,children:this.state.isPlaying?"Playing":"Play"}),Object(p.jsx)("label",{children:"Loop: "}),Object(p.jsx)("input",{type:"checkbox",id:"loop",onChange:this.ChangeLoop,checked:this.state.isLoop}),Object(p.jsx)("label",{children:"Solo: "}),Object(p.jsx)("input",{type:"checkbox",id:"solo",onChange:this.ChangeSolo,checked:this.state.isSolo})]}),Object(p.jsx)("table",{className:"table table-bordered table-sm",children:Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{style:this.th,children:"4/4"}),e]})})})]})}}]),n}(c.Component),L=Object(b.b)((function(e){return e}))(A),F=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).channelName=["Piano","Bass","Drums"],c.state={},c.ChangeSelector=c.ChangeSelector.bind(Object(d.a)(c)),c}return Object(o.a)(n,[{key:"ChangeSelector",value:function(e){this.props.dispatch({type:"MOVE_CHANNEL",channel:1*e.target.value})}},{key:"render",value:function(){var e=0,t=this.channelName.map((function(t){return Object(p.jsxs)("option",{value:e,children:["Ch.",e++," ",t]},e)}));return Object(p.jsx)("div",{children:Object(p.jsx)("select",{onChange:this.ChangeSelector,defaultValue:"-1",children:t})})}}]),n}(c.Component),_=Object(b.b)((function(e){return e}))(F),G=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={},c.doClick=c.doClick.bind(Object(d.a)(c)),c}return Object(o.a)(n,[{key:"doClick",value:function(e){this.props.dispatch({type:"DEL_ALL"})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"row mt-4",children:[Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)(_,{}),Object(p.jsx)(D,{})]}),Object(p.jsxs)("div",{className:"col-md-9",children:[Object(p.jsx)(L,{}),Object(p.jsx)(P,{})]}),Object(p.jsx)(I,{})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:this.doClick,children:"Del All Event"})})]})}}]),n}(c.Component),B=Object(b.b)((function(e){return e}))(G),K=n(14),V=n(16),R=n(17),U={key:"midip",storage:n.n(R).a,blacklist:["output"],whitelist:["noteEvents"]},H=Object(K.a)(U,E),J=Object(k.c)(H),Y=Object(K.b)(J),q=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(b.a,{store:J,children:Object(p.jsxs)(V.a,{loading:Object(p.jsx)("p",{children:"loading..."}),persistor:Y,children:[Object(p.jsx)(B,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(x,{})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("h4",{children:"Memo"}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/syun560/midip2021",children:"GitHub"})}),Object(p.jsx)("h5",{children:"\u76ee\u7684"}),Object(p.jsx)("li",{children:"\u81ea\u52d5\u8033\u30b3\u30d4"}),Object(p.jsx)("li",{children:"\u516c\u958b\u3001\u4f7f\u3063\u3066\u3082\u3089\u3048\u308b\u3053\u3068"}),Object(p.jsx)("li",{children:"\u30bf\u30d6\u8b5c\u4f5c\u6210"}),Object(p.jsx)("li",{children:"MIDI\u51fa\u529b"}),Object(p.jsx)("li",{}),Object(p.jsx)("li",{children:"\u30b3\u30f3\u30bd\u30fc\u30eb\u306bMIDI\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u51fa\u529b\u3067\u304d\u3066\u3044\u308b\u306e\u3067\u3001\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u51fa\u529b\u3092\u3059\u308b"}),Object(p.jsx)("li",{children:"Program Change\u306e\u30a4\u30d9\u30f3\u30c8\u3082\u9001\u4fe1\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3088\u3046\u3001\u30bb\u30ec\u30af\u30c8\u30bf\u30b0\u304b\uff1f"}),Object(p.jsx)("li",{children:"\u30ad\u30fc\u30dc\u30fc\u30c9\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8"}),Object(p.jsx)("h4",{children:"\u53c2\u8003"}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"http://www.yk.rim.or.jp/~kamide/music/chordhelper/",children:"MIDI Chord Helper"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://musiclab.chromeexperiments.com/Song-Maker/song/5766211904733184",children:"Song Maker"})}),Object(p.jsx)("li",{children:"KORG-DS-10"})]})}}]),n}(c.Component),z=(n(34),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))});s.a.render(Object(p.jsx)(q,{}),document.getElementById("root")),z()}},[[35,1,2]]]);
//# sourceMappingURL=main.5ed0c85d.chunk.js.map