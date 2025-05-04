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

// Включить поиск текста на странице по мере его ввода
user_pref("accessibility.typeaheadfind", true);

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