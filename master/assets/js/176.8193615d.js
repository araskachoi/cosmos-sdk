(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{840:function(t,r,e){"use strict";e.r(r);var a=e(1),n=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sdk-소개"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdk-소개"}},[t._v("#")]),t._v(" SDK 소개")]),t._v(" "),e("h2",{attrs:{id:"코스모스-sdk는-무엇인가"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#코스모스-sdk는-무엇인가"}},[t._v("#")]),t._v(" 코스모스 SDK는 무엇인가?")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("코스모스 SDK"),e("OutboundLink")],1),t._v("는 코스모스 허브와 같은 다수 자산(multi-asset) 퍼블릭 지분증명 블록체인과 권한증명(PoA, Proof-of-Authority) 블록체인을 만들 수 있는 오픈소스 프레임워크입니다. 코스모스 SDK를 사용하여 만들어진 블록체인은 통상 **애플리케이션 특화 블록체인(application-specific blockchain)**이라 불립니다.")]),t._v(" "),e("p",[t._v("코스모스 SDK의 목적은 개발자가 간편하게 처음부터 다른 블록체인과 상호환이 가능한 블록체인을 만들 수 있게 하는 것이 목적입니다. 코스모스 SDK는 npm과 같은 프레임워크로 자리잡으며 "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[t._v("텐더민트"),e("OutboundLink")],1),t._v(" 상의 안전한 블록체인 애플리케이션을 만들 수 있게 자리잡는 것이 목표입니다. SDK 기반 블록체인은 구성적(composable) 모듈을 기반으로 만들어지며, 대다수의 모듈은 오픈 소스로 모든 개발자가 사용할 수 있습니다. 누구나 코스모스 SDK 모듈을 만들 수 있으며, 단순히 블록체인 애플리케이션에 모듈을 불러와 이미 개발된 모듈을 간편하게 사용할 수 있습니다. 또한, 코스모스 SDK는 능력성 기반(capabilities-based) 시스템으로 모듈 간 인터랙션의 보안성을 더욱 직관적으로 설계할 수 있습니다. 능력성 기반 시스템에 대해 더 알고싶으시다면 "),e("RouterLink",{attrs:{to:"/kr/intro/ocap.html"}},[t._v("이 항목")]),t._v("을 참고하세요.")],1),t._v(" "),e("h2",{attrs:{id:"애플리케이션-특화-블록체인은-무엇인가"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-특화-블록체인은-무엇인가"}},[t._v("#")]),t._v(" 애플리케이션 특화 블록체인은 무엇인가?")]),t._v(" "),e("p",[t._v("최근 블록체인 업계의 개발 패러다임 중 하나는 이더리움과 같은 버추얼 머신(virtual-machine) 기반 블록체인입니다. 이런 시스템에서는 기존 블록체인 상위에 스마트 컨트랙트 기반의 탈중앙화 애플리케이션을 만드는 형태로 개발됩니다. 스마트 컨트랙트는 단순 애플리케이션 (예, ICO) 용도로 적합하지만, 복잡한 탈중앙화 플랫폼을 개발하는 목적에는 적합하지 않습니다. 스마트 컨트랙트는 유연성, 존엄성 그리고 성능 측면에서 한계가 존재합니다.")]),t._v(" "),e("p",[t._v("애플리케이션 특화 블록체인은 기존 버추얼 머신 기반 블록체인과는 획기적으로 다른 개발 패러다임을 제공합니다. 애플리케이션 특화 블록체인은 하나의 애플리케이션을 구동하기 위해 특화되며, 개발자는 애플리케이션이 최적한 환경에서 구동될 수 있는 디자인 결정을 내릴 수 있습니다. 또한 애플리케이션 특화 블록체인은 애플리케이션 존엄성, 보안 그리고 성능 측면에서 장점을 가집니다.")]),t._v(" "),e("p",[t._v("애플리케이션 특화 블록체인에 대한 더 자세한 정보는 "),e("RouterLink",{attrs:{to:"/kr/intro/why-app-specific.html"}},[t._v("여기")]),t._v("를 참고하세요.")],1),t._v(" "),e("h2",{attrs:{id:"왜-코스모스-sdk인가"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#왜-코스모스-sdk인가"}},[t._v("#")]),t._v(" 왜 코스모스 SDK인가?")]),t._v(" "),e("p",[t._v("코스모스 SDK는 고유 애플리케이션 특화 블록체인을 만들기 위한 가장 우수한 프레임워크입니다. 다음은 코스모스 SDK가  탈중앙화 애플리케이션을 개발하는데 제공하는 장점들입니다:")]),t._v(" "),e("ul",[e("li",[t._v("코스모스 SDK가 기본적으로 제공하는 합의 엔진은 "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[t._v("텐더민트 코어"),e("OutboundLink")],1),t._v("입니다. 텐더민트는 가장 오랜 기간 증명된 BFT 기반 컨센서스 엔진입니다. 텐더민트 코어는 업계 내의 수 많은 환경에서 지분증명 시스템을 개발하는데 사용되고 있습니다.")]),t._v(" "),e("li",[t._v("코스모스 SDK는 오픈소스이며 구성적(composable) 모듈을 기반으로 간편하게 블록체인을 만들 수 있습니다. 블록체인 생태계가 성장하며 더욱 다양한 코스모스 SDK 모듈들이 개발되고 있으며, 이런 모듈들을 기반으로 복잡한 탈중앙화 플랫폼을 개발하는 과정이 간소화됩니다.")]),t._v(" "),e("li",[t._v("코스모스 SDK는 능력성 기반(capabilities-based) 보안 아키텍쳐를 기반으로 설계되었습니다. 이런 디자인 결정은 수년간 블록체인 스테이트 머신(state machine)에 대한 고민을 기반으로 설계되었으며, 더욱 안전한 블록체인을 개발할 수 있는 환경을 제공합니다.")]),t._v(" "),e("li",[t._v("가장 중요한 것은 바로 코스모스 SDK가 실제 작동하고 있는 다수의 애플리케이션 특화 블록체인을 개발하는데 사용되고 있다는 점입니다. "),e("a",{attrs:{href:"https://hub.cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("코스모스 허브"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://irisnet.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("아이리스 허브"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://docs.binance.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("바이낸스 체인"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://terra.money",target:"_blank",rel:"noopener noreferrer"}},[t._v("테라"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://lino.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lino"),e("OutboundLink")],1),t._v(" 등의 프로젝트가 코스모스 SDK 기반으로 개발되었습니다. 코스모스 기반 프로젝트 목록은 "),e("a",{attrs:{href:"https://cosmos.network/ecosystem",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v("에서 확인하실 수 있습니다.")])]),t._v(" "),e("h2",{attrs:{id:"코스모스-sdk-입문하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#코스모스-sdk-입문하기"}},[t._v("#")]),t._v(" 코스모스 SDK 입문하기")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/kr/intro/sdk-app-architecture.html"}},[t._v("코스모스 SDK 기반 애플리케이션의 구조")]),t._v("에 대해서 더 알아보세요")],1),t._v(" "),e("li",[t._v("애플리케이션 특화 블록체인을 처음부터 개발하는 방법을 "),e("a",{attrs:{href:"https://cosmos.network/docs/tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("코스모스 SDK 투토리얼"),e("OutboundLink")],1),t._v("을 통해 배워보세요")])])])}),[],!1,null,null,null);r.default=n.exports}}]);