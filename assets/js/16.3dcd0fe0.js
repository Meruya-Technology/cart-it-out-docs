(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{439:function(e,t,a){"use strict";a.r(t);var s=a(65),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"usages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usages"}},[e._v("#")]),e._v(" Usages")]),e._v(" "),a("h2",{attrs:{id:"adding-new-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-page"}},[e._v("#")]),e._v(" Adding new page")]),e._v(" "),a("p",[e._v("If there is any aditional requirement for adding new page, this is few step for adding new page.")]),e._v(" "),a("ol",[a("li",[e._v("Create page file "),a("code",[e._v("presentation/pages")])]),e._v(" "),a("li",[e._v("Add constant string "),a("code",[e._v("routeName")]),e._v(" on the page file")]),e._v(" "),a("li",[e._v("Create provider file "),a("code",[e._v("presentation/providers")])]),e._v(" "),a("li",[e._v("Bind provider to the scaffold (page), for this step we can use default provider widget. Like "),a("a",{attrs:{href:"https://pub.dev/documentation/provider/latest/provider/ChangeNotifierProvider-class.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ChangeNotifierProvider"),a("OutboundLink")],1),e._v(", or we can use "),a("code",[e._v("ChangeNotifierPage")]),e._v(" from Utilities.")]),e._v(" "),a("li",[e._v("Register the page "),a("code",[e._v("routeName")]),e._v(" on the "),a("code",[e._v("RouteUtil")]),e._v(" class, inside the "),a("code",[e._v("Map<String, Widget Function(BuildContext)> get routes")]),e._v(" values. For example")])]),e._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Map")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Widget")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BuildContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),e._v(" routes "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NewPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("routeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NewPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"adding-new-datasource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-datasource"}},[e._v("#")]),e._v(" Adding new datasource")]),e._v(" "),a("p",[e._v("Because Cart it out is backendless template, it will required to add some datasources. Follow these steps to add new datasources")]),e._v(" "),a("ol",[a("li",[e._v("Prepare request / response jsons")]),e._v(" "),a("li",[e._v("Convert jsons to model class inside "),a("code",[e._v("infrastructure/models")])]),e._v(" "),a("li",[e._v("Create / update an entity class inside "),a("code",[e._v("domain/entities")])]),e._v(" "),a("li",[e._v("Crate / update a mapper to map model into entity inside "),a("code",[e._v("infrastructure/mappers")])]),e._v(" "),a("li",[e._v("Create / update datasources abstract file for new datasource method, if needed we can use newly created model class to be an input / output of the datasource method. "),a("code",[e._v("infrastructure/datasources")])]),e._v(" "),a("li",[e._v("Create / update datasources implementation, create new method then do a external datasources communication such as HTTP Request, and use the model as output "),a("code",[e._v("infrastructure/datasources")])]),e._v(" "),a("li",[e._v("Then create / update repository abstract "),a("code",[e._v("domain/repositories")])]),e._v(" "),a("li",[e._v("Then create & implement the repository abstract, also use the newly created datasource class as the source. Inside the repository we execute the datasource method then convert the result into an entity using mapper. "),a("code",[e._v("data/repositories")])]),e._v(" "),a("li",[e._v("Is that all ? no, then we create use case for execute single or multiple repositories")]),e._v(" "),a("li",[e._v("Then finnaly add / update the facade class on the "),a("code",[e._v("facade")]),e._v(" to bind and exectue the repositories")]),e._v(" "),a("li",[e._v("Finally use the facade class inside the provider class, then execute the desired repository method "),a("code",[e._v("presentation/provider")])])]),e._v(" "),a("h2",{attrs:{id:"updating-data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-data-structure"}},[e._v("#")]),e._v(" Updating data structure")]),e._v(" "),a("p",[e._v("If you already suitable with default data structure which located inside "),a("code",[e._v("assets/jsons")]),e._v(", and want to add more data on it you can just focus on the specific datasource for example. You want to add new field on json from "),a("code",[e._v("retrieve products")]),e._v(" end point take this steps :")]),e._v(" "),a("ol",[a("li",[e._v("Locate impacted datasources implementation")]),e._v(" "),a("li",[e._v("Update the models "),a("code",[e._v("infrastructure/models")]),e._v(" and add the desired field")]),e._v(" "),a("li",[e._v("Update the impacted entities "),a("code",[e._v("domain/entities")]),e._v(" and add the desired field")]),e._v(" "),a("li",[e._v("Update the mappers "),a("code",[e._v("infrastructure/mappers")]),e._v(" then map the added field both from models and entities")])]),e._v(" "),a("h2",{attrs:{id:"updating-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-ui"}},[e._v("#")]),e._v(" Updating UI")]),e._v(" "),a("p",[e._v("Just like any other flutter template, we can just updating UI which suitable with our needs. But if the UI is depend on the data, we will also need the datasource, domain, provider to be updated.")])])}),[],!1,null,null,null);t.default=r.exports}}]);