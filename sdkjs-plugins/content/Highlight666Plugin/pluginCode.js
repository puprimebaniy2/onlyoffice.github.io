/* pluginCode.js */
(function(window, undefined) {
    window.Asc.plugin.init = function() {
        // Регистрируем обработчик события изменения таблицы
        window.Asc.plugin.event_onWorksheetChange = function(range) {
            var cellValue = range.GetValue();
            if (cellValue !== null && cellValue !== undefined) {
                var trimmedValue = cellValue.toString().trim();
                if (trimmedValue === "666" || Number(trimmedValue) === 666) {
                    // Создаем красный цвет
                    var redColor = Api.CreateColorFromRGB(255, 0, 0);
                    range.SetFillColor(redColor);
                }
            }
        };
    };

    window.Asc.plugin.button = function(id) {
        // Пустая функция для кнопки плагина (не используется)
    };

    window.Asc.plugin.destroy = function() {
        // Очистка при отключении плагина
        window.Asc.plugin.event_onWorksheetChange = null;
    };
})(window);