(this.webpackJsonpmidip2021=this.webpackJsonpmidip2021||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(9),r=n.n(i),s=(n(23),n(3)),o=n(4),l=n(7),h=n(6),u=(n(24),n(18)),d=n(2),b=n(5),j=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"noteNumberToNoteName",value:function(e){var t=Math.floor(e/12)-1;return["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][e%12]+t.toString()}},{key:"chordNameToNoteEvents",value:function(e){var t=[0,4,7],n=[0,3,7],a="",c="";"#"==e[1]?(a=e.substr(0,2),c=e.substr(2)):(a=e.substr(0,1),c=e.substr(1));var i=60;i+=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].indexOf(a);var r=[];switch(c){case"":r=t;break;case"m":r=n}var s=[];return r.map((function(e){s.push({note:i+e,vel:100,gateMs:500})})),s}}]),e}(),p=n(0),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.doClick=a.doClick.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"doClick",value:function(){var e=this,t=this.props.chord;j.chordNameToNoteEvents(t).map((function(t){e.props.dispatch({type:"NOTE_ON",data:t})}))}},{key:"render",value:function(){var e,t=(this.props.nowKey-this.props.index+24)%12;return e=1==t||0==t||11==t?{background:"pink",cursor:"pointer"}:2==t||3==t||4==t?{background:"cyan",cursor:"pointer"}:5==t||6==t||7==t?{background:"gray",cursor:"pointer"}:8==t||9==t||10==t?{background:"yellow",cursor:"pointer"}:{background:"gray",cursor:"pointer"},Object(p.jsx)("td",{onClick:this.doClick,style:e,children:this.props.chord})}}]),n}(a.Component),m=Object(b.b)((function(e){return e}))(O),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).circleOfFifthKey=["","","","","7b","6b","5b","4b","3b","bb","b","\u266e","#","##","3#","4#","5#","6#","7#","","","",""],a.circleOfFifthMajor=["G","D","A","E","B","F#","C#","G#","D#","A#","F","C","G","D","A","E","B","F#","C#","G#","D#","A#","F"],a.circleOfFifthMinor=["Em","Bm","F#m","C#m","G#m","D#m","A#m","Fm","Cm","Gm","Dm","Am","Em","Bm","F#m","C#m","G#m","D#m","A#m","Fm","Cm","Gm","Dm"],a.state={nowKey:11},a.doClick=a.doClick.bind(Object(d.a)(a)),a.createStyle=a.createStyle.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"doClick",value:function(e){var t=e.target.getAttribute("data-key");this.setState({nowKey:t})}},{key:"createStyle",value:function(e){return this.state.nowKey==e?{cursor:"pointer",background:"pink"}:{cursor:"pointer"}}},{key:"render",value:function(){var e=this,t=this.circleOfFifthKey.map((function(t,n){return Object(p.jsx)("th",{style:e.createStyle(n),onClick:e.doClick,"data-key":n,children:t},n)})),n=this.circleOfFifthMajor.map((function(t,n){return Object(p.jsx)(m,{index:n,nowKey:e.state.nowKey,chord:t},n)})),a=this.circleOfFifthMinor.map((function(t,n){return Object(p.jsx)(m,{index:n,nowKey:e.state.nowKey,chord:t},n)}));return Object(p.jsx)("table",{className:"table table-bordered",children:Object(p.jsxs)("tbody",{children:[Object(p.jsx)("tr",{children:t}),Object(p.jsx)("tr",{children:n}),Object(p.jsx)("tr",{children:a})]})})}}]),n}(a.Component),g=Object(b.b)((function(e){return e}))(v),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={message:"please wait...",inPorts:[],outPorts:[],selectedOutPortID:"",selectedInPortID:""},navigator.requestMIDIAccess({sysex:!0}).then((function(e){for(var t=e.inputs.values(),n=[],c=t.next();!c.done;c=t.next()){var i=c.value;n.push({name:i.name,ID:i.id}),i.addEventListener("midimessage",a.inputEvent,!1)}n.length&&a.setState({selectedInPortID:n[0].ID}),a.setState({inPorts:n});var r=[];a.outputs=e.outputs;var s,o=Object(u.a)(a.outputs.values());try{for(o.s();!(s=o.n()).done;){var l=s.value;r.push({device:l,name:l.name,ID:l.id})}}catch(h){o.e(h)}finally{o.f()}r.length&&(a.setState({selectedOutPortID:r[0].ID}),a.props.dispatch({type:"REGISTER_OUTPUT",output:a.outputs.get(r[0].ID)})),a.setState({outPorts:r}),console.log("MIDI READY!!!"),a.setState({message:"MIDI READY"})}),(function(e){console.log("MIDI FAILED - "+e)})),a.doClick=a.doClick.bind(Object(d.a)(a)),a.doChange=a.doChange.bind(Object(d.a)(a)),a.inputEvent=a.inputEvent.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"inputEvent",value:function(e){e.target;var t,n=[];e.data.forEach((function(e){n.push(e.toString(16))})),"f8"!=n[0]&&"fe"!=n[0]&&(t=n.join(" "),this.state.outPorts[0].device.send(e.data),console.log(t))}},{key:"doChange",value:function(e){this.setState({selectedOutPortID:e.target.value})}},{key:"doClick",value:function(){var e=this.outputs.get(this.state.selectedOutPortID);e.send([144,60,100]),e.send([128,60,100],window.performance.now()+500),e.send([144,64,100]),e.send([128,64,100],window.performance.now()+500),e.send([144,67,100]),e.send([128,67,100],window.performance.now()+500),this.props.dispatch({type:"REGISTER_OUTPUT",output:e})}},{key:"render",value:function(){var e=0,t=this.state.inPorts.map((function(t){return Object(p.jsxs)("option",{value:t.ID,children:[t.name," (",t.ID,")"]},e++)})),n=this.state.outPorts.map((function(t){return Object(p.jsxs)("option",{value:t.ID,children:[t.name," (",t.ID,")"]},e++)}));return Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)("table",{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Input: "}),Object(p.jsx)("td",{children:Object(p.jsx)("select",{children:t})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Output: "}),Object(p.jsx)("td",{children:Object(p.jsx)("select",{onChange:this.doChange,defaultValue:"-1",children:n})})]})]})})}),Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)(g,{})})]})}}]),n}(a.Component),f=Object(b.b)((function(e){return e}))(x),k=n(8),y={noteEvents:[],output:null,mea:1,channel:0,channelData:[{program:0,name:"Piano"},{program:0,name:"Bass"},{program:0,name:"Piano"},{program:0,name:"Piano"},{program:0,name:"Piano"},{program:0,name:"Piano"},{program:0,name:"Piano"},{program:0,name:"Piano"},{program:0,name:"Drums"}]};function C(e){e.sort((function(e,t){return e.mea<t.mea?-1:e.mea>t.mea?1:e.tick<t.tick?-1:e.tick>t.tick?1:e.note<t.note?-1:e.note>t.note?1:0}))}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EVENT":var n=e.noteEvents.slice();return n.push(t.data),C(n),{output:e.output,noteEvents:n,mea:e.mea,channel:e.channel,channelData:e.channelData};case"DEL_EVENT":var a=e.noteEvents.filter((function(e){return e.channel!=t.data.channel||e.mea!=t.data.mea||e.tick!=t.data.tick||e.note!=t.data.note}));return{output:e.output,noteEvents:a,mea:e.mea,channel:e.channel,channelData:e.channelData};case"DEL_ALL":return{output:e.output,noteEvents:y.noteEvents,mea:e.mea,channel:e.channel,channelData:e.channelData};case"REGISTER_OUTPUT":return{output:t.output,noteEvents:e.noteEvents,mea:e.mea,channel:e.channel,channelData:e.channelData};case"NOTE_ON":var c=0;c=void 0===t.data.channel?0:t.data.channel,e.output.send([144+c,t.data.note,t.data.vel]),e.output.send([128+c,t.data.note,t.data.vel],window.performance.now()+t.data.gateMs);break;case"ALL_NOTE_OFF":e.output.send([176,123,0]);break;case"PROGRAM_CHANGE":var i=e.channel,r=t.programNumber;e.output.send([192+i,r]);var s=e.channelData.slice();return s[i].program=r,{output:e.output,noteEvents:e.noteEvents,mea:e.mea,channel:e.channel,channelData:s};case"MOVE_MEA":var o=t.mea;return o>128&&(o=128),o<1&&(o=1),{output:e.output,noteEvents:e.noteEvents,mea:o,channel:e.channel,channelData:e.channelData};case"MOVE_CHANNEL":var l=t.channel;return l>15&&(l=15),l<0&&(l=0),{output:e.output,noteEvents:e.noteEvents,mea:e.mea,channel:l,channelData:e.channelData}}return e}Object(k.c)(S);var E=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).tdUnselected={width:"50px"},a.tdSelected={width:"50px",background:"cyan"},a.border={borderLeft:"2px solid blue",background:"cyan"},a.state={selected:!1},a.doClick=a.doClick.bind(Object(d.a)(a)),a.doMouseEnter=a.doMouseEnter.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"doMouseEnter",value:function(e){this.props.isSingle&&(!(1&e.buttons)||(console.log("Entered"),this.doClick(e)))}},{key:"doClick",value:function(e){var t=this,n=1*e.target.getAttribute("data-col"),a=1*e.target.getAttribute("data-row");if(this.setState((function(e){return{selected:!e.selected}})),this.state.selected)this.props.dispatch({type:"DEL_EVENT",data:{channel:this.props.channel,mea:this.props.mea,tick:n,note:a}});else{var c={type:"ADD_EVENT",data:{channel:this.props.channel,mea:this.props.mea,tick:n,note:a,gate:120,vel:100}};if(this.props.dispatch(c),this.props.isSingle){var i=this.props.noteEvents.filter((function(e){return e.channel==c.data.channel&&e.mea==c.data.mea&&e.tick==c.data.tick}));i.length>0&&i.map((function(e){t.props.dispatch({type:"DEL_EVENT",data:{channel:t.props.channel,mea:t.props.mea,tick:n,note:e.note}})}))}this.props.isPreview&&(this.props.dispatch({type:"ALL_NOTE_OFF"}),this.props.dispatch({type:"NOTE_ON",data:{channel:this.props.channel,note:a,gateMs:200,vel:100}}))}}},{key:"render",value:function(){var e=this,t=this.props.row,n=this.props.col,a=this.props.noteEvents.find((function(a){return a.channel==e.props.channel&&a.mea==e.props.mea&&a.note==t&&a.tick==n}));return this.state.selected=void 0!==a,Object(p.jsx)("td",{style:this.state.selected?this.tdSelected:this.tdUnselected,onClick:this.doClick,onMouseEnter:this.doMouseEnter,"data-row":t,"data-col":n,children:Object(p.jsx)("div",{style:this.border})})}}]),n}(a.Component),P=Object(b.b)((function(e){return e}))(E),w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).box={height:"500px",overflow:"auto",cursor:"pointer",userSelect:"none"},a.th={width:"100px"},a.state={width:16,height:13,baseNote:72,isSingle:!0,isPreview:!0},a.changeBaseKey=a.changeBaseKey.bind(Object(d.a)(a)),a.changeMea=a.changeMea.bind(Object(d.a)(a)),a.changeSingle=a.changeSingle.bind(Object(d.a)(a)),a.changePreview=a.changePreview.bind(Object(d.a)(a)),a.rollStyle=a.rollStyle.bind(Object(d.a)(a)),a.ref=c.a.createRef(),a}return Object(o.a)(n,[{key:"changeBaseKey",value:function(e){this.setState({baseNote:e.target.value})}},{key:"changeMea",value:function(e){this.props.dispatch({type:"MOVE_MEA",mea:e.target.value})}},{key:"changeSingle",value:function(e){this.setState({isSingle:e.target.checked})}},{key:"changePreview",value:function(e){this.setState({isPreview:e.target.checked})}},{key:"componentDidMount",value:function(){this.ref.current.scrollIntoView({block:"center"})}},{key:"rollStyle",value:function(e){var t=(e-this.state.baseNote+120)%12;return 0==t?{background:"mistyrose"}:[1,0,1,0,1,1,0,1,0,1,0,1][t]?{background:"white"}:{background:"whitesmoke"}}},{key:"render",value:function(){for(var e=this,t=[],n=127;n>=0;n--)t.push(n);for(var a=[],c=1;c<=16;c++)a.push(c);var i=t.map((function(t,n){var c=127-n;return Object(p.jsxs)("tr",{style:e.rollStyle(c),children:[Object(p.jsx)("th",{style:e.th,ref:c==e.state.baseNote?e.ref:"",children:j.noteNumberToNoteName(c)}),a.map((function(t,n){return Object(p.jsx)(P,{row:c,col:n,isSingle:e.state.isSingle,isPreview:e.state.isPreview},t)}))]},t)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:this.box,children:Object(p.jsx)("table",{className:"table table-bordered table-sm",children:Object(p.jsx)("tbody",{children:i})})}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{children:"Key: "}),Object(p.jsx)("input",{type:"number",value:this.state.baseNote,min:"12",max:"127",onChange:this.changeBaseKey}),"(",j.noteNumberToNoteName(this.state.baseNote),")",Object(p.jsx)("label",{children:"Mea: "}),Object(p.jsx)("input",{type:"number",value:this.props.mea,min:"1",max:"127",onChange:this.changeMea}),Object(p.jsx)("label",{children:"Single: "}),Object(p.jsx)("input",{type:"checkbox",id:"single",onChange:this.changeSingle,checked:this.state.isSingle}),Object(p.jsx)("label",{children:"Preview: "}),Object(p.jsx)("input",{type:"checkbox",id:"single",onChange:this.changePreview,checked:this.state.isPreview})]})]})}}]),n}(a.Component),D=Object(b.b)((function(e){return e}))(w),N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).box={height:"500px",overflow:"auto"},a.state={},a.doClick=a.doClick.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"doClick",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.noteEvents.filter((function(t){return t.channel==e.props.channel})).map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.channel}),Object(p.jsx)("td",{children:e.mea}),Object(p.jsx)("td",{children:e.tick}),Object(p.jsx)("td",{children:j.noteNumberToNoteName(e.note)}),Object(p.jsx)("td",{children:e.gate}),Object(p.jsx)("td",{children:e.vel})]},t)}));return Object(p.jsx)("div",{style:this.box,children:Object(p.jsxs)("table",{className:"table table-sm",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Ch."}),Object(p.jsx)("th",{children:"Mea"}),Object(p.jsx)("th",{children:"Tick"}),Object(p.jsx)("th",{children:"Event"}),Object(p.jsx)("th",{children:"Gate"}),Object(p.jsx)("th",{children:"Vel/Value"})]})}),Object(p.jsx)("tbody",{children:t})]})})}}]),n}(a.Component),T=Object(b.b)((function(e){return e}))(N),M=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{})}}]),n}(a.Component),I=Object(b.b)((function(e){return e}))(M),B=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).th={width:"100px"},a.td={width:"50px"},a.tdNow={width:"50px",background:"yellow"},a.maxTick=16,a.state={bpm:60,nowTick:0,isPlaying:!1,isLoop:!0,isSolo:!1},a.PlayToggle=a.PlayToggle.bind(Object(d.a)(a)),a.Proceed=a.Proceed.bind(Object(d.a)(a)),a.ChangeBPM=a.ChangeBPM.bind(Object(d.a)(a)),a.ChangeLoop=a.ChangeLoop.bind(Object(d.a)(a)),a.ChangeSolo=a.ChangeSolo.bind(Object(d.a)(a)),a.ChangeTick=a.ChangeTick.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"PlayToggle",value:function(){this.state.isPlaying?(this.setState({isPlaying:!1}),clearTimeout(this.timer)):(this.setState({isPlaying:!0}),this.Play(),this.timer=setTimeout(this.Proceed,24e4/this.state.bpm/this.maxTick))}},{key:"Play",value:function(){var e=this,t=this.props.noteEvents.filter((function(t){return e.state.isSolo?t.channel==e.props.channel&&t.mea==e.props.mea&&t.tick==e.state.nowTick:t.mea==e.props.mea&&t.tick==e.state.nowTick}));t.length>0&&t.map((function(t){e.props.dispatch({type:"NOTE_ON",data:{channel:t.channel,note:t.note,gateMs:24e4/e.state.bpm*(t.gate/1920)-1,vel:t.vel}})}))}},{key:"Proceed",value:function(){var e=this.state.nowTick+1;e==this.maxTick&&(e%=this.maxTick,this.state.isLoop||this.props.dispatch({type:"MOVE_MEA",mea:1*this.props.mea+1})),this.setState({nowTick:e}),this.Play();var t=24e4/this.state.bpm/this.maxTick;e!=this.maxTick-1||this.state.isLoop||(t-=80),this.timer=setTimeout(this.Proceed,t)}},{key:"ChangeBPM",value:function(e){this.setState({bpm:e.target.value})}},{key:"ChangeLoop",value:function(e){this.setState({isLoop:e.target.checked})}},{key:"ChangeSolo",value:function(e){this.setState({isSolo:e.target.checked})}},{key:"ChangeTick",value:function(e){this.setState({nowTick:1*e.target.getAttribute("data-tick")})}},{key:"render",value:function(){for(var e=[],t=0;t<this.maxTick;t++)e.push(Object(p.jsx)("td",{"data-tick":t,onClick:this.ChangeTick,style:this.state.nowTick==t?this.tdNow:this.td},t));return Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("input",{type:"number",value:this.state.bpm,min:"0",max:"300",onChange:this.ChangeBPM}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:this.PlayToggle,children:this.state.isPlaying?"Playing":"Play"}),Object(p.jsx)("label",{children:"Loop: "}),Object(p.jsx)("input",{type:"checkbox",id:"loop",onChange:this.ChangeLoop,checked:this.state.isLoop}),Object(p.jsx)("label",{children:"Solo: "}),Object(p.jsx)("input",{type:"checkbox",id:"solo",onChange:this.ChangeSolo,checked:this.state.isSolo})]}),Object(p.jsx)("table",{className:"table table-bordered table-sm",children:Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{style:this.th,children:"4/4"}),e]})})})]})}}]),n}(a.Component),A=Object(b.b)((function(e){return e}))(B),F=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).channelName=["Piano","Bass","Piano","Piano","Piano","Piano","Piano","Piano","Piano","Piano","Piano","Drums"],a.state={},a.ChangeSelector=a.ChangeSelector.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"ChangeSelector",value:function(e){this.props.dispatch({type:"MOVE_CHANNEL",channel:1*e.target.value})}},{key:"render",value:function(){var e=0,t=this.props.channelData.map((function(t){return Object(p.jsxs)("option",{value:e,children:["Ch.",e++," ",t.name]},e)}));return Object(p.jsx)("select",{onChange:this.ChangeSelector,defaultValue:"-1",children:t})}}]),n}(a.Component),G=Object(b.b)((function(e){return e}))(F),L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).programName=["Piano 1","Piano 2","Piano 3","Honkey-tonk","E.Piano 1","E.Piano 2","Harpsichord","Clav.","Celesta","Glockenspiel","Music Box","Vibraphone","Marimba","Xylophone","Tubular Bells","Dulcrimer","Organ 1","Organ 2","Organ 3","Pipe Organ","Reed Organ","Accordion","Harmonica","Bandneon","Nylon-str.Guitar","Steel-str.Gt","Jazz Guitar","Clean Guitar","Muted Guitar","Overdrive Guitar","Distortion Guitar","Gt.Harmonics","Acoustic Bass","Fingered Bass","Picked Bass","Fretless Bass","Slap Bass 1","Slap Bass 2","Synth Bass 1","Synth Bass 2","Violin","Viola","Cello","Contrabass","Tremolo Strings","Pizzicato Strings","Harp","Timpani","Strings","Slow Strings","Synth Strings 1","Synth Strings 2","Chor Aahs","Voice Oohs","Synth Vox","OrchestraHit","Trumpet","Trombone","Tuba","MutedTrumpet","French Horns","Brass 1","Synth Brass 1","Synth Brass 2","Soprano Sax","Alto Sax","Tenor Sax","Baritone Sax","Oboe","English Horn","Bassoon","Clarinet","Piccolo","Flute","Recorder","Pan Flute","Bottle Blow","Shakuhachi","Whistle","Ocarina","Square Wave","Saw Wave","Synth Calliope","Chiffer Lead","Charang","Solo Vox","5th Saw Wave","Bass & Lead","Fantasia","Warm Pad","Polysynth","Space Voice","Bowed Glass","Metal Pad","Halo Pad","Sweep Pad","Ice Rain","SoundTrack","Crystal","Atomosphere","Brightness","Goblin","Echo Drops","Star Theme","Sitar","Banjo","Shamisen","Koto","Kalimba","Bagpipe","Fiddle","Shenai","Tinkle Bell","Agogo","Steel Drums","Woodblock","Taiko","Melodic Tom","Synth Drum","Reverse Sym","Gt.FretNoise","Breath Noise","Seashore","Bird","Telephone","Helicopter","Applause","Gun Shot"],a.state={},a.ChangeSelector=a.ChangeSelector.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"ChangeSelector",value:function(e){this.props.dispatch({type:"PROGRAM_CHANGE",programNumber:1*e.target.value})}},{key:"render",value:function(){var e=0,t=this.programName.map((function(t){return Object(p.jsxs)("option",{value:e,children:[e++,". ",t]},e)}));return Object(p.jsx)("select",{onChange:this.ChangeSelector,value:this.props.channelData[this.props.channel].program,children:t})}}]),n}(a.Component),_=Object(b.b)((function(e){return e}))(L),V=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.doClick=a.doClick.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"doClick",value:function(e){this.props.dispatch({type:"DEL_ALL"})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"row mt-4",children:[Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(G,{}),Object(p.jsx)(_,{})]}),Object(p.jsx)(T,{})]}),Object(p.jsxs)("div",{className:"col-md-9",children:[Object(p.jsx)(A,{}),Object(p.jsx)(D,{})]}),Object(p.jsx)(I,{})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:this.doClick,children:"Del All Event"})})]})}}]),n}(a.Component),R=Object(b.b)((function(e){return e}))(V),K=n(14),H=n(16),U=n(17),W={key:"midip",storage:n.n(U).a,blacklist:["output"],whitelist:["noteEvents","channelData"]},z=Object(K.a)(W,S),J=Object(k.c)(z),q=Object(K.b)(J),Y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(b.a,{store:J,children:Object(p.jsxs)(H.a,{loading:Object(p.jsx)("p",{children:"loading..."}),persistor:q,children:[Object(p.jsx)(R,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(f,{})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("h4",{children:"Memo"}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/syun560/midip2021",children:"GitHub"})}),Object(p.jsx)("h5",{children:"\u76ee\u7684"}),Object(p.jsx)("li",{children:"\u81ea\u52d5\u8033\u30b3\u30d4"}),Object(p.jsx)("li",{children:"\u516c\u958b\u3001\u4f7f\u3063\u3066\u3082\u3089\u3048\u308b\u3053\u3068"}),Object(p.jsx)("li",{children:"\u30bf\u30d6\u8b5c\u4f5c\u6210"}),Object(p.jsx)("li",{children:"MIDI\u51fa\u529b"}),Object(p.jsx)("li",{}),Object(p.jsx)("li",{children:"\u30b3\u30f3\u30bd\u30fc\u30eb\u306bMIDI\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u51fa\u529b\u3067\u304d\u3066\u3044\u308b\u306e\u3067\u3001\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u51fa\u529b\u3092\u3059\u308b"}),Object(p.jsx)("li",{children:"Program Change\u306e\u30a4\u30d9\u30f3\u30c8\u3082\u9001\u4fe1\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3088\u3046\u3001\u30bb\u30ec\u30af\u30c8\u30bf\u30b0\u304b\uff1f"}),Object(p.jsx)("li",{children:"\u30ad\u30fc\u30dc\u30fc\u30c9\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8"}),Object(p.jsx)("h4",{children:"\u53c2\u8003"}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"http://www.yk.rim.or.jp/~kamide/music/chordhelper/",children:"MIDI Chord Helper"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://musiclab.chromeexperiments.com/Song-Maker/song/5766211904733184",children:"Song Maker"})}),Object(p.jsx)("li",{children:"KORG-DS-10"}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"http://www2.odn.ne.jp/~cbu69490/MIDI/MIDIlect/MIDIlect3.html",children:"MIDI\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5206\u985e"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://magenta.tensorflow.org/demos/performance_rnn/index.html",children:"Performance RNN"})})]})}}]),n}(a.Component),X=(n(34),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))});r.a.render(Object(p.jsx)(Y,{}),document.getElementById("root")),X()}},[[35,1,2]]]);
//# sourceMappingURL=main.57ca5863.chunk.js.map