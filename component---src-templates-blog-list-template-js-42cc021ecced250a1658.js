(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1oc3":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("vOnD"),i=a("tHN7"),l=a("su/s"),c=r.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1wsaguq-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=r.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1wsaguq-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),s=r.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1wsaguq-2"})(["font-weight:700;font-size:3rem;margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]),d=r.b.h2.withConfig({displayName:"Hero__HeroSubTitle",componentId:"sc-1wsaguq-3"})(["margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]);t.a=function(e){var t=Object(i.a)().siteCover,a=Object(l.a)(t).fluid,n=e.heroImg||a.src;return o.a.createElement(c,{style:{backgroundImage:'url("'+n+'")'}},o.a.createElement(p,null,o.a.createElement(s,null,e.title),e.subTitle&&o.a.createElement(d,null,e.subTitle)))}},H35Q:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},b9pq:function(e,t,a){"use strict";var n=a("dI71"),o=a("q1tI"),r=a.n(o),i=a("Wbzz"),l=a("vOnD"),c=l.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"tgjq80-0"})(["display:inline;color:var(--color-textSecondary);"]),p=Object(l.b)(i.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"tgjq80-1"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted var(--color-textSecondary);}&:before{content:'#';}"]),s=l.b.span.withConfig({displayName:"TagList__TagListItem",componentId:"tgjq80-2"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,a=e.noLink;return r.a.createElement(c,null,t.map((function(e,n){return r.a.createElement(o.Fragment,{key:"tag-list-"+n},!a&&r.a.createElement(p,{to:"/tags/"+e},e),a&&r.a.createElement(s,{to:"/tags/"+e},e),n<t.length-1?", ":"")})))},t}(r.a.Component);t.a=d},"e+E3":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("ygxU"),l=a("b9pq"),c=a("tHN7"),p=a("vOnD"),s=a("LObP"),d=p.b.article.withConfig({displayName:"PostsListItem__Post",componentId:"sc-1pv5de6-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;"]),m=Object(p.b)(r.Link).withConfig({displayName:"PostsListItem__ReadPost",componentId:"sc-1pv5de6-1"})(["display:block;font-size:0.75rem;margin-top:1rem;text-align:center;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;line-height:2;color:var(--color-text);&:hover{background-color:var(--color-grey600);border-radius:0.25rem;color:var(--color-white);}"]),g=p.b.header.withConfig({displayName:"PostsListItem__PostHeader",componentId:"sc-1pv5de6-2"})(["padding:1em 0;"]),u=p.b.p.withConfig({displayName:"PostsListItem__Excerpt",componentId:"sc-1pv5de6-3"})(["line-height:1.45;padding-bottom:0.5em;"]),A=Object(p.b)(r.Link).withConfig({displayName:"PostsListItem__PostTitleLink",componentId:"sc-1pv5de6-4"})(["color:var(--color-h2);&:hover{border-bottom:1px dotted var(--color-text);}"]),b=p.b.div.withConfig({displayName:"PostsListItem__FooterLine",componentId:"sc-1pv5de6-5"})(["font-size:0.8em;"]),h=function(e){var t=e.title,a=e.excerpt,n=e.slug,r=e.language,p=e.tags,h=e.timeToRead,x=Object(c.a)().defaultLang;return o.a.createElement(d,null,o.a.createElement(g,null,o.a.createElement("h2",null,o.a.createElement(A,{to:"/"+n},x!==r&&o.a.createElement(i.a,{language:r}),t))),o.a.createElement("section",null,o.a.createElement(u,{dangerouslySetInnerHTML:{__html:a}})),o.a.createElement("footer",null,o.a.createElement(b,null,o.a.createElement(s.c,{min:h}),o.a.createElement(s.a,null),o.a.createElement(l.a,{tags:p})),o.a.createElement(m,{to:"/"+n,"aria-label":"View "+t+" article"},"Read post ›")))};t.a=function(e){var t=e.posts,a=Object(c.a)().defaultLang;return o.a.createElement(n.Fragment,null,t.map((function(e){var t={title:e.node.frontmatter.title,excerpt:e.node.excerpt,slug:e.node.frontmatter.slug,timeToRead:e.node.timeToRead,language:e.node.frontmatter.language||a,tags:e.node.frontmatter.tags||[]};return o.a.createElement(h,Object.assign({key:t.slug},t))})))}},"tJ/O":function(e,t,a){"use strict";a.r(t);var n=a("dI71"),o=a("q1tI"),r=a.n(o),i=a("Bl7J"),l=a("SgMy"),c=a("1oc3"),p=a("e+E3"),s=a("Wbzz"),d=a("vOnD"),m=d.b.nav.withConfig({displayName:"Pagination__PaginationWrapper",componentId:"j8ijrk-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:4em;justify-content:space-between;width:80%;max-width:770px;padding:25px 0;margin:0px auto;@media (max-width:780px){width:90%;padding:25px 0;}"]),g=Object(d.b)(s.Link).withConfig({displayName:"Pagination__PageBtn",componentId:"j8ijrk-1"})(["border-radius:3px;background-color:var(--color-primary);border:1px solid var(--color-primary);color:var(--color-white);padding:8px 20px;min-width:130px;&:hover{background-color:var(--color-white);color:var(--color-primary);border:1px solid var(--color-primary);}@media (max-width:564px){margin-top:10px;width:100%;}"]),u=Object(d.b)(g).withConfig({displayName:"Pagination__PreviousBtn",componentId:"j8ijrk-2"})(["order:1;@media (max-width:564px){order:2;}"]),A=Object(d.b)(g).withConfig({displayName:"Pagination__NextBtn",componentId:"j8ijrk-3"})(["order:3;"]),b=d.b.span.withConfig({displayName:"Pagination__Spacer",componentId:"j8ijrk-4"})(["display:block;min-width:130px;&.previous{order:1;}&.next{order:3;}@media (max-width:564px){display:none;&.previous{order:2;}&.next{order:3;}}"]),h=d.b.span.withConfig({displayName:"Pagination__PageInfo",componentId:"j8ijrk-5"})(["order:2;padding:1em 0;@media (max-width:564px){order:1;}"]),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,a=e.nbPages,n=2===t?"/":"/pages/"+(t-1);return r.a.createElement(m,null,1!==t?r.a.createElement(u,{to:n},"‹ Newer posts"):r.a.createElement(b,{className:"previous"}),r.a.createElement(h,null,"Page ",t," of ",a),t<a?r.a.createElement(A,{to:"/pages/"+(t+1)},"Older posts ›"):r.a.createElement(b,{className:"next"}))},t}(r.a.Component),f=a("wtQ5"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,a=e.description,n=this.props.data.posts.edges,o=this.props.pageContext;return r.a.createElement(i.a,{location:this.props.location},r.a.createElement(f.a,null),r.a.createElement(c.a,{title:t,subTitle:a}),r.a.createElement(l.a,null,r.a.createElement(p.a,{posts:n})),r.a.createElement(x,{nbPages:o.nbPages,currentPage:o.currentPage}))},t}(r.a.Component);t.default=w},xwj8:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},ygxU:function(e,t,a){"use strict";var n=a("dI71"),o=a("q1tI"),r=a.n(o),i=a("vOnD"),l=a("xwj8"),c=a.n(l),p=a("H35Q"),s=a.n(p),d=i.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"wxgzt8-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?c.a:s.a,a="en"===e?"english post":"post en francais";return r.a.createElement(d,{src:t,alt:a,className:"flag"})},t}(r.a.Component);t.a=m}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-42cc021ecced250a1658.js.map