"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[85],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(7294),t=n(6010),i=n(7019),c=n(3905),s=n(1914),r=n(1575),m=n(3616),o="mdxPageWrapper_eQvw";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,v=n.title,u=n.description,f=n.wrapperClassName,N=n.hide_table_of_contents,g=d.permalink;return l.createElement(i.Z,{title:v,description:u,permalink:g,wrapperClassName:null!=f?f:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",o)},l.createElement("div",{className:(0,t.Z)("col",!N&&"col--8")},l.createElement(c.Zo,{components:s.Z},l.createElement(a,null))),!N&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(r.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},5002:function(e,a,n){n.d(a,{Z:function(){return m}});var l=n(7462),t=n(3366),i=n(7294),c=n(3616),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,t.Z)(e,s),k=(0,c.LU)(),C=null!=f?f:k.tableOfContents.minHeadingLevel,_=null!=N?N:k.tableOfContents.maxHeadingLevel,p=(0,c.DA)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:C,maxHeadingLevel:_}}),[d,u,C,_]);return(0,c.Si)(h),i.createElement(r,(0,l.Z)({toc:p,className:m,linkClassName:d},g))}},1575:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(7462),t=n(3366),i=n(7294),c=n(6010),s=n(5002),r="tableOfContents_vrFS",m=["className"];var o=function(e){var a=e.className,n=(0,t.Z)(e,m);return i.createElement("div",{className:(0,c.Z)(r,"thin-scrollbar",a)},i.createElement(s.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);