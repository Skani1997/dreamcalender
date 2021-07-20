import React from 'react'
import * as Survey from 'survey-react'
import './css/SurveyPage.css'
import pdfMake from "../node_modules/pdfmake/build/pdfmake"
//import pdfFonts from "../../node_modules/pdfmake/build/vfs_fonts"

var surveyJSON ={
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "1",
        "minWidth": "100px",
        "maxWidth": "150px",
        "title": "이름",
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "2",
        "width": "150px",
        "minWidth": "150px",
        "maxWidth": "150px",
        "title": "생년",
        "isRequired": true,
        "defaultValue": "item72",
        "choices": [
         {
          "value": "item1",
          "text": "1910"
         },
         {
          "value": "item3",
          "text": "1911"
         },
         {
          "value": "item4",
          "text": "1912"
         },
         {
          "value": "item5",
          "text": "1913"
         },
         {
          "value": "item6",
          "text": "1914"
         },
         {
          "value": "item7",
          "text": "1915"
         },
         {
          "value": "item8",
          "text": "1916"
         },
         {
          "value": "item9",
          "text": "1917"
         },
         {
          "value": "item10",
          "text": "1918"
         },
         {
          "value": "item11",
          "text": "1919"
         },
         {
          "value": "item12",
          "text": "1920"
         },
         {
          "value": "item13",
          "text": "1921"
         },
         {
          "value": "item14",
          "text": "1922"
         },
         {
          "value": "item15",
          "text": "1923"
         },
         {
          "value": "item16",
          "text": "1924"
         },
         {
          "value": "item17",
          "text": "1925"
         },
         {
          "value": "item18",
          "text": "1926"
         },
         {
          "value": "item19",
          "text": "1927"
         },
         {
          "value": "item20",
          "text": "1928"
         },
         {
          "value": "item21",
          "text": "1929"
         },
         {
          "value": "item22",
          "text": "1930"
         },
         {
          "value": "item23",
          "text": "1931"
         },
         {
          "value": "item24",
          "text": "1932"
         },
         {
          "value": "item25",
          "text": "1933"
         },
         {
          "value": "item26",
          "text": "1934"
         },
         {
          "value": "item27",
          "text": "1935"
         },
         {
          "value": "item28",
          "text": "1936"
         },
         {
          "value": "item29",
          "text": "1937"
         },
         {
          "value": "item30",
          "text": "1938"
         },
         {
          "value": "item31",
          "text": "1939"
         },
         {
          "value": "item32",
          "text": "1940"
         },
         {
          "value": "item33",
          "text": "1941"
         },
         {
          "value": "item34",
          "text": "1942"
         },
         {
          "value": "item35",
          "text": "1943"
         },
         {
          "value": "item36",
          "text": "1944"
         },
         {
          "value": "item37",
          "text": "1945"
         },
         {
          "value": "item38",
          "text": "1946"
         },
         {
          "value": "item39",
          "text": "1947"
         },
         {
          "value": "item40",
          "text": "1948"
         },
         {
          "value": "item41",
          "text": "1949"
         },
         {
          "value": "item42",
          "text": "1950"
         },
         {
          "value": "item43",
          "text": "1951"
         },
         {
          "value": "item44",
          "text": "1952"
         },
         {
          "value": "item45",
          "text": "1953"
         },
         {
          "value": "item46",
          "text": "1954"
         },
         {
          "value": "item47",
          "text": "1955"
         },
         {
          "value": "item48",
          "text": "1956"
         },
         {
          "value": "item49",
          "text": "1957"
         },
         {
          "value": "item50",
          "text": "1958"
         },
         {
          "value": "item51",
          "text": "1959"
         },
         {
          "value": "item52",
          "text": "1960"
         },
         {
          "value": "item53",
          "text": "1961"
         },
         {
          "value": "item54",
          "text": "1962"
         },
         {
          "value": "item55",
          "text": "1963"
         },
         {
          "value": "item56",
          "text": "1964"
         },
         {
          "value": "item57",
          "text": "1965"
         },
         {
          "value": "item58",
          "text": "1966"
         },
         {
          "value": "item59",
          "text": "1967"
         },
         {
          "value": "item60",
          "text": "1968"
         },
         {
          "value": "item61",
          "text": "1969"
         },
         {
          "value": "item62",
          "text": "1970"
         },
         {
          "value": "item63",
          "text": "1971"
         },
         {
          "value": "item64",
          "text": "1972"
         },
         {
          "value": "item65",
          "text": "1973"
         },
         {
          "value": "item66",
          "text": "1974"
         },
         {
          "value": "item67",
          "text": "1975"
         },
         {
          "value": "item68",
          "text": "1976"
         },
         {
          "value": "item69",
          "text": "1977"
         },
         {
          "value": "item70",
          "text": "1978"
         },
         {
          "value": "item71",
          "text": "1979"
         },
         {
          "value": "item72",
          "text": "1980"
         },
         {
          "value": "item73",
          "text": "1981"
         },
         {
          "value": "item74",
          "text": "1982"
         },
         {
          "value": "item75",
          "text": "1983"
         },
         {
          "value": "item76",
          "text": "1984"
         },
         {
          "value": "item77",
          "text": "1985"
         },
         {
          "value": "item78",
          "text": "1986"
         },
         {
          "value": "item79",
          "text": "1987"
         },
         {
          "value": "item80",
          "text": "1988"
         },
         {
          "value": "item81",
          "text": "1989"
         },
         {
          "value": "item82",
          "text": "1990"
         },
         {
          "value": "item83",
          "text": "1991"
         },
         {
          "value": "item84",
          "text": "1992"
         },
         {
          "value": "item85",
          "text": "1993"
         },
         {
          "value": "item86",
          "text": "1994"
         },
         {
          "value": "item87",
          "text": "1995"
         },
         {
          "value": "item88",
          "text": "1996"
         },
         {
          "value": "item89",
          "text": "1997"
         },
         {
          "value": "item90",
          "text": "1998"
         },
         {
          "value": "item91",
          "text": "1999"
         },
         {
          "value": "item92",
          "text": "2000"
         },
         {
          "value": "item93",
          "text": "2001"
         },
         {
          "value": "item94",
          "text": "2002"
         },
         {
          "value": "item95",
          "text": "2003"
         },
         {
          "value": "item96",
          "text": "2004"
         },
         {
          "value": "item97",
          "text": "2005"
         },
         {
          "value": "item98",
          "text": "2006"
         },
         {
          "value": "item99",
          "text": "2007"
         },
         {
          "value": "item100",
          "text": "2008"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "3",
        "labelTrue": "남",
        "labelFalse": "여 ",
        "isRequired": true
       },
       {
        "type": "multipletext",
        "name": "4",
        "title": "주소",
        "items": [
         {
          "name": "text1",
          "title": "자택(군 / 구까지)"
         },
         {
          "name": "text2",
          "title": "직장(군 / 구까지)"
         }
        ],
        "isRequired": true
       },
       {
        "type": "multipletext",
        "name": "5",
        "title" :"연락처",
        "maxWidth": "400px",
        "items": [
         {},
         {
          "name": "1",
          "title": "-"
         },
         {
          "name": "2",
          "title": "-"
         }
        ],
        "colCount": 3
       },
       {
        "type": "text",
        "name": "6",
        "title": "이메일",
        "isRequired": true,
        validators: [
            {
                type: "email"
            }
        ]
       },
       {
        "type": "radiogroup",
        "name": "7",
        "title": "결혼 여부",
        "choices": [
         {
          "value": "item1",
          "text": "미혼"
         },
         {
          "value": "item2",
          "text": "기혼(자녀없음 또는 예정)"
         },
         {
          "value": "item3",
          "text": "기혼(자녀있음)"
         }
        ],
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "8",
        "width": "150px",
        "minWidth": "150px",
        "maxWidth": "150px",
        "title": "직군",
        "choices": [
         {
          "value": "item1",
          "text": "공무원"
         },
         {
          "value": "item2",
          "text": "대기업"
         },
         {
          "value": "item3",
          "text": "중견기업"
         },
         {
            "value": "item3",
            "text": "중소기업"
           },
         {
          "value": "item5",
          "text": "자영업"
         },
         {
          "value": "item6",
          "text": "프리랜서"
         },
         {
          "value": "item7",
          "text": "주부"
         },
         {
          "value": "item8",
          "text": "전문직"
         },
         {
          "value": "item9",
          "text": "일용직"
         },
         {
          "value": "item10",
          "text": "아르바이트"
         },
         {
          "value": "item11",
          "text": "종교인"
         },
         {
          "value": "item12",
          "text": "기타"
         }
        ],
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "9",
        "width": "150px",
        "minWidth": "150px",
        "maxWidth": "150px",
        "title": "직급",
        "choices": [
         {
          "value": "item1",
          "text": "대표"
         },
         {
          "value": "item2",
          "text": "임원"
         },
         {
          "value": "item3",
          "text": "부장"
         },
         {
          "value": "item4",
          "text": "차장"
         },
         {
          "value": "item5",
          "text": "과장"
         },
         {
          "value": "item6",
          "text": "대리"
         },
         {
          "value": "item7",
          "text": "주임"
         },
         {
          "value": "item8",
          "text": "사원"
         },
         {
            "value": "item9",
            "text": "기타"
        }
        ],
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "10",
        "width": "600px",
        "minWidth": "600px",
        "maxWidth": "600px",
        "title": "드림캘린더 신청 이유를 구체적으로 적어주세요.(드림캘린더는 전문가의 의견이 반영되기 때문에 자세히 적을수록 보다 효과적인 조언과 결과를 얻을 수 있습니다.",
        "choices": [
         {
          "value": "item1",
          "text": "내 꿈에 대해서 정확히 모르겠으며 삶의 방향성이 불분명해서"
         },
         {
          "value": "item2",
          "text": "보다 정확한 재무진단과 명확한 재무목표 수립 , 보다 효율적인 재테크 방법이 궁금해서"
         },
         {
          "value": "item3",
          "text": "재무상담은 받아봤으나 목표 혹은 꿈과 연관지어서 명쾌한 답을 얻을 수 없었어서"
         },
         {
          "value": "item4",
          "text": " 보험 , 적금 등 지금 하고 있는 방법이 맞는 지 궁금해서"
         }
        ],
        "hasOther": true,
        "otherText": "기타",
        "isRequired": true
       },
       {
        "type": "radiogroup",
        "name": "11",
        "title": "현재 재정 상황에 대해서 점수를 메긴다면?",
        "choices": [
         {
          "value": "item1",
          "text": "5점(아주 만족하고 있다.)"
         },
         {
          "value": "item2",
          "text": "4점(대체적으로 잘하고 있는 것 같다.)"
         },
         {
          "value": "item3",
          "text": "3점(평범한 것 같다.)"
         },
         {
          "value": "item4",
          "text": "2점(이대로는 힘들어질 것 같다.)"
         },
         {
          "value": "item5",
          "text": "1점(미래가 불투명하다.)"
         }
        ],
        "isRequired": true
       },
       {
        "type": "radiogroup",
        "name": "12",
        "title": "지금까지 재정컨설팅을 받아 보신 경험이 있나요?(투자상담, 재무설계, 자산관리, 회계/세무 컨설팅, 보험설계 등)",
        "choices": [
         {
          "value": "item1",
          "text": "3회이상"
         },
         {
          "value": "item2",
          "text": "1~2회"
         },
         {
          "value": "item3",
          "text": "없다."
         }
        ],
        "isRequired": true
       },
       {
        type: "checkbox",
        name: "13",
        //choicesEnableIf : "{13} contains {item} or {13.length} <2 ",
        "colCount": 2,
        maxSelectedChoices : 2,
        "isRequired": true,
        title: "재무적인 부분에서 가장 큰 관심사는 무엇인가요?(최대 2개 선택)",
        "choices": [
         {
          "value": "item1",
          "text": "파산회생"
         },
         {
          "value": "item2",
          "text": "내집마련"
         },
         {
          "value": "item3",
          "text": "투자형부동산"
         },
         {
          "value": "item4",
          "text": "세금"
         },
         {
          "value": "item5",
          "text": "투자상품"
         },
         {
          "value": "item6",
          "text": "보험"
         },
         {
          "value": "item7",
          "text": "지출관리"
         },
         {
          "value": "item8",
          "text": "은퇴"
         },
         {
          "value": "item9",
          "text": "대출"
         },
         {
          "value": "item10",
          "text": "상속/증여"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "14",
        "title": "직업과 관련하여 향후 5년 이내에 이직, 업종전환 등을 통해 소득의 큰 변화가 있을 예정이 있나요?",
        "isRequired": true
       },
       {
        "type": "radiogroup",
        "name": "15",
        "title": "부모로부터 향후 상속받을 재산이 있나요?",
        "choices": [
         {
          "value": "item1",
          "text": "없거나 있어도 아주 적음"
         },
         {
          "value": "item2",
          "text": "1억 미만"
         },
         {
          "value": "item3",
          "text": "5억 미만"
         },
         {
          "value": "item4",
          "text": "10억 미만"
         },
         {
          "value": "item5",
          "text": "10억 이상"
         }
        ],
        "isRequired": true
       }
      ],
      "title": "기본정보"
     },
     {
        "name": "page2",
        "elements": [
         {
          "type": "radiogroup",
          "name": "goal_test_q1",
          "title": "삶에서 구체적으로 이루고 싶은 단 하나의 목표가 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q2",
          "title": "구체적이며 계획적인 버킷리스트 혹은 목표리스트가  5개이상 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q3",
          "title": "최근 1년이내에 계획했던 목표를 달성한 경험이 있나요?(다이어트, 저축, 취업, 자격증, 운동배우기 등)",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q4",
          "title": "매년 / 매월 / 매주 일정한 시기에 나만의 계획 혹은 목표를 작성하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q5",
          "title": "자기 자신의 성격적인 부분에서 단점 3가지를 즉시 떠올릴 수 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q6",
          "title": "목표 혹은 계획을 세운 후 주변사람에게 공유하고 조언을 얻는 편인가요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q7",
          "title": "계획을 세울 때 즉흥적이기 보다는 고심하고 실패할만한 요소나 기준근거를 정의한 다음 설정하나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q8",
          "title": "단기 목표설정시에 현실적인 달성예상치를 기준으로 20% 이내로 상향된 목표를 설정하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q9",
          "title": "현재의 직업은 당신이 최소 1년 이상의 준비기간을 거쳐서 선택한 직업인가요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q10",
          "title": "머릿속에는 항상 도전하고 시도해야할 과제들이 가득 차 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q11",
          "title": "세운 계획이 목표시점에 이루어지지 않았을 때 심한 스트레스를 받는다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q12",
          "title": "목표나 계획이 생겼을 때 주변사람들에게 알리는 편이다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "계획의 성격에 따라 다르다"
           },
           {
            "value": "item3",
            "text": "계획이 실행될때까지 혼자만 알고 있는다."
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q13",
          "title": "주변의 가까운 사람으로 부터 성실한 사람 혹은 꾸준한 사람으로 평가 받는다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q14",
          "title": "가족(부모님 혹은 배우자)로 부터 하고자 하는것은 무엇이든 지지 받는다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q15",
          "title": "한번 내뱉은 말은 반드시 지키는 편이다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q16",
          "title": "일을 진행 하던 도중 예상치 못한 우발상황이 생겼다. 도저히 해결점을 찾을 수 없다면 어떻게 행동하나요?",
          "choices": [
           {
            "value": "item1",
            "text": "안되면 될때까지 "
           },
           {
            "value": "item2",
            "text": "주변에 도움을 청한다."
           },
           {
            "value": "item3",
            "text": "계획을 수정한다."
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q17",
          "title": "목표를 달성하는데 가장 큰 역할을 하는것은 동기부여 보다는 루틴이다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q18",
          "title": "잘 안될때가 많지만 그래도 열심히 해보려고 하는 편이다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q19",
          "title": "상황과 환경만 주어진다면 나도 뒤쳐지지않고 잘 하는 편이다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q20",
          "title": "최근 3개월 동안 동료 혹은 가까운 사람으로 부터 열심히 한다라는 이야기를 들은적이 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "자주 들었다."
           },
           {
            "value": "item2",
            "text": "들은적이 있다."
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q21",
          "title": "현재 비슷한 연령대의 사람들에 비해 좀 더 나은 삶을 살고 있다고 생각하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "지금은 아니지만 반드시 그럴것이다."
           },
           {
            "value": "item2",
            "text": "그런 편이다."
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q22",
          "title": "신체와 건강은 비슷한 또래의 사람들에 비해 더 나은 편이라고 생각하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q23",
          "title": "현재 자산상태(예금,부동산,대출 등)에 대해 만족하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q24",
          "title": "지난 5년을 돌이켜보면 하지 않은것, 배우지못한것, 좀 더 열심히 하지 못한 것에 대한 후회가 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q25",
          "title": "현실적으로 20년 후 꿈꾸는 삶과 실제는 얼마나 닮아 있을것 같나요?",
          "choices": [
           {
            "value": "item1",
            "text": "같거나 그 이상일 것이다."
           },
           {
            "value": "item2",
            "text": "어느정도 비슷할 것이다."
           },
           {
            "value": "item3",
            "text": "사실 잘 모르겠다."
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q26",
          "title": "이 질문에 답하는 바로 이번 달, 직업관련된 것을 제외하고 무언가 배우거나 학습하고 있는것이 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q27",
          "title": "자신의 일정/목표/루틴을 기록하는 일기, 스케줄러, 플래너를 성실히 활용하고 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q28",
          "title": "평소 목표를 설정 하실때 참고하는 멘토, 도서, 프로그램 등이 있나요? ",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q29",
          "title": "명상, 문구외우기, 목표상기하기 등 매일 혹은 매주 단위로 루틴한 나만의 행동양식이 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "goal_test_q30",
          "title": "지난 계획이나 목표에 대해서 스스로 반성하고 점검해보는 시간을 갖는 편인가요?",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         }
        ],
        "title": "목표달성가능검사"
       },
       {
        "name": "page3",
        "elements": [
         {
          "type": "radiogroup",
          "name": "trend_test_q1",
          "title": "한달 현금흐름 관리를 하는 나만의 Tool이 있다.(뱅크샐러드 등 어플/ 가계부 / 엑셀파일 등)",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q2",
          "title": "시중금리보다 평균 1~2% 높은 인터넷은행 or 2금융권의 예/적금 상품에 대해서 잘 알고 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q3",
          "title": "나의 라이프 스타일에 가장 적합한 체크or신용 카드를 사용하고 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q4",
          "title": "현재 자신에게 적용할 수 있는 다양한 정부정책을 정확하게 알고 활용하고 있다.             \n(청년희망키움통장, 중기대출, 보증서담보대출, 소상공인지원금, 대출규제적용, 사회보장제도, 각종 공제 및 노란우산공제 등)",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q5",
          "title": "전문가에 의해서 재무상담을 받아 본 적이 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q6",
          "title": "주기적으로 생활금융 및 개인금융에 관련된 정보를 받아보는 소스가 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q7",
          "title": "핀테크 금융과 관련된 어플리케이션이 스마트폰에 설치되어 있다.(뱅크샐러드, 토스, 카카오 등)",
          "choices": [
           {
            "value": "item1",
            "text": "5개이상"
           },
           {
            "value": "item2",
            "text": "3개이상"
           },
           {
            "value": "item3",
            "text": "3개미만"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q8",
          "title": "연단위 / 분기 단위 등 자체적인 재무상황 점검계획이나 담당자에 의해 관리받고 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q9",
          "title": "직전 1년간 재테크를 위해 주변사람이 아닌 도서, 방송, 전문가 등을 통해 정보획득을 시도한 횟수가 3회 이상이다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q10",
          "title": "P2P금융, 해외주식, 부동산경매, 펀딩 중 정확하게 의미를 알고 있는 것이 2가지 이상이다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q11",
          "title": "종합소득이나 연말정산에 대해 이해하고 적절한 절세방안에 대해서 알고 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q12",
          "title": "신용관리에 대해 이해하고 신용점수관리와 그에 맞는 금융거래를 하고 있다.(4대보험납입, 부채의 종류와 전략적인 부채상환, 올바른 신용카드사용 등)",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "trend_test_q13",
          "title": "주택청약에 대한 이해(특별공급 포함)와 청약을 신청해 본 경험이 있거나 구체적인 계획이 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "어느정도 그렇다"
           },
           {
            "value": "item3",
            "text": "아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q1",
          "title": "매월 대략적으라도 정해놓은 지출범위 안에서 지출이 이루어지고 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 그렇다"
           },
           {
            "value": "item2",
            "text": "보통 그렇다"
           },
           {
            "value": "item3",
            "text": "잘 모르겠다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "전혀 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "checkbox",
          "name": "tendency_test_q2",
          "title": "현재 가장 많은 부분을 차지하는 저축및투자 목적의 금융사는 무엇인가요?(복수선택가능)",
          "choices": [
           {
            "value": "item1",
            "text": "시중은행(예/적금/청약)"
           },
           {
            "value": "item2",
            "text": "시중은행(펀드,주식)"
           },
           {
            "value": "item3",
            "text": "증권사(CMA,펀드,주식 등)"
           },
           {
            "value": "item4",
            "text": "보험사(저축,보장,연금)"
           },
           {
            "value": "item5",
            "text": "계모임, 사업투자 등"
           }
          ],
          "isRequired": true
         },
         {
          "type": "checkbox",
          "name": "tendency_test_q3",
          "title": "저축을 할때 가장 중요하게 여기는 부분은 어떤 것인지 2가지를 선택하세요.",
          "choices": [
           {
            "value": "item1",
            "text": "안정성"
           },
           {
            "value": "item2",
            "text": "세금"
           },
           {
            "value": "item3",
            "text": "수익성"
           },
           {
            "value": "item4",
            "text": "유동성"
           },
           {
            "value": "item5",
            "text": "수수료(비용)"
           }
          ],
          maxSelectedChoices : 2,
          //choicesEnableIf : "{tendency_test_q3.length} <2 or {tendency_test_q3} contains {item}",
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q4",
          "title": "어떤 상품이건 한번 시작하면 만기가 될때까지 꾸준하게 납입하는 편이다.(주택청약, 펀드, 보험 등)",
          "choices": [
           {
            "value": "item1",
            "text": "매우 그렇다"
           },
           {
            "value": "item2",
            "text": "보통 그렇다"
           },
           {
            "value": "item3",
            "text": "잘 모르겠다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "전혀 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q5",
          "title": "연금이나 자녀교육 자금 같은 장기적인 목적도 좋지만 일단 당장의 눈앞에 있는 목표들을 위한 저축이 우선이다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 그렇다"
           },
           {
            "value": "item2",
            "text": "보통 그렇다"
           },
           {
            "value": "item3",
            "text": "잘 모르겠다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "전혀 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q6",
          "title": "저축 혹은 투자를 할때 가족이나 친구에게 의존하기보다 독립적인 결정권을 갖는 편이다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 그렇다"
           },
           {
            "value": "item2",
            "text": "보통 그렇다"
           },
           {
            "value": "item3",
            "text": "잘 모르겠다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "전혀 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q7",
          "title": "갑자기 어느 한 달의 지출이 소득을 초과하게되면 어떻게 그 모자란 부분을 대처하실 건가요?",
          "choices": [
           {
            "value": "item1",
            "text": "신용대출"
           },
           {
            "value": "item2",
            "text": "가족/지인의 도움"
           },
           {
            "value": "item3",
            "text": "금융상품해지"
           },
           {
            "value": "item4",
            "text": "다음급여까지 연체"
           },
           {
            "value": "item5",
            "text": "잘 모르겠음"
           }
          ],
          "isRequired": true
         },
         {
          "type": "checkbox",
          "name": "tendency_test_q8",
          "title": "정기적으로 소식을 받거나 주기적으로 공부하고 있는 나만의 재테크 능력 개발 방법이 있나요?(중복체크)",
          "choices": [
           {
            "value": "item1",
            "text": "금융자격증공부"
           },
           {
            "value": "item2",
            "text": "재테크서적 및 경제신문 구독"
           },
           {
            "value": "item3",
            "text": "없음"
           },
           {
            "value": "item4",
            "text": "SNS채널 및 오픈카톡"
           },
           {
            "value": "item5",
            "text": "신뢰할 수 있는 전문가와 상의"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q9",
          "title": "1)임대차 3법   2)연말정산(종합소득세),   3)국내주식 수수료 및 양도소득세   4)주택청약 가점항목   5)주택 및 상가건물 매입시 취득세 중 자신있게 10초이상 구두로 설명 할 수 있는 항목이 있다.\n",
          "choices": [
           {
            "value": "item1",
            "text": "4개이상"
           },
           {
            "value": "item2",
            "text": "3개이상"
           },
           {
            "value": "item3",
            "text": "2개이상"
           },
           {
            "value": "item4",
            "text": "1개"
           },
           {
            "value": "item5",
            "text": "전혀없다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q10",
          "title": "당신의 은퇴시점에 주거용 부동산을 포함한 '현실적인' 재산의 목표는 어떻게되나요?",
          "choices": [
           {
            "value": "item1",
            "text": "5억원"
           },
           {
            "value": "item2",
            "text": "10억원"
           },
           {
            "value": "item3",
            "text": "30억원"
           },
           {
            "value": "item4",
            "text": "100억원"
           },
           {
            "value": "item5",
            "text": "100억이상"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q11",
          "title": "옷을 구매할 때 가장 중요하게 생각하는 것은 무엇인가요?",
          "choices": [
           {
            "value": "item1",
            "text": "가격"
           },
           {
            "value": "item2",
            "text": "품질(디자인)"
           },
           {
            "value": "item3",
            "text": "브랜드가치"
           },
           {
            "value": "item4",
            "text": "가성비"
           },
           {
            "value": "item5",
            "text": "직감"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q12",
          "title": "그간 미뤄오던 쇼핑을 하거나 헬스장, 강의 자기계발적인 요소를 충동적으로 등록하면 스트레스가 해소되나요? ",
          "choices": [
           {
            "value": "item1",
            "text": "그렇다"
           },
           {
            "value": "item2",
            "text": "조금 그렇다"
           },
           {
            "value": "item3",
            "text": "보통이다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "전혀 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q13",
          "title": "가까운 거리를 크게 늦지는 않았으나 귀찮거나 날씨를 핑계로 택시를 타는경우가 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "자주 그렇다."
           },
           {
            "value": "item2",
            "text": "종종 그렇다."
           },
           {
            "value": "item3",
            "text": "가끔 그렇다."
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "전혀 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q14",
          "title": "당분간 생활비가 부족한 상황이 당면다면 무엇부터 줄일건가요?",
          "choices": [
           {
            "value": "item1",
            "text": "용돈 등 생활비"
           },
           {
            "value": "item2",
            "text": "적금을 깬다."
           },
           {
            "value": "item3",
            "text": "보험을 깬다."
           },
           {
            "value": "item4",
            "text": "그럴 일 없다."
           },
           {
            "value": "item5",
            "text": "주식 등 투자자산"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q15",
          "title": "카드 결제시 할부를 자주 사용한다.",
          "choices": [
           {
            "value": "item1",
            "text": "신용카드가 없다."
           },
           {
            "value": "item2",
            "text": "전혀 사용하지 않는다."
           },
           {
            "value": "item3",
            "text": "가끔 사용한다"
           },
           {
            "value": "item4",
            "text": "종종 사용한다"
           },
           {
            "value": "item5",
            "text": "자주 사용한다."
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q16",
          "title": "스마트폰에 있는 각종 포인트 및 마일리지, 캐쉬 적립 앱을 사용한다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 잘 사용한다."
           },
           {
            "value": "item2",
            "text": "몇 개 사용하는게 있기는 하다"
           },
           {
            "value": "item3",
            "text": "한두개 정도 사용한다"
           },
           {
            "value": "item4",
            "text": "내킬때 한다."
           },
           {
            "value": "item5",
            "text": "전혀 사용안한다."
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q17",
          "title": "외적으로 드러나는 물건(옷, 자동차, 신발, 가방, 지갑 등)이 중요하다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 중요하다"
           },
           {
            "value": "item2",
            "text": "어느정도 중요하다"
           },
           {
            "value": "item3",
            "text": "무시할 순 없다."
           },
           {
            "value": "item4",
            "text": "중요하지 않다."
           },
           {
            "value": "item5",
            "text": "이런생각을 가진사람이 이해가 안된다."
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q18",
          "title": "적당한 거리의 지인과 식사를 했다. 계산하는 순간 누가 낼지 우물쭈물하는것을 견딜 수 없다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 공감한다"
           },
           {
            "value": "item2",
            "text": "어느부분 공감한다."
           },
           {
            "value": "item3",
            "text": "잘 모르겠다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "전혀 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q19",
          "title": "외출을 했는데 비가 내리기 시작했다. 목적지까지 걸어서 10분정도 거리일 때 어떻게 행동하나요?",
          "choices": [
           {
            "value": "item1",
            "text": "고민없이 뛰어간다."
           },
           {
            "value": "item2",
            "text": "한참 고민을 하다가 결국 뛰어간다."
           },
           {
            "value": "item3",
            "text": "한참고민을 하다가 우산을 산다."
           },
           {
            "value": "item4",
            "text": "바로 우산을 산다."
           },
           {
            "value": "item5",
            "text": "택시를 부른다."
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q20",
          "title": "저축은 여러 개로 쪼개면 좋을 수도 있지만 빨리 한가지로 단기적인 목표부터 달성해 나가는 것이 더욱 속 편하다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 그렇다"
           },
           {
            "value": "item2",
            "text": "보통 그렇다"
           },
           {
            "value": "item3",
            "text": "잘 모르겠다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "전혀 아니다"
           }
          ],
          "isRequired": true
         }
        ],
        "title": "재무성향검사"
       },
       {
        "name": "page6",
        "elements": [
         {
          "type": "rating",
          "name": "tendency_test_q21",
          "title": "있을지도 모를 늙은 나를 위해 왜 오늘 먹고 싶은 아메리카노 한 잔을 참아야 하는지 모르겠다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q22",
          "title": " 느리더라도 안정적인 것보다는 역동적이고 화끈한 것이 재테크가 나와 맞다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q23",
          "title": "아무리 저금리라도 부동산, 주식 보다는 안정적으로 은행을 믿는것이 가장 좋다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q24",
          "title": "보험은 불 필요하다. 일단 저축부터 하고 여유가 남으면 최소한의 보험만 가입하는것이 맞다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q25",
          "title": "10년 뒤에' 매월 500만원씩 20년 받는 연금복권보다 10억을 일시금으로 '지금' 받는 로또를 선택할것이다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q26",
          "title": "정책이 변하고 기술의 발전이 이루어져도 부자가 되는 방법은 크게 달라지지 않는다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q27",
          "title": "현재의 자녀 혹은 미래 출산계획이 있다면 자식의 교육은 딱 성인이 될 때 까지이며 그 이후로는 자녀 몫이다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q28",
          "title": "여유로운 경제상황을 이룩하더라도 기부가 필수는 아니라고 생각한다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q29",
          "title": "부모님의 경제활동적 측면에 대해서 평가해보자면  그리 좋은 점수를 줄 수 없다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q30",
          "title": "최고의 재테크는 좋은 부모를 만나는 것이다. 나를 발전시키는 것은 한계가 있다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q31",
          "title": "사람들은 현자처럼 돈보다 사람, 깨닳음, 사랑이 더 중요하다고 이야기하지만 다 허울좋은 소리일 뿐이다. 결국 돈이 있어야 그것들도 있다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q32",
          "title": "재무설계에 있어서 보험(위험설계)는 다른설계(투자,부동산,세금,상속,은퇴)보다 우선시되는 가장 기본의 요소이다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "rating",
          "name": "tendency_test_q33",
          "title": "소득을 높이는 것보다는 지출을 줄이는게 현명하다.",
          "rateMax": 4,
          "minRateDescription": "매우 공감한다",
          "maxRateDescription": "전혀 공감하지 못한다",
          "isRequired": true
         },
         {
          "type": "checkbox",
          "name": "tendency_test_q34",
          "title": "지금까지 가입해보신 경험이 있는 상품을 모두 골라주세요.",
          "choices": [
           {
            "value": "item1",
            "text": "투자경험 없음"
           },
           {
            "value": "item2",
            "text": "연금펀드, 변액보험"
           },
           {
            "value": "item3",
            "text": "채권형 펀드, 금융채, 채권(A-이상), ELB/DLB(원금보���), CP/전단채(A2+이상) 등"
           },
           {
            "value": "item4",
            "text": "혼합형 펀드, CP/전단채(A4~A2), 채권(BBB0~BBB+), ELS(원금일부보장) 등"
           },
           {
            "value": "item5",
            "text": "주식(일반종목), 주식형 펀드(시장수익률 추구),ELS/DLS(원금비보장),채권(BBB-이하), 해외펀드(역외펀드or역내펀드), 해외자산 직접투자"
           },
           {
            "value": "item6",
            "text": "주식(관리종목, 투자위험종목), 주식형 펀드(고수익추구), 선물옵션, ELW, 외국펀드(외국에서 외국법을 적용받아 투자) 등"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q35",
          "title": "투자를 할 때 원금 보존과 수익률 중 어떻것을 더 중요하게 생각하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "원금 반드시 보존"
           },
           {
            "value": "item2",
            "text": "원금 보존 중요"
           },
           {
            "value": "item3",
            "text": "수익률 어느정도"
           },
           {
            "value": "item4",
            "text": "수익률 중요"
           },
           {
            "value": "item5",
            "text": "수익률이 매우중요"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q36",
          "title": "투자상품에 투자한 다면 연간 수익률은 최소 어느정도 되어야 한다고 생각하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "3% 이내"
           },
           {
            "value": "item2",
            "text": "7% 이내 "
           },
           {
            "value": "item3",
            "text": "15%이내"
           },
           {
            "value": "item4",
            "text": "30% 이내"
           },
           {
            "value": "item5",
            "text": "30%이상"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q37",
          "title": "원하는 투자 수익률을 위해 어느정도까지의 원금 손실을 견딜 수 있나요?",
          "choices": [
           {
            "value": "item1",
            "text": "절대 원금손실은 안됨"
           },
           {
            "value": "item2",
            "text": "10% 이내"
           },
           {
            "value": "item3",
            "text": "20% 이내"
           },
           {
            "value": "item4",
            "text": "30% 이내"
           },
           {
            "value": "item5",
            "text": "50% 이내"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q38",
          "title": "투자를 할 때 주식시장에 대한 선호도가 부동산, 금과 같은 실물 시장에 대해 더 높다고 생각하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "매우 공감한다"
           },
           {
            "value": "item2",
            "text": "어느정도 공감한다"
           },
           {
            "value": "item3",
            "text": "보통이다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "매우 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q39",
          "title": "'투자란 것은 잘 알아야 하는데 잘 몰라서 아직은 하지 않는다'라는 생각에 공감하시나요?",
          "choices": [
           {
            "value": "item1",
            "text": "매우 공감한다"
           },
           {
            "value": "item2",
            "text": "어느정도 공감한다"
           },
           {
            "value": "item3",
            "text": "보통이다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "매우 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q40",
          "title": "투자는 현 시대의 유일한 평범한 사람이 부를 축적할 수 있는 유일한 방법이다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 공감한다"
           },
           {
            "value": "item2",
            "text": "어느정도 공감한다"
           },
           {
            "value": "item3",
            "text": "보통이다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "매우 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q41",
          "title": "부동산 Gap투자, 비상장주식, P2P, 펀딩, 사업투자, 실물자산, 해외주식 투자 중 경험해본 투자는 몇가지 인가요?",
          "choices": [
           {
            "value": "item1",
            "text": "5개이상"
           },
           {
            "value": "item2",
            "text": "4개이상"
           },
           {
            "value": "item3",
            "text": "3개이상"
           },
           {
            "value": "item4",
            "text": "1개이상"
           },
           {
            "value": "item5",
            "text": "없음"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q42",
          "title": "은퇴자산인 연금상품 만큼은 연금펀드, 변액보험보다는 확정금리형 상품이 옳다고 생각한다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 공감한다"
           },
           {
            "value": "item2",
            "text": "어느정도 공감한다"
           },
           {
            "value": "item3",
            "text": "보통이다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "매우 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q43",
          "title": "미래의 다양한 소득구조 창출을 위해 필요하다면 기꺼이 지금의 일부현금자산을 투자형 자산으로 이동할 의향이 있다.",
          "choices": [
           {
            "value": "item1",
            "text": "매우 공감한다"
           },
           {
            "value": "item2",
            "text": "어느정도 공감한다"
           },
           {
            "value": "item3",
            "text": "보통이다"
           },
           {
            "value": "item4",
            "text": "아니다"
           },
           {
            "value": "item5",
            "text": "매우 아니다"
           }
          ],
          "isRequired": true
         },
         {
          "type": "radiogroup",
          "name": "tendency_test_q44",
          "title": "주식에 투자할 경우 증시가 폭락해 투자자산의 가치가 20%정도 급락했다. 어떻게 행동할까요?",
          "choices": [
           {
            "value": "item1",
            "text": "즉시 손절한다"
           },
           {
            "value": "item2",
            "text": "회복을 기다린다"
           },
           {
            "value": "item3",
            "text": "추가자금을 더 투입하여 저점매수를 노린다. "
           },
           {
            "value": "item4",
            "text": "신용거래를 시도한다."
           },
           {
            "value": "item5",
            "text": "신용대출 및 담보대출, 가까운 지인에게 돈을 빌리는 등 타이밍은 절대 놓치지 않는다."
           }
          ],
          "isRequired": true
         }
        ],
        "title": "재무성향검사"
       },
     {
      "name": "page4",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "earn",
        "title": "현재 소득",
        "description": "연간 비정기소득은 격월 급여를 받거나 연간 소득중에서 상여의 비율이 큰 직종, 혹은 계절성 사업의 영위로 소득이 다른경우 기재해주시면 됩니다.",
        "defaultValue": {
         "Row 1": {
          "Column 1": "본인",
          "Column 5": "=월정기+연간비정기"
         },
         "Row 2": {
          "Column 1": "배우자"
         }
        },
        "columns": [
         {
          "name": "Column 1",
          "title": "소득원"
         },
         {
          "name": "Column 2",
          "title": "월 정기 소득금액"
         },
         {
          "name": "Column 3",
          "title": "연간 비정기소득"
         },
         {
          "name": "Column 4",
          "title": "비정기 소득 월평균 환산"
         },
         {
          "name": "Column 5",
          "title": "연간 총 소득"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rows": [
         {
          "value": "Row 1",
          "text": "근로소득"
         },
         {
          "value": "Row 2",
          "text": "상여금"
         },
         {
          "value": "Row 3",
          "text": "이자소득"
         },
         {
          "value": "Row 4",
          "text": "사업소득"
         },
         {
          "value": "Row 5",
          "text": "배당소득"
         },
         {
          "value": "Row 6",
          "text": "임대소득"
         },
         {
          "value": "Row 7",
          "text": "연금소득"
         },
         {
          "value": "Row 8",
          "text": "용돈(가족지원금)"
         },
         {
          "value": "Row 9",
          "text": "권리소득"
         },
         {
          "value": "Row 10",
          "text": "양도소득"
         },
         {
          "value": "Row 11",
          "text": "기타소득(수수료,시상금,포상금,당첨금 등)"
         }
        ]
       },
       {
        "type": "matrixdropdown",
        "name": "monthly_expanse",
        "title": "월별 지출",
        "description": "참고사항에는 드림캘린더 전속 전문가들에게 전할 특이사항이나 항목에 포함되지 않는 내용을 자유롭게 적어주세요",
        "defaultValue": {
         "Row 1": {
          "Column 1": "신용카드/현금자동이체/지로납부"
         },
         "Row 8": {
          "Column 5": "ex)본인유류비 30만원, 와이프 교통비 13만원"
         }
        },
        "columns": [
         {
          "name": "Column 1",
          "title": "지출수단"
         },
         {
          "name": "Column 2",
          "title": "지출액"
         },
         {
          "name": "Column 5",
          "title": "참고사항기재"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rows": [
         {
          "value": "Row 1",
          "text": "식비"
         },
         {
          "value": "Row 2",
          "text": "주거비(관리비를 제외한 월세,전세자금대출이자 등)"
         },
         {
          "value": "Row 3",
          "text": "통신비(핸드폰,넷플릭스,이너넷,기타구독료 모두 포함)"
         },
         {
          "value": "Row 4",
          "text": "여가/취미(도서구매,헬스,공연비 등)"
         },
         {
          "value": "Row 5",
          "text": "회식/음주비"
         },
         {
          "value": "Row 6",
          "text": "패션/잡화"
         },
         {
          "value": "Row 7",
          "text": "의료비"
         },
         {
          "value": "Row 8",
          "text": "교통비(유류비)"
         },
         {
          "value": "Row 9",
          "text": "공과금"
         },
         {
          "value": "Row 10",
          "text": "교육비(양육비)"
         },
         {
          "value": "Row 11",
          "text": "각종회비(기부금)"
         }
        ]
       },
       {
        "type": "matrixdropdown",
        "name": "yearly_expanse",
        "title": "연간 지출",
        "columns": [
         {
          "name": "Column 1",
          "title": "지출수단"
         },
         {
          "name": "Column 지출액",
          "title": "지출액"
         },
         {
          "name": "Column 2",
          "title": "참고사항기재"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rows": [
         {
          "value": "Row 1",
          "text": "종합소득세"
         },
         {
          "value": "Row 2",
          "text": "자동차세"
         },
         {
          "value": "Row 3",
          "text": "자동차보험/화재보험"
         },
         {
          "value": "Row 4",
          "text": "휴가비"
         },
         {
          "value": "Row 5",
          "text": "명절 등 가족행사"
         },
         {
          "value": "Row 6",
          "text": "등록금"
         },
         {
          "value": "Row 7",
          "text": "재산세,보유세 등 세금"
         },
         {
          "value": "Row 8",
          "text": "각종 연회비(카드,부대시설이용 등)"
         }
        ]
       },
       {
        "type": "paneldynamic",
        "name": "assets",
        "title": "자산현황",
        "description": "옆의 추가 버튼을 눌러주세요!!!\n",
        "templateElements": [
         {
          "type": "dropdown",
          "name": "sortasset",
          "title": "자산분류",
          "choices": [
           {
            "value": "item1",
            "text": "유동성자산"
           },
           {
            "value": "item2",
            "text": "금융자산"
           },
           {
            "value": "item3",
            "text": "연금자산"
           },
           {
            "value": "item4",
            "text": "기타자산"
           },
           {
            "value": "item5",
            "text": "비금융자산"
           }
          ]
         },
         {
          "type": "expression",
          "name": "유동성자산",
          "visibleIf": "{panel.sortasset} = 'item1'",
          "title": "자산종류(유동성자산)",
          "description": "수시입출금\n"
         },
         {
          "type": "dropdown",
          "name": "금융자산",
          "visibleIf": "{panel.sortasset} = 'item2'",
          "title": "자산종류(금융자산)",
          "choices": [
           {
            "value": "일반 정기적금",
            "text": "일반 정기적금"
           },
           {
            "value": "청약통장",
            "text": "청약통장"
           },
           {
            "value": "펀드",
            "text": "펀드"
           },
           {
            "value": "저축보험",
            "text": "저축보험"
           },
           {
            "value": "주식",
            "text": "주식"
           },
           {
            "value": "IRP",
            "text": "IRP"
           },
           {
            "value": "기타파생상품",
            "text": "기타파생상품"
           },
           {
            "value": "기타 상품",
            "text": "기타 상품"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "연금자산",
          "visibleIf": "{panel.sortasset} = 'item3'",
          "title": "자산종류(연금자산)",
          "choices": [
           {
            "value": "개인연금",
            "text": "개인연금"
           },
           {
            "value": "변액보험",
            "text": "변액보험"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "기타자산",
          "visibleIf": "{panel.sortasset} = 'item4'",
          "title": "자산종류(기타자산)",
          "choices": [
           {
            "value": "퇴직연금",
            "text": "퇴직연금"
           },
           {
            "value": "사업투자금",
            "text": "사업투자금"
           },
           {
            "value": "계",
            "text": "계"
           },
           {
            "value": "보장성보험",
            "text": "보장성보험"
           },
           {
            "value": "퇴직금",
            "text": "퇴직금"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "비금융자산",
          "visibleIf": "{panel.sortasset} = 'item5'",
          "title": "자산종류(비금융자산)",
          "choices": [
           {
            "value": "주거용부동산",
            "text": "주거용부동산"
           },
           {
            "value": "투자용부동산",
            "text": "투자용부동산"
           },
           {
            "value": "실물자산",
            "text": "실물자산"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "갯수선택",
          "visibleIf": "{assets[0].sortasset} notempty and {assets[0].금융자산} <> 'IRP' and {assets[0].금융자산} <> '주식' and {assets[0].기타자산} <> '퇴직금'",
          "title": "갯수선택",
          "choices": [
           {
            "value": "item1",
            "text": "1"
           },
           {
            "value": "item2",
            "text": "2"
           },
           {
            "value": "item3",
            "text": "3"
           },
           {
            "value": "item4",
            "text": "4"
           },
           {
            "value": "item5",
            "text": "5"
           }
          ]
         },
         {
          "type": "text",
          "name": "구성항목",
          "visibleIf": "{assets[0].금융자산} = 'IRP'",
          "title": "구성항목 : 자율입력"
         },
         {
          "type": "text",
          "name": "DBDCIRP",
          "visibleIf": "{assets[0].기타자산} = '퇴직연금'",
          "title": "DB형 / DC형 / IRP"
         },
         {
          "type": "text",
          "name": "금융회사",
          "visibleIf": "{assets[0].sortasset} <> 'item5' and {assets[0].기타자산} <> '계' and {assets[0].기타자산} <> '사업투자금' and {assets[0].기타자산} <> '퇴직금' and {assets[0].금융자산} <> '기타 상품'",
          "title": "금융회사(직접입력)"
         },
         {
          "type": "text",
          "name": "형태",
          "visibleIf": "{assets[0].sortasset} = 'item5'",
          "title": "형태"
         },
         {
          "type": "text",
          "name": "상품명 입력",
          "visibleIf": "{assets[0].금융자산} = '기타 상품'",
          "title": "상품명 입력"
         },
         {
          "type": "text",
          "name": "투자처(직접입력)",
          "visibleIf": "{assets[0].기타자산} = '사업투자금'",
          "title": "투자처(직접입력)"
         },
         {
          "type": "text",
          "name": "계타는주기",
          "visibleIf": "{assets[0].기타자산} = '계'",
          "title": "운용인원 / 계타는주기"
         },
         {
          "type": "text",
          "name": "평가금액",
          "visibleIf": "{assets[0].sortasset} = 'item5' and {assets[0].기타자산} = '계'",
          "title": "평가금액"
         },
         {
          "type": "text",
          "name": "총납입금액",
          "visibleIf": "{assets[0].sortasset} = 'item1' or {assets[0].sortasset} = 'item3' or {assets[0].기타자산} = '사업투자금' or {assets[0].금융자산} = '일반 정기적금' or {assets[0].금융자산} = '펀드' or {assets[0].금융자산} = '저축보험' or {assets[0].금융자산} = '기타파생상품' or {assets[0].금융자산} = '기타 상품'",
          "title": "총납입금액"
         },
         {
          "type": "dropdown",
          "name": "보장성보험종류",
          "visibleIf": "{assets[0].기타자산} = '보장성보험'",
          "title": "보험종류",
          "choices": [
           {
            "value": "item1",
            "text": "생명보험"
           },
           {
            "value": "item2",
            "text": "손해보험"
           }
          ]
         },
         {
          "type": "text",
          "name": "현재평가액",
          "visibleIf": "{assets[0].sortasset} = 'item1' or {assets[0].sortasset} = 'item3' or {assets[0].기타자산} = '퇴직연금' or {assets[0].기타자산} = '사업투자금' or {assets[0].금융자산} = '일반 정기적금' or {assets[0].금융자산} = '펀드' or {assets[0].금융자산} = '저축보험' or {assets[0].금융자산} = '기타파생상품' or {assets[0].금융자산} = '기타 상품'",
          "title": "현재평가액"
         },
         {
          "type": "boolean",
          "name": "CI유무",
          "visibleIf": "{assets[0].보장성보험종류} = 'item1'",
          "title": "CI유무",
          "labelTrue": "있음",
          "labelFalse": "없음"
         },
         {
          "type": "boolean",
          "name": "실비유무",
          "visibleIf": "{assets[0].보장성보험종류} = 'item2'",
          "title": "실비유무",
          "labelTrue": "있음",
          "labelFalse": "없음"
         },
         {
          "type": "boolean",
          "name": "갱신유무",
          "visibleIf": "{assets[0].기타자산} = '보장성보험'",
          "title": "갱신유무",
          "labelTrue": "예",
          "labelFalse": "아니요"
         },
         {
          "type": "dropdown",
          "name": "해지환급금",
          "visibleIf": "{assets[0].기타자산} = '보장성보험'",
          "title": "해지환급금 형태",
          "choices": [
           {
            "value": "item1",
            "text": "원금초과형"
           },
           {
            "value": "item2",
            "text": "무해지환급형"
           },
           {
            "value": "item3",
            "text": "저해지환급형"
           },
           {
            "value": "item4",
            "text": "순수보장형"
           }
          ]
         },
         {
          "type": "text",
          "name": "가입일",
          "visibleIf": "{assets[0].sortasset} = 'item1' or {assets[0].sortasset} = 'item3' or {assets[0].금융자산} = '일반 정기적금' or {assets[0].금융자산} = '펀드' or {assets[0].금융자산} = '저축보험'",
          "width": "250px",
          "minWidth": "250px",
          "maxWidth": "250px",
          "title": "가입일",
          "inputType": "date",
          "min": "2015-01-01"
         },
         {
          "type": "text",
          "name": "만기일",
          "visibleIf": "{assets[0].sortasset} = 'item1' or {assets[0].sortasset} = 'item3' or {assets[0].금융자산} = '일반 정기적금' or {assets[0].금융자산} = '저축보험'",
          "width": "250px",
          "minWidth": "250px",
          "maxWidth": "250px",
          "title": "만기일",
          "inputType": "date",
          "min": "2020-11-01"
         },
         {
          "type": "radiogroup",
          "name": "펀드유형",
          "visibleIf": "{assets[0].금융자산} = '펀드'",
          "title": "펀드유형",
          "choices": [
           {
            "value": "item1",
            "text": "국내주식형"
           },
           {
            "value": "item2",
            "text": "국내채권혼합형"
           },
           {
            "value": "item3",
            "text": "MMF"
           },
           {
            "value": "item4",
            "text": "절대수익추구형"
           },
           {
            "value": "item5",
            "text": "해외주식형"
           },
           {
            "value": "item6",
            "text": "해외채권혼합형"
           },
           {
            "value": "item7",
            "text": "해외부동산형"
           },
           {
            "value": "item8",
            "text": "국내주식혼합형"
           },
           {
            "value": "item9",
            "text": "국내채권형"
           },
           {
            "value": "item10",
            "text": "국내부동산형"
           },
           {
            "value": "item11",
            "text": "국내기타"
           },
           {
            "value": "item12",
            "text": "해외주식혼합형"
           },
           {
            "value": "item13",
            "text": "해외채권형"
           },
           {
            "value": "item14",
            "text": "해외커머더티형"
           }
          ],
          "colCount": 2
         },
         {
          "type": "text",
          "name": "운용목적",
          "visibleIf": "{assets[0].sortasset} = 'item1' or {assets[0].금융자산} = '일반 정기적금' or {assets[0].금융자산} = '펀드' or {assets[0].금융자산} = '저축보험'",
          "title": "운용목적"
         },
         {
          "type": "boolean",
          "name": "적격유무",
          "visibleIf": "{assets[0].연금자산} = '개인연금'",
          "title": "적격유무",
          "labelTrue": "있음",
          "labelFalse": "없음"
         },
         {
          "type": "text",
          "name": "월납입액",
          "visibleIf": "{assets[0].sortasset} = 'item1' or {assets[0].금융자산} = '일반 정기적금' or {assets[0].금융자산} = '펀드' or {assets[0].금융자산} = '저축보험' or {assets[0].sortasset} = 'item3' or {assets[0].기타자산} = '보장성보험'",
          "title": "월납입액"
         },
         {
          "type": "text",
          "name": "월투자액",
          "visibleIf": "{assets[0].금융자산} = '주식' or {assets[0].금융자산} = 'IRP'",
          "title": "월투자액"
         },
         {
          "type": "text",
          "name": "최저보증이율",
          "visibleIf": "{assets[0].금융자산} = '저축보험' or {assets[0].연금자산} = '개인연금'",
          "title": "최저보증이율"
         },
         {
          "type": "boolean",
          "name": "펀드관리유무",
          "visibleIf": "{assets[0].연금자산} = '변액보험'",
          "title": "지속적인 펀드관리유무",
          "labelTrue": "예",
          "labelFalse": "아니요"
         },
         {
          "type": "boolean",
          "name": "추가납입유무",
          "visibleIf": "{assets[0].금융자산} = '저축보험'",
          "title": "추가납입유무",
          "labelTrue": "예",
          "labelFalse": "아니요"
         },
         {
          "type": "boolean",
          "name": "비과세 or 소득공제",
          "visibleIf": "{assets[0].연금자산} = '개인연금'",
          "title": "비과세 or 소득공제",
          "labelTrue": "비과세",
          "labelFalse": "소득공제"
         }
        ]
       },
       {
        "type": "paneldynamic",
        "name": "부채현황",
        "title": "부채현황",
        "description": "옆의 추가 버튼을 눌러주세요!!!",
        "templateElements": [
         {
          "type": "dropdown",
          "name": "부채분류",
          "title": "부채분류",
          "choices": [
           {
            "value": "item1",
            "text": "신용대출"
           },
           {
            "value": "item2",
            "text": "기타대출"
           },
           {
            "value": "item3",
            "text": "담보대출"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "부채종류(신용대출)",
          "visibleIf": "{부채현황[0].부채분류} = 'item1'",
          "title": "부채종류(신용대출)",
          "choices": [
           {
            "value": "item1",
            "text": "1금융권 신용대출"
           },
           {
            "value": "item2",
            "text": "2금융권 신용대출"
           },
           {
            "value": "item3",
            "text": "대부업체"
           },
           {
            "value": "item4",
            "text": "현금서비스"
           },
           {
            "value": "item5",
            "text": "카드대출"
           },
           {
            "value": "item6",
            "text": "사업자대출"
           },
           {
            "value": "item7",
            "text": "학자금대출"
           },
           {
            "value": "item8",
            "text": "마이너스통장"
           },
           {
            "value": "item9",
            "text": "자동차 할부(은행권)"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "부채종류(기타대출)",
          "visibleIf": "{부채현황[0].부채분류} = 'item2'",
          "title": "부채종류(기타대출)",
          "choices": [
           {
            "value": "item1",
            "text": "회사대출"
           },
           {
            "value": "item2",
            "text": "사적채무"
           },
           {
            "value": "item3",
            "text": "보증서 담보대출"
           }
          ],
          "hasOther": true,
          "otherText": "기타대출"
         },
         {
          "type": "dropdown",
          "name": "부채종류(담보대출)",
          "visibleIf": "{부채현황[0].부채분류} = 'item3'",
          "title": "부채종류(담보대출)",
          "choices": [
           {
            "value": "item1",
            "text": "부동산담보대출(모기지론포함)"
           },
           {
            "value": "item2",
            "text": "약관대출"
           },
           {
            "value": "item3",
            "text": "주식담보대출"
           },
           {
            "value": "item4",
            "text": "예금담보대출"
           },
           {
            "value": "item5",
            "text": "유가증권 담보대출(주식,채권)"
           }
          ],
          "hasOther": true,
          "otherText": "기타대출"
         },
         {
          "type": "dropdown",
          "name": "갯수선택(부채)",
          "visibleIf": "{부채현황[0].부채분류} notempty",
          "title": "갯수선택",
          "choices": [
           {
            "value": "item1",
            "text": "1"
           },
           {
            "value": "item2",
            "text": "2"
           },
           {
            "value": "item3",
            "text": "3"
           },
           {
            "value": "item4",
            "text": "4"
           },
           {
            "value": "item5",
            "text": "5"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "대출이율",
          "visibleIf": "{부채현황[0].부채분류} notempty",
          "title": "대출이율",
          "choices": [
           {
            "value": "item1",
            "text": "저금리(0%~4%)"
           },
           {
            "value": "item2",
            "text": "중금리(4%~10%)"
           },
           {
            "value": "item3",
            "text": "고금리(10%이상)"
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "상환방법",
          "visibleIf": "{부채현황[0].부채분류} notempty",
          "title": "상환방법",
          "choices": [
           {
            "value": "item1",
            "text": "만기일시상환"
           },
           {
            "value": "item2",
            "text": "원금균등상환"
           },
           {
            "value": "item3",
            "text": "원리금균등상환"
           }
          ]
         },
         {
          "type": "matrixdropdown",
          "name": "세부내용",
          "visibleIf": "{부채현황[0].부채분류} notempty",
          "title": "세부내용",
          "columns": [
           {
            "name": "세부내용"
           }
          ],
          "choices": [
           1,
           2,
           3,
           4,
           5
          ],
          "cellType": "text",
          "rows": [
           "금융기관",
           "대출총액",
           "월 상환금액",
           "대출잔액"
          ]
         }
        ]
       }
      ]
     }
    ]
   }
  //설문 조사 결과 json 으로 정리
  function sendDataToServer(survey) {
    var resultAsString = JSON.stringify(survey.data);
    alert(resultAsString); //send Ajax request to your web server.
    PdfMake();
  }

  function PdfMake(){
    /* documentDefinition : pdf파일에 들어갈 내용 및 여러가지를 정의 */
    var documentDefinition = {
      //content : pdf의 내용을 정의
      content: [{
              text: 'First Title'
          }, // 스타일 적용 없이 그냥 출력
          {
              text: 'This is a content',
              bold: true
          }, // 텍스트에 bold 주기
          {
              text: 'hahaha',
              style: 'style_test'
          }, // style 부분에 정의된 style_test 적용해보기 및 한글 꺠짐 테스트
          {
              style: 'tableExample',
              table: {
                  widths: [100, '*', 200, '*'],
                  body: [
                      ['width=100', 'star-sized', 'width=200', 'star-sized'],
                      ['fixed-width cells have exactly the specified width', {
                          text: 'article1',
                          italics: true,
                          color: 'gray'
                      }, {
                          text: 'article2',
                          italics: true,
                          color: 'gray'
                      }, {
                          text: 'article3',
                          italics: true,
                          color: 'gray'
                      }]
                  ]
              }
          } //테이블 그리기
      ],
      //하단의 현재페이지 / 페이지 수 넣기
      footer: function (currentPage, pageCount) {
          return {
              margin: 10,
              columns: [{
                  fontSize: 9,
                  text: [{
                          text: '--------------------------------------------------------------------------' +
                              '\n',
                          margin: [0, 20]
                      },
                      {
                          text: '' + currentPage.toString() + ' of ' +
                              pageCount,
                      }
                  ],
                  alignment: 'center'
              }]
          };

      },
      //필요한 스타일 정의하기
      styles: {
          style_test: {
              fontSize: 18,
              bold: true,
              margin: [0, 0, 0, 0],
              alignment: 'center'
          },
          tableExample: {
              margin: [0, 5, 0, 15]
          }
      },

      // 페이지 크기 용지의 크기 사이즈 넣기 또는 특정 사이즈 넣기 { width: number, height: number }
      pageSize: 'A4',

      /* 페이지 방향 portrait : 가로 , landscape : 세로 */
      pageOrientation: 'portrait',
  };

  var pdf_name = 'pdf샘플.pdf'; // pdf 만들 파일의 이름
  pdfMake.createPdf(documentDefinition).download(pdf_name);
  }

  function SurveyPage(){
    return(
      <Survey.Survey 
        json={surveyJSON} 
        onComplete={sendDataToServer}
        showProgressBar = "bottom"
        pageNextText = "다음 페이지"
        completeText = "설문 완료"
      />
    )
  }
export default  SurveyPage;