# mybook
front-end 연습 공간


# 화면 레이아웃 구조 생성
- 계좌영역
- 탭 메뉴
- 화면영역
  - 매수
  - 매도
  - 내역

1. 기본구조
 - 계좌영역, 탭 메뉴, 화면영역


// 컨테이너 생성
const container = document.createElement('div');
container.className = 'layout_conainer';

// 계좌영역
const accountDiv = document.createElement('div');
accountDiv.className = 'account-info';
accountDiv.innerHTML = `
  <select>
    <option value='027814300'>02-781-4300 [주식자동주문] 아이낸스</option>
  </select>
`;
container.appendChild(accountDiv);

// 탭 메뉴
const tabMenu = document.createElement('ul');
tabMenu.className = 'tab-menu';
['매수', '매도', '내역'].forEach(tab => {
  const li = document.createElement('li');
  li.textContent = tab;
  tabMenu.appendChild(li);
});
container.appendChild(tabMenu);

// 화면영역
const screenDiv = document.createElement('div');
accountDiv.innerHTML = `
  여기는 화면영역
`;

// 메인 레이아웃을 컨테이너에 추가
container.appendChild(screenDiv);

// 페이지에 삽입
document.body.appendChild(container);
