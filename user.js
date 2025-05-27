//-----------------------------------------------------------------------------------------------------------
// Настройка интерфейса

// Разблокировать работу userChrome.css (\chrome)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Включить режим компактных значков
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);

// Включить запрос при закрытии нескольких вкладок
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.tabs.warnOnCloseOtherTabs", true);

// Отключить добавление списка загруженных файлов в список "Последние документы"
user_pref("browser.download.manager.addToRecentDocs", false);

// Отключить отображение страницы "Что нового" после обновления браузера
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Отключить новый упрощенный и унифицированный диалог для очистки пользовательских данных
user_pref("privacy.sanitize.useOldClearHistoryDialog", true);

// Отключить предупреждение about:config
user_pref("browser.aboutConfig.showWarning", false);

// Отключить анимацию полного открытия видео и подсказку "нажмите esc.."
user_pref("full-screen-api.transition-duration.enter", "0");
user_pref("full-screen-api.transition-duration.leave", "0");
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.warning.delay", 0);
//-----------------------------------------------------------------------------------------------------------
// Рендеринг страниц

// Включить WebRender — рендеринг страниц с ускорением через GPU
user_pref("gfx.webrender.all", true);

// Принудительно включить аппаратное ускорение слоёв
user_pref("layers.acceleration.force-enabled", true);

// Включить аппаратное ускорение декодирования видео
user_pref("media.hardware-video-decoding.force-enabled", true);

// Принудительно включает отдельный compositor-процесс WebRender
user_pref("gfx.webrender.compositor.force-enabled", true);

// Включить принудительное очистку кэша для отсеченных областей в WebRender
user_pref("gfx.webrender.scissored-cache-clears.force-enabled", true);

// Включить принудительную поддержку субпиксельной антиалиасинга, где это возможно, для улучшения качества изображения
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);

// Включить предварительную загрузку шейдеров для WebRender для повышения производительности
user_pref("gfx.webrender.precache-shaders", true);

// Включить использование Pixel Buffer Object (PBO) для загрузки текстур и данных в WebRender
user_pref("gfx.webrender.pbo-uploads", true);

// Включить принудительное использование частичного представления (partial present) для улучшения производительности
user_pref("gfx.webrender.force-partial-present", true);

// Включить последовательное отображение кадров в WebRender для уменьшения мерцания и улучшения стабильности
user_pref("gfx.webrender.flip-sequential", true);

// Убрать задержку первой отрисовки страниц
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);

// Уменьшить интервал между отрисовками
user_pref("content.notify.ontimer", true);
user_pref("content.notify.interval", 100000);
user_pref("content.notify.backoffcount", -1);
//-----------------------------------------------------------------------------------------------------------
// Настройка JavaScript

// Включить сбалансированные пределы кучи для сборки мусора (GC)
user_pref("javascript.options.mem.gc_balanced_heap_limits", true);

// Включить поддержку инструкций тонкого управления памятью для WebAssembly
user_pref("javascript.options.wasm_memory_control", true);

// Включить поддержку Intgemm для оптимизации выполнения операций матричного умножения в WebAssembly
user_pref("javascript.options.wasm_moz_intgemm", true);

// Включить поддержку экспериментальных функций сериализации для WebAssembly
user_pref("javascript.options.wasm_test_serialization", true);
//-----------------------------------------------------------------------------------------------------------
// Прочие настройки

// Отключить проверку подписи для расширений и языков
user_pref("xpinstall.signatures.required", false);
user_pref("extensions.langpacks.signatures.required", false);
//-----------------------------------------------------------------------------------------------------------
// Отключение доступа к устройствам

// Отключить доступ к микрофону и обработку голоса
user_pref("media.getusermedia.audio.capture.enabled", false);
user_pref("media.getusermedia.audio.max_channels", 0);
user_pref("media.getusermedia.audio.processing.aec", 0);
user_pref("media.getusermedia.audio.processing.aec", 0);
user_pref("media.getusermedia.audio.processing.aec.enabled", false);
user_pref("media.getusermedia.audio.processing.aec.mobile", false);
user_pref("media.getusermedia.audio.processing.agc2.forced", false);
user_pref("media.getusermedia.audio.processing.agc", 0);
user_pref("media.getusermedia.audio.processing.agc.enabled", false);
user_pref("media.getusermedia.audio.processing.hpf.enabled", false);
user_pref("media.getusermedia.audio.processing.noise", 0);
user_pref("media.getusermedia.audio.processing.noise.enabled", false);
user_pref("media.getusermedia.audio.processing.transient.enabled", false);
user_pref("media.getusermedia.microphone.off_while_disabled.delay_ms", 0);
user_pref("media.getusermedia.microphone.off_while_disabled.enabled", false);
user_pref("media.getusermedia.microphone.prefer_voice_stream_with_processing.enabled", false);
user_pref("media.getusermedia.microphone.voice_stream_priming.enabled", false);
user_pref("permissions.default.microphone", 2);

// Отключить доступ к камере
user_pref("media.getusermedia.camera.background.mute.enabled", false);
user_pref("media.getusermedia.camera.macavf.enabled", false);
user_pref("media.getusermedia.camera.off_while_disabled.delay_ms", 0);
user_pref("media.getusermedia.camera.off_while_disabled.enabled", false);
user_pref("permissions.default.camera", 2);

// Отключить доступ к геймпаду
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.extensions.lightindicator", false);
user_pref("dom.gamepad.extensions.multitouch", false);
user_pref("dom.gamepad.haptic_feedback.enabled", false);
user_pref("dom.gamepad.non_standard_events.enabled", false);
user_pref("dom.gamepad.test.enabled", false);

// Отключить доступ к датчикам устройства
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("device.sensors.test.events", false);

// Отключить доступ к вибрации
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vibrator.max_vibrate_list_len", 0);
user_pref("dom.vibrator.max_vibrate_ms", 0);

// Отключить доступ к аккумулятору устройства (аккумулятору ноутбука)
user_pref("dom.battery.enabled", false);

// Отключить доступ к виртуальной реальности (очки виртуальной реальности и т.д.)
user_pref("dom.vr.always_support_ar", false);
user_pref("dom.vr.always_support_vr", false);
user_pref("dom.vr.autoactivate.enabled", false);
user_pref("dom.vr.controller.enumerate.interval", 0);
user_pref("dom.vr.controller_trigger_threshold", "0");
user_pref("dom.vr.display.enumerate.interval", 0);
user_pref("dom.vr.display.rafMaxDuration", 0);
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.external.notdetected.timeout", 0);
user_pref("dom.vr.external.quit.timeout", 0);
user_pref("dom.vr.inactive.timeout", 0);
user_pref("dom.vr.navigation.timeout", 0);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus.invisible.enabled", false);
user_pref("dom.vr.oculus.present.timeout", 0);
user_pref("dom.vr.openvr.enabled", false);
user_pref("dom.vr.osvr.enabled", false);
user_pref("dom.vr.poseprediction.enabled", false);
user_pref("dom.vr.process.enabled", false);
user_pref("dom.vr.process.startup_timeout_ms", 0);
user_pref("dom.vr.puppet.enabled", false);
user_pref("dom.vr.require-gesture", false);
user_pref("dom.vr.webxr.enabled", false);
user_pref("dom.vr.webxr.quantization", "0");
//-----------------------------------------------------------------------------------------------------------
// Отключить небезопасные функции

// Отключить геолокацию
user_pref("browser.geolocation.warning.infoURL", "");
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.network.timeout", 0);
user_pref("geo.provider.network.timeToWaitBeforeSending", 0);
user_pref("geo.provider.network.url", "");
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_geoclue", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.timeout", 0);
user_pref("permissions.default.geo", 2);

// Отключить замену запрошенных страниц на страницу провайдера
user_pref("captivedetect.canonicalContent", "");
user_pref("captivedetect.canonicalURL", "");
user_pref("captivedetect.maxRetryCount", 0);
user_pref("captivedetect.maxWaitingTime", 0);
user_pref("captivedetect.pollingTime", 0);
user_pref("network.captive-portal-service.backoffFactor", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.maxInterval", 0);
user_pref("network.captive-portal-service.minInterval", 0);

// Отключить push-уведомления
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.loglevel", "");
user_pref("dom.push.maxQuotaPerSubscription", 0);
user_pref("dom.push.maxRecentMessageIDsPerSubscription", 0);
user_pref("dom.push.pingInterval", 0);
user_pref("dom.push.quotaUpdateDelay", 0);
user_pref("dom.push.requestTimeout", 0);
user_pref("dom.push.retryBaseInterval", 0);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.desktop-notification.notNow.enabled", false);
user_pref("permissions.desktop-notification.postPrompt.enabled", false);

// Удалить права, установленные по умолчанию (закрыть возможность чтения некоторых данных из раздела "about:support")
user_pref("permissions.manager.defaultsUrl", "");

// Отключить WebRTC
user_pref("media.peerconnection.default_iceservers", "[]");
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.relay_only", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.ice.tcp_so_sock_count", 0);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);

// Отключить IPv6
user_pref("network.connectivity-service.IPv6.url", "");
user_pref("network.dns.disableIPv6", true);
user_pref("network.dns.preferIPv6", false);
user_pref("network.http.http3.block_loopback_ipv6_addr", false);
user_pref("network.notify.IPv6", false);

// Отключить Web Audio API (требуется для некоторых игр)
user_pref("dom.webaudio.enabled", false);

// Отключить распознавание речи
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.recognition.force_enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.webspeech.synth.force_global_queue", false);
user_pref("media.webspeech.test.enable", false);
user_pref("media.webspeech.test.fake_fsm_events", false);
user_pref("media.webspeech.test.fake_recognition_service", false);

// Запрет на просмотр PDF-документов с помощью браузера (с использованием HTML5)
user_pref("browser.download.open_pdf_attachments_inline", false);
user_pref("browser.helperApps.showOpenOptionForPdfJS", false);
user_pref("browser.pdf.launchDefaultEdgeAsApp", false);
user_pref("browser.pdfjs.feature-tour", "");
user_pref("browser.shell.checkDefaultPDF", false);
user_pref("browser.shell.checkDefaultPDF.silencedByUser", false);
user_pref("browser.shell.setDefaultPDFHandler", false);
user_pref("browser.shell.setDefaultPDFHandler.onlyReplaceBrowsers", false);
user_pref("pdfjs.annotationEditorMode", 0);
user_pref("pdfjs.annotationMode", 0);
user_pref("pdfjs.cursorToolOnLoad", 0);
user_pref("pdfjs.defaultZoomDelay", 0);
user_pref("pdfjs.defaultZoomValue", "");
user_pref("pdfjs.disableAutoFetch", true);
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.disableFontFace", true);
user_pref("pdfjs.disablePageLabels", true);
user_pref("pdfjs.disableRange", true);
user_pref("pdfjs.disableStream", true);
user_pref("pdfjs.enabledCache.state", false);
user_pref("pdfjs.enableHighlightEditor", false);
user_pref("pdfjs.enableHighlightFloatingButton", false);
user_pref("pdfjs.enableML", false);
user_pref("pdfjs.enablePermissions", false);
user_pref("pdfjs.enablePrintAutoRotate", false);
user_pref("pdfjs.enableScripting", false);
user_pref("pdfjs.enableStampEditor", false);
user_pref("pdfjs.enableXfa", false);
user_pref("pdfjs.externalLinkTarget", 0);
user_pref("pdfjs.forcePageColors", false);
user_pref("pdfjs.handleOctetStream", false);
user_pref("pdfjs.highlightEditorColors", "");
user_pref("pdfjs.historyUpdateUrl", false);
user_pref("pdfjs.ignoreDestinationZoom", false);
user_pref("pdfjs.migrationVersion", 0);
user_pref("pdfjs.pageColorsBackground", "");
user_pref("pdfjs.pageColorsForeground", "");
user_pref("pdfjs.pdfBugEnabled", false);
user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", false);
user_pref("pdfjs.previousHandler.preferredAction", 0);
user_pref("pdfjs.scrollModeOnLoad", 0);
user_pref("pdfjs.sidebarViewOnLoad", 0);
user_pref("pdfjs.spreadModeOnLoad", 0);
user_pref("pdfjs.textLayerMode", 0);
user_pref("pdfjs.viewOnLoad", 0);
user_pref("print.save_as_pdf.internal_destinations.enabled", false);
user_pref("print.save_as_pdf.links.enabled", false);
user_pref("print.save_as_pdf.use_page_rule_size_as_paper_size.enabled", false);

// Запретить использование API блокировки экрана
user_pref("permissions.default.screen-wake-lock", 2);

// Блокировать автоматическое воспроизведение аудио и видео
user_pref("media.autoplay.default", 5);

// Настройки поиска (отключение всех возможных подсказок и т.д.)
user_pref("browser.search.context.loadInBackground", false);
user_pref("browser.search.log", false);
user_pref("browser.search.openintab", false);
user_pref("browser.search.param.search_rich_suggestions", "");
user_pref("browser.search.removeEngineInfobar.enabled", false);
user_pref("browser.search.searchEnginesURL", "");
user_pref("browser.search.separatePrivateDefault", false);
user_pref("browser.search.separatePrivateDefault.ui.banner.max", 0);
user_pref("browser.search.separatePrivateDefault.ui.enabled", false);
user_pref("browser.search.serpEventTelemetry.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
//user_pref("browser.search.suggest.enabled", false);
//user_pref("browser.search.suggest.enabled.private", false);
user_pref("browser.search.update", false);
user_pref("browser.search.widget.removeAfterDaysUnused", 0);

// Отключить совместное использование экрана
user_pref("media.getusermedia.screensharing.enabled", false);

// Отключить возможность захвата содержимого экрана или его частей
user_pref("media.getdisplaymedia.enabled", false);
user_pref("media.getdisplaymedia.previews.enabled", false);