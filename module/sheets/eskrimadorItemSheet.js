export default class eskrimadorItemSheet extends ItemSheet {
    get template() {
        return `systems/eskrimador/templates/sheets/${this.item.type}-sheet.html` ;
    }

    getData(){
        const data = super.getData();

        data.config =CONFIG.eskrimador;

        return data;
    }
}