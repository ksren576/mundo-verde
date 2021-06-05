import Vue from "vue";

Vue.filter("toCurrency", function (value) {
    if (typeof value !== "number") {
        return value;
    }
    return '$ ' + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
});