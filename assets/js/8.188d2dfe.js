(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{330:function(e,t,n){},331:function(e,t,n){},333:function(e,t,n){"use strict";n.r(t);n(105);var i=n(322),r={name:"SidebarGroup",components:{DropdownTransition:n(361).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(333).default},methods:{isActive:i.e}},s=(n(344),n(9)),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):n("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),n("DropdownTransition",[e.open||!e.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null).exports;n(345),n(55);function o(e,t,n,i,r){var s={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),e("RouterLink",s,n)}function l(e,t,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!t||a>s?null:e("ul",{class:"sidebar-sub-headers"},t.map((function(t){var p=Object(i.e)(r,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[o(e,n+"#"+t.slug,t.title,p,t.level-1),l(e,t.children,n,r,s,a+1)])})))}var p={functional:!0,props:["item","sidebarDepth"],render:function(e,t){var n=t.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,p=n.$themeLocaleConfig,u=t.props,c=u.item,d=u.sidebarDepth,h=Object(i.e)(s,c.path),b="auto"===c.type?h||c.children.some((function(e){return Object(i.e)(s,c.basePath+"#"+e.slug)})):h,f="external"===c.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,c.path,c.title||c.path):o(e,c.path,c.title||c.path,b),m=[r.frontmatter.sidebarDepth,d,p.sidebarDepth,a.sidebarDepth,1].find((function(e){return void 0!==e})),v=p.displayAllHeaders||a.displayAllHeaders;return"auto"===c.type?[f,l(e,c.children,c.basePath,s,m)]:(b||v)&&c.headers&&!i.d.test(c.path)?[f,l(e,Object(i.c)(c.headers),c.path,s,m)]:f}};n(346);function u(e,t){if("group"===t.type){var n=t.path&&Object(i.e)(e,t.path),r=t.children.some((function(t){return"group"===t.type?u(e,t):"page"===t.type&&Object(i.e)(e,t.path)}));return n||r}return!1}var c={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(p,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var e=function(e,t){for(var n=0;n<t.length;n++){var i=t[n];if(u(e,i))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup:function(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive:function(e){return Object(i.e)(this.$route,e.regularPath)}}},d=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,i){return n("li",{key:i},["group"===t.type?n("SidebarGroup",{attrs:{item:t,open:i===e.openGroupIndex,collapsable:t.collapsable||t.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:t}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=d.exports},344:function(e,t,n){"use strict";n(330)},345:function(e,t,n){"use strict";var i=n(1),r=n(31).find,s=n(113),a=n(15),o=!0,l=a("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!l},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s("find")},346:function(e,t,n){"use strict";n(331)},376:function(e,t,n){},407:function(e,t,n){"use strict";n(376)},419:function(e,t,n){"use strict";n.r(t);var i=n(333),r=n(335),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.a},props:["items"]},a=(n(407),n(9)),o=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),t("SidebarHeader"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=o.exports}}]);