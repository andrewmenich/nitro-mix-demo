(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{P356:function(e,t,a){"use strict";a.r(t);var s,n,r,i,o=a("XuX8"),c=a.n(o),l=a("vDqi"),d=a.n(l);t.default=(r='\n    query latestDocuments{\n      assets(limit:25, volume: "documents", orderBy:"dateCreated desc"){\n        title\n        filename\n        kind\n        url\n        dateCreated @formatDateTime(format: "F d, Y")\n      }\n    }\n  ',i=function(e,t,a,s){e.post("",{query:t,variables:a}).then((function(e){s&&s(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))},void new c.a({el:"#document-portal",delimiters:["{$","$}"],data:{searchApi:d.a.create((s="https://tmacog.madmadmad.net/api",n="nrtkq1gLRy6TYIo7MyslEXwabXqwVXjm",{baseURL:s,headers:{Authorization:"Bearer ".concat(n),"X-Requested-With":"XMLHttpRequest"}})),searchQuery:"",searchResults:[],featuredDocuments:[],featuredDocumentsToShow:12,selectedFilter:null,isLoading:!1,pageNumbers:1,activePage:0,prevPageDisabled:!0,nextPageDisabled:!1,loading:!0},methods:{performSearch:function(){var e=this;if(""===this.searchQuery&&null===this.selectedFilter)return this.searchResults={},void i(this.searchApi,r,null,(function(t){e.searchResults=t.data.assets}));var t={needle:this.searchQuery,category:this.selectedFilter?parseInt(this.selectedFilter):null};i(this.searchApi,'\n    query searchQuery($needle: String, $category: [QueryArgument] = null){\n      assets(search: $needle, volume: "documents", documentCategory: $category, orderBy:"dateCreated desc"){\n        title\n        filename\n        kind\n        url\n        dateCreated @formatDateTime(format: "F d, Y")\n      }\n    }\n  ',t,(function(t){console.log(t),e.searchResults=t.data.assets}))}},mounted:function(){var e=this;i(this.searchApi,r,null,(function(t){e.searchResults=t.data.assets}))}}))}}]);