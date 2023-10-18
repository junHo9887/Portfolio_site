/* 한스크롤당 한섹션씩 이동 */ 
var mHtml = $("html");
var page = 1;
var isScrolling = false;

mHtml.animate({ scrollTop: 0 }, 10);

function scrollToPage(pageNumber) {
  if (mHtml.is(":animated")) return;
  if (pageNumber < 1 || pageNumber > 5) return;

  page = pageNumber;
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
}

function handleScroll(e) {
  if (isScrolling) return;

  isScrolling = true;

  if (e.originalEvent.deltaY > 0) {
    scrollToPage(page + 1);
  } else if (e.originalEvent.deltaY < 0) {
    scrollToPage(page - 1);
  }

  // 스크롤 이벤트 핸들링이 완료되면 isScrolling을 false로 설정합니다.
  requestAnimationFrame(function () {
    isScrolling = false;
  });
}

$(window).on("wheel", handleScroll);

/* 모바일버전 원스크롤 구현 하고싶지만 아직잘안됌 */ 

/*헤더 우측상단 gnb & 퀵메뉴 부분*/
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.gnb a');
                    
  // 스크롤 이벤트 핸들러
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
                    
    navLinks.forEach((link) => {
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
                    
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
                    
        // 현재 스크롤 위치가 섹션의 범위 내에 있는지 확인
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // 현재 활성화된 항목에 active 클래스 추가
          link.classList.add('active');
        } else {
          // 다른 항목에서 active 클래스 제거
          link.classList.remove('active');
        }
      }
    });
  });
});

/* 퀵메뉴로 색션이동할때 */ 
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.gnb a, .ham_menu ul a');

  // 링크 클릭 시 부드러운 스크롤을 구현하는 함수
  function smoothScroll(targetId) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth' // 부드러운 스크롤 효과를 적용합니다.
          });
      }
  }

  // 각 링크에 클릭 이벤트 핸들러를 추가합니다.
  navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          smoothScroll(targetId);
      });
  });
});

let ham = document.querySelector('.ham');
let x = document.querySelector('.x');
let m = document.querySelector('.ham_menu');

// 초기에 메뉴를 숨기는 함수 (메뉴가 처음에 보이지 않도록)
function hideMenu() {
  m.style.left = '100%';
  m.style.zIndex = '-1';
  m.style.opacity = '0';
  m.style.display = 'none';
}

// 페이지 로드 후 초기 상태 설정
document.addEventListener('DOMContentLoaded', function() {
  hideMenu();
});

ham.addEventListener('click', function(e) {
  e.preventDefault();
    m.style.zIndex = '5';
    m.style.zIndex = '5';
    m.style.opacity = '1';
  m.style.zIndex = '5';
    m.style.opacity = '1';
  m.style.display = 'block';
  setTimeout(function() {
    m.style.left = '0';
    m.style.opacity = '1';
    m.style.transition = 'left 1s ease, opacity 0.3s ease'; // 트랜지션 설정
  }, 0);

  // "x" 실행 후 "ham" 클릭 활성화
  x.addEventListener('click', function(e) {
    e.preventDefault();
    m.style.transition = 'left 1s ease, opacity 0.3s ease'; // 트랜지션 설정
    m.style.left = '100%';

    // 트랜지션 종료 후 z-index와 opacity를 변경합니다.
    setTimeout(function() {
      m.style.zIndex = '-1';
      m.style.opacity = '0';
      m.style.display = 'none';
    }, 1000);
  });
});

                    /* 스크롤 이벤트 */ 

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', () => {
  // 섹션 1에 대한 처리
  const section1 = document.getElementById('section1');
  const rect1 = section1.getBoundingClientRect();

  if (rect1.top >= 0 && rect1.bottom <= window.innerHeight) {
  }

  // 섹션 2에 대한 처리
  
  const section2 = document.getElementById('section2');
  const rect2 = section2.getBoundingClientRect();
  const profile = document.querySelector('.Intro_Section .inner .profile');
  const p = document.querySelector('.Intro_Section .inner>p');
  if (window.innerWidth > 768) {
  if (rect2.top >= '0' && rect2.bottom <= window.innerHeight) {
    profile.style.opacity = 1;
    p.style.opacity =1;
  }else if(rect2.bottom <= window.innerHeight || rect2.top > '0'){
    profile.style.opacity =0 ;
    p.style.opacity = 0;
  }
}
  // 섹션 3에 대한 처리
  const divElements = document.querySelectorAll('.skill_content div');

  // 초기로 설정된 active_s 클래스를 가진 nav에 대한 애니메이션을 시작합니다.
  const initialActiveNav = document.querySelector('.skill_content div .active_s');
  if (initialActiveNav) {
    animateNumber(initialActiveNav);
  }
  
  divElements.forEach((div, index) => {
    div.addEventListener('click', function() {
      // 현재 엑티브 클래스를 모든 div에서 제거
      divElements.forEach(div => {
        const nav = div.querySelector('nav');
        nav.classList.remove('active_s');
      });
  
      // 클릭한 div에 속한 nav에 엑티브 클래스 추가
      const nav = div.querySelector('nav');
      nav.classList.add('active_s');
  
      // 다음 div에 엑티브 클래스를 이동시킵니다.
      const nextDiv = divElements[index];
      if (nextDiv) {
        const nextNav = nextDiv.querySelector('nav');
        nextNav.classList.add('active_s');
      }
  
      // "data-number" 값을 서서히 증가시키는 함수 호출
      animateNumber(nav);
    });
  });
  
  // "data-number" 값을 서서히 증가시키는 함수
  function animateNumber(navElement) {
    const targetNumber = parseInt(navElement.getAttribute('data-number'));
    let currentNumber = 0;
  
    const interval = setInterval(() => {
      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      } else {
        currentNumber += 10; // 적절한 증가량을 조절하세요.
        navElement.textContent = `${currentNumber}%`;
      }
    }, 50); // 적절한 간격을 조절하세요.
  }
  
  // 페이지 로드 시 초기로 설정된 active_s 클래스를 가진 nav에 대한 애니메이션을 시작합니다.
  if (initialActiveNav) {
    animateNumber(initialActiveNav);
  }
// 스크롤 이벤트 리스너 등록
const section3 = document.getElementById('section3');
const rect3 = section3.getBoundingClientRect();

// 스크롤 이벤트 핸들러
  if (rect3.top >= 0 && rect3.bottom <= window.innerHeight) {

  }


const b = document.querySelectorAll('#section3 .inner .skill_content .skill_item h3');
const a = document.querySelectorAll('#a');

// h3 요소에 이벤트 핸들러 추가
b.forEach((h3, index) => {
  h3.addEventListener('click', () => {
    // 현재 활성화된 h3 요소에 대한 클래스 제거
    const currentActiveH3 = document.querySelector('.act');
    if (currentActiveH3) {
      currentActiveH3.classList.remove('act');
    }

    // 현재 클릭한 h3 요소에 클래스 추가
    h3.classList.add('act');

    // 현재 활성화된 a 요소에 대한 클래스 제거
    const currentActiveA = document.querySelector('.actt');
    if (currentActiveA) {
      currentActiveA.classList.remove('actt');
    }

    // 현재 클릭한 h3 요소와 동일한 인덱스의 a 요소에 클래스 추가
    const aToActivate = a[index];
    aToActivate.classList.add('actt');
  });
});


    // 섹션 4에 대한 처리
    const section4 = document.getElementById('section4');
    const rect4 = section4.getBoundingClientRect();
    const sectionId4 = section4.getAttribute('id');

    if (rect4.top >= 0 && rect4.bottom <= window.innerHeight) {
    }

    // 섹션 5에 대한 처리
    const section5 = document.getElementById('section5');
    const rect5 = section5.getBoundingClientRect();
    if (rect5.top >= 0 && rect5.bottom <= window.innerHeight) {
    }
  });