(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{382:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"프로그래밍-권장사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로그래밍-권장사항"}},[t._v("#")]),t._v(" 프로그래밍 권장사항")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("코드는 Python 의 다른 구현들\n(PyPy, Jython, IronPython, Cython, Psyco 등)\n에 해가 되지 않는 방향으로\n작성되어야 한다.")]),t._v(" "),a("p",[t._v("예를 들면, "),a("code",[t._v("a += b")]),t._v(" 또는 "),a("code",[t._v("a = a + b")]),t._v(" 형식의 명령문에 대한\nCPython의 효율적인 내부 문자열 연결(concatnation)\n구현에 의존하지 말자.\n이 최적화는 CPython 에서도 깨지기 쉽다.\n(이는 몇 몇 타입에만 작동한다.)\n그리고 이 최적화는 refcounting"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),t._v(" 을 사용하지 않는 구현에는 전혀 도입되지 않는다.\n라이브러리의 성능에 민감한 부분에서는 "),a("code",[t._v("''.join ()")]),t._v(" 형식을 대신 사용해야 한다.\n이렇게 해야 다양한 구현에서 연결 구현이 선형 시간으로 발생한다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("None")]),t._v(" 같은 싱글톤과의 비교는 "),a("code",[t._v("is")]),t._v(" 나 "),a("code",[t._v("is not")]),t._v(" 으로 항상 이루어져야 한다.\n등호 연산자는 절대 안된다.")]),t._v(" "),a("p",[t._v("또, "),a("code",[t._v("if x")]),t._v(" 를 작성할 때는 정말로 "),a("code",[t._v("if x is not None")]),t._v(" 의 의미여야 한다.\nNone이 디폴트 값인 변수나 아규먼트가 다른 값으로\n설정되어 있는지를 테스트 할 때 말이다.\n그 다른 값은 (container 같이) boolean 컨텍스트에서\nfalse 가 될 수 있는 타입을 갖고 있을 수 있다!")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("is not")]),t._v(" 연산자를 "),a("code",[t._v("not ... is")]),t._v("보다 더 사용하자.\n둘 다 기능적으로는 동리하지만, 전자의 형식이 더 가독성 있고\n바람직한 방식이다.")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("리치 연산자를 사용하여 연산자의 순서를 정하는 구현을 할 때,\n여섯 개의 모든 연산자\n("),a("code",[t._v("__eq__")]),t._v(", "),a("code",[t._v("__ne__")]),t._v(", "),a("code",[t._v("__lt__")]),t._v(", "),a("code",[t._v("__le__")]),t._v(", "),a("code",[t._v("__gt__")]),t._v(", "),a("code",[t._v("__ge__")]),t._v(")\n를 구현하는 것이 가장 좋다. 특정 연산에서 작동하는 다른 코드에 의존하는 것보다 말이다.")]),t._v(" "),a("p",[t._v("들어가는 노력을 최소화하기 위해, "),a("code",[t._v("functools.total_ordering()")]),t._v(" 데코레이터는\n누락된 비교 메소드를 생성하는 툴을 제공한다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0207/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP 207"),a("OutboundLink")],1),t._v("\n은 반사성(reflexivity) 규칙이 Python 에 의해 "),a("strong",[t._v("가정")]),t._v("됨을 나타낸다.\n따라서, 인터프리터가 "),a("code",[t._v("y > x")]),t._v(" 를 "),a("code",[t._v("x < y")]),t._v("로, "),a("code",[t._v("y >= x")]),t._v(" 를 "),a("code",[t._v("x <= y")]),t._v("로\n바꾸거나, "),a("code",[t._v("x == y")]),t._v(" 와 "),a("code",[t._v("x != y")]),t._v("의 아규먼트("),a("em",[t._v("역: 여기서는 양변")]),t._v(")을 바꿀 수 있다.\n"),a("code",[t._v("sort()")]),t._v("와 "),a("code",[t._v("min()")]),t._v(" 연산은 "),a("code",[t._v("<")]),t._v(" 연산자를 사용하는 것을,\n"),a("code",[t._v("max()")]),t._v(" 함수는 "),a("code",[t._v(">")]),t._v(" 연산자를 사용하는 것을 보장한다.\n하지만, 다른 컨텍스트로부터 혼란이 떠오르지 않기 위해 여섯 개의 모든 연산들을 구현하는 것이 가장 바람직하다.")])]),t._v(" "),a("li",[a("p",[t._v("식별자에 직접적으로 람다 표현식을 바인딩한 할당 문보다,\n항상 "),a("code",[t._v("def")]),t._v(" 문을 사용하자.")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("x\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n      f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("x\n")])])]),a("p",[t._v("첫번째 형식은 결과 함수 객체 명을 제네릭\n"),a("code",[t._v("<lambda>")]),t._v(" 대신 구체적으로 'f'임을 의미한다.\n이는 일반적인 문자열 표현(representation)과 역추적(tracebacks)에 있어\n유용하다. 할당 문의 사용은 람다 표현식이 명시적인 "),a("code",[t._v("def")]),t._v(" 선언문 없이 제공된다는\n유일한 이점을 제거한다.\n(즉, 이는 커다란 표현 안에서 내장될(embedded) 수 있다는 말.)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("예외를 "),a("code",[t._v("BaseException")]),t._v("보다 "),a("code",[t._v("Exception")]),t._v("으로 부터 파생(derive)시키자.\n"),a("code",[t._v("BaseException")]),t._v("으로 부터 직접적인 상속을 한 예외는\n대게 항상 잘못된 짓을 했을 때 포착(catching)되는 예외가 있는 곳에서 사용될 것으로 예정되어있다.")]),t._v(" "),a("p",[t._v("코드가 예외를 "),a("em",[t._v("포착")]),t._v('하는 데 필요한 구분(distictions)을\n기반으로 예외 계층을 설계하자. 예외가 떠오르는(raised) 곳에서 하기보다는 말이다.\n단순히 "문제가 발생하였다."는 언급에 대하여 겨냥하기 보단,\n프로그램적으로 "무엇이 잘못 되어가고 있었나?" 하는 질문에 대한 답을 겨냥하자.\n('),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-3151/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP 3151"),a("OutboundLink")],1),t._v("\n의 내장 예외 계층에 대해서 배우는수업의 예시를 참고하자.)")]),t._v(" "),a("p",[t._v('비록 예외가 오류일 경우에는 접두어로 "Error"를 당신의 예외 클래스들에 추가하지만,\n기본적으로 클래스 작명 컨벤션이 적용된다. 에러가 아닌 예외들은 특별한 접두어가\n필요하지 않다. 이런 예외들은 비논리적인 흐름 제어거나\n다른 신호전달(signaling)의 형태다.')])]),t._v(" "),a("li",[a("p",[t._v("예외 체이닝을 적절히 사용하자. Python 3에서는 "),a("code",[t._v("raise X from Y")]),t._v("가\n원래의 역추적(traceback)의 손실이 없이 명시적인 대체("),a("em",[t._v("역: 예외 체이닝")]),t._v(")를 나타내는데\n사용되어야한다.")]),t._v(" "),a("p",[t._v("의도적으로 내부 예외를 대체하는 경우\n(Python 2의 "),a("code",[t._v("raise X")]),t._v(", Python 3.3+의 "),a("code",[t._v("raise X from Y")]),t._v("를 사용하는 것),\n관련 세부 사항이 새로운 예외로 양도(transferred)되었다는 것을 보장해야한다.\n(예를 들어, KeyError를 AttributeError로\n전환할 때 어트리뷰트 명이 보존되는 것\n또는, 새로운 예외 메시지 안에서 원래 예외의 텍스트가 들어있는 것)")])]),t._v(" "),a("li",[a("p",[t._v("Python 2 에서 예외가 떠오를 경우, "),a("code",[t._v("raise ValueError('message')")]),t._v("를 사용하자.\n오래된 형식인 "),a("code",[t._v("raise ValueError, 'message'")]),t._v(" 대신에 말이다.")]),t._v(" "),a("p",[t._v("이 오래된 형식은 Python 3 문법에서는 허용하지 않는다.")]),t._v(" "),a("p",[t._v("또한, 괄호 사용 양식(paren-using form)은 예외의 아규먼트가 길거나\n문자열 포매팅을 포함할 때,\n감싸는 소괄호 덕에 줄 이음 문자를 사용할 필요가 없어짐을 나타내기도 한다.")])]),t._v(" "),a("li",[a("p",[t._v("예외를 포착할 때, 생 "),a("code",[t._v("except:")]),t._v(" 절을 사용하기 보다\n가능한 특정 예외를 언급하라.")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" platform_specific_module\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" ImportError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    platform_specific_module "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n")])])]),a("p",[t._v("생 "),a("code",[t._v("except:")]),t._v(" 절은 SystemExit 과 KeyboardInterrupt 예외를 포착할 것이며,\n이로인해 컨트롤 + C 를 사용해서 프로그램을 중단하기 어렵게 만든다.\n그리고 다른 문제로 가장(disguise)될 수도 있다.\n("),a("em",[t._v("역: 본래 문제에 대한 예외가 발생해야하는데 다른 문제로 인식될 수 있다는 것")]),t._v(")\n프로그램 오류를 알리는 모든 예외를 포착하고 싶다면, "),a("code",[t._v("except Exception:")]),t._v("을 사용하자.\n(생 예외처리는 "),a("code",[t._v("except BaseException:")]),t._v("과 같기 때문이다.)")]),t._v(" "),a("p",[t._v("엄지척 할 수 있는 좋은 규칙은 생 "),a("code",[t._v("'except'")]),t._v(" 절 사용을\n다음 두 개의 경우로만 제한하는 것이다.")]),t._v(" "),a("ol",[a("li",[t._v("예외 핸들러가 역추적을 로깅하거나 출력하게 될 때.\n최소한 사용자가 오류가 발생했음을 인지할 수 있도록.")]),t._v(" "),a("li",[t._v("코드 정리(cleanup) 작업을 해야할 때. 하지만 그럴 땐 예외를 "),a("code",[t._v("raise")]),t._v("와 함께\n위로 전파(propagate)하도록 하게하자.\n이러한  경우를 제어하기 위해 "),a("code",[t._v("try..finally")]),t._v("\n가 더 좋은 방법이 될 수 있다.")])]),t._v(" "),a("ul",[a("li",[t._v("포착된 예외를 이름에 바인딩할 때, Python 2.6 에서 추가된\n명시적 이름 바인딩 구문이 바람직하다.")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    process_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" DataProcessingFailedError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("이는 Python 3에서만 지원되는 구문이다.\n그리고 오래된 콤마 기반 구문과 구분하기 애매해지는 문제를 피하자.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("운영체제 오류를 포착할 땐, Python 3.3 에서 도입된 명시적 예외 계층구조가 바람직하다.\n"),a("code",[t._v("errno")]),t._v(" 값들을 검사하는 것(introspection) 대신에 말이다.")])]),t._v(" "),a("li",[a("p",[t._v("추가적으로 모든 try/except 절에 대해, "),a("code",[t._v("try")]),t._v(" 절을\n필요한 최소한의 코드로 제한하자. 다시 말하지만, 이는 마스킹 버그를 방지한다.")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" KeyError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" key_not_found"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" handle_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 너무 범위가 넓다!")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" handle_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" KeyError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# handle_value() 로 떠오른 KeyError 도 포착하게 될 것이다.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" key_not_found"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("자원이 특정 구역의 코드에 국지적일 때,\n"),a("code",[t._v("with")]),t._v(" 문을 사용하여 즉시 정리됨과 사용 후 신뢰성(reliably)를 보장하자.\ntry/finally 문 또한 허용가능하다.")])]),t._v(" "),a("li",[a("p",[t._v("컨텍스트 관리자는 자원을 획득하거나 해제하는 일 외의 작업을 할 때마다\n별도의 함수 또는 메소드를 통해 불러와져야(invoked) 한다.")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("begin_transaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    do_stuff_in_transaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    do_stuff_in_transaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("후자의 예시는 "),a("code",[t._v("__enter__")]),t._v("와 "),a("code",[t._v("__exit__")]),t._v(" 메소드가\n트랜잭션(transaction) 후의 연결을 닫는 것 외에 어떤 작업을 수행하고 있음을\n나타내는 어떠한 정보도 제공하지 않는다.\n이 경우 명시적으로 하는 것이 중요하다.")]),t._v(" "),a("ul",[a("li",[t._v("반환 문에 대하여 일관성을 지키자.\n함수 내 모든 반환 문은 표현을 반환하거나 어떤 것도 반환하지 않아야 한다.\n만약 반환 문이 어떠한 표현을 반환한다면,\n어떠한 반환문도 반환값이 없는 곳에서는 명시적으로 "),a("code",[t._v("return None")]),t._v("을 작성해야 한다.\n그리고 명시적인 반환 문은 함수의 끝에 나타내야 한다.\n(도달 가능(reachable)하다면 말이다.)")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("문자열 모듈을 사용하는 것 대신에 문자열 메소드를 사용하자.")]),t._v(" "),a("p",[t._v("문자열 메소드는 항상 더 빠르고 유니코드 문자열과 같은 API를 공유한다.\n2.0 버전 이전의 Python과의 호환성이 필요한 경우, 이 규칙을 오버라이딩 하자.")])]),t._v(" "),a("li",[a("p",[t._v("접두어나 접미어를 확인할 때는, 문자열 슬라이싱 대신에\n"),a("code",[t._v("''.startswith()")]),t._v("와 "),a("code",[t._v("''.endswith()")]),t._v("를 사용하자.")]),t._v(" "),a("p",[a("code",[t._v("startswith()")]),t._v(" 와 "),a("code",[t._v("endswith()")]),t._v("는 더 깔끕하고 더 적은 오류를 야기하는 경향이 있다.")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("ul",[a("li",[t._v("오브젝트 타입 비교는 직접 비교하기 보단,")]),t._v(" "),a("li",[t._v("항상 "),a("code",[t._v("isinstance()")]),t._v("를 사용해야한다.")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("p",[t._v("오브젝트가 문자열인지를 확인할 때는, 유니코드 문자열일 수도 있다는 점을 명심하자!\nPython 2에서는 str과 유니코드가 공통적인 기반 클래스, basestring을 가진다.\n그래서 다음과 같이 할 수도 있다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("basestring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("p",[t._v("Python 3 에서는 더 이상 "),a("code",[t._v("unicode")]),t._v("와 "),a("code",[t._v("basestring")]),t._v("이 존재하지 않는 점을 알아두자.\n(오직 "),a("code",[t._v("str")]),t._v("만이 있다.) 그리고 바이트 오브젝트는 더 이상 문자열 종류가 아니다.\n(대신 정수형의 시퀀스(sequence of integers)가 되었다.)")]),t._v(" "),a("ul",[a("li",[t._v("시퀀스에 대해서는 (문자열, 리스트, 튜플), 빈 시퀀스가 false 라는 사실을 사용하자.")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("문자열 리터럴을 중요한 후행 공백에 의존하여 작성하지 말자.\n그러한 후행 공백은 보기에 구분이 어렵고,\n몇 에디터(또는 더 최근의, reindent,py)에서는 트림된다.")])]),t._v(" "),a("li",[a("p",[t._v("불린 값을 "),a("code",[t._v("==")]),t._v("를 사용하여 True 또는 False 와 비교하지 말자.")])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 옳은 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("p",[t._v("더 안 좋게는 다음과 같이 할 수 있다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" greeting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("return")]),t._v("/"),a("code",[t._v("break")]),t._v("/"),a("code",[t._v("continue")]),t._v("의 흐름 제어문이 finally 슈트 밖으로 점프될 수 있는\n"),a("code",[t._v("try...finally")]),t._v("의 finally 슈트에서의 흐름 제어문들의 사용은 권장하지 않는다.\n왜냐하면 이러한 명령문들은 finally 슈트를 통하여 전파된\n어떤 활성화 된 예외도 암시적으로 취소할 수 있기 때문이다.")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 틀린 예:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("\n")])])]),a("h2",{attrs:{id:"함수-어노테이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수-어노테이션"}},[t._v("#")]),t._v(" 함수 어노테이션")]),t._v(" "),a("blockquote",[a("p",[a("RouterLink",{attrs:{to:"/doc/function-annotations.html"}},[t._v("함수 어노테이션")]),t._v(" 번역 후 합칠 예정")],1)]),t._v(" "),a("h2",{attrs:{id:"변수-어노테이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#변수-어노테이션"}},[t._v("#")]),t._v(" 변수 어노테이션")]),t._v(" "),a("blockquote",[a("p",[a("RouterLink",{attrs:{to:"/doc/variable-annotations.html"}},[t._v("변수 어노테이션")]),t._v(" 번역 후 합칠 예정")],1)]),t._v(" "),a("hr",{staticClass:"footnotes-sep"}),t._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Reference_counting",target:"_blank",rel:"noopener noreferrer"}},[t._v("참조 횟수 계산 방식"),a("OutboundLink")],1),t._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);