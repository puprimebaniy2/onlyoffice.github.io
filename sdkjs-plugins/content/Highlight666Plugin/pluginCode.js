/* pluginCode.js */
(function(window, undefined) {
    window.Asc.plugin.init = function() {
        console.log("Плагин Highlight666Plugin инициализирован");
        // Привязываем обработчик события onWorksheetChange
        window.Api.attachEvent("onWorksheetChange", function(range) {
            try {
                console.log("Событие onWorksheetChange вызвано для ячейки: " + range.GetAddress());
                var cellValue = range.GetValue();
                if (cellValue !== null && cellValue !== undefined) {
                    var trimmedValue = cellValue.toString().trim();
                    console.log("Значение ячейки: " + trimmedValue);
                    if (trimmedValue === "666" || Number(trimmedValue) === 666) {
                        console.log("Обнаружено '666', окрашиваем ячейку в красный");
                        var redColor = Api.CreateColorFromRGB(255, 0, 0);
                        range.SetFillColor(redColor);
                    }
                } else {
                    console.log("Значение ячейки пустое или undefined");
                }
            } catch (e) {
                console.error("Ошибка в onWorksheetChange: " + e.message);
            }
        });
    };

    window.Asc.plugin.button = function(id) {};

    window.Asc.plugin.destroy = function() {
        console.log("Плагин Highlight666Plugin уничтожен");
    };
})(window);