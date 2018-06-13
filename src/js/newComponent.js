import '../css/newComponent.css';

export default class newComponent {
    constructor(containerName) {
        this.$container = $(containerName);
        this.content = "";

        //инициализируем
        this.init();
    }

    /**
     * Инициализация элемента c кнопкой
     */
    init() {
        let $btn = $('<div />');
        $btn.text("Показать текущую дату");
        $btn.on('click', (event) => {
            this.renderCurrDate();
        });
        this.$container.append($btn);
    }

    /**
     * Отобразить текущую дату
     */
    renderCurrDate() {
        $(this.$container).text(new Date());
    }
}