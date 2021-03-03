(this.webpackJsonpmidip2021=this.webpackJsonpmidip2021||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(13),i=n.n(s),r=(n(36),n(5)),o=n(6),l=n(10),h=n(9),d=(n(37),n(8)),u=n(25),b=n(7),j=n(14),p={songs:[{id:1,name:"Sample Song",updated:"2021-01-01",author:"syun560",channelData:[{program:0,name:"Piano"}],noteEvents:[],chordEvents:[],tempo:12,finalMea:1}],chordEvents:[],noteEvents:[],output:null,mea:1,nowTick:0,finalMea:1,channel:0,channelData:[{program:0,name:"Piano"},{program:0,name:"Bass"},{program:0,name:"Drums"}]};function O(e){e.sort((function(e,t){return e.mea<t.mea?-1:e.mea>t.mea?1:e.tick<t.tick?-1:e.tick>t.tick?1:e.note<t.note?-1:e.note>t.note?1:0}))}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EVENT":var n=e.noteEvents.slice();return n.push(t.data),O(n),Object(b.a)(Object(b.a)({},e),{},{noteEvents:n,finalMea:e.mea<t.data.mea?t.data.mea:e.finalMea});case"DEL_EVENT":var a=e.noteEvents.filter((function(e){return e.channel!=t.data.channel||e.mea!=t.data.mea||e.tick!=t.data.tick||e.note!=t.data.note}));return Object(b.a)(Object(b.a)({},e),{},{noteEvents:a});case"DEL_ALL":return Object(b.a)(Object(b.a)({},e),{},{noteEvents:p.noteEvents});case"ADD_CHORD":var c=e.chordEvents.slice();return c.push(t.data),Object(b.a)(Object(b.a)({},e),{},{chordEvents:c});case"REGISTER_OUTPUT":return Object(b.a)(Object(b.a)({},e),{},{output:t.output});case"NOTE_ON":var s=0;s=void 0===t.data.channel?0:t.data.channel,e.output.send([144+s,t.data.note,t.data.vel]),e.output.send([128+s,t.data.note,t.data.vel],window.performance.now()+t.data.gateMs);break;case"ALL_NOTE_OFF":e.output.send([176,123,0]);break;case"PROGRAM_SET_ALL":e.channelData.map((function(t,n){return e.output.send([192+n,t.program])}));break;case"PROGRAM_CHANGE":var i=e.channel,r=t.programNumber;e.output.send([192+i,r]);var o=e.channelData.slice();return o[i].program=r,Object(b.a)(Object(b.a)({},e),{},{channelData:o});case"MOVE_MEA":var l=t.mea;return l>128&&(l=128),l<1&&(l=1),Object(b.a)(Object(b.a)({},e),{},{mea:l});case"MOVE_TICK":return Object(b.a)(Object(b.a)({},e),{},{nowTick:t.nowTick});case"MOVE_CHANNEL":var h=t.channel;return h>15&&(h=15),h<0&&(h=0),Object(b.a)(Object(b.a)({},e),{},{channel:h});case"ADD_CHANNEL":var d=e.channelData.length;if(d>15)break;console.log(d);var j=e.channelData.slice();return j.push({program:0,name:"Piano"}),Object(b.a)(Object(b.a)({},e),{},{channelData:j,channel:d});case"SAVE_SONG":var m=new Date,v=m.getFullYear()+"/"+(m.getMonth()+1)+"/"+m.getDay()+" "+m.getHours()+":"+m.getMinutes(),g=e.songs.slice(),f={id:e.songs[e.songs.length-1].id+1,name:t.name,updated:v,author:"anonymous",channelData:e.channelData,noteEvents:e.noteEvents,finalMea:e.finalMea};return g.push(f),Object(b.a)(Object(b.a)({},e),{},{songs:g});case"OPEN_SONG":var y=e.songs.find((function(e){return e.id===t.id}));if(void 0===y){console.log("can't find song of selected ID: "+t.id);break}return y.channelData.map((function(t,n){return e.output.send([192+n,t.program])})),Object(b.a)(Object(b.a)({},e),{},{channelData:Object(u.a)(y.channelData),noteEvents:Object(u.a)(y.noteEvents),finalMea:y.finalMea,mea:p.mea,channel:p.channel});case"DEL_SONG":return Object(b.a)(Object(b.a)({},e),{},{songs:e.songs.filter((function(e){return e.id!==t.id}))})}return e}Object(j.c)(m);var v=n(24),g=n(27),f=n(28),y=n.n(f),k=n(29),x=n(2),C=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,null,[{key:"noteNumberToNoteName",value:function(e){var t=Math.floor(e/12)-1;return["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][e%12]+t.toString()}},{key:"chordNameToNoteEvents",value:function(e){var t=[0,4,7],n=[0,3,7],a="",c="";"#"==e[1]?(a=e.substr(0,2),c=e.substr(2)):(a=e.substr(0,1),c=e.substr(1));var s=60;s+=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].indexOf(a);var i=[];switch(c){case"":i=t;break;case"m":i=n}var r=[];return i.map((function(e){r.push({note:s+e,vel:100,gateMs:500})})),r}}]),e}();C.programName=["Piano 1","Piano 2","Piano 3","Honkey-tonk","E.Piano 1","E.Piano 2","Harpsichord","Clav.","Celesta","Glockenspiel","Music Box","Vibraphone","Marimba","Xylophone","Tubular Bells","Dulcrimer","Organ 1","Organ 2","Organ 3","Pipe Organ","Reed Organ","Accordion","Harmonica","Bandneon","Nylon-str.Guitar","Steel-str.Gt","Jazz Guitar","Clean Guitar","Muted Guitar","Overdrive Guitar","Distortion Guitar","Gt.Harmonics","Acoustic Bass","Fingered Bass","Picked Bass","Fretless Bass","Slap Bass 1","Slap Bass 2","Synth Bass 1","Synth Bass 2","Violin","Viola","Cello","Contrabass","Tremolo Strings","Pizzicato Strings","Harp","Timpani","Strings","Slow Strings","Synth Strings 1","Synth Strings 2","Chor Aahs","Voice Oohs","Synth Vox","OrchestraHit","Trumpet","Trombone","Tuba","MutedTrumpet","French Horns","Brass 1","Synth Brass 1","Synth Brass 2","Soprano Sax","Alto Sax","Tenor Sax","Baritone Sax","Oboe","English Horn","Bassoon","Clarinet","Piccolo","Flute","Recorder","Pan Flute","Bottle Blow","Shakuhachi","Whistle","Ocarina","Square Wave","Saw Wave","Synth Calliope","Chiffer Lead","Charang","Solo Vox","5th Saw Wave","Bass & Lead","Fantasia","Warm Pad","Polysynth","Space Voice","Bowed Glass","Metal Pad","Halo Pad","Sweep Pad","Ice Rain","SoundTrack","Crystal","Atomosphere","Brightness","Goblin","Echo Drops","Star Theme","Sitar","Banjo","Shamisen","Koto","Kalimba","Bagpipe","Fiddle","Shenai","Tinkle Bell","Agogo","Steel Drums","Woodblock","Taiko","Melodic Tom","Synth Drum","Reverse Sym","Gt.FretNoise","Breath Noise","Seashore","Bird","Telephone","Helicopter","Applause","Gun Shot"];var S=C,E=n(1),D=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a.doClick=a.doClick.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"doClick",value:function(){var e=this,t=this.props.chord;S.chordNameToNoteEvents(t).map((function(t){e.props.dispatch({type:"NOTE_ON",data:t})})),this.props.dispatch({type:"ADD_CHORD",data:{mea:this.props.mea,tick:this.props.nowTick,chord:this.props.chord}})}},{key:"render",value:function(){var e,t=(this.props.nowKey-this.props.index+24)%12;return e=1==t||0==t||11==t?{background:"pink",cursor:"pointer"}:2==t||3==t||4==t?{background:"cyan",cursor:"pointer"}:5==t||6==t||7==t?{background:"gray",cursor:"pointer"}:8==t||9==t||10==t?{background:"yellow",cursor:"pointer"}:{background:"gray",cursor:"pointer"},Object(E.jsx)("td",{onClick:this.doClick,style:e,children:this.props.chord})}}]),n}(a.Component),M=Object(d.b)((function(e){return e}))(D),N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).circleOfFifthKey=["","","","","7b","6b","5b","4b","3b","bb","b","\u266e","#","##","3#","4#","5#","6#","7#","","","",""],a.circleOfFifthMajor=["G","D","A","E","B","F#","C#","G#","D#","A#","F","C","G","D","A","E","B","F#","C#","G#","D#","A#","F"],a.circleOfFifthMinor=["Em","Bm","F#m","C#m","G#m","D#m","A#m","Fm","Cm","Gm","Dm","Am","Em","Bm","F#m","C#m","G#m","D#m","A#m","Fm","Cm","Gm","Dm"],a.state={nowKey:11},a.doClick=a.doClick.bind(Object(x.a)(a)),a.createStyle=a.createStyle.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"doClick",value:function(e){var t=e.target.getAttribute("data-key");this.setState({nowKey:t})}},{key:"createStyle",value:function(e){return this.state.nowKey==e?{cursor:"pointer",background:"pink"}:{cursor:"pointer"}}},{key:"render",value:function(){var e=this,t=this.circleOfFifthKey.map((function(t,n){return Object(E.jsx)("th",{style:e.createStyle(n),onClick:e.doClick,"data-key":n,children:t},n)})),n=this.circleOfFifthMajor.map((function(t,n){return Object(E.jsx)(M,{index:n,nowKey:e.state.nowKey,chord:t+(e.state.isSeventh?"7":"")},n)})),a=this.circleOfFifthMinor.map((function(t,n){return Object(E.jsx)(M,{index:n,nowKey:e.state.nowKey,chord:t+(e.state.isSeventh?"7":"")},n)}));return Object(E.jsx)("table",{className:"table table-bordered",children:Object(E.jsxs)("tbody",{children:[Object(E.jsx)("tr",{children:t}),Object(E.jsx)("tr",{children:n}),Object(E.jsx)("tr",{children:a})]})})}}]),n}(a.Component),w=Object(d.b)((function(e){return e}))(N),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={message:"please wait...",inPorts:[],outPorts:[],selectedOutPortID:"",selectedInPortID:""},navigator.requestMIDIAccess({sysex:!0}).then((function(e){for(var t=e.inputs.values(),n=[],c=t.next();!c.done;c=t.next()){var s=c.value;n.push({name:s.name,ID:s.id}),s.addEventListener("midimessage",a.inputEvent,!1)}n.length&&a.setState({selectedInPortID:n[0].ID}),a.setState({inPorts:n});var i=[];a.outputs=e.outputs;var r,o=Object(k.a)(a.outputs.values());try{for(o.s();!(r=o.n()).done;){var l=r.value;i.push({device:l,name:l.name,ID:l.id})}}catch(h){o.e(h)}finally{o.f()}i.length&&(a.setState({selectedOutPortID:i[0].ID}),a.props.dispatch({type:"REGISTER_OUTPUT",output:a.outputs.get(i[0].ID)})),a.setState({outPorts:i}),console.log("MIDI READY!!!"),a.setState({message:"MIDI READY"}),a.props.dispatch({type:"PROGRAM_SET_ALL"})}),(function(e){console.log("MIDI FAILED - "+e)})),a.doClick=a.doClick.bind(Object(x.a)(a)),a.doChange=a.doChange.bind(Object(x.a)(a)),a.inputEvent=a.inputEvent.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"inputEvent",value:function(e){e.target;var t,n=[];e.data.forEach((function(e){n.push(e.toString(16))})),"f8"!=n[0]&&"fe"!=n[0]&&(t=n.join(" "),this.state.outPorts[0].device.send(e.data),console.log(t))}},{key:"doChange",value:function(e){this.setState({selectedOutPortID:e.target.value})}},{key:"doClick",value:function(){var e=this.outputs.get(this.state.selectedOutPortID);e.send([144,60,100]),e.send([128,60,100],window.performance.now()+500),e.send([144,64,100]),e.send([128,64,100],window.performance.now()+500),e.send([144,67,100]),e.send([128,67,100],window.performance.now()+500),this.props.dispatch({type:"REGISTER_OUTPUT",output:e})}},{key:"render",value:function(){var e=0,t=this.state.inPorts.map((function(t){return Object(E.jsxs)("option",{value:t.ID,children:[t.name," (",t.ID,")"]},e++)})),n=this.state.outPorts.map((function(t){return Object(E.jsxs)("option",{value:t.ID,children:[t.name," (",t.ID,")"]},e++)}));return Object(E.jsxs)("div",{className:"row",children:[Object(E.jsx)("div",{className:"col-md-3",children:Object(E.jsx)("table",{children:Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Input: "}),Object(E.jsx)("td",{children:Object(E.jsx)("select",{children:t})})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Output: "}),Object(E.jsx)("td",{children:Object(E.jsx)("select",{onChange:this.doChange,defaultValue:"-1",children:n})})]})]})})}),Object(E.jsx)("div",{className:"col-md-3",children:Object(E.jsx)(w,{})})]})}}]),n}(a.Component),P=Object(d.b)((function(e){return e}))(T),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={selected:!1},a.doClick=a.doClick.bind(Object(x.a)(a)),a.doMouseEnter=a.doMouseEnter.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"doMouseEnter",value:function(e){this.props.isSingle&&(!(1&e.buttons)||(console.log("Entered"),this.doClick(e)))}},{key:"doClick",value:function(e){var t=this,n=1*e.target.getAttribute("data-col"),a=1*e.target.getAttribute("data-row");if(this.setState((function(e){return{selected:!e.selected}})),this.state.selected)this.props.dispatch({type:"DEL_EVENT",data:{channel:this.props.channel,mea:this.props.mea,tick:n,note:a}});else{var c={type:"ADD_EVENT",data:{channel:this.props.channel,mea:this.props.mea,tick:n,note:a,gate:120,vel:100}};if(this.props.dispatch(c),this.props.isSingle){var s=this.props.noteEvents.filter((function(e){return e.channel==c.data.channel&&e.mea==c.data.mea&&e.tick==c.data.tick}));s.length>0&&s.map((function(e){t.props.dispatch({type:"DEL_EVENT",data:{channel:t.props.channel,mea:t.props.mea,tick:n,note:e.note}})}))}this.props.isPreview&&(this.props.dispatch({type:"ALL_NOTE_OFF"}),this.props.dispatch({type:"NOTE_ON",data:{channel:this.props.channel,note:a,gateMs:200,vel:100}}))}}},{key:"render",value:function(){var e=this,t=this.props.row,n=this.props.col,a=this.props.noteEvents.find((function(a){return a.channel==e.props.channel&&a.mea==e.props.mea&&a.note==t&&a.tick==n}));this.state.selected=void 0!==a;var c={width:"50px"};if(this.state.selected){c=Object(b.a)(Object(b.a)({},c),{},{background:["crimson","gray","orange","gray","yellow","lime","gray","green","gray","darkblue","gray","magenta"][t%12]})}return n%4==0&&(c=Object(b.a)(Object(b.a)({},c),{},{borderLeft:"2px solid #e7e7e7"})),Object(E.jsx)("td",{style:c,onClick:this.doClick,onMouseEnter:this.doMouseEnter,"data-row":t,"data-col":n})}}]),n}(a.Component),B=Object(d.b)((function(e){return e}))(A),I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).box={height:"500px",overflow:"auto",cursor:"pointer",userSelect:"none"},a.th={width:"100px"},a.state={width:16,height:13,baseNote:72,isSingle:!0,isPreview:!0},a.changeBaseKey=a.changeBaseKey.bind(Object(x.a)(a)),a.changeMea=a.changeMea.bind(Object(x.a)(a)),a.changeSingle=a.changeSingle.bind(Object(x.a)(a)),a.changePreview=a.changePreview.bind(Object(x.a)(a)),a.rollStyle=a.rollStyle.bind(Object(x.a)(a)),a.ref=c.a.createRef(),a}return Object(o.a)(n,[{key:"changeBaseKey",value:function(e){this.setState({baseNote:e.target.value})}},{key:"changeMea",value:function(e){this.props.dispatch({type:"MOVE_MEA",mea:e.target.value})}},{key:"changeSingle",value:function(e){this.setState({isSingle:e.target.checked})}},{key:"changePreview",value:function(e){this.setState({isPreview:e.target.checked})}},{key:"componentDidMount",value:function(){this.ref.current.scrollIntoView({block:"center"})}},{key:"rollStyle",value:function(e){var t=(e-this.state.baseNote+120)%12;return 0==t?{background:"mistyrose"}:[1,0,1,0,1,1,0,1,0,1,0,1][t]?{background:"white"}:{background:"whitesmoke"}}},{key:"render",value:function(){for(var e=this,t=[],n=127;n>=0;n--)t.push(n);for(var a=[],c=1;c<=16;c++)a.push(c);var s=t.map((function(t,n){var c=127-n;return Object(E.jsxs)("tr",{style:e.rollStyle(c),children:[Object(E.jsx)("th",{style:e.th,ref:c==e.state.baseNote?e.ref:"",children:S.noteNumberToNoteName(c)}),a.map((function(t,n){return Object(E.jsx)(B,{row:c,col:n,isSingle:e.state.isSingle,isPreview:e.state.isPreview},t)}))]},t)}));return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{style:this.box,children:Object(E.jsx)("table",{className:"table table-bordered table-sm",children:Object(E.jsx)("tbody",{children:s})})}),Object(E.jsxs)("p",{children:[Object(E.jsx)("label",{children:"Key: "}),Object(E.jsx)("input",{type:"number",value:this.state.baseNote,min:"12",max:"127",onChange:this.changeBaseKey}),"(",S.noteNumberToNoteName(this.state.baseNote),")",Object(E.jsx)("label",{children:"Mea: "}),Object(E.jsx)("input",{type:"number",value:this.props.mea,min:"1",max:"127",onChange:this.changeMea}),Object(E.jsx)("label",{children:"Single: "}),Object(E.jsx)("input",{type:"checkbox",id:"single",onChange:this.changeSingle,checked:this.state.isSingle}),Object(E.jsx)("label",{children:"Preview: "}),Object(E.jsx)("input",{type:"checkbox",id:"single",onChange:this.changePreview,checked:this.state.isPreview})]})]})}}]),n}(a.Component),F=Object(d.b)((function(e){return e}))(I),_=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).td={width:"50px"},a.state={},a.ChangeChord=a.ChangeChord.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"ChangeChord",value:function(e,t){this.props.dispatch({type:"ADD_CHORD",data:{mea:this.props.mea,tick:e,chord:t}})}},{key:"render",value:function(){var e=this,t=this.props.chordEvents.find((function(t){return t.mea==e.props.mea&&t.tick==e.props.tick}));return Object(E.jsx)("td",{style:this.td,children:t&&t.chord})}}]),n}(a.Component),G=Object(d.b)((function(e){return e}))(_),L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).th={width:"100px"},a.clicker={overflowY:"scroll",cursor:"pointer"},a.maxTick=16,a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){for(var e=[],t=0;t<this.maxTick;t++)e.push(Object(E.jsx)(G,{tick:t},t));return Object(E.jsx)("div",{style:this.clicker,children:Object(E.jsx)("table",{className:"table table-bordered table-sm",children:Object(E.jsx)("tbody",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{style:this.th,children:"C"}),e]})})})})}}]),n}(a.Component),V=(Object(d.b)((function(e){return e}))(L),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).box={height:"500px",overflow:"auto"},a.state={},a.doClick=a.doClick.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"doClick",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.noteEvents.filter((function(t){return t.channel==e.props.channel})).map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:e.mea}),Object(E.jsx)("td",{children:e.tick}),Object(E.jsx)("td",{children:S.noteNumberToNoteName(e.note)}),Object(E.jsx)("td",{children:e.gate}),Object(E.jsx)("td",{children:e.vel})]},t)}));return Object(E.jsx)("div",{style:this.box,children:Object(E.jsxs)("table",{className:"table table-sm",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Mea"}),Object(E.jsx)("th",{children:"Tick"}),Object(E.jsx)("th",{children:"Event"}),Object(E.jsx)("th",{children:"Gate"}),Object(E.jsx)("th",{children:"Vel/Value"})]})}),Object(E.jsx)("tbody",{children:t})]})})}}]),n}(a.Component)),H=Object(d.b)((function(e){return e}))(V),R=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).th={width:"100px"},a.td={width:"50px"},a.tdNow={width:"50px",background:"yellow"},a.clicker={overflowY:"scroll"},a.maxTick=16,a.state={bpm:60,nowTick:0,isPlaying:!1,isLoop:!0,isSolo:!1},a.PlayToggle=a.PlayToggle.bind(Object(x.a)(a)),a.Proceed=a.Proceed.bind(Object(x.a)(a)),a.ChangeBPM=a.ChangeBPM.bind(Object(x.a)(a)),a.ChangeLoop=a.ChangeLoop.bind(Object(x.a)(a)),a.ChangeSolo=a.ChangeSolo.bind(Object(x.a)(a)),a.ChangeTick=a.ChangeTick.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"PlayToggle",value:function(){this.state.isPlaying?(this.setState({isPlaying:!1}),clearTimeout(this.timer)):(this.setState({isPlaying:!0}),this.Play(),this.timer=setTimeout(this.Proceed,24e4/this.state.bpm/this.maxTick))}},{key:"Play",value:function(){var e=this,t=this.props.noteEvents.filter((function(t){return e.state.isSolo?t.channel==e.props.channel&&t.mea==e.props.mea&&t.tick==e.state.nowTick:t.mea==e.props.mea&&t.tick==e.state.nowTick}));t.length>0&&t.map((function(t){e.props.dispatch({type:"NOTE_ON",data:{channel:t.channel,note:t.note,gateMs:24e4/e.state.bpm*(t.gate/1920)-1,vel:t.vel}})}))}},{key:"Proceed",value:function(){var e=this.state.nowTick+1;e==this.maxTick&&(e%=this.maxTick,this.state.isLoop||(console.log(this.props.finalMea),this.props.mea>this.props.finalMea?this.props.dispatch({type:"MOVE_MEA",mea:0}):this.props.dispatch({type:"MOVE_MEA",mea:1*this.props.mea+1}))),this.setState({nowTick:e}),this.Play();var t=24e4/this.state.bpm/this.maxTick;e!=this.maxTick-1||this.state.isLoop||(t-=80),this.timer=setTimeout(this.Proceed,t)}},{key:"ChangeBPM",value:function(e){this.setState({bpm:e.target.value})}},{key:"ChangeLoop",value:function(e){this.setState({isLoop:e.target.checked})}},{key:"ChangeSolo",value:function(e){this.setState({isSolo:e.target.checked})}},{key:"ChangeTick",value:function(e){this.setState({nowTick:1*e.target.getAttribute("data-tick")})}},{key:"render",value:function(){for(var e=[],t=0;t<this.maxTick;t++)e.push(Object(E.jsx)("td",{"data-tick":t,onClick:this.ChangeTick,style:this.state.nowTick==t?this.tdNow:this.td},t));return Object(E.jsxs)("div",{children:[Object(E.jsxs)("p",{children:[Object(E.jsx)("input",{type:"number",value:this.state.bpm,min:"10",max:"300",onChange:this.ChangeBPM}),Object(E.jsx)("button",{className:"btn btn-primary",onClick:this.PlayToggle,children:this.state.isPlaying?"Playing":"Play"}),Object(E.jsx)("label",{children:"Loop: "}),Object(E.jsx)("input",{type:"checkbox",id:"loop",onChange:this.ChangeLoop,checked:this.state.isLoop}),Object(E.jsx)("label",{children:"Solo: "}),Object(E.jsx)("input",{type:"checkbox",id:"solo",onChange:this.ChangeSolo,checked:this.state.isSolo})]}),Object(E.jsx)("div",{style:this.clicker,children:Object(E.jsx)("table",{className:"table table-bordered table-sm",children:Object(E.jsx)("tbody",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{style:this.th,children:"4/4"}),e]})})})})]})}}]),n}(a.Component),K=Object(d.b)((function(e){return e}))(R),U=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a.ChangeSelector=a.ChangeSelector.bind(Object(x.a)(a)),a.AddChannel=a.AddChannel.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"ChangeSelector",value:function(e){this.props.dispatch({type:"MOVE_CHANNEL",channel:1*e.target.value})}},{key:"AddChannel",value:function(){this.props.dispatch({type:"ADD_CHANNEL"})}},{key:"render",value:function(){var e=0,t=this.props.channelData.map((function(t){return Object(E.jsxs)("option",{value:e,children:["Ch.",e++," ",S.programName[t.program]]},e)}));return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("select",{onChange:this.ChangeSelector,value:this.props.channel,children:t}),Object(E.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:this.AddChannel,children:"+"})]})}}]),n}(a.Component),W=Object(d.b)((function(e){return e}))(U),Y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a.ChangeSelector=a.ChangeSelector.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"ChangeSelector",value:function(e){this.props.dispatch({type:"PROGRAM_CHANGE",programNumber:1*e.target.value})}},{key:"render",value:function(){var e=0,t=S.programName.map((function(t){return Object(E.jsxs)("option",{value:e,children:[e++,". ",t]},e)}));return Object(E.jsx)("select",{onChange:this.ChangeSelector,value:this.props.channelData[this.props.channel].program,children:t})}}]),n}(a.Component),z=Object(d.b)((function(e){return e}))(Y),J=n(51),q=n(50),X=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isModalOpen:!1,selectedID:-1},a.closeModal=a.closeModal.bind(Object(x.a)(a)),a.openModal=a.openModal.bind(Object(x.a)(a)),a.selectID=a.selectID.bind(Object(x.a)(a)),a.openSong=a.openSong.bind(Object(x.a)(a)),a.delSong=a.delSong.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"closeModal",value:function(){this.setState({isModalOpen:!1})}},{key:"openModal",value:function(){this.setState({isModalOpen:!0})}},{key:"selectID",value:function(e){this.setState({selectedID:e})}},{key:"openSong",value:function(){this.props.dispatch({type:"OPEN_SONG",id:this.state.selectedID}),this.closeModal()}},{key:"delSong",value:function(){this.props.dispatch({type:"DEL_SONG",id:this.state.selectedID})}},{key:"render",value:function(){var e=this,t=this.props.songs.map((function(t){return Object(E.jsxs)("tr",{onClick:function(){return e.selectID(t.id)},className:e.state.selectedID===t.id?"table-active":"",children:[Object(E.jsx)("td",{children:t.name}),Object(E.jsx)("td",{children:t.updated}),Object(E.jsx)("td",{children:t.author})]},t.id)}));return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(J.a,{variant:"primary",onClick:this.openModal,children:"Open"}),Object(E.jsxs)(q.a,{show:this.state.isModalOpen,onHide:this.closeModal,children:[Object(E.jsx)(q.a.Header,{closeButton:!0,children:Object(E.jsx)(q.a.Title,{children:"Song List"})}),Object(E.jsx)(q.a.Body,{children:Object(E.jsxs)("table",{className:"table table-hover table-sm",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Title"}),Object(E.jsx)("th",{children:"Updated"}),Object(E.jsx)("th",{children:"Author"})]})}),Object(E.jsx)("tbody",{children:t})]})}),Object(E.jsx)(q.a.Footer,{children:-1!==this.state.selectedID&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(J.a,{variant:"danger",onClick:this.delSong,children:"Del"}),Object(E.jsx)(J.a,{variant:"primary",onClick:this.openSong,children:"Open"})]})})]})]})}}]),n}(a.Component),Q=Object(d.b)((function(e){return e}))(X),Z=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isModalOpen:!1,name:""},a.closeModal=a.closeModal.bind(Object(x.a)(a)),a.openModal=a.openModal.bind(Object(x.a)(a)),a.onChange=a.onChange.bind(Object(x.a)(a)),a.save=a.save.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"closeModal",value:function(){this.setState({isModalOpen:!1})}},{key:"openModal",value:function(){this.setState({isModalOpen:!0})}},{key:"onChange",value:function(e){this.setState({name:e.target.value})}},{key:"save",value:function(e){e.preventDefault(),this.props.dispatch({type:"SAVE_SONG",name:this.state.name}),this.closeModal()}},{key:"render",value:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(J.a,{variant:"primary",onClick:this.openModal,children:"Save"}),Object(E.jsxs)(q.a,{show:this.state.isModalOpen,onHide:this.closeModal,children:[Object(E.jsx)(q.a.Header,{closeButton:!0,children:Object(E.jsx)(q.a.Title,{children:"Save As..."})}),Object(E.jsx)(q.a.Body,{children:Object(E.jsxs)("form",{onSubmit:this.save,children:[Object(E.jsx)("input",{className:"form-control",type:"text",value:this.state.name,onChange:this.onChange,placeholder:"Title"}),Object(E.jsx)("input",{type:"submit",value:"Save"})]})})]})]})}}]),n}(a.Component),$=Object(d.b)((function(e){return e}))(Z),ee=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a.doClick=a.doClick.bind(Object(x.a)(a)),a}return Object(o.a)(n,[{key:"doClick",value:function(e){this.props.dispatch({type:"DEL_ALL"})}},{key:"render",value:function(){return Object(E.jsx)("div",{children:Object(E.jsxs)("div",{className:"row mt-4",children:[Object(E.jsxs)("div",{className:"col-md-3",children:[Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(Q,{}),Object(E.jsx)($,{})]}),Object(E.jsx)(W,{}),Object(E.jsx)(z,{})]}),Object(E.jsx)(H,{}),Object(E.jsx)("button",{className:"btn btn-danger",onClick:this.doClick,children:"Del All Event"})]}),Object(E.jsxs)("div",{className:"col-md-9",children:[Object(E.jsx)(K,{}),Object(E.jsx)(F,{})]})]})})}}]),n}(a.Component),te=Object(d.b)((function(e){return e}))(ee),ne={key:"midip",storage:y.a,blacklist:["output"],whitelist:["songs","noteEvents","channelData"]},ae=Object(v.a)(ne,m),ce=Object(j.c)(ae),se=Object(v.b)(ce),ie=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).style={background:"#FDFDFD"},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(E.jsxs)("div",{className:"container-fluid",style:this.style,children:[Object(E.jsx)(d.a,{store:ce,children:Object(E.jsxs)(g.a,{loading:Object(E.jsx)("p",{children:"loading..."}),persistor:se,children:[Object(E.jsx)(te,{}),Object(E.jsx)("hr",{}),Object(E.jsx)(P,{})]})}),Object(E.jsx)("footer",{className:"text-center text-black-50",children:"\xa9syun560/2021"})]})}}]),n}(a.Component),re=(n(47),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))});i.a.render(Object(E.jsx)(ie,{}),document.getElementById("root")),re()}},[[48,1,2]]]);
//# sourceMappingURL=main.fb82bcec.chunk.js.map