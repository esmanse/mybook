 // 계좌
const accountInfo = `
<div class="c_account_info">
    <label for="account_select">계좌</label>
    <select id="account_select">
    <option value='027814300'>02-781-4300 [주식자동주문] 아이낸스</option>
    </select>
</div>
`;


// 탭 메뉴
const tabMenu = `
    <div class="c_tab_menu">
        <button class="c_tab_menu_item" data-type="buy" selected>매수</button>
        <button class="c_tab_menu_item" data-type="sell">매도</button>
        <button class="c_tab_menu_item" data-type="list">내역</button>
    </div>
`;
document.addEventListener('DOMContentLoaded', function() {
    const tabMenuItems = document.querySelectorAll('.c_tab_menu_item');

    tabMenuItems.forEach(item => {
        item.addEventListener('click', function() {

        if (!this.hasAttribute('selected'))
        {
            // 모든 버튼에서 selected 속성 제거
            tabMenuItems.forEach(btn => btn.removeAttribute('selected'));
            // 클릭한 버튼에 selected 속성 추가
            this.setAttribute('selected', '');

            // 3. data-type 확인 (오류 방지)
            const type = this.dataset.type;
            if (!type) {
                console.error('data-type 속성이 없습니다!', this);
                return;
            }
          
            // 4. 동적 로드 실행
            //loadHtmlToContainer(`../public/${type}.html`, '#layout_middle_container');
            loadHtmlToIframe(`./public/${type}.html`, '#layout_middle_iframe');
        }
        });
    });
});


/**
 * 지정한 URL의 HTML 파일을 fetch해서 targetSelector에 innerHTML로 삽입합니다.
 * @param {string} url - 불러올 html 파일 경로
 * @param {string} targetSelector - 삽입할 DOM 요소의 selector 또는 id
 */
function loadHtmlToContainer(url, targetSelector) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('HTTP error ' + response.status);
      return response.text();
    })
    .then(html => {
      document.querySelector(targetSelector).innerHTML = html;
    })
    .catch(err => {
      document.querySelector(targetSelector).innerHTML = 'html 로드 실패';
      console.error('HTML 로드 실패:', err);
    });
}

function loadHtmlToIframe(url, iframeSelector) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('HTTP error ' + response.status);
      return response.text();
    })
    .then(html => {
      const iframe = document.querySelector(iframeSelector);
      if (!iframe || !iframe.contentWindow) {
        console.error('iframe을 찾을 수 없습니다.');
        return;
      }
      // iframe의 문서에 HTML 삽입
      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(html);
      doc.close();
    })
    .catch(err => {
      const iframe = document.querySelector(iframeSelector);
      if (iframe && iframe.contentWindow) {
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write('<div>html 로드 실패</div>');
        doc.close();
      }
      console.error('HTML 로드 실패:', err);
    });
}
