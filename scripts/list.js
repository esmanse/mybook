document.addEventListener('DOMContentLoaded', function() {
    const tabMenuItems = document.querySelectorAll('.c_radio_button_item');

    tabMenuItems.forEach(item => {
        item.addEventListener('click', function() {
        if (!this.hasAttribute('selected')) {
            // 모든 버튼에서 selected 속성 제거
            tabMenuItems.forEach(btn => btn.removeAttribute('selected'));
            // 클릭한 버튼에 selected 속성 추가
            this.setAttribute('selected', '');
        }
        });
    });
});
