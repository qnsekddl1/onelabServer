// 모달창 내부 기능 구현

// const tabList = document.querySelectorAll(".CategoryFilter_filterItem button");
// const pages = document.querySelectorAll(".Wishview_list_wrap");
// // page[0].style.display="none";
// console.log(typeof(pages));
// console.log(pages)

// for( let i = 0; i < tabList.length; i++) {
//     tabList[i].addEventListener('click', function(e){
//         e.preventDefault();
//         for (var j=0; j<tabList.length; j++){
//             tabList[j].classList.remove("Tab_active");
//         }
//         pages.forEach((page) => {
//             page.style.display="none";
//         })
//         this.classList.add("Tab_active");
//         // 전체 탭 클릭
//         if (i === 0) {
//             pages.forEach((page) => {
//                 page.style.display="block";
//             })
//         } else {
//             pages[i-1].style.display="block";
//         }
        
//     });

// }


// // 모달창 켜고 끄기 구현

// const modal = document.getElementById("modal")
// const btnModal = document.querySelector(".my-page-project-show-like")
// const closeModal = document.getElementById("closeModal")
// btnModal.addEventListener("click", (e) => {
//     modal.style.display = "block"
// })

// closeModal.addEventListener("click", (e) => {
//     modal.style.display = "none"
// })

// 카테고리 탭 좋아요 기능


// 카테고리 선택 기능
// 랩장 랩원 눌렀을 때 구별되는 페이지 나타내는 기능
const manageOnelabContainer = document.querySelector(".manage-onelab-container")

// 내가 랩장인 원랩 목록을 화면에 표시하는 함수
const showManageOnelabList = (onelabList) => {
    let text = ``;
    onelabList.forEach((onelab) => {
        text += `
            <div class="onelab-service-boxs-inner">
                <button class="manage-onelab-btn">
                    <span class="manage-onelab-icon" aria-hidden="true">
                        <svg
                            viewBox="0 0 32 32"
                            focusable="false"
                            role="presentation"
                            class="withIcon-icon"
                            aria-hidden="true">
                            <path
                                d="M17.84 3.2l.4 2.56.16.88.88.32a9.55 9.55 0 0 1 2.893 1.691l.707.549.88-.32 2.4-.88L28 11.2l-2 1.68-.72.56.16.88a9.022 9.022 0 0 1-.009 3.336l-.151.824.72.56 2 1.76-1.84 3.2-3.28-1.2-.72.56a9.485 9.485 0 0 1-2.814 1.658l-.946.342-.16.88-.4 2.56h-3.68l-.4-2.56-.16-.88-.88-.32a9.55 9.55 0 0 1-2.893-1.691L9.12 22.8l-.88.32-2.4.88L4 20.8l2-1.68.72-.56-.16-.88a9.022 9.022 0 0 1 .009-3.336l.151-.824-.72-.56-2-1.76L5.84 8l3.28 1.2.72-.56a9.485 9.485 0 0 1 2.814-1.658l.946-.342.16-.88.4-2.56h3.68zM16 21.6a5.6 5.6 0 1 0 0-11.2 5.6 5.6 0 0 0 0 11.2zm2.56-20h-5.136a.8.8 0 0 0-.783.635L12.08 5.44a11.21 11.21 0 0 0-3.292 2.011L5.76 6.24h-.267a.798.798 0 0 0-.691.397L2.24 10.961a.798.798 0 0 0 .238 1.038l2.562 2.082a10.647 10.647 0 0 0 .01 3.906l-2.57 2.014a.8.8 0 0 0-.158 1.044L4.8 25.362a.8.8 0 0 0 .693.4h.347l2.96-1.2c.956.798 2.07 1.448 3.282 1.895l.638 3.225c.077.368.399.64.784.64h5.072a.8.8 0 0 0 .783-.635l.561-3.205a11.212 11.212 0 0 0 3.296-1.934l3.024 1.134h.347a.798.798 0 0 0 .691-.397l2.562-4.404a.8.8 0 0 0-.159-1.039l-2.561-2.081a10.647 10.647 0 0 0-.01-3.906l2.41-1.854a.8.8 0 0 0 .158-1.044L27.2 6.64a.8.8 0 0 0-.693-.4h-.347l-2.96 1.2a11.163 11.163 0 0 0-3.282-1.895L19.28 2.32a.801.801 0 0 0-.784-.64h-.017zM16 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                            ></path>
                        </svg>
                    </span>
                    관리하기
                </button>
                <dl class="onelab-service-detail">
                    <dd class="box-icon">
        `;
        if (!onelab.path){
            text += `
                <i class="icon-maker-service"></i>
            `;
        } else {
            text += `
                <img src="/upload/${onelab.path}">
            `
        }
        text += `
                    </dd>
                    <dd class="box-title">
                        <strong>${onelab.onelab_main_title}</strong>
                    </dd>
                    <dd class="box-text">
                        ${onelab.onelab_content}
                    </dd>
                    <dd class="box-last"></dd>
                </dl>
            </div>
        `
    })
    manageOnelabContainer.innerHTML = text;
    addClickEventToManageOnelabButtons();
}



// 내가 랩원인 원랩 목록을 넣을 컨테이너
const memberOnelabContainer = document.querySelector(".member-onelab-container");

// 내가 랩원인 원랩 목록을 화면에 표시하는 함수
const showMemberOnelabList = (onelabList) => {
    let text = ``;
    onelabList.forEach((onelab) => {
        text += `
            <div class="onelab-service-boxs-inner">
                <button class="exit-onelab-btn">
                    탈퇴하기
                </button>
                <dl class="onelab-service-detail">
                    <dd class="box-icon">
        `;
        if (!onelab.path){
            text += `
                <i class="icon-maker-service"></i>
            `;
        } else {
            text += `
                <img src="/upload/${onelab.path}">
            `
        }
        text += `
                    </dd>
                    <dd class="box-title">
                        <strong>${onelab.onelab_main_title}</strong>
                    </dd>
                    <dd class="box-text">
                        ${onelab.onelab_content}
                    </dd>
                    <dd class="box-last"></dd>
                </dl>
            </div>
        `
    })
    memberOnelabContainer.innerHTML = text;
    addClickEventToQuitOnelabButtons();
}





// 랩장 랩원 눌렀을 때 구별되는 페이지 나타내는 기능
const buttons = document.querySelectorAll(
    "div.main-list-filter-container ul.filter-list-wrapper button.major-btn"
);
const labpages = document.querySelectorAll(".section-body");

for (let i = 0;i < buttons.length; i++) {
    buttons[i].addEventListener('click', async function(e) {
        e.preventDefault();
        for (let j=0;j<buttons.length; j++) {
            buttons[j].classList.remove("active-btn");
            labpages[j].style.display = "none";
        }
        this.classList.add("active-btn");
        labpages[i].style.display = "block";
        if (i === 0) {
            await myPageOnelabService.getList(false, showManageOnelabList);
        } else {
            await myPageOnelabService.getList(true, showMemberOnelabList);
        }
    })
}

// 카테고리 목록 내, 좋아요 기능
// 좋아요 눌렀을 때 좋아요 되었다는 알림글 나타내기
const likebtns = document.querySelectorAll(".wish-btn");
const activelikebtns = document.querySelectorAll(".like-btn");

const liketoast = document.querySelector("#like-clicked-toast-container");
const cancel_liketoast = document.querySelector("#like-canceled-toast-container");


for (let i=0; i<likebtns.length;i++) {
    likebtns[i].addEventListener('click', function(e) {
        e.preventDefault();
        let activelikebtn = activelikebtns[i];
        console.log(activelikebtn);
        // 좋아요 키고 끄는 기능
        if (activelikebtn.classList.contains("active")) {
            activelikebtn.classList.remove("active");
            cancel_liketoast.style.display = "block";
            setTimeout(()=>{
                cancel_liketoast.style.display = "none";
            },1500)
        } else {
            activelikebtn.classList.add("active");
            // 토스트 창 나타나고 사라지기
            liketoast.style.display = "block";
            setTimeout(()=>{
                liketoast.style.display = "none";
            }, 1500)
        }
    } )
}


const likebtns2 = document.querySelectorAll(".WishButton_button");
// console.log(likebtns2);
for (let i=0; i<likebtns2.length;i++) {
    likebtns2[i].addEventListener('click', function(e) {
        e.preventDefault();
        // 좋아요 키고 끄는 기능
        if (!likebtns2[i].classList.contains("active")) {
            likebtns2[i].classList.remove("active");
            liketoast.style.display = "block";
            setTimeout(()=>{
                liketoast.style.display = "none";
            }, 1500)
        } else {
            likebtns2[i].classList.add("active");
            cancel_liketoast.style.display="block";
            setTimeout(()=>{
                cancel_liketoast.style.display="none";
            }, 1500)}
        })
}





const onelab_page = document.querySelectorAll(".main-container");
const tabpages = document.querySelectorAll(".my-page-project-content");
// for (let i=0; i < tabpages.length; i ++) {
//     tabpages[i].addEventListener("click", function(e) {
//         e.preventDefault();
//         // 모든탭의 색상을 지워주는 기능
//         for (let j=0;j<tabpages.length;j++) {
//             tabpages[j].classList.remove("onclick");
//         }
//         // 선택한 해당탭의 색상을 넣어주는 기능
//         tabpages[i].classList.toggle("onclick");
//     })
    
// }

// 탭 눌렀을 때 화면나타나는 기능과 함께 추가작업 필요

// 원랩 눌렸을 때 열리는 기능
tabpages[0].addEventListener("click", (e)=> {
    if (onelab_page[0].style.display === "none") {
        onelab_page.forEach((page)=>{
            page.style.display = "none";
        })
        onelab_page[0].style.display="block";
    } else {
        onelab_page[0].style.display = "none";
    }
})



// 페이지 이동 시 onelab_page[4] 열어두기
const page_btn = document.querySelector('a.next');


// 자료 공유 눌렀을 때 열리는 기능
tabpages[1].addEventListener("click", ()=> {
    if (onelab_page[1].style.display === "none") {
        onelab_page.forEach((page)=>{
            page.style.display = "none";
        })
        onelab_page[1].style.display = "block";
    } else {
        onelab_page[1].style.display = "none";
    }
})

// 장소 공유 눌렀을 때 열리는 기능
tabpages[2].addEventListener("click", ()=> {
    if (onelab_page[2].style.display === "none") {
        onelab_page.forEach((page)=>{
            page.style.display = "none";
        })
        onelab_page[2].style.display = "block";
    } else {
        onelab_page[2].style.display = "none";
    }
})
// 공모전/대회 눌렀을 때 열리는 기능
tabpages[3].addEventListener("click", ()=> {
    if (onelab_page[3].style.display === "none") {
        onelab_page.forEach((page)=>{
            page.style.display = "none";
        })
        onelab_page[3].style.display = "block";
    } else {
        onelab_page[3].style.display = "none";
    }
})


// 커뮤니티 눌렀을 때 열리는 기능
tabpages[4].addEventListener("click", (e)=> {
    //클릭된 요소가 onelab_page 내부에 있는지확인
    if (onelab_page[4].style.display === "none") {
        onelab_page.forEach((page)=>{
            page.style.display = "none";
        })
        onelab_page[4].style.display = "block";
    } else {
        onelab_page[4].style.display = "none";
    }
})

// 꿀팁 정보 !! (페이지 처리 한 페이지 내에서 완성 코드 (모달창 안사라지고.. )
// 페이지 로드 시 URL에서 page 파라미터 확인
const urlParams = new URLSearchParams(window.location.search);
const currentPage = urlParams.get('page');

// onelab_page[4] 열어두기
if (currentPage && currentPage !== 1) {
    onelab_page.forEach((page) => {
        page.style.display = "none";
    });
    onelab_page[4].style.display = "block";
}


// 관리하기 눌렀을 때 열리는 기능 -> 함수화하여 fetch 이후에 뿌려진 원랩목록들에 각각 적용합니다.
// 관리하기 부분은 성현씨께서 fetch 관련 만들어서 구성원 정보 뿌리는 로직 추가하시면 됩니다.
const addClickEventToManageOnelabButtons = () => {
    const manage_onelab_btn = document.querySelectorAll(".manage-onelab-btn");
    manage_onelab_btn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            if (onelab_page[5].style.display === "none") {
                onelab_page.forEach((page)=>{
                    page.style.display = "none";
                })
                onelab_page[5].style.display = "block";
            } else {
                onelab_page[5].style.display = "none";
            }
        })
    })
}

// 탈퇴하기 눌렀을 때 열리는 기능은 구현 안 돼있길래 아래에 함수를 만들어만 놓고,
// fetch로 "내가 랩원인 원랩" 목록을 뿌리고 나서 각 버튼에도 적용되도록
// 화면에 뿌리는 부분(위에 있습니다, showMemberOnelabList()) 에 써놓도록 하겠습니다.
const addClickEventToQuitOnelabButtons = () => {
    const exitOnelabButtons = document.querySelectorAll(".exit-onelab-btn");
    exitOnelabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // 탈퇴 관련 로직 구현
        })
    })
}


// 프로필 설정 창 모달 기능 구현
const profile_modal = document.querySelector(".bottom-modal-profile-portal");
console.log(profile_modal);
// 프로필 설정창 열기
const open_profile = document.querySelector("button.user-profile-edit-profile");
open_profile.addEventListener("click", ()=>{
    profile_modal.style.display="block";
})


// 프로필 설정창 닫기
const close_profile_modal_btn = document.querySelector("#profile-close-button");
close_profile_modal_btn.addEventListener("click", ()=>{
    profile_modal.style.display="none";
})

// 프로필 이미지 바꾸기
const input = document.getElementById("attach");
const thumbnail = document.querySelector("div.image")
const input2 = document.querySelector("#btn_updatePhoto")
const cancel = document.getElementById("btn_deletePhoto")
const profile = document.querySelector('img.profile')
// // console.log(input2)

input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const path = e.target.result;
        if (path.includes("image")) {
            thumbnail.style.backgroundImage = `url(${path})`;
        } else {
            thumbnail.style.backgroundImage = `url('/static/myPage/images/profile.jpg')`;
        }
    })
})

input2.addEventListener("click", () => {
    input.click();
})


// 프로필 삭제 기능 구현
cancel.addEventListener("click", (e) => {
    thumbnail.style.backgroundImage = "url('/static/myPage/images/profile.jpg')";
    input.value = "";
    profile.src = "/upload/member/2024/03/10/default.jpg"; // 기본 이미지로 변경
    console.log('삭제됨', profile.src);

    // 서버에 변경된 이미지 경로를 전송
    fetch('/myPage/main/delete/', {
        method: 'POST',
        headers: {
            'X-CSRFToken':csrf_token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            new_profile_path: profile.src,
        }),
    })
    .then(response => {
        if (!response.ok) {
            console.error('프로필 이미지 업데이트 실패ㅜㅜ!');
        }
    })
    .catch(error => {
        console.error('프로필 이미지 업데이트 중 오류 발생:', error);
    });
});


// 취소 눌렀을 때 닫히는 기능
const close_profile_modal_btn2 = document.querySelector("#close-profile-modal-btn");
close_profile_modal_btn2.addEventListener("click", ()=>{
    close_profile_modal_btn.click();
})

// 저장 눌렀을 때 저장되었다는 모달창
const profile_change_confirm_modal = document.querySelector("#confirm-modal-container");
const save_profile_change_btn = document.querySelector("#save-profile-modal-btn");

save_profile_change_btn.addEventListener("click", ()=> {
    profile_change_confirm_modal.style.display = "block";
})

// 확인창의 확인을 눌렀을 때 기능
const confirmed_btn_modal = document.querySelector("#alertify-o-ok");
confirmed_btn_modal.addEventListener("click", (e)=> {
    console.log('js 들어옴')
    profile_change_confirm_modal.style.display = "none";
    profile_modal.style.display="none"

})


// 더보기 했을 때 애니메이션 살리는 기능
const show_page = document.querySelector("#show-list");

const main_view = document.querySelector("#exhibit-list");

main_view.addEventListener("mouseover",()=>{
    
    const lists = document.querySelectorAll(".swiper-slide");
    const display_animation = document.querySelectorAll(".css-qn01ot");
    for(let i=0;i<lists.length;i++) {
        lists[i].addEventListener("mouseover", ()=>{
            display_animation[i].classList.add("list-active");
        })
        lists[i].addEventListener("mouseout", ()=>{
            display_animation[i].classList.remove("list-active");
        })
    }
})
// 공모전 더보기 눌렀을 때 기능
// main_view.addEventListener("mouseover",()=>{
//     const more_view_containers = document.querySelectorAll(".search-result-scroll-banner-container");
//     const more_view_btns = document.querySelectorAll("#more-view-btn");
//     console.log(more_view_btns.children);
// })


const more_view_btn = document.querySelector("#more-view-btn");
more_view_btn.addEventListener("click", () => {
    const more_view_containers = document.querySelectorAll(".search-result-scroll-banner-container");
    
    for (let j = 0; j < 3; j ++) {
        const newDiv = document.createElement("div");
        newDiv.className = "swiper-slide swiper-slide-active show";
        newDiv.style.width = "236.8px";
        newDiv.style.marginRight = "24px";

        newDiv.innerHTML = `
            <div class="css-1pulbqw">
                <div class="css-3xk0il"></div>
                <div class="css-qn01ot">
                    <div class="css-18m1pdx">
                        [2023 연말 결산] 와디즈가 조명한 스무 갈래의 열린 길
                    </div>
                    <div class="css-ivvewn" style="display: none;">
                        성공 메이커 이야기 연말 결산
                    </div>
                </div>
            </div>
        `;
        show_page.appendChild(newDiv);
    }
    const newDiv2 = document.createElement("div");
    newDiv2.className = "search-result-scroll-banner-container";
    newDiv2.id = "search-scroll-banner";
    
    newDiv2.innerHTML = `
        <div class="search-result-scroll-banner">
            <div class="search-result-banner-inner">
                <div id="more-view-btn" class="search-result-inner-inner">
                    <span>더보기</span>
                </div>
                <div class="search-result-inner-inner">
                    <span>목록으로 이동</span>
                </div>
            </div>
        </div>
    `;
    show_page.appendChild(newDiv2);
    more_view_containers[0].remove();
    const new_more_view_btn = newDiv2.querySelector("#more-view-btn");
    new_more_view_btn.addEventListener("click", ()=>{
        more_view_btn.click();
    })
});



// 좋아요기능
const likes = document.querySelectorAll("button.WishButton_button");

likes.forEach((like) => {
    const color = document.getElementsByClassName("is");
    like.addEventListener("click", (e) => {
        console.log(e.target.classList);
        e.target.classList.toggle("active");
        e.ariaPressed = "true";
    });
});
