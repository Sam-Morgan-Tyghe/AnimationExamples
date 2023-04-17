import{j as e}from"./jsx-runtime-ccada58e.js";import{r as x}from"./index-f1f749bf.js";import{c as b,f as w}from"./index-914077f0.js";import{N as d,d as C}from"./index-313ed385.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-1420b7c0.js";const Q=t=>t;let U=Q;function Z(t,i,o){var a;if(typeof t=="string"){let n=document;i&&(U(!!i.current),n=i.current),o?((a=o[t])!==null&&a!==void 0||(o[t]=n.querySelectorAll(t)),t=o[t]):t=n.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}const ii={any:0,all:1};function ti(t,i,{root:o,margin:a,amount:n="any"}={}){const s=Z(t),r=new WeakMap,l=f=>{f.forEach(m=>{const k=r.get(m.target);if(m.isIntersecting!==!!k)if(m.isIntersecting){const S=i(m);typeof S=="function"?r.set(m.target,S):c.unobserve(m.target)}else k&&(k(m),r.delete(m.target))})},c=new IntersectionObserver(l,{root:o,rootMargin:a,threshold:typeof n=="number"?n:ii[n]});return s.forEach(f=>c.observe(f)),()=>c.disconnect()}function ni(t,{root:i,margin:o,amount:a,once:n=!1}={}){const[s,r]=x.useState(!1);return x.useEffect(()=>{if(!t.current||n&&s)return;const l=()=>(r(!0),n?void 0:()=>r(!1)),c={root:i&&i.current||void 0,margin:o,amount:a==="some"?"any":a};return ti(t.current,l,c)},[i,t,o,n]),s}var D=b("div");D.displayName="Box";var J=w(function(i,o){const{size:a,centerContent:n=!0,...s}=i,r=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return e.jsx(D,{ref:o,boxSize:a,__css:{...r,flexShrink:0,flexGrow:0},...s})});J.displayName="Square";var oi=w(function(i,o){const{size:a,...n}=i;return e.jsx(J,{size:a,ref:o,borderRadius:"9999px",...n})});oi.displayName="Circle";var K=b("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});K.displayName="Center";var ai={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};w(function(i,o){const{axis:a="both",...n}=i;return e.jsx(b.div,{ref:o,__css:ai[a],...n,position:"absolute"})});function ei({children:t,withProps:i=!0,index:o=0,transitionDelayVelocity:a=1,transitionLength:n=.9,transitionTiming:s="cubic-bezier(0.17, 0.55, 0.55, 1)",transitionDelay:r=.5,useInViewOnce:l=!0}){const c=x.useRef(null),f=ni(c,{once:l}),m=i?{...t.props}:{};return e.jsx(D,{ref:c,style:{opacity:f?1:0,transform:f?"translateY(0)":"translateY(100px)",transition:`all ${n}s ${s} ${r}s`,transitionDelay:`${o*10*a}ms`},...m,children:t})}function ri({children:t,withProps:i=!0,transitionDelayVelocity:o=1,transitionLength:a=.9,transitionTiming:n="cubic-bezier(0.17, 0.55, 0.55, 1)",transitionDelay:s=.5,useInViewOnce:r=!0}){const l=x.Children.toArray(t);return e.jsx(e.Fragment,{children:l.map((c,f)=>e.jsx(ei,{index:f,transitionDelayVelocity:o,withProps:i,transitionLength:a,transitionTiming:n,transitionDelay:s,useInViewOnce:r,children:c}))})}const di={component:d,title:"Animations/NotifcationList"},u=t=>e.jsx(K,{flexDirection:"column",children:e.jsxs(ri,{...t,children:[C.map(i=>e.jsx(d,{...i},i.id)),C.map(i=>e.jsx(d,{...i},i.id)),C.map(i=>e.jsx(d,{...i},i.id)),C.map(i=>e.jsx(d,{...i},i.id))]})}),y=u.bind({});y.args={transitionDelayVelocity:1,transitionLength:.9,transitionTiming:"cubic-bezier(0.17, 0.55, 0.55, 1)",transitionDelay:.5,useInViewOnce:!0,withProps:!0};const p=u.bind({});p.args={transitionDelayVelocity:.8,transitionLength:1.5,transitionTiming:"cubic-bezier(0.25, 0.1, 0.25, 1)",transitionDelay:.1,useInViewOnce:!1,withProps:!0};const A=u.bind({});A.args={transitionDelayVelocity:1.5,transitionLength:.5,transitionTiming:"ease-out",transitionDelay:.3,useInViewOnce:!0,withProps:!1};const N=u.bind({});N.args={transitionDelayVelocity:.3,transitionLength:2,transitionTiming:"linear",transitionDelay:.5,useInViewOnce:!1,withProps:!0};const g=u.bind({});g.args={transitionDelayVelocity:0,transitionLength:0,transitionTiming:"ease",transitionDelay:0,useInViewOnce:!1,withProps:!1};const I=u.bind({});I.args={transitionDelayVelocity:1,transitionLength:.8,transitionTiming:"steps(4, end)",transitionDelay:.2,useInViewOnce:!0,withProps:!0};const h=u.bind({});h.args={transitionDelayVelocity:1.2,transitionLength:.7,transitionTiming:"ease-in-out",transitionDelay:.2,useInViewOnce:!0,withProps:!0};var V,v,j;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`args => <Center flexDirection="column">
    <AnimateAllChildren {...args}>
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
    </AnimateAllChildren>
  </Center>`,...(j=(v=y.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var T,E,O;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Center flexDirection="column">
    <AnimateAllChildren {...args}>
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
    </AnimateAllChildren>
  </Center>`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var L,z,_;A.parameters={...A.parameters,docs:{...(L=A.parameters)==null?void 0:L.docs,source:{originalSource:`args => <Center flexDirection="column">
    <AnimateAllChildren {...args}>
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
    </AnimateAllChildren>
  </Center>`,...(_=(z=A.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var P,q,B;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`args => <Center flexDirection="column">
    <AnimateAllChildren {...args}>
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
    </AnimateAllChildren>
  </Center>`,...(B=(q=N.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var R,$,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Center flexDirection="column">
    <AnimateAllChildren {...args}>
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
    </AnimateAllChildren>
  </Center>`,...(F=($=g.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var M,W,Y;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`args => <Center flexDirection="column">
    <AnimateAllChildren {...args}>
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
    </AnimateAllChildren>
  </Center>`,...(Y=(W=I.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var G,X,H;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`args => <Center flexDirection="column">
    <AnimateAllChildren {...args}>
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
      {dummyNotificationsArray.map(notification => <NotificationItem key={notification.id} {...notification} />)}
    </AnimateAllChildren>
  </Center>`,...(H=(X=h.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};const yi=["Default","CustomAnimationSettings","FastAnimation","SlowAnimation","NoAnimation","CustomTransitionTiming","MultipleItemsWithDelay"];export{p as CustomAnimationSettings,I as CustomTransitionTiming,y as Default,A as FastAnimation,h as MultipleItemsWithDelay,g as NoAnimation,N as SlowAnimation,yi as __namedExportsOrder,di as default};
//# sourceMappingURL=AnimateNotificationList.stories-9f29747f.js.map
