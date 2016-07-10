'use strict';

angular
  .module('app.objects.services.objectsService', ['LocalStorageModule'])
  .config((localStorageServiceProvider) => {
    localStorageServiceProvider.setPrefix('objects');
  })
  .service('ObjectsService', ObjectsService);

function ObjectsService(localStorageService) {
  const KEY_NEXT_ID = 'nextId';
  const KEY_LIST = 'list';
  const START_ID = 1;

  let nextId = getNextId();
  const list = getList();

  this.add = function add(instance) {
    instance.id = nextId;
    list.push(instance);
    updateList();
    incrementNextId();
  };

  this.get = function get(index) {
    return list[index] || null;
  };

  this.getAll = function getAll() {
    return list;
  };

  function getList() {
    const json = localStorageService.get(KEY_LIST);
    if (!json) {
      return [];
    }
    return JSON.parse(json);
  }

  function getNextId() {
    const nextId = +localStorageService.get(KEY_NEXT_ID);
    if (isNaN(nextId)) {
      localStorageService.set(KEY_NEXT_ID, START_ID);
      return START_ID;
    }
    return nextId;
  }

  function incrementNextId() {
    localStorageService.set(KEY_NEXT_ID, ++nextId);
  }

  function updateList() {
    const json = JSON.stringify(list);
    localStorageService.set(KEY_LIST, json);
  }
}
