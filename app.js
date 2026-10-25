(() => {
  const PHONE = "01037715487";
  const DISPLAY_PHONE = "010-3771-5487";
  const ADVISOR_SHARE_URL = "https://leejgc.github.io/mobile-business-card/share.html";
  const KAKAO_APP_KEY = "e1c62fd5c6c8d22e28e88e8e616ab613";
  const KAKAO_CARD_URL = "https://leejgc.github.io/mobile-business-card/";
  const KAKAO_IMAGE_URL = "https://leejgc.github.io/mobile-business-card/kakao-share-v4.png";
  const KAKAO_TITLE = "이종찬 | 에즈금융서비스";
  const KAKAO_BUTTON_TITLE = "명함 보기";
  const VCF_URL = "lee-jongchan.vcf";
  // Keep social URLs in this one place. Empty strings are intentional until the owner registers a channel.
  const SNS_LINKS = Object.freeze({ youtube: "", instagram: "", blog: "" });
  const SNS_PREVIEW_URLS = Object.freeze({
    youtube: "https://example.com/?mobile-card-preview=youtube",
    instagram: "https://example.com/?mobile-card-preview=instagram",
    blog: "https://example.com/?mobile-card-preview=blog"
  });
  const messages = {
    agent: [
      "안녕하세요.",
      "에즈금융서비스 보험설계사 이종찬입니다.",
      "",
      "제 모바일 명함을 보내드립니다.",
      "보험 관련 문의는 편하게 연락 주세요.",
      "",
      "https://leejgc.github.io/mobile-business-card/"
    ].join("\n"),
    customer: [
      "안녕하세요.",
      "",
      "모바일 명함을 공유해 드립니다.",
      "보험설계사 이종찬님의 소개와 연락처는 아래 링크에서 확인해 보세요.",
      "",
      "https://leejgc.github.io/mobile-business-card/"
    ].join("\n")
  };

  const claims = [
    {
      title: "가벼운 통원 치료",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "처방전 (환자보관용)"],
      notice: "처방전에 질병코드가 없으면 ‘통원확인서’를 떼시는 게 가장 안전합니다.",
      source: "07.청구서류 메뉴얼 1쪽 기준"
    },
    {
      title: "입원 및 수술",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "입퇴원 확인서", "수술 확인서"],
      notice: "",
      source: "07.청구서류 메뉴얼 2쪽 기준"
    },
    {
      title: "창상봉합술",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "진단서", "초진기록지"],
      notice: "근육층 또는 조직 절제를 실제로 시행한 경우, 진단서에 ‘근육층 포함한 봉합’ 또는 ‘변연절제술 시행’ 문구를 확인하세요.",
      source: "07.청구서류 메뉴얼 3쪽 기준"
    },
    {
      title: "골절 / 상해 사고",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "진단서", "영상 판독지", "초진기록지"],
      notice: "정확한 골절·상해 진단과 사고 경위가 확인되는 자료를 준비하세요.",
      source: "07.청구서류 메뉴얼 4쪽 기준"
    },
    {
      title: "위·대장 용종 제거",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "수술확인서 (또는 진단서)", "조직검사결과지 (암 청구 시)"],
      notice: "생검 또는 단순검사로 작성 시 지급이 거절될 수 있으니, 치료 목적으로 용종을 제거했다는 문구가 필요합니다.",
      source: "07.청구서류 메뉴얼 5쪽 기준"
    },
    {
      title: "독감(인플루엔자)",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "독감 확진 검사 결과지 또는 진단서", "초진기록지", "처방전"],
      notice: "",
      source: "07.청구서류 메뉴얼 6쪽 기준"
    },
    {
      title: "화상 사고",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "화상진단확인서", "초진기록지"],
      notice: "보통 ‘심재성 2도 이상’이어야 화상 진단비가 지급됩니다.",
      source: "07.청구서류 메뉴얼 7쪽 기준"
    },
    {
      title: "암 관련",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "진단서", "조직검사결과지", "각종 정밀검사 결과지", "입퇴원 확인서 / 수술 확인서", "초진기록지"],
      notice: "조직검사결과지가 가장 중요한 서류입니다.",
      source: "07.청구서류 메뉴얼 8쪽 기준"
    },
    {
      title: "뇌·심장 질환",
      docs: ["진료비 계산서 영수증", "진료비 세부내역서", "진단서", "입퇴원 확인서 / 수술 확인서", "정밀검사 판독지", "초진기록지"],
      notice: "MRI, MRA, 관상동맥조영술 등 관련 검사 판독지를 준비하세요. 진단 확정 내용과 질병코드도 확인합니다.",
      source: "07.청구서류 메뉴얼 9쪽 기준"
    },
    {
      title: "후유장해 청구",
      docs: ["후유장해 진단서", "영상 CD 및 판독지", "초진기록지 및 수술기록지"],
      notice: "담당자에게 연락주세요.\n대표적인 문의 사례:\n1. 주요 장기 절제\n2. 인공관절 수술\n3. 골절·상해 사고 후 몸이 예전처럼 움직이지 않을 때\n4. 청각·시각·미각 등에 영구적인 손상이 생겼을 때",
      source: "07.청구서류 메뉴얼 10쪽 기준"
    }
  ];

  const qa = { claims: claims.length, copyResults: [], smsMessages: messages, shareUrl: ADVISOR_SHARE_URL, vcfUrl: VCF_URL, sns: {}, kakao: { sdkLoaded: Boolean(window.Kakao), initialized: false, attempts: [] } };
  window.__v2Qa = qa;

  const isValidWebUrl = (value) => {
    const trimmed = String(value ?? "").trim();
    if (!trimmed) return false;
    try {
      const url = new URL(trimmed);
      return url.protocol === "https:" || url.protocol === "http:";
    } catch {
      return false;
    }
  };

  const getSnsLinks = () => {
    const params = new URLSearchParams(window.location.search);
    const testMode = params.get("sns-test") === "1";
    const requested = new Set((params.get("channels") || "").split(",").map((channel) => channel.trim()).filter(Boolean));
    const links = { ...SNS_LINKS };
    if (testMode) Object.keys(links).forEach((channel) => { links[channel] = requested.has(channel) ? SNS_PREVIEW_URLS[channel] : ""; });
    return { links, testMode };
  };

  const applySnsLinks = () => {
    const row = document.querySelector("[data-sns-row]");
    if (!row) return;
    const { links, testMode } = getSnsLinks();
    const items = [...row.querySelectorAll("[data-sns-channel]")];
    const active = items.map((item) => {
      const channel = item.dataset.snsChannel;
      const url = String(links[channel] ?? "").trim();
      const enabled = isValidWebUrl(url);
      item.hidden = false;
      item.classList.toggle("is-active", enabled);
      item.classList.toggle("is-disabled", !enabled);
      item.setAttribute("aria-disabled", String(!enabled));
      if (enabled) {
        item.href = url;
        item.target = "_blank";
        item.rel = "noopener";
        item.tabIndex = 0;
      } else {
        item.removeAttribute("href");
        item.removeAttribute("target");
        item.removeAttribute("rel");
        item.tabIndex = -1;
      }
      return { channel, enabled, url: enabled ? url : "" };
    });
    const hasAny = active.some((item) => item.enabled);
    items.forEach((item) => { item.hidden = !hasAny; });
    row.hidden = !hasAny;
    qa.sns = { testMode, hasAny, visibleCount: hasAny ? items.length : 0, activeCount: active.filter((item) => item.enabled).length, inactiveCount: hasAny ? active.filter((item) => !item.enabled).length : 0, channels: active };
  };

  const backdrop = document.querySelector(".sheet-backdrop");
  const sheets = [...document.querySelectorAll(".bottom-sheet")];
  const toast = document.querySelector("#toast");
  let activeSheet = null;
  let activeOpener = null;
  let toastTimer = 0;
  let exitTimer = 0;
  let exitPending = false;
  let historySheetId = null;
  let suppressPopstate = false;

  const showToast = (message, duration = 3300) => {
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, duration);
  };

  const initializeKakao = () => {
    if (!window.Kakao) return { ok: false, reason: "sdk-unavailable" };
    try {
      if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_APP_KEY);
      const initialized = window.Kakao.isInitialized();
      qa.kakao.initialized = initialized;
      return { ok: initialized, reason: initialized ? "ready" : "init-failed" };
    } catch (error) {
      qa.kakao.initialized = false;
      return { ok: false, reason: "init-error", message: error instanceof Error ? error.message : String(error) };
    }
  };

  const sendKakaoCustomerShare = () => {
    const initialized = initializeKakao();
    if (!initialized.ok || !window.Kakao?.Share?.sendDefault) {
      qa.kakao.attempts.push({ ok: false, reason: initialized.reason });
      showToast("카카오톡 공유 기능을 실행할 수 없습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }
    try {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: KAKAO_TITLE,
          imageUrl: KAKAO_IMAGE_URL,
          imageWidth: 1200,
          imageHeight: 630,
          link: { mobileWebUrl: KAKAO_CARD_URL, webUrl: KAKAO_CARD_URL },
        },
        buttons: [{
          title: KAKAO_BUTTON_TITLE,
          link: { mobileWebUrl: KAKAO_CARD_URL, webUrl: KAKAO_CARD_URL },
        }],
      });
      qa.kakao.attempts.push({ ok: true, mode: "sendDefault", title: KAKAO_TITLE, description: null, imageUrl: KAKAO_IMAGE_URL, button: KAKAO_BUTTON_TITLE, link: KAKAO_CARD_URL });
    } catch (error) {
      qa.kakao.attempts.push({ ok: false, reason: "send-error", message: error instanceof Error ? error.message : String(error) });
      showToast("카카오톡 공유를 시작하지 못했습니다. 허용 도메인과 카카오톡 설치 상태를 확인해 주세요.");
    }
  };

  const rootHistoryState = { mobileCard: "root" };
  const guardHistoryState = { mobileCard: "guard" };
  const sheetHistoryState = (sheetId) => ({ mobileCard: "sheet", sheetId });

  const initializeNavigationHistory = () => {
    window.history.replaceState(rootHistoryState, "", window.location.href);
    window.history.pushState(guardHistoryState, "", window.location.href);
  };

  const clearExitPending = () => {
    exitPending = false;
    window.clearTimeout(exitTimer);
  };

  const rearmExitGuardIfNeeded = () => {
    if (window.history.state?.mobileCard === "root") {
      window.history.pushState(guardHistoryState, "", window.location.href);
    }
  };

  const requestLeave = () => {
    clearExitPending();
    const referrer = document.referrer;
    if (referrer && referrer !== window.location.href && referrer.startsWith(window.location.origin)) {
      window.location.assign(referrer);
      return;
    }
    if (window.history.length > 1) {
      window.setTimeout(() => window.history.go(-1), 0);
      return;
    }
    if (window.opener) {
      window.close();
      return;
    }
    showToast("브라우저에서 이 페이지를 직접 닫아 주세요.", 2000);
  };

  const showExitHint = () => {
    exitPending = true;
    showToast("뒤로가기를 한 번 더 누르면 명함에서 나갑니다.", 2000);
    rearmExitGuardIfNeeded();
    window.clearTimeout(exitTimer);
    exitTimer = window.setTimeout(() => {
      clearExitPending();
      rearmExitGuardIfNeeded();
    }, 2000);
  };

  const handleDefaultBack = () => {
    if (exitPending) requestLeave();
    else showExitHint();
  };

  initializeNavigationHistory();

  const setSheet = (sheet, open, opener = null) => {
    if (!sheet) return;
    if (open) {
      sheets.filter((item) => item !== sheet).forEach((item) => closeSheet(item, false));
      activeSheet = sheet;
      activeOpener = opener;
      clearExitPending();
      historySheetId = sheet.id;
      window.history.pushState(sheetHistoryState(sheet.id), "", window.location.href);
      sheet.hidden = false;
      backdrop.hidden = false;
      document.body.classList.add("sheet-open");
      requestAnimationFrame(() => {
        backdrop.classList.add("is-visible");
        sheet.classList.add("is-open");
        sheet.setAttribute("aria-hidden", "false");
      });
      sheet.querySelector(".sheet-close")?.focus({ preventScroll: true });
    } else {
      closeSheet(sheet, true);
    }
  };

  const closeSheet = (sheet, clearState = true, fromHistory = false) => {
    const openerToRestore = activeOpener;
    sheet.classList.remove("is-open");
    sheet.setAttribute("aria-hidden", "true");
    if (clearState && activeSheet === sheet) activeSheet = null;
    if (clearState && !fromHistory && historySheetId === sheet.id && window.history.state?.mobileCard === "sheet") {
      historySheetId = null;
      suppressPopstate = true;
      window.history.back();
    }
    window.setTimeout(() => {
      if (!sheet.classList.contains("is-open")) sheet.hidden = true;
      if (!sheets.some((item) => item.classList.contains("is-open"))) {
        backdrop.classList.remove("is-visible");
        document.body.classList.remove("sheet-open");
        if (openerToRestore && typeof openerToRestore.focus === "function") openerToRestore.focus({ preventScroll: true });
        activeOpener = null;
        window.setTimeout(() => { if (!sheets.some((item) => item.classList.contains("is-open"))) backdrop.hidden = true; }, 220);
      }
    }, 220);
  };

  window.addEventListener("popstate", () => {
    if (suppressPopstate) {
      suppressPopstate = false;
      rearmExitGuardIfNeeded();
      return;
    }
    if (activeSheet) {
      historySheetId = null;
      closeSheet(activeSheet, true, true);
      return;
    }
    if (window.history.state?.mobileCard === "root") {
      handleDefaultBack();
    } else if (window.history.state?.mobileCard === "guard") {
      clearExitPending();
    }
  });

  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-open-sheet]");
    if (opener) setSheet(document.getElementById(opener.dataset.openSheet), true, opener);
    const kakaoCustomerShare = event.target.closest("[data-kakao-customer-share]");
    if (kakaoCustomerShare) {
      event.preventDefault();
      const shareSheet = document.getElementById("share-sheet");
      if (activeSheet === shareSheet) closeSheet(shareSheet);
      sendKakaoCustomerShare();
      return;
    }
    const closer = event.target.closest("[data-close-sheet]");
    if (closer) {
      if (closer.dataset.closeSheet === "all") { if (activeSheet) closeSheet(activeSheet); }
      else setSheet(document.getElementById(closer.dataset.closeSheet), false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeSheet) closeSheet(activeSheet);
    if (event.key !== "Tab" || !activeSheet) return;
    const focusable = [...activeSheet.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((element) => !element.hidden && !element.closest('[hidden]') && element.offsetParent !== null);
    if (!focusable.length) { event.preventDefault(); return; }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll("[data-sms-message]").forEach((link) => {
    const key = link.dataset.smsMessage;
    link.href = `sms:?body=${encodeURIComponent(messages[key])}`;
    link.addEventListener("click", () => showToast("문자 작성 화면을 엽니다. 자동 발송되지 않습니다."));
  });

  document.querySelector("[data-sns-row]")?.addEventListener("click", (event) => {
    const item = event.target.closest("[data-sns-channel]");
    if (item && item.classList.contains("is-disabled")) event.preventDefault();
  });

  const claimList = document.querySelector("#claim-list");
  const copyIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="12" rx="1.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v10A1.5 1.5 0 0 0 5.5 17H8"/></svg>';
  const claimText = (claim) => `${claim.title}\n${claim.docs.map((doc) => `• ${doc}`).join("\n")}\n\nㅡㅡㅡㅡ\n보험설계사 이종찬\n${DISPLAY_PHONE}`;

  const renderClaims = () => {
    claimList.innerHTML = claims.map((claim, index) => `
      <article class="claim-item">
        <button class="claim-summary" type="button" aria-expanded="false" aria-controls="claim-detail-${index}" data-claim-toggle="${index}">
          <span class="claim-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="claim-title">${claim.title}</span>
          <span class="claim-chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="claim-detail" id="claim-detail-${index}" aria-hidden="true" hidden>
          <div class="claim-detail-inner">
            <div class="claim-detail-content">
              <p class="claim-docs-heading">준비 서류</p>
              <ul class="claim-docs">${claim.docs.map((doc) => `<li>${doc}</li>`).join("")}</ul>
              ${claim.notice ? `<p class="claim-notice"><strong>주의사항.</strong> ${claim.notice}</p>` : ""}
              <div class="claim-detail-actions"><button class="copy-claim" type="button" data-copy-claim="${index}">${copyIcon}<span>복사</span></button></div>
            </div>
          </div>
        </div>
      </article>`).join("");
  };

  const toggleClaim = (index) => {
    const summaries = [...claimList.querySelectorAll("[data-claim-toggle]")];
    summaries.forEach((summary, itemIndex) => {
      const detail = document.getElementById(`claim-detail-${itemIndex}`);
      const open = itemIndex === index && summary.getAttribute("aria-expanded") !== "true";
      summary.setAttribute("aria-expanded", String(open));
      detail.setAttribute("aria-hidden", String(!open));
      detail.hidden = !open;
      if (open) {
        window.setTimeout(() => {
          detail.querySelector(".copy-claim")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }, 240);
      }
    });
  };

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    textarea.remove();
    if (!success) throw new Error("clipboard unavailable");
  };

  claimList.addEventListener("click", async (event) => {
    const toggle = event.target.closest("[data-claim-toggle]");
    if (toggle) {
      toggleClaim(Number(toggle.dataset.claimToggle));
      return;
    }
    const copyButton = event.target.closest("[data-copy-claim]");
    if (!copyButton) return;
    event.preventDefault();
    event.stopPropagation();
    const index = Number(copyButton.dataset.copyClaim);
    const claim = claims[index];
    const expandedBefore = document.getElementById(`claim-detail-${index}`).getAttribute("aria-hidden") === "false";
    try {
      await copyText(claimText(claim));
      qa.copyResults.push({ index, title: claim.title, ok: true, expandedUnchanged: expandedBefore === (document.getElementById(`claim-detail-${index}`).getAttribute("aria-hidden") === "false") });
      showToast(`${claim.title} 청구 서류 목록을 복사하였습니다.`);
    } catch (error) {
      qa.copyResults.push({ index, title: claim.title, ok: false, expandedUnchanged: true, error: "clipboard unavailable" });
      showToast("복사에 실패했습니다. 브라우저의 클립보드 권한을 확인해 주세요.");
    }
  });

  applySnsLinks();
  renderClaims();
})();
