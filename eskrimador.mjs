import { eskrimador } from "./module/config.js";
import eskrimadorItemSheet from "./module/sheets/eskrimadorItemSheet.js";

Hooks.once("init", function(){
    console.log("eskrimadorRPG | Initializing ESKRIMADOR System");

    CONFIG.eskrimador = eskrimador;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("eskrimador", eskrimadorItemSheet, {makeDefault: true});
});