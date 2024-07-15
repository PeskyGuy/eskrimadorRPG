export default class eskrimadorItemSheet extends ItemSheet {
    get template() {
        return `systems/eskrimador/templates/sheets/${this.item.data.type}-sheet.html` ;
    }

    getData(){
        const data = super.getData();

        data.config =CONFIG.eskrimador;

        return data;
    }
}