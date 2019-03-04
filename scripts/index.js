'use strict';
/* global shoppingList, store, api, Item */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});

// store.items.push(Item.create('apples'));
